require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const useRouter = require('./routes/userRouter')
const noteRouter = require('./routes/noteRouter')

const app = express()
app.use(express.json())
app.use(cors())

//Routes
app.use('/users', useRouter)
app.use('/api/notes', noteRouter )




const PORT = process.env.PORT
app.listen(PORT, () => {

    console.log('Server is running on port', PORT)

})

//Connect to Mongodb


mongoose.connect('mongodb+srv://dev:dev123@diarydb.0tmvb.mongodb.net/notes?retryWrites=true&w=majority')
   