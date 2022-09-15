import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import * as fs from 'fs'

const app = express()
app.use(express.static('public'))
const port = process.env.PORT || 3000
// app.get('/', (req, res, next) => {
//   try {
//     const xml = fs.readFileSync('./skroutz.xml')
//     res.header('Content-Type', 'application/xml')
//     res.status(200).send(xml)
//   } catch (err) {
//     res.status(404).send('Not Found!')
//     console.log(err)
//   }
// })

app.listen(port, () => {
  console.log('Server is running on port 3000')
})
