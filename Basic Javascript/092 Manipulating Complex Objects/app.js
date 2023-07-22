/* Sometimes you want to store data in flexible Data Structure
    Javascript object is one way to handle flexible data
            they allow for arbitrary combination of strings, numbers, booleans, arrays, functions and objects
    
    Example
    const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

This is an array which contains one object inside. 
The object has various pieces of metadata about an album. 
It also has a nested formats array. 
If you want to add more album records, you can do this by adding records to the top level array. 
Objects hold data in a property, which has a key-value format. 
In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

Note: You will need to place a comma after every object in the array, 
unless it is the last object in the array.
*/

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": ["CD","8T","LP"],
      "gold": true
    },
     {
      "artist": "Aimer",
      "title": "Brave Shine",
      "release_year": 2015,
      "formats": ["CD","MP3","mp4"],
      
    }
  
  
  
  ];