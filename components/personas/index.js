let {Router} = require('express');
let router = new Router();

module.exports = app =>{
    let _arr = [
        {
            nombre: "Carla",
            apellido: "Gonzalez",
            edad: 31
        },
        {
            nombre: "Lionel",
            apellido: "Messi",
            edad: 35
        }
    ]
    app.use("/personas", router);
    router.get('/', (req,res,next) =>{
        res.json({personas: _arr});
    });

    router.post('/', (req,res,next) =>{
        let obj = req.body;
        _arr.push(obj)
        res.json({personas: _arr});
    });

}