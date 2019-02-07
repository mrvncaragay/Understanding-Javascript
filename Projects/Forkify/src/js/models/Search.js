import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
        this.result = [];
    }

    async getResult() {
        //const key0 = '6f63c2f17a631ec3ad21f428a9febb03'; //EDAMAM
        //const appID = 'c4b2021b'; //EDAMAM
        //const key1 = 'e9b164fbd0df686e13f17ccfddc91c07';
        const key2 = '83642fadd36991498cda6f6bfb237617'

        try {
            const result = await axios(`https://www.food2fork.com/api/search?key=${key2}&q=${this.query}`);
            //const result1 = await axios(`https://api.edamam.com/search?q=${this.query}&app_id=${appID}&app_key=${key0}`);

            this.result = result.data.recipes;
            //this.result = result1.data.hits;

            //console.log(this.result);

        }catch (error) {
            alert(error);
        }
    }
}

