
resource "aws_apigatewayv2_stage" "apigw-stage" {
  api_id = "${var.apigw_id}"

  name        = "${var.apigw_stage_name}"
  auto_deploy = true

  access_log_settings {
    destination_arn = "${var.apigw_log_group_arn}"

    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
      }
    )
  }
}

/*
variable "xray_tracing_enabled" {
  description = "Enables the XRay tracing and will create the necessary IAM permissions"
  type        = bool
  default     = false
}

resource "aws_api_gateway_stage" "_" {
  stage_name    = var.namespace
  rest_api_id   = aws_api_gateway_rest_api._.id
  deployment_id = aws_api_gateway_deployment._.id

  xray_tracing_enabled = var.xray_tracing_enabled

  tags = {
    Environment = var.namespace
    Name        = var.resource_tag_name
  }
}
*/

