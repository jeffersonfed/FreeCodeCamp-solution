//break statement is omitted from a switch statement's case,

//case statement(s) are executed until a break is encountered.

//If you have multiple inputs with the same output
    //you can represent them in a switch statement like this:

// let result = "";
// switch (val) {
//   case 1:
//   case 2:
//   case 3:
//     result = "1, 2, or 3";
//     break;
//   case 4:
//     result = "4 alone";
// }
// Cases for 1, 2, and 3 will all produce the same result.

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);