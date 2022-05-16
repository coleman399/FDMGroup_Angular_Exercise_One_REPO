var VoteFunctionality = /** @class */ (function () {
    function VoteFunctionality(id, article, upVotes, downVotes) {
        this.id = id;
        this.article = article;
        this.upVotes = upVotes;
        this.downVotes = downVotes;
    }
    VoteFunctionality.prototype.getId = function () {
        return this.id;
    };
    VoteFunctionality.prototype.setId = function (id) {
        this.id = id;
    };
    VoteFunctionality.prototype.getArticle = function () {
        return this.article;
    };
    VoteFunctionality.prototype.setArticle = function (article) {
        this.article = article;
    };
    VoteFunctionality.prototype.getUpVote = function () {
        return this.upVotes;
    };
    VoteFunctionality.prototype.setUpVote = function (value) {
        this.upVotes = value;
    };
    VoteFunctionality.prototype.getDownVote = function () {
        return this.downVotes;
    };
    VoteFunctionality.prototype.setDownVote = function (value) {
        this.downVotes = value;
    };
    return VoteFunctionality;
}());
var VoteFunctionalityUI = /** @class */ (function () {
    function VoteFunctionalityUI() {
    }
    VoteFunctionalityUI.prototype.startProgram = function () {
        var _this = this;
        console.log("Welcome to Stack Overflow's Vote Functionality UI\nPlease rate each article(enter 1 for like or 0 for dislike):");
        var avf = this.articles();
        avf.forEach(function (article) { return _this.getAnswer(article); });
        avf.forEach(function (vf) { return console.log(vf.getArticle() + " has " + vf.getUpVote() + " up votes and " + vf.getDownVote() + " down votes!"); });
    };
    VoteFunctionalityUI.prototype.getAnswer = function (vf) {
        var readline = require('readline-sync');
        var userInput = readline.question(vf.getArticle() + " ");
        if (userInput == 1) {
            vf.setUpVote(vf.getUpVote() + 1);
        }
        else if (userInput == 0) {
            vf.setDownVote(vf.getDownVote() + 1);
        }
        else {
            console.log("Please enter a valid response!\n");
            this.getAnswer(vf);
        }
    };
    VoteFunctionalityUI.prototype.articles = function () {
        var avf = new Array();
        for (var i = 1; i < 4; i++) {
            var article = "This is article " + i + "!";
            var vf = new VoteFunctionality(i, article, 0, 0);
            avf.push(vf);
        }
        return avf;
    };
    return VoteFunctionalityUI;
}());
var ui = new VoteFunctionalityUI();
ui.startProgram();
