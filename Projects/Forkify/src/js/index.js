// API Key: e9b164fbd0df686e13f17ccfddc91c07
//https://www.food2fork.com/api/search

import axios from 'axios';

async function getResult(query) {
    const key = `e9b164fbd0df686e13f17ccfddc91c07`;

    try {

       const result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        console.log(result.data.recipes);

    }catch (error) {
        alert(error);
    }
}

getResult('pasta');