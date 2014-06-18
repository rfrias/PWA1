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
	 
	 console.log();
	 
	 //Click event
	 button.addEventListener("click", fight, false);
	 
	 //Array of objects for both fighters, Kabal and Kratos.
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
	 
	 //REMOVED. Used array of objects and changed both fighters name.
     //var fighter1 = ["Spiderman", 20, 100]; //player one name, damage, and health (inorder) This array will be used to determine Spidermans damage, health, and whether or not he win as the end result
     //var fighter2 = ["Batman", 20, 100]; //player two name, damage, and health (inorder) This array will be used to determine Batmans damage, health, and whether or not he win as the end result

     var round = 0; // code that shows what round
	 
	 //Initialize DOM
	 round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
	 fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
	 fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
	 
	 
     //"Fight" function
     function fight(){
        console.log('in the fight function');
        
		fighter1_txt.innerHTML = fighters[0].name + ":" + fighers[0].health;
		fighter2_txt.innerHTML = fighters[1].name + ":" + fighers[1].health;
		//ALERT pop-up removed
        //alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]); // alert box will appear showing both characters health

        for (var i=0; i<10; i++){
         
           //random formula is - Math.Floor(Math.random() * (max - min) + min); This is to determine damage
           var minDamage1 = fighters[0].damage * 0.5; // this is Spidermans damage multiplied by .5
           var minDamage2 = fighters[1].damage * 0.5; // this is Batmans damage multiplied by .5
           var f1 = Math.floor(Math.random() * (fighters[0].damage - minDamage1) + minDamage1); //random formula for damage dealt to Kratos
           var f2 = Math.floor(Math.random() * (fighters[1].damage - minDamage2) + minDamage2); //random formula for damage dealt to Kabal

           //inflict damage
           fighters[0].health-=f1; //this is similar to this formula: playerOneHealth = playerOneHealth - f1;
           fighters[1].health-=f2; //this is similar to this formula: playerOneHealth = playerOneHealth - f2;

           console.log(fighters[0].name+":"+fighters[0].health+" "+fighters[1].name+":"+fighters[1].health);// will show in the console both players name and health

           var results = winnerCheck(); // this will show if the end result has no winners
           console.log(results);  // results will be shown in console.log
			
		   round_txt.innerHTML = "ROUND #" + round + "Results:";
           round++;
		   if (results === "no winer"){
           	  figher1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
			  figher1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
			  //alert(fighter1[0]+":"+fighter1[2]+" *ROUND "+round+" OVER*"+fighter2[0]+":"+fighter2[2]); // alert box will apear when the fight is over for each round
           }else{
              fighter1_txt.innerHTML = results;
			  fighter2_txt.innerHTML = "";
			  //Disable button
			  button.removeEvenListener("clicl", fight, false);
			  button.diabled = true;
			  button.onclick = "return false";
			  document.querySelector('.buttonblue').innerHTML = 'DONE!!!'
			  //alert(results); // alert box will appear and show results
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
           result =fighter2[0]+" WINS!!!" // This will show that Kratos won the fight
        }else if(fighter2[2]<1){
           result =fighter1[0]+" WINS!!!" // This will show that Kabal won the fight
     	};

     	return result; // This will return the result of who won the battle or if both fighters die



     };

     /****** The program gets started below ******/
     console.log('program starts')
     fight();

})();
