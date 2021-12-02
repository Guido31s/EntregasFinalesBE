let { Router } = require("express");
let router = new Router();
let cartController = require("./cartController/cartController")
let mongoCartController = require("./cartController/mongoDBCartController")


//Usar Cart Controller Firebase
let firebaseCartController = require("./cartController/firebaseCartController");

module.exports = (app) => {
    app.use("/", router);


            //Cart desde MongoDB

            router.get("/api/carrito", mongoCartController.getCart)
            router.post("/api/carrito", (req, res)=> {
                let response = mongoCartController.createCart();
                res.json(response)
            })

            // router.get("/api/carrito", (req, res)=> {
            //         let response = cartController.getAll();
            //         res.json(response)
            //     })
            // router.get("/api/carrito/:id/productos", (req, res)=> {
            //     let { id } = req.params
            //     let response = cartController.getCartById(parseInt(id));
            //     console.log(response[0].cartProducts)
            //     res.json(response)
            // })
                     
            // router.post("/api/carrito/", (req, res) =>{
            //     let prod = cartController.newCart()
            //     res.json(prod)
            // })

            // router.post("/api/carrito/:id/productos", (req, res) =>{
            //     let obj = req.body;
            //     let { id } = req.params
            //     let response = cartController.newProductInCart(obj, parseInt(id))
            //     res.json(response)
            // })

            // router.delete("/api/carrito/:id", (req, res)=> {
            //     let { id } = req.params;
            //     let response = cartController.deleteById(parseInt(id));
            //     res.json(response)
            // })

            // router.delete("/api/carrito/:id/productos/:id_prod", (req, res) => {
            //     let { id } = req.params
            //     let { id_prod } = req.params;
            //     let response = cartController.deleteProductById(parseInt(id), parseInt(id_prod))
            //     res.json(response)
            // })
}