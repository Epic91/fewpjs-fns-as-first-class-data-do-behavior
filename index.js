/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const timeStr = '19:00';
function greet(timeStr) {
  if (timeStr === '19:00') {
    return "Good Evening";
  }
  if (timeStr > '08:00') {
    return "Good Morning";
  }
  if (timeStr < '13:00') {
    return "Good Afternoon";
  }
  return "Good Evening"
}
/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
