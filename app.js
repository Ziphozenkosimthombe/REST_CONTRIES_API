const url = 'https://restcountries.com/v3.1/all'
fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data[0])
    })
    .catch(err=>{
        console.log(`${err} erro`)
    })