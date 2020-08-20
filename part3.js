function myName(){
    var name = "Ogunmola Akinwumi";
    return(name);
};

myName();

var favoriteFoods = ["pizza", "ice cream"];

function randomFoods(){
    return favoriteFoods[Math.floor(Math.random() *favoriteFoods.length)];
};

randomFoods();

var numbers = [1,2,3,4,5,6,7,8,9,10];

function displayOddNumbers(){
    for(var i=0; i< numbers.length; i+=2);
    console.log(numbers[i]);
};

displayOddNumbers();

function displayEvenNumbers(){
    for(var i=0; i< numbers.length; i++){
    if (numbers[i] % 2 === 0){
        console.log(numbers[i]);
    }   
        
    }
    
};

displayEvenNumbers();

function returnFirstOddNumber(){
    for(var i=0; i< numbers.length; i+=2);
    return(numbers[i]);
};

returnFirstOddNumber();

function returnFirstEvenNumber(){
    for(var i=0; i< numbers.length; i++){
    if (numbers[i] % 2 === 0){
        return(numbers[i]);
    }   
        
    }
    
};

returnFirstEvenNumber();

function returnFirstHalf(){
    for(var i=0; i< numbers.length/2; i++);
    console.log(numbers[i]);
};

returnFirstHalf();

function returnSecondHalf(){
    for(var i=numbers.length/2; i< numbers.length; i+=1);
    return(numbers[i]);
};

returnSecondHalf();




