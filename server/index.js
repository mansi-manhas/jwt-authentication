const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')

const authRoutes = require('./routes/auth')

dotenv.config()

const app = express()

// Configure CORS
// const corsOptions = {
//   origin: 'http://localhost:3000', // Change this to your frontend's URL
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204
// };

app.use(cors()) //add corsOptions
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

const PORT = 5000; //process.env.PORT

app.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}.`)
});