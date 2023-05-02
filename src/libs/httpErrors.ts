import * as http from 'http';

export class HttpError extends Error {
    status: number;
    constructor(status: number, message: string){
        super(message);
        this.status = status;
    }
}

// @ts-ignore
export function errorHandler(err: Error, req: http.IncomingMessage, res: http.ServerResponse, next: () => void){
    if(err instanceof HttpError){
        res.writeHead(err.status, {'Content-Type': 'text/plain'});
        res.end(err.message);
    } else {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Interal Server Error')
    }
}

