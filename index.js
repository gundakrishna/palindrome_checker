const inputText = document.getElementById("inputText");

function reverseString(str) {
  return str.split("").reverse().join("");
}
function check() {
  const value = inputText.value;
  const reverse = reverseString(value);

  if (value == "") {
    alert("Enter the text")
  } else if (value == reverse) {
    alert("Palindrome");
  } else {
    alert("Not Palindrome");
  }
  inputText.value = "";
}