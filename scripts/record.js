const record_level1Span = document.getElementById("record_level1Span");
const record_level2Span = document.getElementById("record_level2Span");
const record_level3Span = document.getElementById("record_level3Span");
const record_level4Span = document.getElementById("record_level4Span");
const record_scoreAttackSpan = document.getElementById("record_scoreAttackSpan");
const record_survivalSpan = document.getElementById("record_survivalSpan");


//level1
if(!localStorage["record_level1"]){
  record_level1Span.innerHTML = "記録なし";
}else{
  record_level1Span.innerHTML = localStorage.getItem("record_level1") + " 秒";
}

//level2
if(!localStorage["record_level2"]){
  record_level2Span.innerHTML = "記録なし";
}else{
  record_level2Span.innerHTML = localStorage.getItem("record_level2") + " 秒";
}

//level3
if(!localStorage["record_level3"]){
  record_level3Span.innerHTML = "記録なし";
}else{
  record_level3Span.innerHTML = localStorage.getItem("record_level3") + " 秒";
}

//level4
if(!localStorage["record_level4"]){
  record_level4Span.innerHTML = "記録なし";
}else{
  record_level4Span.innerHTML = localStorage.getItem("record_level4") + " 秒";
}

//scoreAttack
if(!localStorage["record_scoreAttack"]){
  record_scoreAttackSpan.innerHTML = "記録なし";
}else{
  record_scoreAttackSpan.innerHTML = localStorage.getItem("record_scoreAttack") + " 個";
}

//survival
if(!localStorage["record_survival"]){
  record_survivalSpan.innerHTML = "記録なし";
}else{
  record_survivalSpan.innerHTML = localStorage.getItem("record_survival") + " 秒";
}