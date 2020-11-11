// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2ah4mut11f21cuag3qc4ovejv6",     // CognitoClientID
  "api_base_url": "https://e9tnyr5eh5.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "zsrvrlss-webapp-serverless-webapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d29olcdpvohzs5.amplifyapp.com"                                      // AmplifyURL
};

export default config;
