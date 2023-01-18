app_name = "api-storage"
region_name = "us-east-1"
lambda_module_source =  "./tf/aws-lambda"
api_gw_module_source = "./tf/api-gateway"
create_layer = false
builds_s3_bucket_name = ""
storage_s3_bucket_name = "dd-test-customer01-data"

//var upload-policy-name = format("%s-%s", "${var.app_name}", "-upload-api-policy")
//var upload-role-name = format("%s-%s", "${var.app_name}", "-upload-api-role")

layer_name = "nodejs-libraries"
runtimes = ["nodejs14.x"]
//lambda_layers_arn = ""
enableTelemetry = true
awsTelemetryLayerArn = "arn:aws:lambda:us-east-1:901920570463:layer:aws-otel-nodejs-amd64-ver-1-5-0:2"

api_data = {
    upload = {
        handler_name = "src-ts/adaptors/storage/s3-lambda.getUploadSignedUrl"
        runtime = "nodejs14.x"
        log_level = "DEBUG"
        log_group_name = "api-storage/upload"
        log_group_retention_days = 7
        apigw_route_key = "GET /upload"
        lambda_iam_role_name = "api-storage-upload-api-role"
        lambda_iam_policy_name = "api-storage-upload-api-policy"
        xray_tracing_policy_name = "api-storage-upload-xray-tracing-policy"
    }
    download = {
        handler_name = "src-ts/adaptors/storage/s3-lambda.getDownloadSignedUrl"
        runtime = "nodejs14.x"
        log_level = "DEBUG"
        log_group_name = "api-storage/download"
        log_group_retention_days = 7
        apigw_route_key = "GET /download"
        lambda_iam_role_name = "api-storage-download-api-role"
        lambda_iam_policy_name = "api-storage-download-api-policy"
        xray_tracing_policy_name = "api-storage-download-xray-tracing-policy"
    }
}

environmentVars = {
    AWS_LAMBDA_EXEC_WRAPPER = "/opt/otel-handler"
    S3_BUCKET_NAME = "dd-test-customer01-data"
    LOG_LEVEL = "DEBUG"
}

