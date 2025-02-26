const express = require('express')
const router = express.Router();
const controller = require('../Controller/controller1')

router.get('/', (req, res) => {
    try {
        res.send({
            message : "This is my api",
            status : 200
        })
    } catch (error) {
        res.send({
            message : error,
            status : 500
        })
    }
})

router.get('/getData', controller.getData)

router.post('/postData', controller.postData)

router.put('/updateData', controller.updateData)

router.delete('/deleteData', controller.deleteData)

module.exports = router 