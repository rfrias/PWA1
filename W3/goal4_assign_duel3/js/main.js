/*
Name: Ramon Rafael G. Frias IV
Date: 13 JUN 2014
Assignment: Week #2 :: { Homework } - DEVELOP Duel #2 (75m)
*/

// self-executing function
(function(){

     console.log("FIGHT!!!");
     
	 // DOM pieces
	 var fighter1_txt = document.querySelector("#kabal").querySelector("p");
	 var fighter2_txt = document.querySelector("#kraots").querySelector("p");
	 var round_txt = document.querySelector("h5");
	 var button = document.getElementByID("fight_btn");
	 
	 //Click event
	 button.addEventListener("click", fight, false);
	 
	 //Array of objects
	 var fighters = [
	 	{
			name:"Kabal",
			damage:20,
			health:100
		},
		{
			name:"Kratos",
			damage:20,
			health:100
		}];
	 
     //var fighter1 = ["Spiderman", 20, 100]; //player one name, damage, and health (inorder) This array will be used to determine Spidermans damage, health, and whether or not he win as the end result
     //var fighter2 = ["Batman", 20, 100]; //player two name, damage, and health (inorder) This array will be used to determine Batmans damage, health, and whether or not he win as the end result

     var round = 0; // code that shows what round

     function fight(){
        console.log('in the fight function');
        
        alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]); // alert box will appear showing both characters health

        for (var i=0; i<10; i++){
         
           //random formula is - Math.Floor(Math.random() * (max - min) + min);

           var minDamage1 = fighter1[1] * 0.5; // this is Spidermans damage multiplied by .5
           var minDamage2 = fighter2[1] * 0.5; // this is Batmans damage multiplied by .5
           var f1 = Math.floor(Math.random() * (fighter1[1] - minDamage1) + minDamage1); //random formula for damage dealt to Batman
           var f2 = Math.floor(Math.random() * (fighter2[1] - minDamage2) + minDamage2); //random formula for damage dealt to Spiderman

           //inflict damage
           fighter1[2]-=f1; //this is similar to this formula: playerOneHealth = playerOneHealth - f1;
           fighter2[2]-=f2; //this is similar to this formula: playerOneHealth = playerOneHealth - f2;

           console.log(fighter1[0]+":"+fighter1[2]+" "+fighter2[0]+":"+fighter2[2]);// will show in the console both players name and health

           var results = winnerCheck(); // this will show if the end result has no winners
           console.log(results);  // results will be shown in console.log

           if(results === "no winner"){
           	  round++;
           	  alert(fighter1[0]+":"+fighter1[2]+" *ROUND "+round+" OVER*"+fighter2[0]+":"+fighter2[2]); // alert box will apear when the fight is over for each round
           }else{
              alert(results); // alert box will appear and show results
              break; // function ends here
           };



        };     	
     };

     function winnerCheck(){ // this is a funciton used to show the name of who won the the end
        console.log("in winnerChek FN"); // will show in the console.lof the result of winnerCheck

     	var result="no winner"; // will show no winner

     	if(fighter1[2]<1 && fighter2[2]<1){
           result = "You Both Die"; // this will show if both fighters die
        }else if(fighter1[2]<1){
           result =fighter2[0]+" WINS!!!" // This will show that Batman won the fight
        }else if(fighter2[2]<1){
           result =fighter1[0]+" WINS!!!" // This will show that Spiderman won the fight
     	};

     	return result; // This will return the result of who won the battle or if both fighters die



     };

     /****** The program gets started below ******/
     console.log('program starts')
     fight();

})();
