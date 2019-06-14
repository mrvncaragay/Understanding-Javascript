// Trade off between query performance vs. consistency

// Using References (Normalization) -> CONSISTENCY
// if we decided to change the name to 'Marv 2' all courses referencing that object is also altered and will immidiately see the changes
// if we Query course we need to also need additionlay query to load the related author.
let author = {
    name: 'Marv'
}

let course = {
    author: 'id',
    authors: [ 'id1', 'id2' ] //multiple authors
}

// Using Embedded Documents (Denormalization) -> PERFORMANCE but Inconsistensy
// if we query a course its author is inside the course document.
// if we have multiple authors they are possibility that other documents wont be updated.

let course = {
    author: {
        name: 'Marv'
    }
}


// Hybrid
let author = {
    name: 'Marv'

    //50 other properties
}

let course = {
    author: {
        id: 'ref',
        name: 'Mosh'
    }
    
    //crouse properties
}