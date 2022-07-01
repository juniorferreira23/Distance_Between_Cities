const express = require('express');
const router = express.Router();
const cors = require('cors');
const { body, validationResult } = require('express-validator')
const { addCitiesResult, AllDocs, deleteSearch } = require('../controllers/citiesController');

const cityCaracterMin = 5
const cityCaracterMax = 40

const corsOptions = {
    origin: 'http://localhost:3000'
};

router.use(cors(corsOptions))

router.post('/search', 
    express.json(),
    body('city1').isLength({min: cityCaracterMin, max: cityCaracterMax}).withMessage(`Cidade inválida. Precisa ter mais de ${cityCaracterMin} caracteris e menos que ${cityCaracterMax}`),
    body('city2').isLength({min: cityCaracterMin, max: cityCaracterMax}).withMessage(`Cidade inválida. Precisa ter mais de ${cityCaracterMin} caracteris e menos que ${cityCaracterMax}`),
    (req, res) => {

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        addCitiesResult(req, res);
});

router.get('/view', (req, res) => {
    AllDocs(req, res)
});

router.delete('/delete', 
    express.json(),
    (req, res) => {
        deleteSearch(req, res)
})


module.exports = router;