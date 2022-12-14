const mongoose = require('mongoose') //Mediante la libreria mongoose creamos e instanciamos nuestro esquema de datos
const mongoosePaginate = require('mongoose-paginate-v2') //Invocamos a nuestro modulo para paginar.


/*El modelo de usuario nos permite generar el esquema de datos en formato 
similar a json y compatible con mongodb*/
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
         },
        avatar: {
            type: String,
            default: 'http://image.com'
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
UserSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('user', UserSchema)