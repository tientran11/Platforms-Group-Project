//alert("hello World!")
var hello = "hello world!"
console.log("This is good for debugging " +hello);
console.log(document);

function print3Ways(){
    alert("hello");
    console.log("printing to developer tools");
    document.write("this will overwrite the current html page");
}

var a = [1,2,3,4,5];
function funWithArrays() {
    sumArray();
    console.log(sumArray());
    document.write(sumArray());
    document.write(findMax());
}

function sumArray(){
    let s = 0;
    for (let i=0; i<a.length; i++){
        s+= a[i];
    }
    return s;
}

function findMax(){

}