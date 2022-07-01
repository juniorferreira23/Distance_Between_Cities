const Cities = require('../models/Cities');
const { travelDistanceApi } = require('./apiBingCotroller');

async function addCitiesResult(req, res){

    const {city1 , city2 } = req.body;
    
    const distance = await travelDistanceApi(city1, city2)

    const citiesResult = {city1, city2, distance}

    let citiesDistance = new Cities(citiesResult)
    try {
        let doc = await citiesDistance.save()
        res.send(doc);
    }
    catch (error){
        res.send(error)
    }
};

async function AllDocs(req, res){
    
    try {
        let docs = await Cities.find()
        res.send(docs)
    }
    catch (error){
        res.send(error)
    }
}

async function deleteSearch(req, res){

    const idSearch = req.body.id
    console.log(idSearch)
    try {
        let doc = await Cities.deleteOne({'_id':idSearch})
        res.send('Item deletado com sucesso!')
    }
    catch (error){
        res.send(error)
    }
}


module.exports = { addCitiesResult, AllDocs, deleteSearch };