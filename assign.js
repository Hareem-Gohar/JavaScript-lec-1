//For Prime number

var numberFromUser = prompt("Enter a number")
alert(`you have entered ${numberFromUser}`)

if (numberFromUser < 2) {
    console.log("It is not a prime number")
}
else if (numberFromUser == 2) {
    alert("It is a prime number")
}
else {
    for (var i = 2; i <= numberFromUser; i++) {
        if (numberFromUser % i != 0) {
            alert(`${numberFromUser} is a prime number`)
        }
        else {
            alert(`${numberFromUser} is not a prime number`)
        }
    }
} 
//For Grading

var grade0fstu = prompt("Enter your %age");
alert(`you have entered ${grade0fstu}`)
if (grade0fstu >= 90) {
    console.log(aler("Your Grade is A"))
}
else if(grade0fstu < 90 && grade0fstu >= 80) {
    console.log(alert("Your Grade is A-"))
}
else if(grade0fstu < 80 && grade0fstu >= 70) {
    console.log(alert("Your Grade is B"))
}
else if(grade0fstu < 70 && gradefstu >= 60) {
    console.log(alert("Your Grade is C"))
}
else if(grade0fstu < 60 && grade0fstu >= 50) {
    console.log(alert("Your Grade is D"))
}
else{
    console.log(alert("You have failed this exams"))
}
//For Even

var numberFromUser = prompt("Enter a number");
 console.log(alert(`You have entered ${numberFromUser}`))
if (numberFromUser % 2 == 0) {
    console.log(alert("This number is even"))
}
else {
    console.log(alert("This number is odd"))
}
