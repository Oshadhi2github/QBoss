let playerName='';
let level='';


//start login form js
letsGetStarted= ()=>{
    let playerNameElement =
        document.getElementById('playerName');
    let levelElement =
        document.getElementById('level');
    setBorderColor(playerNameElement)

    let tempPlayerName=playerNameElement.value;
    if (tempPlayerName.trim()===''){ //trim rid spaces
        playerNameElement.style.borderColor='red';
        alert('please insert name and level to continue!')
        return;
    }
   playerName=tempPlayerName;
    level=levelElement.value;
    //==>redirecting gaming console==>
    let playerData={name:playerName,level:level};
    localStorage.setItem("playerData",JSON.stringify(playerData));
    window.location.href="game.html";

}
setBorderColor=(element)=>{
    element.style.borderColor='';
}
//end login form js

//start game console js
setPlayerData = key => {
   let storageData = JSON.parse(localStorage.getItem("playerData"));
    playerName=storageData.name;
    level=storageData.level;
    document.getElementById('player-name')
    .innerHTML=playerName;
    document.getElementById('player-level')
        .innerHTML=level;
}
//end game console js

startGame=()=>{
    generateQuestion();
}

generateQuestion=()=>{
    let selectedMax=checkLevel();
    let number1=generateNumber(1,selectedMax);
    console.log(number1)
}

generateNumber=(min,max)=>{
    return Math.floor(Math.random() * (max - min)+ min);//specific range ==> example 1-101
}

checkLevel=()=>{
    let levelNumber=51; // default Beginner
    switch (level){
        case "Beginner": levelNumber=51;break;
        case "Middle": levelNumber=101;break;
        case "Advanced": levelNumber=1001;break;
    }
    return levelNumber;
}