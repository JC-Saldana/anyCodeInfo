/*
   

    - crear carpeta client, y server
    - npx create-react-app ./          crea app react
    - npm init -y      genera package donde instalar dependencias en cliente
    - npm install body-parser cors express mongoose nodemon @material-ui/core   
        instala dependecias en server. body-parser para post request, cors para cross origin request, express para routing, nodemon para refrescar servidor automáticamente, material para material ui
    - npm i dotenv   (servidor) para hacer variables de entorno visibles en nuestro pc y guardat datos sensibles
    - en package poner "type": "module",  y   "start": "nodemon index.js"  en primer y segundo bloques
    
    - npm install axios moment react-file-base64 redux redux-thunk    También react-redux?
        axios para api request, moment es librería de fechas, react-file-base64 para convertir imágenes, redux-thunk para acciones asíncronas con redux
        
    - borrar src y crear otro, añadirle index.js y App.js

    - index.js - server

        import express from "express"
        import bodyParser from "body-parser"
        import mongoose from "mongoose"
        import cors from "cors"

        const app = express()

        app.use(bodyParser.json({limit: "30mb", extended: true}))
        app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
        app.use(cors())

        const CONNECTION_URL = "mongodb+srv://Carlos:Apoipoi8@cluster0.u1dk2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        const PORT = process.env.PORT || 5000

        mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
            .catch((error) => console.log(error.message))

        mongoose.set("useFindAndModify", false)

    - index.js - client

        import express from "express"
        import bodyParser from "body-parser"
        import mongoose from "mongoose"
        import cors from "cors"

        import postRoutes from "./routes/posts.js"

        const app = express()

        // Express middleware to connect to application
            // Añade prefijo posts a todas las rutas postRoutes
        app.use("/posts", postRoutes)

        app.use(bodyParser.json({limit: "30mb", extended: true}))
        app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
        app.use(cors())
        
        const CONNECTION_URL = "mongodb+srv://Carlos:Apoipoi8@cluster0.u1dk2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        const PORT = process.env.PORT || 5000

        mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
            .catch((error) => console.log(error.message))

        mongoose.set("useFindAndModify", false)

    - App.js

        import React from "react"

        const App = () => {
            return (
                <div>
                    <h1>App</h1>
                </div>
            )
        }

        export default App

    - npm start para probar iniciar app, luego cerrar con ctrl + c
    - crear cluster en mongodb atlas 
    - npm start en server, debería conectar con BD
    - crear carpeta routes con posts.js para enroutar
            import express from "express"

            const router = express.Router()

            // Como se añadió prefijo, no se accede desde localhost:5000, sino localhost:5000/posts
            router.get("/", (req, res) => {
                res.send("This works!")
            })

            export default router
    - controllers > posts.js   to handle our routes
            // This js is to save all Handlers for our routes

            export const getPosts = (req, res) => {
                res.send("This works!")
            }


    - models > postMessage.js    to use mongoose
            import mongoose from mongoose

// Schema: mongoose allows us to use uniformity between documents, so we create our norms
        const postSchema = mongoose.Schema({
            title: String,
            message: String,
            creator: String,
            tags: [String],
            selectedFile: String,
            likedCount: {
                type: Number,
                default: 0
            },
            createdAt: {
                type: Date,
                default: new Date()
            }
        })

        // Transform schema into model
        const PostMessage = mongoose.model("PostMessage", postSchema)

        export default PostMessage

    - client > src > components. Crear posts and form. Cad uno con styles.js
        form > form.js
        posts > posts.js


    - para cambiar títle
    ir a carpeta 
    npm install --save react-helmet   en Client
        import { Helmet } from 'react-helmet'
        const TITLE = 'My Page Title'
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
    - para reescalar imágenes
        npm i react-image-file-resizer

    **********   React function component with exports   **********
    atajo: rafce

*/