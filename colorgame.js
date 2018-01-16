var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();


//Reset Button
resetButton.addEventListener("click", reset);



//******************FUNCTIONS****************************//
//Init Function
function init(){
	//Difficulty Buttons
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
	//Main Logic of Game
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				//Add Correct Message to header bar
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "PLAY AGAIN?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				//Change square color to background color
				this.style.backgroundColor = "#232323";
				//Add Try Again message to header bar
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
}



//Reset Button
function reset(){
		//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array and display RGB value in h1
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	
	//reset background of h1
	h1.style.backgroundColor = "steelblue";
	//Clear message from center of bar
	messageDisplay.textContent = "";
	//Change text of button back to NEW COLORS
	resetButton.textContent = "NEW COLORS"
}


//Change All colors to correct color once selected
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//Pick Random Color from colors array
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Generate array of random colors
function generateRandomColors(num){
	//make an array
	var arr = [];

	//add num random colors to array
	for (var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}

	//return array
	return arr;
}

//generate a single random color
function randomColor(){
	// pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}