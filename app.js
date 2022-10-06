// console.log('app.js is connected')
var notice = document.getElementById('notice')
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
     
    
}
    