const request = require('request');
const AWS = require('./aws');
const moment = require('moment');   
const fs = require('fs');
require('dotenv').config();

(async () => {
    let url = "https://randomuser.me/api/";
    let userQuantity = process.env.QUANTITY;
    if(userQuantity) { url = `${url}?results=${userQuantity}`};
    await request(url, {json: true}, async (err,res,body) => {
        let awsConn = new AWS();
        if (err) { return console.error(err);}

        for (let index = 0; index < body.results.length; index++) {
            await fs.appendFileSync("./randomUsersFile", `${JSON.stringify(body.results[index])}\n`);
        }
        let content = await fs.readFileSync("./randomUsersFile")
        await awsConn.upload_file(process.env.BUCKET_NAME,`${process.env.KEY}/dt=${moment().format('YYYY-MM-DD hh:mm')}.json`,content);
        await fs.unlinkSync("./randomUsersFile")
    });
})();


