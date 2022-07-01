const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getCities } = require('../controllers/citiesController');

const corsOptions = {
    origin: 'http://localhost:8080'
};

router.use(cors(corsOptions))

router.post('/', express.json(), (req, res) => {

    getCities(req, res);
});

router.get('/', (req, res) => {
    res.send('Hello World');
    console.log(teste)
});


module.exports = router;