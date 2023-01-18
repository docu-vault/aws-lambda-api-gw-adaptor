provider "aws" {
    region = "${var.region_name}"
}

data "archive_file" "zip_the_nodejs_libraries" {
    type        = "zip"
    source_dir  = "${path.module}/dist/nodejs"
    output_path = "${path.module}/storage-api-nodejs-libs.zip"
}

data "archive_file" "zip_the_nodejs_code" {
    type        = "zip"
    source_dir  = "${path.module}/dist/source"
    output_path = "${path.module}/storage-api.zip"
}

module storage_api_lambda_layers {
    source = "./tf/aws-lambda-layer"

    layer_zip_filename = "${path.module}/storage-api-nodejs-libs.zip"
    layer_name = "${var.layer_name}"
    runtimes = "${var.runtimes}"
}


module storage_api_lambda {
    source = "./tf/aws-lambda"

    for_each = var.api_data 

    lambda_iam_role_name = each.value.lambda_iam_role_name
    lambda_iam_policy_name = each.value.lambda_iam_policy_name
    xray_tracing_policy_name = each.value.xray_tracing_policy_name
    lambda_function_name = format("%s-%s", "${var.app_name}", each.key)
    lambda_runtime = each.value.runtime
    builds_s3_bucket_name = "${var.builds_s3_bucket_name}"
    handler_name = each.value.handler_name
    source_bundle_zip_filename = "${path.module}/storage-api.zip"
    log_group_name = each.value.log_group_name
    log_group_retention_days = each.value.log_group_retention_days
    environment_vars = "${var.environmentVars}"
    lambda_layers = var.enableTelemetry == true ? [module.storage_api_lambda_layers.arn, "${var.awsTelemetryLayerArn}"] : [module.storage_api_lambda_layers.arn]
    tracing_config_mode = var.enableTelemetry == true ? "Active" : "PassThrough"
}

module storage_api_gw {
    source = "./tf/api-gateway/gateway"

    apigw_name = "storage_api_gw"
    apigw_protocol_type = "HTTP"
}

module storage_api_gw_log_group {
    source = "./tf/aws-log-group"

    apigw_log_group_name = "${var.app_name}"
    apigw_log_retention_in_days = 7
}

module storage_api_gw_stage {
    source = "./tf/api-gateway/gateway-stage"

    apigw_log_group_arn = module.storage_api_gw_log_group.apigw_log_group_arn
    apigw_stage_name = module.storage_api_gw.storage_api_gw_name
    apigw_id = module.storage_api_gw.storage_api_gw_id
}

module storage_api_gw_lambda_integration {
    source = "./tf/api-gateway/gw-lambda-integration"

    for_each = var.api_data 

    apigw_id = module.storage_api_gw.storage_api_gw_id
    apigw_name = module.storage_api_gw.storage_api_gw_name
    apigw_execution_arn = module.storage_api_gw.storage_api_gw_excution_arn
    lambda_function_invoke_arn = module.storage_api_lambda[each.key].invoke_arn
    apigw_route_key = each.value.apigw_route_key
    lambda_function_name = format("%s-%s", "${var.app_name}", each.key)
}


/*
module storage_api_gw {
    source = "./tf/api-gateway"

    apigw_name = "storage_api_gw"
    apigw_protocol_type = "HTTP"
    apigw_stage_name = "dev"
    apigw_route_key = "GET /uploadurl"
    lambda_function_name =  module.storage_api_lambda.uploadurl_api_lambda_function_name
    lambda_function_invoke_arn = module.storage_api_lambda.lambda_function_invoke_arn

}

*/

output "layers_arn" {
    value = module.storage_api_lambda_layers.arn
    description = "layers description"
}

output "api_storage_outputs" {
    value = {
        for k, v in module.storage_api_lambda : k => v
    }
  
} 

output "base_url" {
  description = "Base URL for API Gateway stage."

  value = module.storage_api_gw_stage.apigw_stage_invoke_url
}


/*
  # module.storage_api_lambda["download"].aws_lambda_function.terraform_lambda_func will be created
  + resource "aws_lambda_function" "terraform_lambda_func" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + filename                       = "./storage-api.zip"
      + function_name                  = "getDownloadSignedUrl"
      + handler                        = "src-ts/adaptors/storage/s3-lambda.getDownloadSignedUrl"
      + id                             = (known after apply)
      + invoke_arn                     = (known after apply)
      + last_modified                  = (known after apply)
      + memory_size                    = 128
      + package_type                   = "Zip"
      + publish                        = false
      + qualified_arn                  = (known after apply)
      + reserved_concurrent_executions = -1
      + role                           = (known after apply)
      + runtime                        = "nodejs14.x"
      + signing_job_arn                = (known after apply)
      + signing_profile_version_arn    = (known after apply)
      + source_code_hash               = (known after apply)
      + source_code_size               = (known after apply)
      + tags_all                       = (known after apply)
      + timeout                        = 3
      + version                        = (known after apply)

*/
