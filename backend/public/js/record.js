//Level1
const level1_playedTimeSpan = document.getElementById("level1_playedTimeSpan");
const level1_typedCountSpan = document.getElementById("level1_typedCountSpan");
//Level2
const level2_playedTimeSpan = document.getElementById("level2_playedTimeSpan");
const level2_typedCountSpan = document.getElementById("level2_typedCountSpan");
//Level3
const level3_playedTimeSpan = document.getElementById("level3_playedTimeSpan");
const level3_typedCountSpan = document.getElementById("level3_typedCountSpan");
//Level4
const level4_playedTimeSpan = document.getElementById("level4_playedTimeSpan");
const level4_typedCountSpan = document.getElementById("level4_typedCountSpan");
//Score Attack
const scoreAttack_playedTimeSpan = document.getElementById("scoreAttack_playedTimeSpan");
const scoreAttack_typedCountSpan = document.getElementById("scoreAttack_typedCountSpan");
//Survival
const survival_playedTimeSpan = document.getElementById("survival_playedTimeSpan");
const survival_typedCountSpan = document.getElementById("survival_typedCountSpan");


//Level1
if(localStorage["level1_playedTime"]){
  level1_playedTimeSpan.innerHTML = localStorage.getItem("level1_playedTime") + " 秒";
}else{
  level1_playedTimeSpan.innerHTML = "---";
}
if(localStorage["level1_typedCount"]){
  level1_typedCountSpan.innerHTML = localStorage.getItem("level1_typedCount") + " 個";
}else{
  level1_typedCountSpan.innerHTML = "---";
}


//Level2
if(localStorage["level2_playedTime"]){
  level2_playedTimeSpan.innerHTML = localStorage.getItem("level2_playedTime") + " 秒";
}else{
  level2_playedTimeSpan.innerHTML = "---";
}
if(localStorage["level2_typedCount"]){
  level2_typedCountSpan.innerHTML = localStorage.getItem("level2_typedCount") + " 個";
}else{
  level2_typedCountSpan.innerHTML = "---";
}


//Level3
if(localStorage["level3_playedTime"]){
  level3_playedTimeSpan.innerHTML = localStorage.getItem("level3_playedTime") + " 秒";
}else{
  level3_playedTimeSpan.innerHTML = "---";
}
if(localStorage["level3_typedCount"]){
  level3_typedCountSpan.innerHTML = localStorage.getItem("level3_typedCount") + " 個";
}else{
  level3_typedCountSpan.innerHTML = "---";
}


//Level4
if(localStorage["level4_playedTime"]){
  level4_playedTimeSpan.innerHTML = localStorage.getItem("level4_playedTime") + " 秒";
}else{
  level4_playedTimeSpan.innerHTML = "---";
}
if(localStorage["level4_typedCount"]){
  level4_typedCountSpan.innerHTML = localStorage.getItem("level4_typedCount") + " 個";
}else{
  level4_typedCountSpan.innerHTML = "---";
}


//ScoreAttack
if(localStorage["scoreAttack_playedTime"]){
  scoreAttack_playedTimeSpan.innerHTML = localStorage.getItem("scoreAttack_playedTime") + " 秒";
}else{
  scoreAttack_playedTimeSpan.innerHTML = "---";
}
if(localStorage["scoreAttack_typedCount"]){
  scoreAttack_typedCountSpan.innerHTML = localStorage.getItem("scoreAttack_typedCount") + " 個";
}else{
  scoreAttack_typedCountSpan.innerHTML = "---";
}


//Survival
if(localStorage["survival_playedTime"]){
  survival_playedTimeSpan.innerHTML = localStorage.getItem("survival_playedTime") + " 秒";
}else{
  survival_playedTimeSpan.innerHTML = "---";
}
if(localStorage["survival_typedCount"]){
  survival_typedCountSpan.innerHTML = localStorage.getItem("survival_typedCount") + " 個";
}else{
  survival_typedCountSpan.innerHTML = "---";
}