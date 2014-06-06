/*
Name: Ramon Rafael G. Frias IV
Date: 06 JUN 2014
Assignment: Week #1 :: { Homework } - ANALYZE Duel #1 (4h)
*/

// self-executing function
(function(){

     console.log("FIGHT!!!");

     //player name          a
     var playerOneName = "Spiderman";
     var playerTwoName = "Batman";

     //player damage
     var playerOneDamage = 20;
     var playerTwoDamage = 20;

     //player health
     var playerOneHealth = 100;
     var playerTwoHealth = 100;

     var round = 0;

     function fight(){
        console.log('in the fight function');
        
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

        for (var i=0; i<10; i++){
         
           //random formula is - Math.Floor(Math.random() * (max - min) + min);

           var minDamage1 = playerOneDamage * 0.5;
           var minDamage2 = playerTwoDamage * 0.5;
           var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
           var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);

           //inflict damage
           playerOneHealth-=f1; //this is similar to this formula: playerOneHealth = playerOneHealth - f1;
           playerTwoHealth-=f2;

           console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

           var results = winnerCheck();
           console.log(results);

           if(results === "no winner"){
           	  round++;
           	  alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER*"+playerTwoName+":"+playerTwoHealth);
           }else{
              alert(results);
              break;
           };



        };     	
     };

     function winnerCheck(){
        console.log("in winnerChek FN");

     	var result="no winner";

     	if(playerOneHealth<1 && playerTwoHealth<1){
           result = "You Both Die";
        }else if(playerOneHealth<1){
           result =playerTwoName+" WINS!!!"
        }else if(playerTwoHealth<1){
           result =playerOneName+" WINS!!!"
     	};

     	return result;



     };

     /****** The program gets started below ******/
     console.log('program starts')
     fight();

})();
