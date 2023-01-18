aws cloudformation create-stack --stack-name dynamodb --template-body file://dynamodb.yml --parameters ParameterKey="DBTableName",ParameterValue="testtable"

aws cloudformation delete-stack --stack-name dynamodb

aws cloudformation create-stack --stack-name groups-apis --template-body file://CF/groups.yml  --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_NAMED_IAM CAPABILITY_IAM

#aws cloudformation describe-stacks --stack-name teststack

#--parameters ParameterKey=Parm1,ParameterValue=test1 ParameterKey=Parm2,ParameterValue=test2 \


# copy command
aws s3 cp ./groups.template.yml s3://dd-serverless/cicd/templates/

aws cloudformation deploy --template-file full-dd.yml --stack-name docudata-cicd-test --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_NAMED_IAM


aws cloudformation describe-stack-events --stack-name docudata-cicd-test