
resource "aws_apigatewayv2_integration" "apigw_integration" {
  api_id = "${var.apigw_id}"

  integration_uri    = "${var.lambda_function_invoke_arn}"
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "apigw_route" {
  api_id = "${var.apigw_id}"

  route_key = "${var.apigw_route_key}"
  /* route_key = "GET /uploadurl" */
  target    = "integrations/${aws_apigatewayv2_integration.apigw_integration.id}"
}


resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "${var.lambda_function_name}"
  principal     = "apigateway.amazonaws.com"

  source_arn = "${var.apigw_execution_arn}/*/*"
}


