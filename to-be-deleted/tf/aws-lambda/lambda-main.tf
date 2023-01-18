resource "aws_iam_role" "lambda_role" {
name   = "${var.lambda_iam_role_name}"
assume_role_policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": "sts:AssumeRole",
     "Principal": {
       "Service": "lambda.amazonaws.com"
     },
     "Effect": "Allow",
     "Sid": ""
   }
 ]
}
EOF
}


resource "aws_iam_policy" "iam_policy_for_lambda" {
 
 name         = "${var.lambda_iam_policy_name}"
 path         = "/"
 description  = "AWS IAM Policy for managing aws lambda role"
 policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": [
       "logs:CreateLogGroup",
       "logs:CreateLogStream",
       "logs:PutLogEvents"
     ],
     "Resource": "arn:aws:logs:*:*:*",
     "Effect": "Allow"
   }
 ]
}
EOF
}


resource "aws_iam_role_policy_attachment" "attach_iam_policy_to_iam_role" {
 role        = aws_iam_role.lambda_role.name
 policy_arn  = aws_iam_policy.iam_policy_for_lambda.arn
}


resource "aws_iam_policy" "iam_policy_to_allow_xray_tracing" {
 
 name         = "${var.xray_tracing_policy_name}"
 path         = "/"
 description  = "AWS IAM Policy to allow x-ray tracing"
 policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
    {
      "Effect": "Allow",
      "Action": [
          "xray:PutTraceSegments",
          "xray:PutTelemetryRecords",
          "xray:GetSamplingRules",
          "xray:GetSamplingTargets",
          "xray:GetSamplingStatisticSummaries"
      ],
      "Resource": ["*"]
    }
  ]
}
EOF
}

/*
resource "aws_iam_role_policy_attachment" "attach_iam_policy_to_iam_role" {

 for_each = toset([
    aws_iam_policy.iam_policy_for_lambda.arn,
    aws_iam_policy.iam_policy_to_allow_xray_tracing.arn,
 ])
 role        = aws_iam_role.lambda_role.name
 policy_arn  = each.value
}
*/

resource "aws_iam_role_policy_attachment" "attach_xray_policy" {
 role        = aws_iam_role.lambda_role.name
 policy_arn  = aws_iam_policy.iam_policy_to_allow_xray_tracing.arn
}

resource "aws_lambda_function" "terraform_lambda_func" {
filename                       = "${var.source_bundle_zip_filename}"
function_name                  = "${var.lambda_function_name}"
role                           = aws_iam_role.lambda_role.arn
handler                        = "${var.handler_name}"
runtime                        = "${var.lambda_runtime}"
depends_on                     = [aws_iam_role_policy_attachment.attach_iam_policy_to_iam_role, aws_iam_role_policy_attachment.attach_xray_policy]
layers                         = "${var.lambda_layers}"
environment                    { variables = "${var.environment_vars}" } 
tracing_config {
    mode = "${var.tracing_config_mode}"
  }


  /*
  Other Attributes that can be enabled. Examples
  timeout                        = var.lambda_timeout
  memory_size                    = var.lambda_memory_size
  reserved_concurrent_executions = var.reserved_concurrent_executions
  source_code_hash = filebase64sha256("${var.dist_path}/${var.distribution_file_name}")
  layers = ["${var.lambda_layer_arn}"]
  
  variable "tracing_config_mode" {
    description = "Can be either PassThrough or Active"
    default     = "PassThrough"
   }

  
  tracing_config {
    mode = var.tracing_config_mode
  }

  environment {
    variables = var.lambda_environment_variables
  }

  tags = {
    Environment = var.namespace
    Name        = var.resource_tag_name
  }

  X-ray policy
  -----------
  {
    "Effect": "Allow",
    "Action": [
        "xray:PutTraceSegments",
        "xray:PutTelemetryRecords",
        "xray:GetSamplingRules",
        "xray:GetSamplingTargets",
        "xray:GetSamplingStatisticSummaries"
    ],
    "Resource": [
        "*"
    ]
}

environment                    { variables = {
  S3_BUCKET_NAME = "${var.storage_s3_bucket_name}"
  LOG_LEVEL = "${var.log_level}"
  } }

  */
}

/*
handler                        = "src-ts/adaptors/storage/s3-lambda.getUploadSignedUrl"
runtime                        = "nodejs14.x"
*/

resource "aws_cloudwatch_log_group" "example" {
  name              = "${var.log_group_name}"
  retention_in_days = "${var.log_group_retention_days}"
}

