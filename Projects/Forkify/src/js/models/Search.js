import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
        this.result = [];
    }

    async getResult() {
        const key1 = 'e9b164fbd0df686e13f17ccfddc91c07';
        const key2 = '83642fadd36991498cda6f6bfb237617'

        try {
            const result = await axios(`https://www.food2fork.com/api/search?key=${key2}&q=${this.query}`);
            this.result = result.data.recipes;

            //console.log(this.result);

        }catch (error) {
            alert(error);
        }
    }
}

