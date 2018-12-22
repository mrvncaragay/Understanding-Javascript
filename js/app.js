function b() {
    console.log("Running function b.");
    console.log(d);
    var d = "d is called!";
    console.log(d);

}

function a(){
    console.log("Running function a.");
    b();
    console.log("Function b is finished executing!")
}

var c;

a();