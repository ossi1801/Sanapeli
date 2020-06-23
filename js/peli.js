//sanapelin js tiedosto



//globaalit muuttujat
var stage, livesTxt, gameOverTxt, win;


//arvattava lause
var answerline = "JAVASCRIPT ON&KIVA";

var abc = "ABCDEFGHIJKLMNOPQRSTUVXYZÅÄÖ";
var lives = 6;

//kuinka monta kirjainta on vielä arvamatta
var letters_needed = 0;

function init(){
	//canvas --> stage

	stage = new createjs.Stage("canvas");

	drawBoard();
	drawButtons();
	startGame();
}
//piirtää pelilaudalle tyhjät kirjainslotit
function drawBoard(){
	//mittaa missä slotissa ollaan menossa
	var i;
	var char;
	//yksi kirjainlaatikko, creajs-hahmo
	var box;
	//apumuuttujat, joilla box piirtyy oikeaan kohtaan
	var xPos = 20;
	var yPos = 90;
	//toisto, joka piirtää boxit näyttöön,
	//jokaisen boxin "sisälle" tulee yksi kirjain
	//kirjain on alkutilanteessa piilossa
	for(i = 0; i < answerline.length; i++){
		char = answerline[i];
		//piirretään box, jos lauseessa eitullut vastaa
		//" ", tai "&"
		if(char != ' ' && char != '&'){
		
			//vastauksen mitta kasvaa
			letters_needed++;
			//piirretään yksi box
			box = new createjs.Shape();
			box.graphics.beginStroke("#00FF00");
			//box on neliö
			box.graphics.drawRect(0,0,20,24);
			
			//ensimmäisen boxin sijainti
			box.x = xPos;
			box.y = yPos;
			
			//jotta kirjain tulee oikeaan kohtaa ruutua
			
			//jokaisella boxilla on nimi
			box.name = 'box_' + i;
			
			//boxilla tietona yksi kirjain 
			box.key
			
			console.log(box.name);
			stage.addChild(box);
			}
			//siirretään seuraavan boxin piirto oikeaan
			//kohtaan
			//ensin boxin oikealle
			xPos += 20;
			
			//vaihdetaan rivi, jos tarvetta
			//x- sijaint rivin alkuun,
			//y sijainti edellisen rivin alle
			
			if(char == '&') {
			xPos = 20;
			yPos += 30;
			
			}
		}
}
function drawButtons(){
	var i, char, btn;
	//tekstihahmo
	var txt;
	//kirjainlaskuri
	var letter_count = 0;
	//painikkeiden sijoitteluun
	var xPos = 20;
	var yPos = 240;
	
	//piirtää painikkeen jokaiselle kirjaimelle
	for(i = 0; i < abc.length; i++){
	char = abc[i];
	//luodaan painike
	btn = new createjs.Shape();
	btn.graphics.beginStroke("#000");
	btn.graphics.beginFill("#000");
	btn.graphics.drawRect(0, 0, 20, 24);
	}
}



function startGame(){
		//luodaan pelikello
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", function(e){
	
	stage.update();
	});

}