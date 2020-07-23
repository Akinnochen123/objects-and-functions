(function add(a, b){
    return a + b;
})(2, 2);

(function subtract(a, b){
    return a - b;
})(2, 2);

(function multiply(a, b){
    return a * b;
})(2, 2);

(function divide(a, b){
    return a / b;
})(2, 2);

function sayHello(name){
    if(name == "Akinwumi"){
        return "Hello Boss";
    } else {
        return "Hello " + name;
    }
};

sayHello("Akinwumi");
sayHello("Tim");

function average(arr){
    var total = 0;
    for(var i=0; i<arr.length; i++){
        total+= arr[i];}
        var average = total/arr.length;
        console.log(average);
    
};

average([1,2,3,4,5,6]);
average([10,20]);

function createStudent(firstName, lastName){
    return{
        firstName: firstName,
        lastName: lastName
    }
};

createStudent("Elie", "Schoppick");
createStudent("Tim", "Garcia");

var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppick");
var students = [tim, matt, elie];

function findStudentByFirstName(name){
    var alphaCase = `${name[0].toUpperCase()}`;
    for (var i=1; i< name.length; i+=1){
        alphaCase += name[i].toLowerCase();
    }
    for(var j=0; j< students.length; j++){
        if(students[j].firstName == alphaCase){
            return true;
        }
    }
          return false;
};

findStudentByFirstName("matt");
findStudentByFirstName("janey");

function extractEveryThirdArray(arr){
    for(var i=2; 1< arr.length; i+=3){
        return arr[i];
    }
};

extractEveryThirdArray([1,2,3]);
extractEveryThirdArray(["a", "b", "c", "d"]);

function countEvensandOdds(arr){
    var count = {oddCount: 0, evenCount: 0}
    for(var i=0; i< arr.length; i++){
        if(arr[i] % 2 !=0){
          count.oddCount++;
        } else {
            count.evenCount++;
        }
    }
    return count;
};

countEvensandOdds([1,2,3,4]);

var myVar = "Hello from global";
function scopePractice() {
var myVar = "Hello from function scope";
}
scopePractice();
console.log(myVar);
it consolelogs Hello from global

var tricky = "Hello from global";
function trickyScopePractice() {
tricky = "Hello from function scope";
}
console.log(tricky);
it consolelogs  Hello from global

