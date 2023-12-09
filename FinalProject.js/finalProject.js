console.log('Gaming');
//: Created 2 players
class Players {
    constructor(playerOne, playerTwo){
        this.playerOne = "Player One";
        this.playerTwo = "Player Two";
    }
}
//: Classes for deck, card, and players
Deck = {
    cards: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
    deck: [],
    for(card = 0 , card < this.cards.length, i++);{
        this.deck.push(newCard({faceValue: this.cards[card]}));
    }
}

Deck.StartGame("Player One", "Player Two");
function;("Game Rule"); playerOne, playerTwo;{
    if ((playerOne.wonDeck.length === 0 && (playerOne.currentDeck.length === 0))){
        playerOne.GameOver(PlayerTwo);
        PlayerOneWins(playerOne);
    }
    else if((playerTwo.wonDeck.length === 0) && (playerTwo.currentDeck.length ===0)){
        playerOne.GameOver(playerOne);
        PlayerTwoWins(playerTwo);
    }
    else{
        if(playerOne.currentDeck.length === 0){
            Deck(playerOne.wonDeck, playerOne.currentDeck);
            if(playerTwo.currentDeck.length === 0){
                Deck(playerTwo.wonDeck, playerTwo.currentDeck);
            }
            playerOne.GetCurrentCard();
            playerTwo.GetCurrentCard();
            warCardsHolder[0].textContent = "";
            warCardsHolder[1].textContent = "";
            cardHolder[0].textContent = playerOne.currentCard.cardText + "of" + playerOne.currentCard;
            cardHolder[1].textContent = playerTwo.currentCard.cardText + "of" + playerTwo.currentCard;
            currentCardsHolder[0].textContent = playerOne.currentDeck.length;
            currentCardsHolder[1].textContent = playerTwo.currentDeck.length;
            wonCardsHolder[0].textContent = playerOne.wonDeck.length;
            wonCardsHolder[1].textContent = playerTwo.wonDeck.length;
            if(playerOne.currentCard.faceValue === playerTwo.currentCard.faceValue){
                faceValue === 0;
            }
            else{
                if(playerOne.currentCard.faceValue > playerTwo.currentCard.faceValue){
                    playerOne.wonDeck.push(playerOne.currentCard);
                    playerOne.wonDeck.push(playerTwo.currentCard);
                }
            }
        }
    }
}

function PlayerWins(player){
    if (player.one === "Player One"){
        warCardsHolder[0].textContent = "";
        warCardsHolder[1].textContent = "";
        cardHolder[0].textContent = "";
        cardHolder[1].textContent = "";
        currentCardsHolder[0].textContent = player.currentDeck.length;
        currentCardsHolder[1].textContent = "";
        wonCardsHolder[0].textContent = player.wonDeck,length;
        wonCardsHolder[1].textContent = "";
    }
    else {
        warCardsHolder[0].textContent = "";
        warCardsHolder[1].textContent = "";
        cardHolder[0].textContent = "";
        cardHolder[1].textContent = "";
        currentCardsHolder[0].textContent = "";
        currentCardsHolder[1].textContent = "";
        wonCardsHolder[0].textContent = "";
        wonCardsHolder[1].textContent = player.wonDeck.length;
    }
    dealCards.disabled = true;
} 

dealCards.onclick = function(){
    GameRule(PlayerOne, PlayerTwo);
}
//: method
function Player(player, currentDeck, wonDeck){
    this.player = player;
    this.currentDeck = currentDeck !== undefined && currentDeck instanceof Array ? currentDeck :[];
    this,wonDeck = wonDeck !== undefined && wonDeck instanceof Array ? wonDeck :[];
    this.warDeck = this.warDeck !== undefined && this.warDeck instanceof Array ? warDeck :[];
}

Player.prototype.GetCurrentCard = function(){
    this.currentCard = this.currentDeck.pop();
}
//: properties
Player.prototype.GoToWar = function(opponent){
    var tied = false;
    console.log("War");
    do {
        this.CanContinueWar(opponent);
        opponent.CanContinueWar(this);
        if(this.warDeck.length !== 0){
            warCardsHolder[1].textContent = this.warDeck.length[opponent - 1].cardText + "of" + this.warDeck[this.warDeck.length - 1];
        }

        if(opponent.warDeck.length !== 0){
            warCardsHolder[3].textContent = opponent.warDeck[opponent.warDeck.length - 1].cardText + "of" + opponent.warDeck[opponent.warDeck.length - 1];
        currentCardsHolder[0].textContent = this.currentDeck.length;
        currentCardsHolder[1].textContent = opponent.currentDeck.length;
        wonCardsHolder[0].textContent = this.wonDeck.length;
        wonCardsHolder[1].textContent = opponent.wonDeck.length;
        
        if(this.warDeck[this.warDeck.length - 1].faceValue === opponent.warDeck[opponent.warDeck.length - 1].faceValue){
            tied === true;
        }    
        console.log("Tied");
    }
 while(tied === true);
 if(this.warDeck[this.warDeck.length - 1].faceValue > opponent.warDeck[opponent.warDeck.length - 1].faceValue){
    console.log(this.player + "wins war");
    this.WonWar(opponent);
 }   

 else{
    console.log(opp.player + "wins war");
    opponent.WonWar(this);
 }
}

while(prototype.CanContinueWar): function(opponent){
    Deck.DealWarCards(this, 2);
    if(this.currentDeck.length > 2){
        if(this.wonDeck.length > 2){
            if((this.currentDeck.length === 1) && (this.wonDeck.length === 1)){
                console.log(this.player + "continuing war");
            }

            else if((this.currentDeck.length === 0) && (this.wonDeck.length === 1))
            console.log(this.player + "loses war");
        opponent.WonWar(this);
        this.GameOver(opponent);
        }

        else if((this.currentDeck.length === 1) && this.wonDeck.length === 0);
        console.log(this.player + "loses war");
        this.GameOver(opponent);
    }

    else {
        console.log(this.player + "loses");
        opponent.WonWar(this);
        this.GameOver(opponent);
    }
}
}
//: declare winner
Player.prototype.WonWar = function(opponent){
    this.wonDeck = this.wonDeck.concat(this.warDeck, opponent.warDeck);
    this.warDeck = [];
    opponent.warDeck = [];
}

Player.prototype.GameOver = function(opponent){
    console.log(opponent.player + "wins!");
    opponent.wonDeck = opponent.wonDeck.concat(opponent.warDeck, this.currentDeck, this.wonDeck, this.warDeck);
    opponent.warDeck = [];
    this.currentDeck = [];
    this.wonDeck = [];
    this.warDeck = [];
    PlayerWins(opponent);
}

Deck = {
    cards:[14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
    deck : [],
    shuffledDeck: [],
}

ShuffledDeck: function(unshuffledDeck, ShuffledDeck){
    while(unshuffledDeck.length){
        var index = Math.floor(Math.random() * unshuffledDeck.length);
        shuffledDeck.push(unshuffledDeck.splice(index, 1)[0]);
    }
    unshuffledDeck = [];
}

DistributeCards : function (player1Deck, player2Deck){
    for(var i = 0; i < this.shuffledDeck[i]);
    player1Deck.push(this.shuffledDeck[i]);
    player2Deck.push(this.shuffledDeck[this.shuffledDeck.length - i - 1]);
}

DealWarCards : function (player, num){
    for(var i = 0; i< num; i++){
        player.GetCurrentCard();
        player.warDeck.push(player.currentCard);
    }

    console.log(player);
}

StartGame : function(playerOne, playerTwo){
    this.BuildDeck();
    this.ShuffledDeck(this.deck, this.shuffledDeck);
    this.DistributeCards(playerOne.currentDeck, playerTwo.currentDeck);
} 


