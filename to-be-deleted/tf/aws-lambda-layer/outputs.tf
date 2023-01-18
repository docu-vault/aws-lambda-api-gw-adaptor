output arn {
    value = aws_lambda_layer_version.lambda_layer.arn
    description = "ARN of the Lambda Layer with version"
}

output created_date {
    value = aws_lambda_layer_version.lambda_layer.created_date
    description = "Date this resource was created"
}

output layer_arn {
    value = aws_lambda_layer_version.lambda_layer.layer_arn
    description = "ARN of the Lambda Layer without version"
}

output signing_job_arn {
    value = aws_lambda_layer_version.lambda_layer.signing_job_arn
    description = "ARN of a signing job"
}

output signing_profile_version_arn {
    value = aws_lambda_layer_version.lambda_layer.signing_profile_version_arn
    description = "ARN for a signing profile version"
}

output source_code_size {
    value = aws_lambda_layer_version.lambda_layer.source_code_size
    description = "Size in bytes of the function .zip file"
}

output aws_lambda_layer_version {
    value = aws_lambda_layer_version.lambda_layer.version
    description = "Lambda Layer version"
}