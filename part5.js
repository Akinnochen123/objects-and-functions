function displayFullName(firstName, lastName){
    return firstName + " " + lastName;
};

displayFullName("Akinwumi", "Ogunmola");

function createCalculator(a, b){
    return{
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    }
};

var calc = createCalculator();
calc.add(20,20);
calc.subtract(2,2);
calc.multiply(2,2);
calc.divide(12,2);
