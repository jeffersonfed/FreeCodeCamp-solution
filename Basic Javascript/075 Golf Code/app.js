//In golf game
     //each hole has a par
        //meaning, the avg num of strokes

    //Depending on how far above or below par your strokes are, 
        //there is a different nickname.
//function will be passed par and strokes arguments.
// Strokes	Return
// 1	        "Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	    "Birdie"
// par	        "Par"
// par + 1	    "Bogey"
// par + 2	    "Double Bogey"
// >= par + 3	"Go Home!"


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
      if(strokes == 1){
        return names[0];

      } else if(strokes <= par - 2){
        return names[1];

      } else if(strokes === par - 1){
        return names[2];

      } else if(strokes === par){
        return names[3];

      } else if(strokes === par + 1){
        return names[4];

      } else if(strokes === par + 2){
        return names[5];

      }else{
        return names[6];
      }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);