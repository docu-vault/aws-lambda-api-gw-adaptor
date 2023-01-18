
resource "aws_cloudwatch_log_group" "apigw_log_group" {
  name = "/aws/api_gw/${var.apigw_log_group_name}"

  retention_in_days = "${var.apigw_log_retention_in_days}"
}
