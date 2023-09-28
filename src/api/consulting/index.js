const router = require('express').Router();
const { 
    createConsultingHandler 
  
} = require('./consulting.controller.js');


//api/consultings
router.route('/:userId').post(createConsultingHandler);

//api/consulting
// router.route('/').get(getAllConsultingHandler);

module.exports = router;