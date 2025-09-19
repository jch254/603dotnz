{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Action": [
        "logs:*",
        "s3:*",
        "codebuild:*",
        "codepipeline:*",
        "cloudwatch:*",
        "cloudfront:*",
        "route53:*",
        "route53domains:*",
        "iam:*",
        "ssm:DescribeParameters"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "route53:GetChange",
        "route53:GetHostedZone",
        "route53:ListHostedZones",
        "route53:ListResourceRecordSets",
        "route53:ChangeResourceRecordSets"
      ],
      "Resource": [
        "arn:aws:route53:::hostedzone/Z1D633PJN98FT9",
        "arn:aws:route53:::change/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "kms:Decrypt"
      ],
      "Resource": ${kms_key_arns}
    },
    {
      "Effect": "Allow",
      "Action": [
        "ssm:GetParameters"
      ],
      "Resource": ${ssm_parameter_arns}
    }
  ]
}
