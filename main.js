let playerName='';
let level='';
let number1=0;
let number2=0;
let exp='';
operators=['+','-','/','*','%'];
let question='';
let time=0;
let counter=null;
let requestAnswer;


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


startGame=()=>{
    generateQuestion();
}


generateQuestion= () =>{
    let selectedMax=checkLevel();
    number1=generateNumber(1,selectedMax);
    number2=generateNumber(1,selectedMax);
    exp=operators[generateNumber(0,5)];
    question = `${number1} ${exp} ${number2} =?`;
    document.getElementById('question')
        .innerHTML=question;
    executeTime();

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
executeTime=()=>{
   counter =  setInterval(()=>{
        time++;
        document.getElementsByClassName('counter-time')[0].innerHTML=time;
        if(time===60){
            clearTime();
            alert('Failed');
        }
    },1000);
}
clearTime=()=>{
    time=0;
    clearInterval(counter)
}
submitAnswer=()=>{
    requestAnswer = document.getElementById('requestAnswer').value;
    if (isNaN(requestAnswer) || number1==0){
        alert('please insert a number or start the game');
        return;
    }
    console.log(requestAnswer);

}
//end game console js