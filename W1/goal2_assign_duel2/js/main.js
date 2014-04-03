/*
Name: Ramon Rafael G. Frias IV
Date: 03 APR 2014
Assignment: Goal1: Assignment: The Duel - Part 2
*/

// self-executing function
(function(){

     console.log("FIGHT!!!");
    
     var fighter1 = ["Spiderman", 20, 100]; //player one name, damage, and health (inorder)
     var fighter2 = ["Batman", 20, 100]; //player two name, damage, and health (inorder)

     var round = 0;

     function fight(){
        console.log('in the fight function');
        
        alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);

        for (var i=0; i<10; i++){
         
           //random formula is - Math.Floor(Math.random() * (max - min) + min);

           var minDamage1 = fighter1[1] * 0.5;
           var minDamage2 = fighter2[1] * 0.5;
           var f1 = Math.floor(Math.random() * (fighter1[1] - minDamage1) + minDamage1);
           var f2 = Math.floor(Math.random() * (fighter2[1] - minDamage2) + minDamage2);

           //inflict damage
           fighter1[2]-=f1; //this is similar to this formula: playerOneHealth = playerOneHealth - f1;
           fighter2[2]-=f2;

           console.log(fighter1[0]+":"+fighter1[2]+" "+fighter2[0]+":"+fighter2[2]);

           var results = winnerCheck();
           console.log(results);

           if(results === "no winner"){
           	  round++;
           	  alert(fighter1[0]+":"+fighter1[2]+" *ROUND "+round+" OVER*"+fighter2[0]+":"+fighter2[2]);
           }else{
              alert(results);
              break;
           };



        };     	
     };

     function winnerCheck(){
        console.log("in winnerChek FN");

     	var result="no winner";

     	if(fighter1[2]<1 && fighter2[2]<1){
           result = "You Both Die";
        }else if(fighter1[2]<1){
           result =fighter2[0]+" WINS!!!"
        }else if(fighter2[2]<1){
           result =fighter1[0]+" WINS!!!"
     	};

     	return result;



     };

     /****** The program gets started below ******/
     console.log('program starts')
     fight();

})();
