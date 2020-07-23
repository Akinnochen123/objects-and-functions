var object = {
    firstName: "Akinwumi",
    lastName: "Ogunmola",
    occupation: "Developer"
};

object.firstName;
object.lastName;
object.occupation;
object["firstName"];
object["lastName"];
object["occupation"];

object.hobby = "playing football";

delete object.occupation;

The dot notation is used when we know the name of the key and it is not a variable or expression while we use the bracket notation when we need to evaluate some expression or pass in a variable to get the name of the key.

var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
};

for(var key in namesAndHobbies){
    console.log(namesAndHobbies[key] + " => " + key);
};

namesAndHobbies.akinwumi = "playing football";

if("akinwumi" in namesAndHobbies){
    console.log("akinwumi: playing football");
};