resource "aws_lambda_layer_version" "lambda_layer" {
  filename   = "${var.layer_zip_filename}"
  layer_name = "${var.layer_name}"
  compatible_runtimes = "${var.runtimes}"
}