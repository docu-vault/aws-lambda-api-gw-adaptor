variable "lambda_iam_role_name" {
    type = string
    description = "Name of the IAM role for Lambda Functions"
}

variable "lambda_iam_policy_name" {
    type = string
    description = "Name of the IAM policy for the lambda functions"
}

variable "xray_tracing_policy_name" {
    type = string
    description = ""
}

variable "lambda_function_name" {
    type = string
    description = "Name of the Lambda function"
}

variable "builds_s3_bucket_name" {
    type = string
    description = "Name of the S3 bucket that archives the various releases builds"
}

/*
variable "storage_s3_bucket_name" {
    type = string
    description = "Name of the S3 bucket where the files are stored"
}
*/

/*
variable "log_level" {
    type = string
    description = "Log verbose level for the nodejs lambda code"
}
*/

variable handler_name {
    type = string
    description = "Name of the Lambda handler function"
}

variable lambda_runtime {
    type = string
    description = "Lambda function runtime"
}

variable source_bundle_zip_filename {
    type = string
    description = "Name of the source bundle Zip file"
}

variable log_group_name {
    type = string
    description = "log group name of the lambda function"
}

variable log_group_retention_days {
    type = number
    description = "Retention days of the AWS log group"
}

variable lambda_layers {
    type = list
    description = "lambda layers"
}

variable environment_vars {
    type = map
    description = ""
}

variable "tracing_config_mode" {
  description = "Can be either PassThrough or Active"
  type = string
}
