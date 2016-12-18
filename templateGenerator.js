// javascript content

function generateIntro (){

	document.getElementById("input-area").innerHTML = '<!--============INTRO SECTION ============================================================= -->'
	+ '<div id="intro-section">'
	+ '<!-- ------------ TITLE SECTION ------------ -->'
	+ '<div class="stripe title"><div id="title"><p>Quiz - Do You Know Your Whiskey?</p></div></div>'
	+ '<!-- ------------ INTRO SECTION ------------ -->'
	+ '<div class="stripe intro-stripe"><div id="intro-container"><img id="intro-image" src="./images/intro2.jpg" /><img id="glass-image" src="./images/glass.jpg" />'
	+ '<img id="start-image" src="./images/nextbutton.png" onclick="startQuiz();" /></div></div></div>'
}

function generateTemplateQuestions (){
	
	document.getElementById("input-area").innerHTML = '<!--/*  ============QUESTION SECTION ======================================================= */-->'
	+ '<div id="question-screen">'
	+ '<!-- ------------ TITLE SECTION ------------ -->'
	+ '<div class="stripe title"><div id="title"><p>Quiz - Do You Know Your Whiskey?</p></div></div>'
	+ '<!-- ------------ QUESTION SECTION ------------ -->'
	+ '<div class="stripe question"><div id="question-container"><img id="question-image" src="" /></div></div>'
	+ '<!-- ------------ BOTTOM SECTION ------------ -->'
	+ '<div class="stripe bottom-stripe" id="bottom-stripe">'
	+ '<!-- ------------ ANSWWER SECTION ------------ -->'
	+ '<div class="stripe answers-stripe"><div class="row"><div class="col-xs-6 answer-column answer-left"><div class="answer-image-container"><img class="answer-image" src="" onclick="checkAnswer(1);" /></div></div>'
	+ '<div class="col-xs-6 answer-column answer-right"><div class="answer-image-container"><img class="answer-image" src="" onclick="checkAnswer(2);" /></div></div></div>'
	+ '<div class="row"><div class="col-xs-6 answer-column answer-left"><div class="answer-image-container"><img class="answer-image" src="" onclick="checkAnswer(3);" /></div></div>'
	+ '<div class="col-xs-6 answer-column answer-right"><div class="answer-image-container"><img class="answer-image" src="" onclick="checkAnswer(4);" /></div></div></div></div>'
	+ '<!-- ------------ SOLUTION SECTION ------------ -->'
	+ '<div id="bottom-section-solution"><div class="row solution" id="solution-container"><div id="solution-image-container"><img id="solution-image" src="" /></div></div>'
	+ '<div class="row next-question" id="next-question-container"><div id="next-question-image-container"><img id="next-image" src="./Images/nextbutton.png" onclick="nextQuestion();" /></div></div>'
	+ '<div class="row vmark" id="vmark-image-container"><img id="vmark-image" src="" /></div></div></div></div>'

}

function generateResultPage () {

	document.getElementById("input-area").innerHTML = '<!--/*  ================================================================================= */-->'
	+ '<div id="result-screen">'
	+ '<!-- ------------ TITLE SECTION ------------ -->'
	+ '<div class="stripe title"><div id="title"><p>Quiz - Do You Know Your Whiskey?</p></div></div>'
	+ '<!-- ------------ RESULT SECTION ------------ -->'
	+ '<div class="stripe result-stripe"><div class="row result"><div class="result-image-container"><img id="result-image" src="./images/resultbg.jpg" />'
	+ '</div></div><div class="row score"><p id="scoreOfUser">100%</p></div></div></div>'
}

