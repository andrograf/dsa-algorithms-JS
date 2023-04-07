export default function reverseString(str) {
    let words = str.split("");
    words.reverse();
    return words.join("");
  }
  