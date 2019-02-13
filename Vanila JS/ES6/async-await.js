// Async/Await
//


//-resolve -if the function is succesful
//-reject - if it faileds

const getIDs = new Promise((resolve, reject) =>{

    setTimeout(() =>{
        resolve([12, 32, 123]); //succesfull
        //reject([12, 32, 123]);  //failed

    }, 1500);

});

const getRecipe = recID => {

    return new Promise((resolve, reject) =>{

        setTimeout(ID => {

            resolve('here is the recipe! ' + ID);

        }, 2000, recID);

    });
};

const tellMeMore = str => {

    return new Promise((resolve, reject) => {

        setTimeout(morestr => {

            resolve(morestr + " this is a new str from another promises");

        }, 2000, str)

    });

};

async function getRecipesAW() {
    const IDs = await getIDs;

    console.log(IDs);

    const recipe = await tellMeMore(IDs);

    return recipe;
}

console.log("runner");
getRecipesAW().then(result => console.log(result));
console.log('breaker');