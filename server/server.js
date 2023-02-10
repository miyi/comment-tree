import express from 'express'
import { seedComments } from './data/dataGen.js'

const app = express()

 
app.get('/seedComments', (req, res) => {
  const rankedCommentTree = seedComments()
  res.send(JSON.stringify(rankedCommentTree))
})
 
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})