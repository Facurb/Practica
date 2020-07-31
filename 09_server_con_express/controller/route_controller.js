let r_controller = {
    list: function (req, res) {
        res.send( "Routes List");
    },
    number: function (req, res) {
        if ( req.params.idroutes == undefined ){
            res.send ( "route not found");
        }
        else{
            res.send ( "Route number " + req.params.idroutes);
        }
    },
}
module.exports = r_controller;