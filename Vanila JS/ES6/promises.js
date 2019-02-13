//Promises
//
// -Object that keeps track about whether a certain event has happened already or not.
// -if yes, it determines what happens after the event has happened
// -implements that concept of a future value that were expecting

//states
// -Pending -before that event has happend
// -Settled/Resolved -after the event has happened
// -fulfilled -successful run
// -Rejected -if error occurs

//has  two parameters
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

            resolve(morestr + "this is a new str from another promises");

        }, 2000, str)

    });

};



//then -get the result
//.catch if promise failed
getIDs.then((IDs) =>{
    console.log(IDs);
    return getRecipe(IDs[1]);

}).then(recipe => {
    console.log(recipe);
    return tellMeMore(recipe);

}).then(mstr => {

    console.log(mstr);
})
    .catch(error => {
    console.log(error);
});



