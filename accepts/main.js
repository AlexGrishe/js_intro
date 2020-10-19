var myNum = 10;

var myStr = 'строка';

var myBool = true;

var myArr = [1, 2, 3, 4, 5];

var myObj = {first: 'First Name', last: 'Last Name'};

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

var decimal2 = (myNum.toFixed(2));

console.log(decimal2);

var i = 10;

i++;
i--;
--i;
i--;
++i;
i++;
i--;
--i;
console.log(i)

var myTest = 20;

myTest += myNum;
console.log(myTest);
myTest -= myNum;
console.log(myTest);
myTest *=20;
console.log(myTest);
myTest /=0.5;
console.log(myTest);
myTest %=6;
console.log(myTest);

var myPi = Math.PI;
console.log(myPi);
var myRound = Math.round(89);
console.log(myRound);
var myRandom = Math.random() * 10 +1;
console.log(myRandom);
var myPow = Math.pow(3,5)
console.log(myPow)

var strObj;
strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: 30,
};
console.log(strObj.str.length);
console.log(strObj);

var isRamaPos = (strObj.str.indexOf('рама'));
console.log(isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');

console.log(strReplace);

console.log(myStr.toUpperCase());
console.log(myObj.first.toUpperCase());
console.log(myObj.last.toLowerCase());
