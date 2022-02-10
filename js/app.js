import http from 'http';
import path from 'path';
import fs from 'fs';


const requestListener = (req, resp) => {
    resp.setHeader('Content-Type', 'text/html');
    resp.statusCode = 200;

    let url = "";
    let type = path.extname(req.url);

    switch (type){
        case ".html":
            resp.setHeader('Content-Type', 'text/html');
            url = "."+req.url;
            break;
        case ".css":
            resp.setHeader('Content-Type', 'text/css');
            url = "."+req.url;
            break;
        case ".jpg":
            resp.setHeader('Content-Type', 'image/jpeg');
            url = "."+req.url;
            break;
        case ".png":
            resp.setHeader('Content-Type', 'image/png');
            url = "."+req.url;
            break;
        case ".mp4":
            resp.setHeader('Content-Type', 'video/mp4');
            url = "."+req.url;
            break;
        default:
            resp.setHeader('Content-Type', 'text/html');
            url = "index.html";
            break;
    }
    console.log(req.url);
    
    if(url != ""){
        if(fs.existsSync(url)){
            resp.write(fs.readFileSync(url));
        } else {
        resp.write(fs.readFileSync("index.html","utf-8"));
        }
    }

    resp.end();
}

const app = http.createServer(requestListener);

export default app;