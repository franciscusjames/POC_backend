import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import routes from './routes';
const serverless = require('serverless-http');
const awsXRay = require('aws-xray-sdk');
import * as cors from 'cors';
const app = express();


app.use(bodyParser.json());
app.use(compression());
app.use(awsXRay.express.openSegment('pocBackend'));
app.use('/', function (req, res, next) { next(); });
app.use(cors());
app.use(routes);
app.use(awsXRay.express.closeSegment());

module.exports.handler = serverless(express().use('/pocBackend', app));