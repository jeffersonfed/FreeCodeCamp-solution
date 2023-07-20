// Count Change	Cards
//　+1	→　2, 3, 4, 5, 6
//　0	→　7, 8, 9
//　-1	→　10, 'J', 'Q', 'K', 'A'


// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

let count = 0;

function cc(card) {
  // Only change code below this line
    switch (card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count ++;
        break;
      case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }

    if(count > 0){
      return count + " Bet";
    }
    else{
      return count + " Hold";
    }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');