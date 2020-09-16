const express = require('express')
const app = express()
const port = 3000

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

  console.log(`Q1: 伺服器接收請求紀錄: ${year}-${month}-${date} ${hour}:${minute}:${second} | ${method} from ${url}`)
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})