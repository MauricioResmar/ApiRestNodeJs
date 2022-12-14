const express = require('express')
const initDB = require('./config/db')
const app = express()

const port = 3001
//Definimos las rutas a trabajar, por cada archivo necesitaremos una nueva instancia / app.use
const userRouters = require('./app/routes/user')
const uploadRouters = require('./app/routes/upload')
const itemsRouters = require('./app/routes/items')


/*El app.get va a tener dos argumentos request and response, estos dos argumentos, corresponden a lo
datos que están entrando como request del lado cliente, los cuales pueden ser paramentros, cabeceras,
header o demás y el res va a ser el argumento mediante el cual nosotros vamos 
a responder un codigo, 200, 201, 404 etc. En este caso simplemente le vamos a decir que va a responder
enviando la data Hola mundo.*/

/*
app.get('/', (req, res) => {
    res.send({
        data:'Hola mundo'
    })
})*/
//for parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//El siguiente app.use se uso con body-parser para formatear la información json enviada 
//vía metodo get y post. Posteriormente se deshabilita ya que se procede a usar app.use(express.json());
/*app.use(
    bodyParser.json({
      limit: '20mb'
    })
    )
    //for parsing aplication/x-www-form-urlencoded
    app.use(
        bodyParser.urlencoded({
            limit: '20mb',
            extended: true
        })
        )*/
app.use(userRouters)
app.use(uploadRouters)
app.use(itemsRouters)

/*Ahora hay que decirle al server que se levanten y que comience
 a correr la aplicacion por el puerto
3000 */
app.listen(port,() => {
    console.log('La Aplicacion y el Server están OnLine!');
})

initDB();
/*Para iniciar nuestra aplicacion, haciendo uso de start, hay que modificar en el archivo
package.json como se muestra a continuacion:

*/