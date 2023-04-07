export default function findLongestWordLength(str) {
    let longestLength =0;
    let words = str.split(" ");
    words.map((x)=>{if(longestLength< x.length){longestLength = x.length}});
    return longestLength;
  }
  
  