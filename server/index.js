import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/users.js'
import dotenv from "dotenv"
import Questionroutes from './routes/Questions.js'

dotenv.config();
const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb",extended: true}))
app.use(cors());

app.get('/',(req,res) => {
    res.send("This is a Stack Overflow clone API")
})
app.use('/user', userRoutes)
app.use('/questions', Questionroutes)
 
const PORT = process.env.PORT || 5000



mongoose.connect( process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${{PORT}}`)} ))
    .catch((err) => console.log(err.message))

