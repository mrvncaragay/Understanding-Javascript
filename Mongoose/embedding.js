const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [ authorSchema ] //multiple authors
  // author: { //single author
  //     type: authorSchema,  
  //     required: true //setting the author required
  // }
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  //const course = await Course.findById(courseId);
  const course = await Course.update({ _id: courseId }, { //update directly to the DB
    // $set: {
    //   'author.name': 'John Smith'
    // }

    $unset: {             //remove author object
      'author': ''
    }
  });
  //course.author.name = 'Marv Marv'
  //course.save()
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);

  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);

  const author = course.authors.id(authorId)
  author.remove();
  course.save();
}

//createCourse('Node Course', new Author({ name: 'Mosh' }));

//updateAuthor('5cfd8bf0ae22df2c107ed5d5');



// createCourse('Node Course', [
//   new Author({ name: 'Borlog' }),
//   new Author({ name: 'Pogsit' })
// ]);

//addAuthor('5cfd8fac784a7e37d4ad2118', new Author({name: 'Marvelkous'}))

removeAuthor('5cfd8fac784a7e37d4ad2118', '5cfd9047f13bf23830a055d5')