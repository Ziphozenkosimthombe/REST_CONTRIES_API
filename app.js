//function to toggle between light and dark
function toggelMode(){
    const body = document.body  // Get a reference to the document body
    body.classList.toggle('dark__mode') // Toggle the 'dark__mode' class on the body element
    body.classList.toggle('light__mode')  // Toggle the 'light__mode' class on the body element

    // Save the user's preference in local storage
    const isDarkMode = body.classList.contains('dark__mode')
    localStorage.setItem('dark__mode', isDarkMode)
}

// Check user's preference on page load
document.addEventListener('DOMContentLoaded', ()=>{
    const saveMode = localStorage.getItem(('dark__mode')) // Retrieve the user's preference from local storage
    // Check if the saved mode is 'true', and add the 'dark__mode' class to the body
    if (saveMode === 'true'){
        document.body.classList.add('dark__mode')
    }else{
        // If the saved mode is not 'true', remove the 'dark__mode' class from the body
        document.body.classList.remove('dark__mode')
    }
} )


//url for the all the countries api
const url = 'https://restcountries.com/v3.1/all'
//we are using the fetch to fetch the url api
fetch(url)
 .then(res => res.json()) //use the json to get the respond to the api
 
 .then(data =>{
    console.log(data) // Display all the data from the console
    const ul = document.querySelector('ul') // Create the <ul> element that is going to hold the flags in the HTML
    ul.classList.add('ul__flags') // Add a class to the <ul> element
    //using the forEach to loop through the data
    data.forEach( obj =>{
        //displaying each flag from the object
        if(obj.flags){
            // Create an <img> element for the flag
            const img = document.createElement('img') 
            img.src = obj.flags.svg // Set the source of the image to the flag URL
            img.alt = 'Country Flag' // Set the alt text for the image
            img.classList.add('flag') // Add a class to the image
            ul.appendChild(img) // Append the image to the <ul> element
        }
        // Create a <span> element for the country name
        const countryName = document.createElement('span');
        countryName.textContent = obj.name.common // Set the text content to the country name
        countryName.classList.add('countryName__span') // Add a class to the <span> element
        ul.appendChild(countryName) // Append the <span> element to the <ul> element

    })
 })
 //catching the error if something went wrong
 .catch(err =>{
    console.log(`${err} error`) // Log an error message if there is an error in fetching the data
 })