let {Router} = require('express');
let router = new Router();

module.exports = app =>{
    let _arr = [
        {
            nombre: "Tata",
            raza: "Perro",
            edad: 6
        },
        {
            nombre: "Pacho",
            raza: "Bulldog Frances",
            edad: 3
        },
        {
            nombre: "Fionita",
            raza: "Pug",
            edad: 6
        }
    ]

    app.use("/mascotas", router);
    router.get('/', (req,res,next) =>{
        res.json({mascotas: _arr});
    });

    router.post('/', (req,res,next) =>{
        let obj = req.body;
        _arr.push(obj)
        res.json({mascotas: _arr});
    });

}