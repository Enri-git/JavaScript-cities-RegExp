// import { cities } from "./data"; // we imported the array of the cities from the file data.js. you can use in your code the array with the name 'cities'

// here you can type your code

const inputElement = document.getElementById('searchfield');

inputElement.addEventListener('input', search);


function search(){
    let inputText = inputElement.value;
    document.getElementById('output').innerHTML = '';
    if(inputText.length >1){
        for(let i = 0; i < cities.length; i++){
            let conditionCity = cities[i].city.toLowerCase().search(inputText.toLowerCase()); 
            let conditionStat = cities[i].state.toLowerCase().search(inputText.toLowerCase());
            if( (conditionCity != -1) || (conditionStat != -1)){
                document.getElementById('output').innerHTML += `<li> ${highlight(cities[i].city,inputText)}, ${highlight(cities[i].state,inputText)} ${cities[i].population} </li>`
            }
        }
    }

}

function highlight(text , search) {
    var re = new RegExp(search, 'i');
    return text.replace(re, `<mark>${search}</mark>`);
  }

