//bodyタグのid取得
const body = document.body;
//gameController部の各要素のid取得
const timerPara = document.getElementById("timerPara");
const instructionPara = document.getElementById("instructionPara");
const textbox = document.getElementById("textbox");
const typedCountPara = document.getElementById("typedCountPara");
const startButton = document.getElementById("startButton");
const highestRecordPara = document.getElementById("highestRecordPara");
//resultReport部の各要素のid取得
const resultReport = document.getElementById("resultReport");
const resultOfPlayTimePara = document.getElementById("resultOfPlayTimePara");
const resultOfTypedCountPara = document.getElementById("resultOfTypedCountPara");


//ゲーム関連の変数
let targetText; //目標の単語
let typedCount = 0; //入力に成功した単語数
let highestRecord = 0; //歴代の最高成績
//タイマー関連の変数
const defaultRemaingTime = 30.00; //残り時間の初期値
let remaingTime = defaultRemaingTime; //残り時間
//状態管理用のboolean型変数
let isGamePlaying = false; //true = ゲームプレイ中
let isInput10 = false; //true = 入力成功単語数10倍モードON
let isAutoInput = false; //true = 自動入力モードON


//ゲーム開始準備
timerPara.innerHTML = "残り時間：" + defaultRemaingTime + "秒";
instructionPara.innerHTML = "startボタンをクリックしてください";
textbox.value = "";
textbox.addEventListener("keypress",enterKeyListener);
typedCountPara.innerHTML = "入力できた単語数：0";
highestRecordPara.innerHTML = "最高記録：0";
startButton.innerHTML = "ゲームスタート";
resultReport.style.transform = "scale(0)";


function startButtonClick(){
  if(!isGamePlaying){
    gameStart();
  }else{
    gameFinish();
  }
}


function gameStart(){
  timerStart();
  isGamePlaying = true;
  typedCount = 0;
  textbox.disabled = false;
  textbox.focus();
  nextQuiz();

  timerPara.innerHTML = "残り時間：" + defaultRemaingTime + "秒";
  scaleup(timerPara);
  typedCountPara.innerHTML = "入力できた単語数：" + 0;
  scaleup(typedCountPara);
  startButton.innerHTML = "リタイアする";
  resultReport.style.transform = "scale(0)";
}


function gameFinish(){
  clearInterval(timer);
  isGamePlaying = false;
  isAutoInput = false;
  isInput10 = false;
  body.classList.remove("godmodeStyle");
  textbox.disabled = true;
  
  if(typedCount >= highestRecord){
    highestRecord = typedCount; //最高記録を更新！
    highestRecordPara.innerHTML = "最高記録：" + highestRecord;
    scaleup(highestRecordPara);
  }

  startButton.innerHTML = "もう一度プレイ";
  updateResultReport();
  resultReport.style.transform = "scale(1.2)";
}


function updateResultReport(){
  resultOfPlayTimePara.innerHTML = "プレイ時間：" + (defaultRemaingTime - remaingTime) + "秒";
  resultOfTypedCountPara.innerHTML = "入力できた単語数：" + typedCount;
}


function timerStart(){
  let countup = function(){
    // remaingTime--;
    remaingTime -= 0.01;
    timerPara.innerHTML = "残り時間：" + remaingTime.toFixed(2) + "秒";
    if(remaingTime <= 0){
      clearInterval(timer);
      gameFinish();
    }
  }

  remaingTime = defaultRemaingTime;
  timer = setInterval(countup,10); //countup開始
}


function enterKeyListener(event){
  if(event.key == "Enter"){
    textboxCheck();
    textbox.value = "";
  }
}


function textboxCheck(){
  if(textbox.value == targetText){
    updateTypedCount();
    nextQuiz();
  }
  if(textbox.value == "auto input"){
    isAutoInput = true;
    body.classList.add("godmodeStyle");
    nextQuiz();
  }
  if(textbox.value == "input * 10"){
    isInput10 = true;
    body.classList.add("godmodeStyle");
  }
  if(isAutoInput){
    textbox.value = targetText;
    setTimeout(() => {
      textboxCheck();
    }, 100);
  }
}


function nextQuiz(){
  let randomNum = Math.floor(Math.random() * words.length);
  targetText = words[randomNum];
  instructionPara.innerHTML = "「" + targetText + "」 と入力してください";
  scaleup(instructionPara);
}


function updateTypedCount(){
  if(isInput10){
    typedCount += 10;
  }else{
    typedCount++;
  }
  typedCountPara.innerHTML = "入力できた単語数：" + typedCount;
  scaleup(typedCountPara);
}


function scaleup(para){
  //JavaScriptでCSSスタイルを追加できる！
  para.style.transition = "0.2s";
  para.style.transform = "scale(1.02)";
  setTimeout(() => {
    para.style.transform = "scale(1)";
  }, 200);
}
