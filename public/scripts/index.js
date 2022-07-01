const btnSubmit = document.querySelector('#btn_submit');

function reqDistanceCities(){

    let city1 = document.querySelector('#origin_City').value;
    let city2 = document.querySelector('#destiny_City').value;

    let cities = { city1, city2 };

    let options = {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json'}),
        body: JSON.stringify(cities)
    };
    
    fetch('http://192.168.0.110:3000/cities/search', options).then( res => {
        return res.text()
    })
    .then( text => {
        console.log(text)
    })
    .catch(error => {
        console.log(error)
    })
    
};