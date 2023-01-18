output storage_api_gw_id {
    value = aws_apigatewayv2_api.apigw.id
    description = "storage-api gateway id"
}

output storage_api_gw_name {
    value = aws_apigatewayv2_api.apigw.name
    description = "storage-api gateway name"
}

output storage_api_gw_excution_arn {
    value = aws_apigatewayv2_api.apigw.execution_arn
}

output storage_api_gw_arn {
    value = aws_apigatewayv2_api.apigw.arn
}

output storage_api_gw_api_endpoint {
    value = aws_apigatewayv2_api.apigw.api_endpoint
}