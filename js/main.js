var myNum = 10; 
var myStr = 'рядок'; 
var myBool = true; // 
var myArr = [1, 2, 3, 4, 5]; 
var myObj = {
  first: 'First Name',
  last: 'Last Name'
}; 

console.log('myNum: ', myNum);
console.log('myStr:', myStr);
console.log('myBool:', myBool);
console.log('myArr:', myArr);
console.log('myObj:', myObj);

var decimal2 = myNum.toFixed(2);

var i = 0;

console.log('Префіксний інкремент:', ++i);
console.log('Постфіксний інкремент:', i++);
console.log('Значення i:', i);
console.log('Префіксний декремент:', --i);
console.log('Постфіксний декремент:', i--);
console.log('Значення i:', i);

var myTest = 20;

myTest += myNum;
console.log('+=', myTest);

myTest -= 10;
console.log('-=', myTest);

myTest *= 2;
console.log('*=', myTest);

myTest /= myNum;
console.log('/=', myTest);

myTest %= 3;
console.log('%=', myTest);


var myPi = Math.PI; 
console.log('myPi:', myPi);

var myRound = Math.round(89.279); 
console.log('myRound:', myRound);

var myRandom = Math.random() * 10; 
console.log('myRandom:', myRandom);

var myPow = Math.pow(3, 5); 
console.log('myPow:', myPow);

var strObj = {str: 'Мама мила раму, рама мила маму'};

strObj.length = strObj.str.length;
console.log('strObj = ', strObj);


var isRamaPos = strObj.str.indexOf('рама');

console.log('isRamaPos:', isRamaPos);


var strReplace = strObj.str.replace('мила', 'миє');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мила', 'тримає');
console.log('strReplace:', strReplace);


console.log(myStr.toUpperCase());
console.log('Будь який рядок'.toLowerCase());