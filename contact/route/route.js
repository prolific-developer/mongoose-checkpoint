const express = require('express')
const router = express.Router()
const {getPerson, postPerson, updatePerson, deletePerson} = require('../controller/controller')

router.get('/', getPerson)
router.post('/', postPerson)
router.put('/:id', updatePerson)
router.delete('/:id',deletePerson)

module.exports = router