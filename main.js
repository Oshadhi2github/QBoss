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
    window.location.href="game.html";
    console.log(playerName)
}
setBorderColor=(element)=>{
    element.style.borderColor='';
}
//end login form js