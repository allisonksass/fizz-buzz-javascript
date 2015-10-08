$( document ).ready(function() {

for (i=1; i<=100; i++) {

//if number is divisible by 3, show Fizz
//if number is divisible by 3 and 5 show fizzbuzz

if ( i % 3 === 0) {

	if (i % 5 === 0) {

		$("#body").append('Fizz Buzz'); }

	else {

	$("#body").append('Fizz'); 

	}
}

//if number is divisible by 5, show Buzz
else if ( i % 5 === 0){

	$("#body").append('Buzz'); 
}
//display integers if not divisible by 3 or 5

else {

	$("#body").append(i); 
}

//adding breaks
$("#body").append("<br>");



}
});