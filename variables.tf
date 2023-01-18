variable app_name {
    type = string
    description = "Name of the application"
}

variable region_name {
    type = string
    description = "Name of the cloud provider region"
}

variable lambda_module_source {
    type = string
    description = "location of the terraform aws lambda module source"
}

variable api_gw_module_source {
    type = string
    description = "location of the terraform aws api gateway module source"
}

variable "create_layer" {
  description = "Controls whether layer should be created"
  type = bool
  default = false  
}
variable builds_s3_bucket_name {
    type = string
    description = "S3 bucket name where the build artifacts are saved"
}

variable storage_s3_bucket_name {
    type = string
    description = "S3 bucket name where the data files are going to be stored"
}


variable "api_data" {
  type = map(object({
    handler_name = string
    runtime = string
    log_group_name = string
    log_group_retention_days  = number
    apigw_route_key = string
    lambda_iam_role_name = string
    lambda_iam_policy_name = string
    xray_tracing_policy_name = string
  }))
}

variable layer_name {
  type = string
  description = "lambda layer name"
}


variable runtimes {
  type = list
  description = "layer runtimes"
}

variable enableTelemetry {
  type = bool
  description = "Enable AWS Distor for Telemetry for Lambda functions"
}

variable awsTelemetryLayerArn {
  type = string
  description = "AWS Opentelemetry layer for Lambda layer arn"
}

variable environmentVars {
  type = map
  description = "list of environment variables and values"
}

variable "tracing_config_mode" {
  description = "Can be either PassThrough or Active"
  default     = "PassThrough"
}


