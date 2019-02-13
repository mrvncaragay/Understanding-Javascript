// Default Parameters


function FullName(fname = 'John', lname = 'pogsit') {
    this.fname = fname;
    this.lname = lname;
};

let john = new FullName();

console.log(john.fname, john.lname);