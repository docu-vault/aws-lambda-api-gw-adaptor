
output "arn" {
    value=aws_lambda_function.terraform_lambda_func.arn
    description = "uploadurl lambda function name"
}

output "function-name" {
    value=aws_lambda_function.terraform_lambda_func.function_name
    description = "uploadurl lambda function name"
}

output "invoke_arn" {
    value=aws_lambda_function.terraform_lambda_func.invoke_arn
    description = "lambda arn"
}

output "handler" {
    value=aws_lambda_function.terraform_lambda_func.handler
    description = "lambda arn"
}

output "kms_key_arn" {
    value=aws_lambda_function.terraform_lambda_func.kms_key_arn
    description = "lambda arn"
}

output "layers" {
    value=aws_lambda_function.terraform_lambda_func.layers
    description = "lambda arn"
}

output "memory_size" {
    value=aws_lambda_function.terraform_lambda_func.memory_size
    description = "lambda arn"
}

output "qualified_arn" {
    value=aws_lambda_function.terraform_lambda_func.qualified_arn
    description = "lambda arn"
}

output "reserved_concurrent_executions" {
    value=aws_lambda_function.terraform_lambda_func.reserved_concurrent_executions
    description = "lambda arn"
}

output "role" {
    value=aws_lambda_function.terraform_lambda_func.role
    description = ""
}

output "runtime" {
    value=aws_lambda_function.terraform_lambda_func.runtime
    description = ""
}

output "source_code_hash" {
    value=aws_lambda_function.terraform_lambda_func.source_code_hash
    description = ""
}

output "source_code_size" {
    value=aws_lambda_function.terraform_lambda_func.source_code_size
    description = ""
}

output "timeout" {
    value=aws_lambda_function.terraform_lambda_func.timeout
    description = ""
}

output "version" {
    value=aws_lambda_function.terraform_lambda_func.version
    description = ""
}

output "vpc_config" {
    value=aws_lambda_function.terraform_lambda_func.vpc_config
    description = ""
}






