resource "aws_apigatewayv2_api" "apigw" {
  name          = "${var.apigw_name}"
  protocol_type = "${var.apigw_protocol_type}"
  /* HTTP */
}