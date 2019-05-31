// //Promises
// //
// // -Object that keeps track about whether a certain event has happened already or not.
// // -if yes, it determines what happens after the event has happened
// // -implements that concept of a future value that were expecting

// //states
// // -Pending -before that event has happend
// // -Settled/Resolved -after the event has happened
// // -fulfilled -successful run
// // -Rejected -if error occurs

// //has  two parameters
// //-resolve -if the function is succesful
// //-reject - if it faileds

// //Promise.all([promise1, promise2,....]) -runs all promises and return an array of resolve values
// //Promise.race([promise1, promise2,....]) -runs all promise and return an first resolve fullfilled promise

// const getIDs = new Promise((resolve, reject) =>{

//     setTimeout(() =>{
//             resolve([12, 32, 123]); //succesfull
//             //reject([12, 32, 123]);  //failed

//     }, 1500);

// });

// const getRecipe = recID => {

//     return new Promise((resolve, reject) =>{

//         setTimeout(ID => {

//             resolve('here is the recipe! ' + ID);

//         }, 2000, recID);

//     });
// };

// const tellMeMore = str => {

//     return new Promise((resolve, reject) => {

//         setTimeout(morestr => {

//             resolve(morestr + "this is a new str from another promises");

//         }, 2000, str)

//     });

// };



// //then -get the result
// //.catch if promise failed
// getIDs.then((IDs) =>{
//     console.log(IDs);
//     return getRecipe(IDs[1]);

// }).then(recipe => {
//     console.log(recipe);
//     return tellMeMore(recipe);

// }).then(mstr => {

//     console.log(mstr);
// })
//     .catch(error => {
//     console.log(error);
// });

// let flag = 0; // true

// const p = new Promise((resolve, reject) => {
//     if(flag) {
//         setTimeout(() => {
//             resolve('Connected to the database!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Not connected to the database!');
//         }, 2000);
//     }
// })

// const l = p.then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })


///////////////////////////////////
//  returning a promise to a function
///////////////////////////////////
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'marv' });
            //reject(new Error('Cannot find user'));
        }, 2000);
    });
}

function getRepo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API...');
            //resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Lost Connection!'));
        }, 2000);
    });
}

// getUser(1)
//     .then(user => {
//         getRepo(user.gitHubUsername)
//             .then(repos => {
//                 console.log(repos);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))

getUser(1)
    .then(user => getRepo(user.gitHubUsername))
    .then(repos => console.log(repos))
    .catch(err => console.log(err));