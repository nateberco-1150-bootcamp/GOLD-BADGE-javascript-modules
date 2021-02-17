for(var i = 0; i <=200; i +=25){
    console.log(i)
}

for(var i = 100; i>=10; i -=5){
    console.log(i)
}

function greet(name){
    return "Hello " + name
};

var myName = "Jack";

result = greet(myName);

console.group(result);

function sayNumber(num){
    console.log(num)
};

for(let i = 0; i < 25; i++){
    sayNumber(i);
}