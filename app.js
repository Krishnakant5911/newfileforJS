let gameseq = [];
let userseq = [];
let h2 = document.querySelector("h2");
let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;
let maxscore = [];
maxscore.push(level);


document.addEventListener("click" , ()=>{
    if(started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }

})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout( function () {
        btn.classList.remove("flash");
    } , 250);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(randomColor);
     btnFlash(randbtn);
}

function checkColor(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        if(maxscore[maxscore.length-1] < level){
            maxscore.push(level);
        }
        h2.innerText = `game over! and your score is ${level} and mxscore is ${maxscore[maxscore.length-1]} press any key to start`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        } , 150)
        setTimeout(reset, 1000);
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);


    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkColor(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}