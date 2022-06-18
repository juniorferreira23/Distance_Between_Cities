const axios = require('axios')
const keyBing = 'Am6NwEMDMF5zn3d9vDEJqHikJouY2rZZ4-U_0gxj7M8UKDwkCO21_hSG1z3hMVCD'


async function travelDistanceApi(city1, city2){

    await axios.get(`http://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=${city1}&wp.1=${city2}&key=${keyBing}`)
    .then( res => {
        console.log(res.data.resourceSets[0].resources[0].travelDistance)
    })
    .catch(error => {
        console.log(error)
    })
    

    
}

module.exports = { travelDistanceApi }