const AWS = require('aws-sdk');

module.exports = class Aws {
    constructor(credentials = null, region = "us-east-1") {
        if(process.env.AWS_PROFILE) { 
            AWS.config.region = region;
            AWS.config.credentials= new AWS.SharedIniFileCredentials()
        }
        this.s3 = new AWS.S3({credentials});
        this.sts = new AWS.STS({credentials});
    }

    getAccountId() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await (await this.sts.getCallerIdentity().promise()).Account);
            } catch (error) {
                reject(error);
            }
        });
    }

    upload(bucketName,filePath,fileContent) {
        return new Promise( async (resolve, reject) => {
            try {
                let params = {
                    Bucket: bucketName,
                    Key: filePath,
                    Body: JSON.stringify(fileContent),
                    ServerSideEncryption: "AES256"
                }
                
                resolve(this.s3.putObject(params).promise());
            } catch (error) {
                reject(error);
            }
        });
    }

    makeDotEnv(bucketName,dotEnvPathFile){
        return new Promise((resolve, reject) => {
            try {
                let params = {
                    Bucket : bucketName,
                    Key: dotEnvPathFile
                }
                let localdest = `${__dirname}/.env`;
                let file = fs.createWriteStream(localdest);
                this.s3.getObject(params).createReadStream()
                            .on('end', () => {
                                resolve();
                            })
                            .on('error', (error) => {
                                return reject(error);
                            })
                            .pipe(file)
            } catch (error) {
                reject(error);
            }
        });
    }
}