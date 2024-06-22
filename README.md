# Welcome to your CDK TypeScript project

This example deploys a lambda function and a s3 bucket using cloudfront

To interact with the S3 bucket you can upload there a file using:
```vsh
 aws s3 cp /PATH_TO_FILE s3://cubete/  
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

