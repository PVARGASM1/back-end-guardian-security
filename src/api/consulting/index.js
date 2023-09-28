const router = require('express').Router();
const {
    getAllConsultingHandler,
    createConsultingHandler
} = require('./consulting.controller.js')

//api/consulting
router.route('/').get(getAllConsultingHandler);

//api/consulting
router.route('/').post(createConsultingHandler);

module.exports = router