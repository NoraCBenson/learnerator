$(document).ready(function() {

	var quiz  = {
		"questions": [
	    	{
		        "question" : "The first hominids from the early Paleolithic Era, circa 2 million BCE, were found in which of the following geographic areas?",
		        "answers" : [
		        	"Great Rift Valley in East Africa",
		        	"Neanderthal (Neander Valley) in Northern Europe",
		        	"Indus River Valley in South Asia",
		        	"Mesopotamia in Southwest Asia"],
		        "correctAnswer" : "Great Rift Valley in East Africa",
		        "category" : "AP Exam",
		        "categoryNumber" : 1
	    	},
	    	{
		        "question" : "Which of the following argued that knowledge comes from observation, and what we know comes from experience?",
		        "answers" : [
		        	"Plato",
		        	"Socrates",
		        	"Rene Descartes",
		        	"John Locke",
		        	"Francis Galton"],
		        "correctAnswer" : "Plato",
		        "category" : "AP Exam",
		        "categoryNumber" : 1
	    	},
	    	{
		        "question" : "When performing a two-sided (two-tailed) hypothesis by hand, one must be sure to:",
		        "answers" : [
		        	"double the P-value.",
		        	"check conditions for both tails of the distribution.",
		        	"double the test statistic.",
		        	"double the alpha level.",
		        	"come up with two different null hypotheses."],
		        "correctAnswer" : "double the P-value.",
		        "category" : "AP Exam",
		        "categoryNumber" : 1
	    	},
	    	{
		        "question" : "The dominant ideological movement of the 18th century was:",
		        "answers" : [
		        	"the Enlightenment.",
		        	"the Scientific Revolution.",
		        	"republicanism.",
		        	"skepticism.",
		        	"economic liberalism."],
		        "correctAnswer" : "the Enlightenment.",
		        "category" : "AP Exam",
		        "categoryNumber" : 1
	    	},
	    	{
		        "question" : "Which of the following states has demonstrated the longest, most consistent commitment to constitutionalism generally?",
		        "answers" : [
		        	"China",
		        	"Iran",
		        	"Nigeria",
		        	"Russia",
		        	"The United Kingdom"],
		        "correctAnswer" : "China",
		        "category" : "AP Exam",
		        "categoryNumber" : 1
	    	}, 
	    	{
		        "question" : "The entrance fee to a carnival is $5. In order to go on rides, carnival goers must buy tickets at $1.50 each. Each ride costs 1 ticket. How many rides can be ridden for $20? (Calculator)",
		        "answers" : [
		        	"13",
		        	"10",
		        	"4",
		        	"17"],
		        "correctAnswer" : "13",
		        "category" : "College Entrance",
		        "categoryNumber" : 2
	    	},  
	    	{
		        "question" : "Which group of scientists played a significant role in the development of quantum theory?",
		        "answers" : [
		        	"Planck, Einstein, and Bohr",
		        	"Newton, Huygens, and Boyle",
		        	"Faraday, Maxwell, and Hertz",
		        	"Michelson, Morley, and Lorentz",
		        	"Volta, Galvani, and Ohm"],
		        "correctAnswer" : "Planck, Einstein, and Bohr",
		        "category" : "College Entrance",
		        "categoryNumber" : 2
	    	},
	    	{
		        "question" : "Which of the following is NOT true of enzymes?",
		        "answers" : [
			        "Enzymes lower the activation energy barrier of a reaction.",
			        "Enzymes are made up of proteins.",
			        "Enzymes are used up in reactions.",
			        "Enzymes can be affected by changes in temperature.","Enzymes contain an active site."],
		        "correctAnswer" : "Enzymes lower the activation energy barrier of a reaction.",
		        "category" : "College Entrance",
		        "categoryNumber" : 2
	    	},
	     	{
		        "question" : "Which of the following statements about Neanderthals is accurate?",
		        "answers" : [
		        	"They lived primarily in North America.",
		        	"They were herbivores.",
		        	"They were from the species Homo Sapiens.",
		        	"They migrated from Africa to Europe.",
		        	"They were of slender build."],
		        "correctAnswer" : "They lived primarily in North America.",
		        "category" : "College Entrance",
		        "categoryNumber" : 2
	    	},   	
	     	{
		        "question" : "2/3 + 3/2 = ?",
		        "answers" : [
		        	"1",
		        	"5/6",
		        	"11/6",
		        	"4/3",
		        	"13/6"],
		        "correctAnswer" : "1",
		        "category" : "College Entrance",
		        "categoryNumber" : 2
	    	}, 
	     	{
		        "question" : "A particular species of bacteria doubles its population every hour. A scientist starts with a colony of 100 such bacteria. He leaves the lab and comes back later to find 1,500 more bacteria than there were before. For how long did the scientist leave the lab?",
		        "answers" : [
		        	"3",
		        	"3.5",
		        	"4",
		        	"5",
		        	"6.5"],
		        "correctAnswer" : "3",
		        "category" : "Graduate Exams",
		        "categoryNumber" : 3
	    	}, 
	     	{
		        "question" : "If (1500 x 10k) equals a value less than 2 and k is an integer, what is the greatest possible value of k?",
		        "answers" : [
		        	"2",
		        	"3",
		        	"-2",
		        	"-3",
		        	"-4"],
		        "correctAnswer" : "2",
		        "category" : "Graduate Exams",
		        "categoryNumber" : 3
	    	}, 
	     	{
		        "question" : "LEWIS CARROLL : (_____) :: CERVANTES : DON QUIXOTE",
		        "answers" : [
		        	"Moby Dick",
		        	"Alice",
		        	"Hester Prynne",
		        	"Yossarian"],
		        "correctAnswer" : "Moby Dick",
		        "category" : "Graduate Exams",
		        "categoryNumber" : 3
	    	},
	     	{
		        "question" : "BLACK MONDAY : 1987 :: (_____) : 1929",
		        "answers" : [
		        	"Fat Tuesday",
		        	"Black Friday",
		        	"Black Tuesday",
		        	"Red Monday"],
		        "correctAnswer" : "Fat Tuesday",
		        "category" : "Graduate Exams",
		        "categoryNumber" : 3
	    	},
	     	{
		        "question" : "Evaluate (4-11) x3 - ( -5+3 (4+4) )",
		        "answers" : [
		        	"10",
		        	"2",
		        	"-2",
		        	"-19",
		        	"-40"],
		        "correctAnswer" : "10",
		        "category" : "Graduate Exams",
		        "categoryNumber" : 3
	    	},
	     	{
		        "question" : "The appropriate rate to ventilate a seven-year-old patient is:",
		        "answers" : [
		        	"one breath every 1 to 4 seconds.",
		        	"one breath every 2 to 4 seconds.",
		        	"one breath every 3 to 5 seconds.",
		        	"one breath every 4 to 6 seconds."],
		        "correctAnswer" : "one breath every 1 to 4 seconds.",
		        "category" : "Certifications",
		        "categoryNumber" : 4
	    	},
	     	{
		        "question" : "A 7-year-old bums her hand on a stove burner. This is an example of what type of heat transfer?",
		        "answers" : [
		        	"convection",
		        	"radiation",
		        	"conduction",
		        	"evaporation"],
		        "correctAnswer" : "convection",
		        "category" : "Certifications",
		        "categoryNumber" : 4
	    	},
	     	{
		        "question" : "Mass times acceleration:",
		        "answers" : [
		        	"gravity",
		        	"force",
		        	"inertia",
		        	"momentum"],
		        "correctAnswer" : "gravity",
		        "category" : "Certifications",
		        "categoryNumber" : 4
	    	},
	     	{
		        "question" : "How many times can Schedule III-V controlled substances be transferred between pharmacies?",
		        "answers" : [
		        	"10",
		        	"5",
		        	"3",
		        	"1"],
		        "correctAnswer" : "10",
		        "category" : "Certifications",
		        "categoryNumber" : 4
	    	},
	     	{
		        "question" : "The Y chromosome carries fewer traits than the X chromosome. A male will transmit these traits to:",
		        "answers" : [
		        	"100% of his female offspring.",
		        	"100% of his male offspring.",
		        	"50% of his female offspring.",
		        	"50% of his male offspring."],
		        "correctAnswer" : "100% of his female offspring.",
		        "category" : "Certifications",
		        "categoryNumber" : 4
	    	},
	     	{
		        "question" : "Montag identified something he saw in his travels as a path to safety. What was it?",
		        "answers" : [
		        	"cairns",
		        	"footprints in the snow",
		        	"trail markers","rail tracks",
		        	"a painted landmark"],
		        "correctAnswer" : "cairns",
		        "category" : "Literature",
		        "categoryNumber" : 5
	    	},
	     	{
		        "question" : "As a tragic hero, Hamlet has certain characteristics, or flaws, that bring about his downfall in the story. Which of the following is not a tragic flaw for Hamlet?",
		        "answers" : [
		        	"self-absorption",
		        	"pridefulness",
		        	"callousness",
		        	"impetuousness",
		        	"pensiveness"],
		        "correctAnswer" : "self-absorption",
		        "category" : "Literature",
		        "categoryNumber" : 5
	    	},
	     	{
		        "question" : "All of the following describes the use of clothing as a symbol in Macbeth EXCEPT:",
		        "answers" : [
		        	"Clothing is a symbol of conformity to social norms.",
		        	"Clothing is a symbol of superficial power.",
		        	"Clothing is a symbol of pride and vanity.",
		        	"Clothing is a symbol of power and prestige.",
		        	"Clothing is a symbol of deception and cunning."],
		        "correctAnswer" : "Clothing is a symbol of conformity to social norms.",
		        "category" : "Literature",
		        "categoryNumber" : 5
	    	},
	     	{
		        "question" : "Which is not one of the four major settings in The Great Gatsby?",
		        "answers" : [
		        	"East Egg",
		        	"West Egg",
		        	"The Valley of Ashes",
		        	"Oxford University","New York City"],
		        "correctAnswer" : "East Egg",
		        "category" : "Literature",
		        "categoryNumber" : 5
	    	},
	     	{
		        "question" : "Why, in Chapter 1, does Scout say there was, in Maycomb, \"nothing to buy and no money to buy it with\"?",
		        "answers" : [
		        	"The story is set during World War I.",
		        	"The story is set during World War II.",
		        	"The story is set during Reconstruction.",
		        	"The story is set during the Great Depression.",
		        	"The story is set during the Civil War."],
		        "correctAnswer" : "The story is set during World War I.",
		        "category" : "Literature",
		        "categoryNumber" : 5
	    	},
	    ]
	};

	var category = [];
	var selectedCategory;
	var selectedAnswer;
	var questionCounter;
	var questionNumber;
	var correctAnswers;
	var wrongAnswers;
	var skippedQuestions;

	// hide unnecessary screens on quiz load/restart
	$('#cardHeader,#questionScreen,#resultScreen,#scorecardScreen').hide();

	// get selected category & show questions
	$('#categories button').click(function() {
		selectedCategory = $(this).data('category');
		resetVariables();
		getCategoryQuestions();
		setCardHeaderBackground();
		showQuestion();
	});

	// show questions for random
	$('#random').click(function(){
		resetVariables();
		getRandomQuestions();
		setCardHeaderBackground();
		showQuestion();
	});	

	// skip to next question & update skip counter
	$('#skip').click(function() {
		skippedQuestions++;
		loopQuestions();
	});

	// submit answer
	$('#submit').click(function() {
		submitAnswer();
	});

	// goes to next question
	$('#next').click(function() {
		$('#results,#next').hide();
		$('#question,#answers').show();
		loopQuestions();
	});

	// resets quiz card 
	$('#close,#restart').click(function() {
		category = [];
		if ($(window).width() >= 751) {
			$('#quizCard').animate({
			    width: '65%',
			    left:'35%'
			  }, 500 );
		}
		$('#quizCard').addClass('cardBlueBkd cardInitial').removeClass('whiteBkgd cardShifted');
		if ($(window).width() < 751) {
			$('#quizCard').css('height','400px');
		}
		$('#startScreen').show();
		$('#cardHeader,#questionScreen,#resultScreen,#scorecardScreen').hide();
		$('.cat').show();
	});	

	// reset variables between each quiz
	function resetVariables() {
		questionCounter = 0;
		questionNumber = 1;
		correctAnswers = 0;
		wrongAnswers = 0;
		skippedQuestions = 0;	 	
	}

	// load questions for specific categories
	function getCategoryQuestions() {
		var length = quiz.questions.length;
		for (var i = 0; i < length; i++) {
			if (quiz.questions[i].categoryNumber === selectedCategory) {
				category.push(quiz.questions[i]);
			}
		}
	}

	// load questions for random quiz
	function getRandomQuestions() {
		var quizCopy = [];
		quizCopy = quiz.questions.slice(0);
		for ( var i = 0; i < 5; i++ ) {
			category.push(quizCopy.splice(Math.floor(Math.random()*quizCopy.length),1)[0]);
		}
	}

	// set quiz header background for each category
	function setCardHeaderBackground () {
		if (selectedCategory === 1) {
			$('#cardHeader').removeClass('purpleBkgd,orangeBkgd,greenBkgd,yellowBkgd,cardBlueBkd');
			$('#cardHeader').addClass('tealBkgd');
		}
		else if (selectedCategory === 2) {
			$('#cardHeader').removeClass('tealBkgd,orangeBkgd,greenBkgd,yellowBkgd,cardBlueBkd');
			$('#cardHeader').addClass('purpleBkgd');
		}
		else if (selectedCategory === 3) {
			$('#cardHeader').removeClass('tealBkgd,purpleBkgd,greenBkgd,yellowBkgd,cardBlueBkd');
			$('#cardHeader').addClass('orangeBkgd');
		}
		else if (selectedCategory === 4) {
			$('#cardHeader').removeClass('tealBkgd,orangeBkgd,purpleBkgd,yellowBkgd,cardBlueBkd');
			$('#cardHeader').addClass('greenBkgd');
		}
		else if (selectedCategory === 5) {
			$('#cardHeader').removeClass('tealBkgd,orangeBkgd,greenBkgd,purpleBkgd,cardBlueBkd');
			$('#cardHeader').addClass('yellowBkgd');
		}
		else {
			$('#cardHeader').removeClass('tealBkgd,orangeBkgd,greenBkgd,yellowBkgd,purpleBkgd');
			$('#cardHeader').addClass('cardBlueBkd');			
		}
	}

	// show quiz quesions
	function showQuestion() {
		$('#startScreen,resultScreen,#scorecardScreen,#error,#questionResult').hide();
		$('#question,#answers,.questionNumber').html('');
		if ($(window).width() < 751) {
			$('#quizCard').css('height','650px');
		}
		if ($(window).width() >= 751) {
			$('#quizCard').animate({
			    width: '100%',
			    left:'0'
			  }, 500 );
		}
		$('#quizCard').removeClass('cardBlueBkd cardInitial').addClass('whiteBkgd cardShifted');
		$('#cardHeader,#questionScreen').show();		
		$('.questionNumber').html(questionNumber);
		selectedAnswer = 'undefined';
		$('#question').html(category[questionCounter].question);
		for (var i = 0; i < category[questionCounter].answers.length; i++) {	
			$('#answers').append('<button class="answer" name="answer" value="' + category[questionCounter].answers[i] + '">' + category[questionCounter].answers[i] + '</button>');
		}
		$('#answers button').click(function() {
		    selectedAnswer = $(this).val();
		});
	}	

	// check user answer and update correct/incorrect counter
	function submitAnswer() {
		if (selectedAnswer === 'undefined') {
			$('#error').show().html('Please select an answer above.');
		}
		else if (selectedAnswer === category[questionCounter].correctAnswer) {
			$('#questionScreen').hide();
			$('#resultScreen,#questionResult').show();
			$('#questionResult').html('You are correct!');
			correctAnswers++;
			next();
		}
		else {
			$('#questionScreen').hide();
			$('#resultScreen,#questionResult').show();
			$('#questionResult').html('Sorry, that is incorrect!');
			wrongAnswers++;
			next();
		}
	}

	// button shows "next" or "see results" based on quiz progress
	function next() {
		if (questionCounter < 4) {
			$('#next').show().html('next question');
		}
		else {
			$('#next').show().html('see results');
		}
	}

	// loop through questions for each quiz & update question counters
	function loopQuestions() {
		$('#answers').html('');
		$('#error').hide();
		questionCounter++;
		questionNumber++;
		if (questionCounter < 5) {
			showQuestion();
		}
		else {
			showResults();
		}
	}

	// show final quiz results
	function showResults() {
		var totalQuestions = 5;
		$('#questionScreen,#resultScreen').hide();
		$('#scorecardScreen').show();
		$('.correctAnswers,.correctFraction,.wrongAnswers,.wrongFraction,.skippedQuestions,.skippedFraction,.scoreBackground').html(' ');

		// correct answer display
		for (var i = 1; i <= correctAnswers; i++) {
			$('.correctAnswers').append('<img src="img/correct-filled.png">');
		}
		for (var j = 1; j <= totalQuestions - correctAnswers; j++) {
			$('.correctAnswers').append('<img src="img/correct-empty.png">');
		}
		$('.correctFraction').append(correctAnswers);
		
		// wrong answer display
		for (var k = 1; k <= wrongAnswers; k++) {
			$('.wrongAnswers').append('<img src="img/wrong-filled.png">');
		}
		for (var l = 1; l <= totalQuestions - wrongAnswers; l++) {
			$('.wrongAnswers').append('<img src="img/wrong-empty.png">');
		}
		$('.wrongFraction').append(wrongAnswers);
		
		// skipped quesion display
		for (var m = 1; m <= skippedQuestions; m++) {
			$('.skippedQuestions').append('<img src="img/skipped-filled.png">');
		}
		for (var n = 1; n <= totalQuestions - skippedQuestions; n++) {
			$('.skippedQuestions').append('<img src="img/skipped-empty.png">');
		}
		$('.skippedFraction').append(skippedQuestions);
		
		// total score display
		$('.scoreBackground').html(correctAnswers/5*100 + '%');
	}
});	

