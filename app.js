// console.log('app.js is connected')
var winner = document.getElementById('winner')
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')
var notice1 = document.getElementById('notice1')
var notice2 = document.getElementById('notice2')
// var winnerdiv = document.createElement('h4')
function spin(){
    console.log('cube is spinning');
    let cube1 = document.getElementById('cube1');
    let cube2 = document.getElementById('cube2');
    cube1.classList.add('spin')
    cube2.classList.add('spin')
    let number1 = document.getElementById('number1')
    let number2 = document.getElementById('number2')
    let audio = document.getElementById('audio')
    // audio.play()

    let random1 = Math.floor(Math.random()*5);
    let random2 = Math.floor(Math.random()*5);

    if(random1!=0){
         number1.innerHTML=random1+1;
         number2.innerHTML=random2+1;
    }
    setTimeout(()=>{
        audio.play() 
    },-1)
    setTimeout(() => {
        cube1.classList.remove('spin')
        cube2.classList.remove('spin')
    }, 1000);


    console.log('player 1 dice number is ',random1+1)
    console.log('player 2 dice number is ',random2+1)

    if(random1>random2){
        console.log('player 1 is winner')
        // winner.innerHTML='player 1 is winner'
        // player1.classList.add(winnerplayer1)
        notice2.innerHTML='looser😔'
        notice1.innerHTML='winner👑😎🏆'
        // winner.innerHTML=''
        
    }else if(random1==random2){
        console.log('this match is draw')
        notice2.innerHTML='draw'
        notice1.innerHTML='draw'
        // winner.innerHTML='this match is draw'
    }else{
        console.log('player 2 is winner')
        // winner.innerHTML='player 2 is winner'
        // player2.classList.add(winnerplayer2);
        notice1.innerHTML='looser😔'
        notice2.innerHTML='winner👑😎🏆'
        // winner.innerHTML=''
        // setTimeout(() => {
            //     notice1.innerHTML='player 1 is looser'
            //     // notice1.innerHTML='nonon'
            // },1000);
        }  
        // setTimeout(() => {
        //     notice1.innerHTML=notice1
        //     notice2.innerHTML='notice2'
        //     // notice1.innerHTML='nonon'
        // }, 1000);

}
    