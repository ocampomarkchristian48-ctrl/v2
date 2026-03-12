let player=""
let score=0

let bag=[
"red","red","red","red","red",
"blue","blue","blue",
"green","green"
]

function speak(text){
document.getElementById("characterText").innerText=text
}

function startGame(){

player=document.getElementById("playerName").value

if(player==""){
alert("Enter your name first")
return
}

speak("Welcome "+player+"!")

document.getElementById("startScreen").classList.add("hidden")
document.getElementById("instructionScreen").classList.remove("hidden")

}

function startLevel1(){

document.getElementById("instructionScreen").classList.add("hidden")
document.getElementById("level1").classList.remove("hidden")

renderBag()

}

function renderBag(){

let bagDiv=document.getElementById("bag")
bagDiv.innerHTML=""

bag.forEach(color=>{
let b=document.createElement("div")
b.className="ball "+color
bagDiv.appendChild(b)
})

}

function drawBalls(){

let copy=[...bag]

let a=copy.splice(Math.floor(Math.random()*copy.length),1)[0]
let b=copy.splice(Math.floor(Math.random()*copy.length),1)[0]

document.getElementById("drawResult").innerText=
"Drawn balls: "+a+" and "+b

}

function checkAnswer(ans){

if(ans=="2/9"){
score++
speak("Correct!")
}else{
speak("Wrong answer!")
}

document.getElementById("level1").classList.add("hidden")
document.getElementById("level2").classList.remove("hidden")

}

function checkLogic(){

let ana=document.getElementById("ana").value
let ben=document.getElementById("ben").value
let cara=document.getElementById("cara").value

if(
ana=="Teacher" &&
ben=="Engineer" &&
cara=="Doctor"
){
score++
speak("Great logic!")
}else{
speak("Not correct!")
}

endGame()

}

function endGame(){

document.getElementById("level2").classList.add("hidden")

document.getElementById("resultText").innerText=
"Final Score: "+score+"/2"

saveScore()
showLeaderboard()

document.getElementById("endScreen").classList.remove("hidden")

}

function saveScore(){

let board=JSON.parse(localStorage.getItem("mindlogic"))||[]

board.push({name:player,score:score})

localStorage.setItem("mindlogic",JSON.stringify(board))

}

function showLeaderboard(){

let board=JSON.parse(localStorage.getItem("mindlogic"))||[]

let list=document.getElementById("leaderboard")
list.innerHTML=""

board.sort((a,b)=>b.score-a.score)

board.slice(0,5).forEach(p=>{

let li=document.createElement("li")
li.innerText=p.name+" - "+p.score
list.appendChild(li)

})

}
