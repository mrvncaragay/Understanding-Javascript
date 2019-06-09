const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true } )
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Cant connect to mongoDb', err)); 

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {

    try {

        const course = new Course({

            name: 'Sadam Course',
            author: 'Powel',
            tags: ['Node', 'frontend'],
            isPublished: true
        });
        
        const result = await course.save();
        
        console.log(result);
        
    } catch (error) {
        console.error('error runing function creatCourse', error);
    }

}

async function getCourse() {
    // Filers
    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte 
    // lt 
    // lte 
    // in
    // nin ( not in)

    //Logical
    // Or
    // And


    // Regular Expression

    const courses = await Course
        //.find({ author: 'Marv', isPublished: true })
        //.find({ price: { $gt: 10, $lt: 20 } } )
        //.find({ price: { $in: [ 10, 20, 30 ] } })
        // .find()
        // .or([ { author: 'Mosh' }, { iPublished: true } ])
        // .and([ { author: 'Mosh' }, { iPublished: true } ])
        .find({ author: /^Mosh/ }) //starts with 'Mosh'
        .find({ author: /Hmaedani$/i }) //end with 'Hmaedani'
        .find({ author: /.*Mosh.*/i }) //retreive Mosh before or after
        .limit(10)
        .sort({ name: 1 }) //1 ascending, -1 decending
        .select({ author: 1, tags: 1 })

        //Counting
        .count()

        //Pagination
        .skip((pageNumber - 1) * pageSize)  //for pagination
        .limit(pageSize)

    console.log(courses)
}

//createCourse();
getCourse();