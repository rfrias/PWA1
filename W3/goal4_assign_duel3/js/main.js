/*
Name: Ramon Rafael G. Frias IV
Date: 20 JUN 2014
Assignment: Week #3 :: { Homework } - THE DUEL #3 (90m)
*/
// Self-executing function
(function(){
	//shows in the console.log
	console.log(" *** FIGHT ***");
	//DOM pieces
	var fighter1_txt = document.querySelector("#Jill").querySelector("p");
	var fighter2_txt = document.querySelector("#Chun-Li").querySelector("p");
	var round_txt = document.querySelector("h4");
	var button = document.getElementById("fight_btn");
	
	console.log();
	//click event
	button.addEventListener("click", fight, false);
	//Array of objects for both fighters, Jill and Chun-Li
	var fighters = [
		{
			name:"Jill",
			damage:20,
			health:100
		},
		{
			name:"Chun-Li",
			damage:20,
			health:100
		}];
	//shows what round it is	
	var round = 1;
	//initialize DOM
	round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
	fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
	fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
	//fight function
	function fight(){
		//below is the formula for the damage dealt to each fighter
		fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
		fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
		
			var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * 0.5);//calculated damage of Jill
			var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * 0.5);//calculated damage of Chun-Li
			//inflict damage
			fighters[0].health -= f1;//this is similar to this formula: playerOneHealth = playerOneHealth - f1;
			fighters[1].health -= f2;//this is similar to this formula: playerOneHealth = playerOneHealth - f2;
			
			console.log(fighters[0].health, fighters[1].health);// will show in the console both players name and health
			
			var result = winnerCheck();
			console.log(result);
			
			round++;
			if (result === "no winner")// this will show if the end result has no winners
			{
				fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
				fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
			}
			else
			{
				fighter1_txt.innerHTML = result;
				fighter2_txt.innerHTML = "";
				//disable button
				button.removeEventListener("click", fight, false);
				
				document.querySelector('.buttonblue').innerHTML = 'DONE!!!';//shows DONE!!! at the end of fight
			}
	}
	// this is a funciton used to show the name of who won the the end
	function winnerCheck(){
		var result = "no winner";// will show no winner
		if (fighters[0].health < 1 && fighters[1].health < 1)
		{
			result = "You Both Die - GAME OVER!";// this will show if both fighters die
		}
		else if(fighters[0].health < 1)
		{
			result = fighters[1].name + " WINS!!!";// This will show that Chun-Li won the fight
		}
		else if (fighters[1].health < 1)
		{
			result = fighters[0].name + " WINS!!!";// This will show that Jill won the fight
		}
		return result;//will return and show the result of who won the battle
	}
			
})();