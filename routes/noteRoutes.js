const router = require('express').Router()
let { notes } = require('../db')

router.get('/notes', (req, res) => {
  res.json(notes)
})

router.post('/notes', (req, res) => {
  notes.push(req.body)
  let i = 1
  notes.forEach(note => {
    note.id = i
    i++
  });
  res.json(notes)
})

router.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  notes = notes.filter(note => note.id !== id)
  res.sendStatus(200)
})

module.exports = router