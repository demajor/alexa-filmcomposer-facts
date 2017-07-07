'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.a2e4fdaa-4f55-4508-a7a6-00dcd5444f31";

var SKILL_NAME = "Film Composer Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a film composer fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

var data = [
    "Danny Elfman's first major film score gig was for Tim Burton's 1985 film Pee-wee's Big Adventure.",
    "Philip Glass received an Academy Award nomination for his scoring work on the film, The Hours.",
    "Fences, the Denzel Washington directed and highly acclaimed film, featured a score by NY based composer Marcelo Zarvos.",
    "The English producer and composer, Jon Hopkins, was nomintated for an Ivor Novello Award for Best Original Score on the 2010 film, Monsters.",
    "Philip Glass has noted that his favorite composer is Franz Schubert.",
    "Danny Elfman composed the theme song for The Simpsons in 1989.",
    "Clint Mansell composed the scores for director Darren Aronofsky's, now cult film hits, Pi and Requiem for a Dream.",
    "Jeff Beal won Television Composer of the Year, mainly for his scores on the Netflix hit show House of Cards.",
    "In 2015, composer Alexandre Desplat won an Academy Award for his original score in the Wes Anderson film The Grand Budapest Hotel.",
    "Composer Angelo Badalamenti won a Grammy Award for Best Pop Instrumental Performance in 1990, for writing the Twin Peaks Theme.",
    "Composer Hans Zimmer suggests that when composing a theme for film or TV, that you treat the melodic stucture of the theme as set of questions and answers.",
    "According to composer Cliff Martinez, one of the most important aspects of writing music for film is to truly understand the directors' unique vision for the film.",
    "Elmer Bernstein composed the themes and other musical pieces for over 200 films and TV shows over his fifty year career.",
    "Composer Clint Mansell won the 2007 Public Choice Award, from the World Soundtrack Academy, for his exquisite work on the film, The Fountain.",
    "All original score segments, within the 2014 film Birdman, were composed and performed on solo jazz percussion by Antonio Sánchez."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};