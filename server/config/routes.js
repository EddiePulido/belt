const controller = require("../controllers/parents.js");

module.exports = function(app){
    app.get("/allParents", function(req,res){
        console.log("Getting Parents");
        controller.getParents(req,res);
    })

    app.post("/newParent", function(req,res){
        console.log("Creating new Parent");
        controller.createParent(req,res);;
    })

    app.get("/parents/delete/:id",function(req,res){
        console.log("Deleting Parent");
        controller.deleteParent(req,res);
    })

    app.put("/parents/update/:id", function(req,res){
        console.log("Updating Product");
        controller.updateParent(req,res);
    })

    app.get("/oneParent/:id",function(req,res){
        console.log("Getting one Product");
        controller.getParent(req,res);
    })

    app.post("/newChild/:id",function(req,res){
        console.log("Creating new Child");
        controller.createChild(req,res);
    })


    app.get("/child/delete/:cid/:pid",function(req,res){
        console.log(req.params.cid,"Child");
        console.log(req.params.pid,"Parent");
        console.log("Deleting review");
        controller.deleteChild(req,res);
    })
}