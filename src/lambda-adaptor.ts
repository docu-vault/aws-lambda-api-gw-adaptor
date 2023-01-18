import { 
  APIGatewayProxyEvent,
  APIGatewayProxyResult
  } from "aws-lambda/trigger/api-gateway-proxy";


export const getUploadSignedUrl = 
  async (
    event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> => {
    const queries = JSON.stringify(event.queryStringParameters);
    return {
      statusCode: 200,
      body: `Queries: ${queries}`
    }
  };

  export const getDownloadSignedUrl = 
  async (
    event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> => {
    const queries = JSON.stringify(event.queryStringParameters);
    return {
      statusCode: 200,
      body: `Queries: ${queries}`
    }
  };
