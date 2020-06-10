const express = require('express')

const router = express.Router()
const request = require('request')
const shortid = require('shortid')

function createList(arrayDate) {
  return arrayDate.map((item) => {
    const note = item.body
    return {
      id: shortid.generate(),
      time: JSON.stringify(new Date()),
      timeMS: +new Date(),
      text: note,
      status: true,
    }
  })
}

// /api/notes/v1/getNotes
router.get('/getNotes', async (req, res) => {
  const linc = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  try {
    request(linc, async (error, response, body) => {
      const arrayDate = JSON.parse(body)
      const resultList = createList(arrayDate)
      res.json(resultList)
    })
  } catch (error) {
    res.json(new Error('data not received'))
  }
})

router.use((req, res) => {
  res.send('API webstore v1 not founde...')
})

module.exports = router
