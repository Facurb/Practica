let usercontroller = {
    "register" : function(req, res){
        res.render("register");
    },
    "list": function(req, res){
        let users = [
            "Victor",
            "Facundo",
            "Fernando",
        ];
    res.render("userlist" , {"users": users});
    },
};

module.exports = usercontroller;