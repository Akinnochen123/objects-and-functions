function printDay(day){
    if(day==1){
        return "Sunday";
    }
     else if(day==2){
        return "Monday";
    }
    else if(day==3){
        return "Tuesday";
    }
    else if(day==4){
        return "Wednesday";
    }
    else if(day==5){
        return "Thursday";
    }
    else if(day==6){
        return "Friday";
    }
    else if(day==7){
        return "Saturday";
    }
    else{
        return undefined;
    }
};

printDay(4);
printDay(7);
printDay(41);

function lastElement(arr){
    return arr.slice(-1)[0];
};

lastElement([1,2,3,4]);

function numberCompare(a, b){
    if(a>b){
        return "First is greater";
    } else if(a<b){
        return "Second is greater";
    } else{
        return "Numbers are equal";
    }
};

numberCompare(1,1);
numberCompare(2,1);
numberCompare(1,2);

function singleLetterCount(word, letter){
    var count = 0;
    for(var i=0; i< word.length; i++){
        if(word.charAt(i) === letter){
            count++;
        }
    }
    return count;
};

singleLetterCount("amazing", "a");
singleLetterCount("rithm school", "o");

function multipleLetterCount(string){
    var object = {};
    for(var i=0; i< string.length; i++){
        object[string[i]] = ((object[string[i]]) ? object[string[i]] : 0) + 1;
    }
    return object;
};

multipleLetterCount("hello");
multipleLetterCount("hello");

function arrayManipulation(arr, command, location, value){
    if(command === "add" && location === "beginning"){
        arr.unshift(value);
        return arr;
    }
    else if(command === "add" && location === "end"){
        arr.push(value);
        return arr;
    }
    else if(command === "remove" && location === "beginning"){
        return arr.shift();  
    }
    if(command === "remove" && location === "end"){
        return arr.pop();
    }
    return false;
};

arrayManipulation([1,2,3], "remove", "end");

function isPalindrome(string){
    return string == string.split('').reverse().join('');
};

isPalindrome('testing');
isPalindrome('tacocat');


