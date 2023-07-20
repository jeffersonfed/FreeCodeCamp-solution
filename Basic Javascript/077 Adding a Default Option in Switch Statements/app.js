//switch statement you may not be able to specify all possible values as case

//Instead, default statement which will be executed if no matching case statement
//else statement in an if/else chain

//default statement should be the last case

// switch (num) {
//     case value1:
//       statement1;
//       break;
//     case value2:
//       statement2;
//       break;
//   ...
//     default:
//       defaultStatement;
//       break;
//   }

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 'a':
        answer = "apple";
        break;
  
      case 'b':
        answer = "bird";
        break;
  
      case 'c':
        answer = "cat";
        break;
  
      default:
        answer ="stuff";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);