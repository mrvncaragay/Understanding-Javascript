import axios from 'axios';
import { key } from '../config';

export default class Search {
    constructor(query){
        this.query = query;
        this.result = [];
    }

    async getResult() {
        try {
            const result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            //const result1 = await axios(`https://api.edamam.com/search?q=${this.query}&app_id=${appID}&app_key=${key0}`);

            this.result = result.data.recipes;
            //this.result = result1.data.hits;

            //console.log(this.result);

        }catch (error) {
            alert(error);
        }
    }
}

