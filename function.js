// function declaration
function areaOne(a, h) {
	console.log(arguments.length);
    return 1/2*a*h;
}
var a = prompt("Введіть довжину основи:", '');
var h =prompt("Bведіть висоту:", '');
a = a || 5;
h = h || 7;
alert("Площа трикутника: " + areaOne(a,h))


// function expression
var areaTwo = function (a, h) {
    return 1/2*a*h;
}
var a = prompt("Введіть довжину основи:", '');
var h =prompt("Bведіть висоту:", '');
a = a || 6;
h = h || 3;
alert("Площа трикутника: " + areaTwo(a, h))