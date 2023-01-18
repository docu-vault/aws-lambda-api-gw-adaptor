output apigw_stage_id {
    value = aws_apigatewayv2_stage.apigw-stage.id
    description = "api gateway state id"
}

output apigw_stage_arn {
    value = aws_apigatewayv2_stage.apigw-stage.arn
    description = "api gateway stage arn"
}

output apigw_stage_execution_arn {
    value = aws_apigatewayv2_stage.apigw-stage.execution_arn
    description = "The ARN prefix to be used in an aws_lambda_permission's source_arn attribute."
}

output apigw_stage_invoke_url {
    value = aws_apigatewayv2_stage.apigw-stage.invoke_url
    description = "The URL to invoke the API pointing to the stage,"
}

output apigw_stage_tags_all {
    value = aws_apigatewayv2_stage.apigw-stage.tags_all
    description = "A map of tags assigned to the resource, including those inherited from the provider"
}

