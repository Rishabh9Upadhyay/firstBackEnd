const http = require('http')
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    // console.log(req)
    console.log(req.url)
    if(req.url=='/'){
        res.statusCode=200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString())
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>About Rishabh Upadhyay</h1> <p>Rishabh Upadhyay is a software engineer and working as data analyst and webdeveloper and some time use to give time as free launcer and their bussiness and so amny things.....</p>')
    }
    else if(req.url=='/project1'){
        res.statusCode=200;
        const d1 = fs.readFileSync('A.html')
        res.end(d1.toString());
    }
    else if(req.url=='/project2'){
        res.statusCode=200;
        const d2 = fs.readFileSync('form2.html');
        res.end(d2.toString())
    }else if(req.url=='/project3'){
        res.statusCode=200;
        const d3 = fs.readFileSync('internal_External_Line.html');
        res.end(d3.toString());
    }else if(req.url=='/project4'){
        res.statusCode=200;
        const d4 = fs.readFileSync('project1.html');
        res.end(d4.toString());
    }else{
        res.statusCode=404;
        res.end('<h1>Error code 404</h1><h2>This page has not been directed even now</h2>')
    }

    // res.setHeader('Content-Type','text/html');
    // res.end("<h1>This is Rishabh upadhyay</h1>")
})
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})