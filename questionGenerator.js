
// -----Generta an array of all question objects
function generateQuestions(numberOfQuestions) {

	var arrayAllQuestions = [];
	var correctAnswers = [4,2,4,1,1,1,3,3,2,2];

	for (var index = 1 ; index <= numberOfQuestions; index++){

		var questionsI = ['1','1','1','1'];
		var questionImageI = './Images/question'+index+'.jpg';
		var answersI = ['1','1','1','1'];
		var answersImagesI = ['./Images/q'+index+'a1.jpg','./Images/q'+index+'a2.jpg','./Images/q'+index+'a3.jpg', './Images/q'+index+'a4.jpg']
		var correctAnswerI = correctAnswers[index-1];
		var correctAnswersImageI = './Images/solution'+index+'.jpg';
		var userResponseI = -1 //Temp input

		var question = {	question: questionsI, 
							questionImage: questionImageI, 
							answers: answersI, 
							answerImage: answersImagesI, 
							correctAnswer: correctAnswerI,
							correctAnswersImage : correctAnswersImageI,
							response: userResponseI
						};

		// add the new qustion object to array
		arrayAllQuestions.push(question);

	}
	return arrayAllQuestions;
}

// -----Update content of the question
function upDateQuestion(questionNumber, questionArray) {

	var amountOfAnswers = 4;
	var questionIndex = questionNumber;

	var pointerToQuestionIMG = document.getElementById("question-image");
	var pointerToSolutionIMG = document.getElementById("solution-image");
	var arrayOfAllAnswersIMG = document.getElementsByClassName("answer-image");

	// update questionImage
	// pointerToQuestionIMG.className += 'foo';
	// setTimeout(function () {
		pointerToQuestionIMG.src = questionArray[questionIndex].questionImage;	
		// pointerToQuestionIMG.className = '';
	// }, 500);

	// update solution Image
	pointerToSolutionIMG.src = questionArray[questionIndex].correctAnswersImage;

	// update answer Image
	for(var i = 0; i < amountOfAnswers; i++){
		arrayOfAllAnswersIMG[i].src = questionArray[questionIndex].answerImage[i];
	}
}

//Check answer and show correct one
function checkAnswer (answerN){

	//Save user selection into array
	arrayAllQuestions[currentQuestion].response = answerN;
	
	//extract the correct answer for the question
	var correctAnswer = arrayAllQuestions[currentQuestion].correctAnswer;
	
	//if answer is correct show correct, if wrong show wrong
	if(answerN == correctAnswer){
		document.getElementById('vmark-image').src = "./images/correct.png";
	}
	else {
		document.getElementById('vmark-image').src = "./images/wrong.png";
	}

	//show the correct answer
	var solution = document.getElementById("bottom-section-solution");
	solution.style.visibility = "visible";
	solution.style.opacity = "1";

}

//Hide the solution and next button
function hideSolution(){
	var solution = document.getElementById("bottom-section-solution");
	solution.style.visibility = "hidden";
	solution.style.opacity = "0";
}

//Hide the solution and next button
function hideAll(){
	var question = document.getElementById("question-container");
	var bottom = document.getElementById("bottom-stripe");
	question.style.opacity = "0";
	bottom.style.opacity = "0";
}

//UnHide the solution and next button
function unHideAll(){
	var question = document.getElementById("question-container");
	var bottom = document.getElementById("bottom-stripe");
	question.style.opacity = "1";
	bottom.style.opacity = "1";
}

//Show intro section 
function showInto(){
	document.getElementById("intro-section").style.opacity = "1";
}

//Hide intro section 
function hideInto(){
	document.getElementById("intro-section").style.opacity = "0";
}

//Show question screen 
function showQuestionScreen(){
	document.getElementById("question-screen").style.opacity = "1";
}

//Hide question screen
function hideQuestionScreen(){
	document.getElementById("question-screen").style.opacity = "0";
}

//show result screen
function showResultScreen(){
	document.getElementById("result-screen").style.opacity = "1";
}

//When next question is pressed
function nextQuestion(){

	//changes CSS for elements that have to be hidden
	hideAll();

	//changes CSS for elements that have to be hidden
	setTimeout(hideSolution,1000);
	
	setTimeout(function(){
		//Generate the next question if questions left
		if((currentQuestion) < arrayAllQuestions.length-1){
			currentQuestion++;
			upDateQuestion(currentQuestion, arrayAllQuestions);
			setTimeout(unHideAll, 500);
		}

		//If no questions left caluclate score and present
		else {
			hideQuestionScreen();
			setTimeout(generateResultPage,1200); 
			
			setTimeout(function(){
				//updates score in DOM
				updateScore(arrayAllQuestions)

				//Changes opcaity to show content
				showResultScreen();
			},3000);
		}
	}, 1000);

	
}

//Calculates the score of user
function checkScore(arrayAllQuestions) {

	var score = 0;
	var amountOfQuestions = arrayAllQuestions.length;

	for (var i = 0; i < arrayAllQuestions.length; i++){

		var correctAnsw = arrayAllQuestions[i].correctAnswer;
		var userAnswer = arrayAllQuestions[i].response;

		if (correctAnsw == userAnswer) {
			score++;
		}
	}

	score = Math.floor((score / amountOfQuestions)*100);
	score = score + "%";

	return score;
}

//update the score in html
function updateScore (arrayAllQuestions) {
	var userScore = checkScore(arrayAllQuestions);
	document.getElementById("scoreOfUser").innerHTML = userScore;
}

//===============MAIN SECTION===============

// GLOBAL VARIABLES
var arrayAllQuestions = [];
var currentQuestion = 0;
var tomer = "test";

//GenerateIntro
generateIntro ()

//show intro
setTimeout(showInto,1000);

function startQuiz(){
	//Hide intro
	hideInto();

	setTimeout(function(){
		
		generateTemplateQuestions ();

		//Generate questions array
		arrayAllQuestions = generateQuestions(10);

		//Track Current QuestionNumber
		currentQuestion = 0;  //Index of (one less than actual question number)

		//Fill in first question
		upDateQuestion(currentQuestion,arrayAllQuestions);

		//Show Screen
		setTimeout(showQuestionScreen,1000);
	},1000);
}


