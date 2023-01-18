variable apigw_name {
    type = string
    description = "Name of the Gateway API "
}

variable apigw_protocol_type {
    type = string
    description = "Name of the api type HTTP or REST"
}

variable apigw_stage_name {
    type = string
    description = "API Gateway Environment Name"
}

variable apigw_route_key {
    type = string
    description = "Route key of the API for a given lambda"
}

variable lambda_function_invoke_arn {
    type = string
    description = "lambda function inoke arn"
}

variable lambda_function_name {
    type = string
    description = "lambda function name"
}