let express = require ( "express");
let app = express();
let routes = require ( "./routes/routes");

// mensaje de inicio del server
app.listen (3000, ()=> console.log("Server En Funcionamiento"));

// envio(get) un res para la req de x ruta
app.get("/", function(req , res){
    res.send("Bienvenido a mi pagina web!");                    
});

app.get("/contacto", function(req, res){
    res.send("Dejanos tu contacto!");
});
// rutas parametrizadas
app.get("/productos", function(req, res){
    res.send( "Lista de productos");
});

app.get("/productos/:idproducto", function(req, res){
    res.send("Detalle del producto " + req.params.idproducto);
});

app.get("/productos/:idproducto/comentarios", function(req,res){
    res.send("Comentarios del producto " + req.params.idproducto)
});

app.get("/productos/:idproducto/comentarios/:idcomentario?", function(req,res){
    if (req.params.idcomentario == undefined){
        res.send ("el comentario "+ " " + req.params.idcomentario + " " + "no existe");
    } else{
        res.send ( "el comentario" + " " + req.params.idcomentario + " " + "existe");
    };
});

// uso de rutas y controladores

app.use ("/routes", routes);