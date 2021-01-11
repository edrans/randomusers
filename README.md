[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/hugolesta/NodeForm/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/edrans/randomusers?style=plastic)](https://github.com/edrans/randomusers/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 
# randomUsers

This is a simple application, it get data from [randomuser.me](https://randomuser.me/)

### Usage

- Clone this project in your local machine.
- npm install
- node index.js

Make sure you add the following environment variables setted.


| Name        | Description | Example code |
| ------------- |:-------------:|:-------------:|
| QUANTITY | Amount of RandomUsers you want to fetch. | `process.env.QUANTITY` |
| BUCKET_NAME | The bucket name you need store randomusers data.      | `process.env.BUCKET_NAME` |
| KEY | The directory you want to store randomusers inside a S3 bucket.      | `process.env.KEY` |
| AWS_PROFILE | Your Aws Profile.      | `process.env.AWS_PROFILE` |
| AWS_SDK_LOAD_CONFIG | Set this env with 1 value, the SDK will prefer the process specified in the config file over the process specified in the credentials file (if any).       | `process.env.AWS_SDK_LOAD_CONFIG` |


# Built With

* [aws-sdk](https://www.npmjs.com/package/aws-sdk) - The official AWS SDK for JavaScript.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file.
* [moment](https://www.npmjs.com/package/moment) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.
* [request](https://www.npmjs.com/package/request) - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

## Authors

- Hugo Lesta - <hlesta@edrans.com>
