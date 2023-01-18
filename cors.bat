C:\"Program Files"\Google\Chrome\Application\chrome.exe –-allow-file-access-from-files — disable-web-security — user-data-dir —disable-features=CrossSiteDocumentBlockingIfIsolating


aws cloudformation package --template-file CF\\test-api.yml --s3-bucket docudata-be-sam-deploy-bucket --s3-prefix test-api --output-template-file packaged-test-api.yml

aws cloudformation deploy --template-file C:\Users\91998\docudata\dd-bp-platform\packaged-test-api.yml --stack-name test-api --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_NAMED_IAM


aws apigatewayv2 update-api --api-id moau1fdnbg --cors-configuration AllowOrigins="*"




