const express = require('express')
const app = express()
const port = 3000

let receivedRequestTime = ''
app.use(function (req, res, next) {
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const date = time.getDate()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  const method = req.method
  const url = req.url

  receivedRequestTime = time.getTime()
  console.log(`Q1: 伺服器接收請求紀錄: ${year}-${month}-${date} ${hour}:${minute}:${second} | ${method} from ${url}`)

  //伺服器收到請求的時間
  // console.log(time.getTime())
  next()
})

let ServerResponseTime = ''
app.get('/', (req, res) => {
  const time = new Date()
  res.send('列出全部 Todo')

  //伺服器送出回應的時間
  ServerResponseTime = time.getTime()
  console.log(`Q2: total time: ${ServerResponseTime - receivedRequestTime}ms`)
})

app.get('/new', (req, res) => {
  const time = new Date()
  ServerResponseTime = time.getTime()
  console.log(`Q2: total time: ${ServerResponseTime - receivedRequestTime}ms`)
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  const time = new Date()
  ServerResponseTime = time.getTime()
  console.log(`Q2: total time: ${ServerResponseTime - receivedRequestTime}ms`)
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  const time = new Date()
  ServerResponseTime = time.getTime()
  console.log(`Q2: total time: ${ServerResponseTime - receivedRequestTime}ms`)
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})