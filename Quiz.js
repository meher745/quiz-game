class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    
    //write code to change the background color here
    backgroundColor="pink";

    //write code to show a heading for showing the result of Quiz
    //this.result=createElement('h2');
    //this.result.html("Results of the Quiz");
    //this.result.position(350,0);

    //call getContestantInfo( ) here
    getContestantInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      fill("yellow");
      textSize(15);
      text("NOTE:The contestant with the right answer is highlighted in black",130,230)
    }
    
    for(var plr in allContestants){
      var correctans="2";
      if(correctans===allContestants[plr].answer)
      fill("black");
      else
      fill("white");

    }

    
  }

}
