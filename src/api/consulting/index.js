const router = require('express').Router();
const { 
    createConsultingHandler, 
    getConsultingByUserIdHandler
} = require('./consulting.controller.js');


//api/consulting/:id
router.route('/:id').post(createConsultingHandler);

//api/consulting/:userId
router.route('/:id').get(getConsultingByUserIdHandler);

module.exports = router;