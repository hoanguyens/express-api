import * as winston from "winston";
import { dev } from "./utils";
//import * as path from "path";
//import DailyRotateFile from "winston-daily-rotate-file";

//const logsDir = path.join(__dirname, '../logs');
// const transportsDaily = new DailyRotateFile({
//     filename: `${logsDir}/%DATE%-smartend-rest-api.log`,
//     datePattern: 'YYYY-MM-DD',
//     zippedArchive: true,
//     maxSize: '20m',
//     maxFiles: '14d'
// });

const logger = winston.createLogger({
   level: dev ? 'debug' : 'info',
   format: winston.format.simple(),
   defaultMeta: {service: 'smartend-rest-api'},
   transports: [
       new winston.transports.Console(),
       //transportsDaily
   ],
});

const info = (message: string) => {
    logger.info(message);
};

const  warn = (message: string) => {
    logger.warn(message);
};

const error = (message: string, error?: Error) => {
    logger.error(message, error);
};

export {
    info,
    warn,
    error,
    logger
}


