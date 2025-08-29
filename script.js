function copyNumber(num) {
  navigator.clipboard.writeText(num);
  alert("Copied: " + num);
  
}

function callNumber(name, num) {
  alert("Calling " + name + " (" + num + ")");
  const history = document.getElementById("history");
  const li = document.createElement("li");
  const time = new Date().toLocaleTimeString();
  li.innerHTML = `<b>${name}</b> <br> <b>${num}</b> (${time})`;
  history.prepend(li);
}

function clearHistory() {
  document.getElementById("history").innerHTML = "";
  
}
let likeCount = 0
let coinCount = 100
let copyCount = 0

function handleAction(type) {
if (type === 'like') {
likeCount++;
document.getElementById('likeCount').innerText = likeCount;
} else if (type === 'call') {
if (coinBalance >= 20) {
coinBalance -= 20;
document.getElementById('coinCount').innerText = coinBalance;
} else {
alert('Not enough coins!');
}
} else if (type === 'copy') {
copyCount++;
document.getElementById('copyCount').innerText = copyCount;
}
}

    