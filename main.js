var quotes = [
	'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.',
	'Put your heart, mind, and soul into even your smallest acts. This is the secret of success.',
	'Happiness is not something you postpone for the future; it is something you design for the present.',
	'It is never too late to be what you might have been',
	'Be the change that you wish to see in the world',
	'Spread love everywhere you go',
	'The more you buy, the more you save',
	'Charity begins at home'
]


function randomQuote() {
	var randomNumber = Math.floor(Math.random()*quotes.length);
	document.getElementById('quote').innerHTML = quotes[randomNumber];
}

function kgToLbs() {
	x = document.getElementById("kilogram").value;
	document.getElementById("pound").value = x*2.2046;
}

function lbToKgs() {
	y = document.getElementById("pound").value;
	document.getElementById("kilogram").value = y/2.2046;
}

function calculate() {
  var values = document.getElementById('box1').value.split(/,/g);
  var sum = values.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
  document.querySelector('#max').innerHTML = values.max();
  document.querySelector('#min').innerHTML = values.min();
  document.querySelector('#sum').innerHTML = sum;
  document.querySelector('#avg').innerHTML = sum / values.length;
  document.querySelector('#reverse').innerHTML = values.reverse().join(',');
}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

function clear() {
	document.getElementById('text').value = ' ';
}

function capitalize() {
	document.getElementById('text').style.textTransform = "uppercase";
}

function sortout() {
	var textarea = document.getElementById("text");
	textarea.value = textarea.value.split("\n").sort().join("\n");
	document.querySelector('text').value = textarea.value;
}

function rev() {
	var reverse = document.getElementById("text");
	reverse.value = reverse.value.split("\n").reverse().join("\n");
	document.querySelector('text').value = reverse.value;
}

function blankRmv() {
    var output = document.getElementById("text").value;
    output = output.replace(/\s/g, "") 
    document.getElementById("text").value = output;
}

onload = function() {
	randomQuote();
}

function addNo() {
	var str = document.getElementById('text').value;
	var arr = str.split("\n");
	for(var i=0;i<arr.length;i++){
		arr[i]=Math.random()+arr[i];
	}
	var stuff = arr.join("\n");
	document.getElementById("text").value = stuff;
}

function shuff() {
	var str = document.getElementById('text').value;
	var arr = str.split("\n");
	for(var i=arr.length-1;i>=0;i--) {
		var randomIndex = Math.floor(Math.random()*(i+1));
		var itemAtIndex = arr[randomIndex];
		arr[randomIndex] = arr[i];
		arr[i] = itemAtIndex;
	}
	var stuff = arr.join("\n");
	document.getElementById("text").value = stuff;
}

function color1(x) {
	var text = document.getElementById('quote');
	text.style.color = x.value;
	text.style.background = "#830fff";
	
}

function color2(x) {
	var text = document.getElementById('quote');
	text.style.color = x.value;
	text.style.background = "#4eff3a";
	
}
function color3(x) {
	var text = document.getElementById('quote');
	text.style.color = x.value;
	text.style.background = "yellow";
	
}
function color4(x) {
	var text = document.getElementById('quote');
	text.style.color = x.value;
	text.style.background = "#3defff";
	
}