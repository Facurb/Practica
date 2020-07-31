let http = require ("http");

http.createServer ( function( req, res){
    res.writeHead (200, {"content_type": "text/plain"});

    switch (req.url) {
        case "/" :
            res.end("Bienvenido a la Homepage");
            break;
        case "/autor" :
            res.end( "Autor: Facundo Robledo");
            break;
        default:
            res.end( "Error, la pagina no existe");
            break;
    }
}).listen(3030 , "localhost");