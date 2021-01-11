const request = require('request');
const AWS = require('./aws');
const moment = require('moment');   
require('dotenv').config();

(async () => {
    let url = "https://randomuser.me/api/";
    let userQuantity = process.env.QUANTITY;
    if(userQuantity) { url = `${url}?results=${userQuantity}`};
    await request(url, {json: true}, async (err,res,body) => {
        let awsConn = new AWS();
        if (err) { return console.error(err);}
        for (let index = 0; index < body.results.length; index++) {
            const element = body.results[index];
            awsConn.upload(process.env.BUCKET_NAME,`${process.env.KEY}/dt=${moment().format('YYYY-MM-DD hh:mm')}.json`,element);
        }
    });
})();


