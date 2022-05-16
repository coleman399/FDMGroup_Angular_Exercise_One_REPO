class VoteFunctionality {
    constructor(private id: number, private article: string, private upVotes: number, private downVotes: number) { }

    getId(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getArticle(): string {
        return this.article;
    }

    setArticle(article: string) {
        this.article = article;
    }

    getUpVote(): number {
        return this.upVotes;
    }

    setUpVote(value: number) {
        this.upVotes = value;
    }

    getDownVote(): number {
        return this.downVotes;
    }

    setDownVote(value: number) {
        this.downVotes = value;
    }
}

class VoteFunctionalityUI {

    startProgram(): void {
        console.log("Welcome to Stack Overflow's Vote Functionality UI\nPlease rate each article(enter 1 for like or 0 for dislike):");
        var avf = this.articles();
        avf.forEach(article => this.getAnswer(article));
        avf.forEach(vf => console.log(vf.getArticle() + " has " + vf.getUpVote() + " up votes and " + vf.getDownVote() + " down votes!"))
    }

    getAnswer(vf: VoteFunctionality): void {
        const readline = require('readline-sync');
        var userInput = readline.question(vf.getArticle() + " ");
        if (userInput == 1) {
            vf.setUpVote(vf.getUpVote() + 1);
        } else if (userInput == 0) {
            vf.setDownVote(vf.getDownVote() + 1)
        } else {
            console.log("Please enter a valid response!\n");
            this.getAnswer(vf);
        }
    }

    articles(): Array<VoteFunctionality> {
        var avf: Array<VoteFunctionality> = new Array();
        for (let i = 1; i < 4; i++) {
            let article = "This is article " + i + "!";
            var vf: VoteFunctionality = new VoteFunctionality(i, article, 0, 0);
            avf.push(vf);
        }
        return avf;
    }

}

let ui: VoteFunctionalityUI = new VoteFunctionalityUI();

ui.startProgram();