import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { aws_s3 as s3 } from 'aws-cdk-lib'

import * as lambda from 'aws-cdk-lib/aws-lambda'

export class HelloCdkStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		// Define the Lambda function resource
		const myFunction = new lambda.Function(this, 'HelloWorldFunction', {
			runtime: lambda.Runtime.NODEJS_20_X, // Provide any supported Node.js runtime
			handler: 'index.handler',
			code: lambda.Code.fromInline(`
			  exports.handler = async function(event) {
				return {
				  statusCode: 200,
				  body: JSON.stringify('Hello pedorro!'),
				};
			  };
			`),
		})

		// Define the Lambda function URL resource
		const myFunctionUrl = myFunction.addFunctionUrl({
			authType: lambda.FunctionUrlAuthType.NONE,
		})

		// Define an S3 bucket resource
		const myBucket = new s3.Bucket(this, 'MyBucket', {
			bucketName: 'cubete',
			versioned: true, 
			removalPolicy: cdk.RemovalPolicy.DESTROY, // Optional: Automatically delete the bucket when the stack is deleted
			autoDeleteObjects: true, // Optional: Automatically delete objects in the bucket when the bucket is deleted
		})

		// CloudFormation output for the URL
		new cdk.CfnOutput(this, 'myFunctionUrlOutput', {
			value: myFunctionUrl.url,
		})


		   // CloudFormation output for your S3 bucket name
		   new cdk.CfnOutput(this, 'myBucketNameOutput', {
            value: myBucket.bucketName,
        })
	}
}
