let { Router } = require("express");
let router = new Router();
let productsController = require("./productsController/productsController");

let Admin = false;

module.exports = (app) => {
    app.use("/", router);

        if(Admin) {

            router.get("/api/productos", (req, res)=> {
                let response = productsController.getAll();
                res.json(response)
            })
            
            router.get("/api/productos/:id", (req, res)=> {
                let { id } = req.params
                let response = productsController.getProdById(parseInt(id));
                res.json(response)
            })
            router.post("/api/productos", (req, res) =>{
                    let obj = req.body;
                    let prod = productsController.newProd(obj)
                    res.json(prod)
            })
                
            router.put("/api/productos/:id", (req, res) => {
                    let { id } = req.params
                    let response = productsController.updateProduct(req.query, parseInt(id))
                    res.json(response)
            })
                
            router.delete("/api/productos/:id", (req, res)=> {
                    let { id } = req.params;
                    let response = productsController.deleteById(parseInt(id));
                    res.json(response)
            })

        } else {
            
            router.get("/api/productos", (req, res)=> {
                let response = productsController.getAll();
                res.json(response)
            })
            
            router.get("/api/productos/:id", (req, res)=> {
                let { id } = req.params
                let response = productsController.getProdById(parseInt(id));
                res.json(response)
            })
            
            
        }


}