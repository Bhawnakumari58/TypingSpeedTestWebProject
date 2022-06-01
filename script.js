const setOfWords=["hi my name is bhawna kumari and i am a student",
                 "this is typing speed test website hope you all are having fun",
                 "if you want the source code of this website then it is on my github profile",
                 "this website will tell you words typed by you per minute and correct and wrong word count"];

const msg= document.getElementById('msg');
const typeword= document.getElementById('mywords');
const btn= document.getElementById('btn');
let startTime,endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
}

btn.addEventListener('click', function(){
    if(this.innerText== 'Start'){
        typeword.disabled= false;
        playGame();
    }
})