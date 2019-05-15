// // Async/Await
// //


// //-resolve -if the function is succesful
// //-reject - if it faileds

// const getIDs = new Promise((resolve, reject) =>{

//     setTimeout(() =>{
//         resolve([12, 32, 123]); //succesfull
//         //reject([12, 32, 123]);  //failed

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

//             resolve(morestr + " this is a new str from another promises");

//         }, 2000, str)

//     });

// };

// async function getRecipesAW() {
//     const IDs = await getIDs;

//     console.log(IDs);

//     const recipe = await tellMeMore(IDs);

//     return recipe;
// }

// console.log("runner");
// getRecipesAW().then(result => console.log(result));
// console.log('breaker');



// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Reading a user from a database...');
//             resolve({ id: id, gitHubUsername: 'marv' });
//         }, 2000);
//     });
// }

// function getRepo(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Calling Github API...');
//             //resolve(['repo1', 'repo2', 'repo3']);
//             reject(new Error('Lost Connection!'));
//         }, 2000);
//     });
// }

// //Promise-based approach
// // getUser(1)
// //     .then(user => getRepo(user.gitHubUsername))
// //     .then(repos => console.log(repos))
// //     .catch(err => console.log(err))

// //Async-Awai approach
// async function displayRepo() {
//     try {
//         const user = await getUser(1);
//         const repo = await getRepo(user);
//         console.log(repo);
//     } catch (err) {
//         console.log(err);
//     }

// }

// displayRepo();

//Async Await Exsercice

// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });

async function getNotify() {
    try {
        const cust = await getCustomer(1);
        console.log('Customer: ', cust);
        if(cust.isGold) {
            const movies = await getTopMovies();
            console.log('Top movies: ', movies);
            await sendEmail(cust.email, movies);
            console.log('Email sent...');
    
        }
    } catch (err){
        console.log(err);
    }
}

getNotify();


  
//   function getCustomer(id, callback) {
//     setTimeout(() => {
//       callback({ 
//         id: 1, 
//         name: 'Mosh Hamedani', 
//         isGold: true, 
//         email: 'email' 
//       });
//     }, 4000);  
//   }

  function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);  
    });
  }
  
//   function getTopMovies(callback) {
//     setTimeout(() => {
//       callback(['movie1', 'movie2']);
//     }, 4000);
//   }
  
//   function sendEmail(email, movies, callback) {
//     setTimeout(() => {
//       callback();
//     }, 4000);
//   }

  function getTopMovies() {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });
  }
  
  function sendEmail(email, movies) {
      return new Promise((resolve, rejecr) => {
        setTimeout(() => {
            resolve();
          }, 4000);
      });
  }

