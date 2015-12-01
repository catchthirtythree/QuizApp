(function() {
	
	'use strict';
	
	var app = angular.module('app', []);
	
	app.controller("QuizController", function($scope) {
		
		this.questions = [
			{
				q: "How high is Mount Tremblant?",
				choices: [
					"675 metres",
					"775 metres",
					"875 metres",
					"975 metres"
				],
				correct: "875 metres"
			},
			{
				q: "When was the first organized indoor Hockey game played?",
				choices: [
					"April 8, 1889",
					"December 17, 1867",
					"February 26, 1873",
					"March 3, 1875"
				],
				correct: "March 3, 1875"
			},
			{
				q: "How many tentacles does a squid have?",
				choices: [
					"Eight",
					"Ten",
					"Twelve",
					"Fourteen"
				],
				correct: "Ten"
			}
		];
		
		this.calculateResults = function() {
			for (var index = 0; index < this.results.length; ++index) {
				var result = this.results[index];
				if (result.correct) {
					this.correctAnswers++;
				}
			}
		}
		
		this.reset = function() {
			this.results = [];
			
			this.currentQuestion = 0;
			this.correctAnswers = 0;
			this.currentAnswer = '';
			
			this.showResults = false;
			this.quizComplete = false;
		}
		
		this.toggleResults = function() {
			this.showResults = !this.showResults;
		}
		
		this.submit = function() {
			var question = this.questions[this.currentQuestion];
			
			this.results.push({
				questionAnswer: question.correct,
				userAnswer: this.currentAnswer,
				correct: question.correct === this.currentAnswer
			});
			
			this.currentQuestion++;
			
			if (this.currentQuestion == this.questions.length) {
				this.quizComplete = true;
				this.calculateResults();
			}
		}
		
		this.reset();
		
	});
	
	app.filter('percentage', ['$filter', function ($filter) {
		return function (input, decimals) {
			return $filter('number')(input * 100, decimals) + '%';
		};
	}]);
	
})();