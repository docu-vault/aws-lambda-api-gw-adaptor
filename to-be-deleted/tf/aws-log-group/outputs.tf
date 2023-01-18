output apigw_log_group_arn {
    value = aws_cloudwatch_log_group.apigw_log_group.arn
    description = ""
}

output apigw_log_group_tags {
    value = aws_cloudwatch_log_group.apigw_log_group.tags_all
    description = ""
}