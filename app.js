var AWS = require('aws-sdk');
AWS.config.update({'accessKeyId': process.env.AWS_ACCESS_KEY_ID, 'secretAccessKey': process.env.AWS_SECRET_ACCESS_KEY});

var Dump = require('mongodump-s3').Dump;

var dump = new Dump(process.env.MONGODB_URL, process.env.S3_BUCKET);
dump.exec();
