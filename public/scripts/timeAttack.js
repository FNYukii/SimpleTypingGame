//bodyタグのid取得
const body = document.body;
//gameController部の各要素のid取得
const timerPara = document.getElementById("timerPara");
const instructionPara = document.getElementById("instructionPara");
const textbox = document.getElementById("textbox");
const typedCountPara = document.getElementById("typedCountPara");
const startButton = document.getElementById("startButton");
//resultReport部の各要素のid取得
const resultReport = document.getElementById("resultReport");
const reportTitlePara = document.getElementById("reportTitlePara");
const playedTimePara = document.getElementById("playedTimePara");
const reportMessagePara = document.getElementById("reportMessagePara");

//ゲーム関連の変数
let targetText; //目標の単語
let typedCount = 0; //入力に成功した単語数
//タイマー関連の変数
let remaingTime = defaultRemaingTime; //残り時間
//状態管理用のboolean型変数
let isGamePlaying = false; //true = ゲームプレイ中


//ゲーム開始準備
timerPara.innerHTML = defaultRemaingTime.toFixed(2);
instructionPara.innerHTML = "startボタンをクリックしてください。";
textbox.value = "";
textbox.addEventListener("keypress",enterKeyListener);
typedCountPara.innerHTML = "入力できた単語数：" + typedCount + " / " + goalCount;
startButton.innerHTML = "ゲームスタート";


function startButtonClick(){
  if(!isGamePlaying){
    gameStart();
  }else{
    gameRetired();
  }
}


function gameStart(){
  timerStart();
  isGamePlaying = true;
  typedCount = 0;
  textbox.disabled = false;
  textbox.focus();
  updateInstruction();

  timerPara.innerHTML = defaultRemaingTime;
  scaleup(timerPara);
  typedCountPara.innerHTML = "入力できた単語数：" + typedCount + " / " + goalCount;
  scaleup(typedCountPara);
  startButton.innerHTML = "リタイアする";
  resultReport.style.transform = "scale(0)";
}


// リタイアボタンを押した
function gameRetired(){
  gameStop();
  reportTitlePara.innerHTML = "リタイア";
  reportMessagePara.innerHTML = "次は最後までやり遂げてください…";
}


// 時間切れ
function gameFailed(){
  gameStop();
  reportTitlePara.innerHTML = "時間切れ!";
  reportMessagePara.innerHTML = "もう少し速くタイピングできるようになりましょう!";
}


// ゲームクリア
function gameCleared(){
  gameStop();
  reportTitlePara.innerHTML = "ステージクリア!";
  reportMessagePara.innerHTML = "おめでとうございます！";
}


function gameStop(){
  clearInterval(timer);
  isGamePlaying = false;
  body.classList.remove("godmodeStyle");
  textbox.disabled = true;
  startButton.innerHTML = "もう一度プレイ";

  playedTimePara.innerHTML = "プレイ時間：" + (defaultRemaingTime - remaingTime).toFixed(2) + "秒";
  resultReport.style.transform = "scale(1.2)";
}


function timerStart(){
  let countup = function(){
    remaingTime -= 0.01;
    timerPara.innerHTML = remaingTime.toFixed(2);
    if(remaingTime <= 0){
      clearInterval(timer);
      gameFailed();
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
    if(typedCount >= goalCount){
      gameCleared();
    }
    updateInstruction();
  }else{
    instructionPara.innerHTML = "<span style='color: red;'>✕</span>「" + targetText + "」と入力してください。";
    scaleup(instructionPara);
  }
}


function updateInstruction(){
  let randomNum = Math.floor(Math.random() * words.length);
  targetText = words[randomNum];
  instructionPara.innerHTML = "「" + targetText + "」 と入力してください。";
  scaleup(instructionPara);
}


function updateTypedCount(){
  typedCount++;
  typedCountPara.innerHTML = "入力できた単語数：" + typedCount + " / " + goalCount;
  scaleup(typedCountPara);
}


function scaleup(para){
  para.style.transition = "0.2s";
  para.style.transform = "scale(1.02)";
  setTimeout(() => {
    para.style.transform = "scale(1)";
  }, 200);
}
