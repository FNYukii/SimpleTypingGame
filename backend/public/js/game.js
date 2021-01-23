const words = [
  [
    "愛","闇","金","砂","イカ","石","犬","居間",
    "海老","貝","亀","象","鹿","島","舌","銀",
    "銅","なす","猫","灰","土","花","浜","富士",
    "赤","青","白","黒","桃","肌","虹","色",
    "ねぎ","塩","空","陸","海","雲","雪","雨",
    "棒","板","弓","矢","家","城","部屋","椅子",
    "牛","馬","鳥","人","草","目","犬","猫","熊"
  ],
  [
    "あさり","ごはん","きのこ","昆布","たけのこ","おかゆ","野菜","キャベツ",
    "レタス","大根","人参","もやし","トマト","玉ねぎ","大豆","納豆",
    "パソコン","水筒","マウス","カステラ","電池","メモリ","縄跳び","豚カツ",
    "青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬",
    "埼玉","神奈川","新潟","富山","石川","福井","山梨","長野",
    "静岡","愛知","京都","大阪","兵庫","和歌山","鳥取","島根",
    "スピーカー","毛布","枕","和室","洋室","麦茶","唐揚げ","マカロニ",
    "おでん","シチュー","餃子","枝豆","たこ焼き","パン","菓子パン","プリン"
  ],
  [
    "東京","じゃがいも","キーボード","スクリーン","炊飯器","ドライヤー","フライパン","紙袋",
    "カレンダー","コンセント","洗濯機","洗面台","シャンプー","インターホン","洗面器","食器棚",
    "ティッシュ","アルコール","消毒","クッション","チューリップ","スパゲッティ","ピッツァ","カルボナーラ",
    "オムライス","明石焼き","タコライス","ガパオライス","味噌ラーメン","シャンパン","ハンバーガー","ハンバーグ",
    "チョコレート","プリンター","マヨネーズ","ガムテープ","電子レンジ","ペットボトル","エコバッグ","カーペット",
    "フローリング","ガスコンロ","かつお節","牛乳","お好み焼き","フランクフルト","イチゴジャム","ヨーグルト",
    "ビスケット","エビフライ","牛丼","親子丼","食パン","メロンパン","肉じゃが","ゆで卵"
  ],
  [
    "電動ドライバー","電気ストーブ","無線マウス","無線キーボード","ノートパソコン","リュックサック","クローゼット","パソコンケース",
    "コンセントプラグ","電気自動車","アルコールランプ","カーネーション","鉄筋コンクリート","ローストビーフ","バランスボール","豚骨ラーメン",
    "スマートフォン","ガソリンスタンド","正面玄関","高速道路","洗濯ばさみ","発泡スチロール","オレンジジュース","アップルジュース",
    "スマートスピーカー","風林火山","貨物コンテナ","貨物列車","大阪城公園","非常階段","緊急事態","地方公共団体",
    "オーブンレンジ","味噌ラーメン","障害物","醤油ラーメン","家系ラーメン","クリスマスケーキ","アップルパイ","クリームチーズ",
    "スライスチーズ","チョコレートケーキ","キャンプファイヤー","ホットプレート","ポテトチップス","グレープフルーツ","グレープジュース","虫取り網",
    "体重計","ポケットティッシュ","オイスターソース","オリーブソース","マカロニグラタン","バナナジュース","ブルーベリージャム","フランスパン"
  ]
];



//mp3
let correctAnswerSound = new Audio("./mp3/correct-answer.mp3"); //soundNumber = 0
let wrongBuzzerSound = new Audio("./mp3/wrong-buzzer.mp3"); //1
let countdownSound = new Audio("./mp3/countdown.mp3"); //2
let timeupSound = new Audio("./mp3/timeup.mp3"); //3


const body = document.body;
//gameBoardの要素のid取得
const soundToggleButton = document.getElementById("soundToggleButton");
const timerPara = document.getElementById("timerPara");
const typedCountPara = document.getElementById("typedCountPara");
const instructionPara = document.getElementById("instructionPara");
const crossMark = document.getElementById("crossMark");
const textbox = document.getElementById("textbox");
const startButton = document.getElementById("startButton");
//reportの要素のid取得
const trigger = document.getElementById("trigger");
const report = document.getElementById("report");
const resultPara = document.getElementById("resultPara");
const playedTimeSpan = document.getElementById("playedTimeSpan");
const typedCountSpan = document.getElementById("typedCountSpan");
const averageTypingTimeSpan = document.getElementById("averageTypingTimeSpan");
const newHighestRecordPara = document.getElementById("newHighestRecordPara");


//どのステージなのか取得して難易度や制限時間を決定
let gameType; //0 = timeAttack, 1 = scoreAttack, 2 = survival
let difficultyLevel;
let defaultRemaingTime;
let goalCount;
switch(stageId){
  case 1:
  gameType = 0;
  difficultyLevel = 0;
  defaultRemaingTime = 30.00;
  goalCount = 5;
  break;

  case 2:
  gameType = 0;
  difficultyLevel = 1;
  defaultRemaingTime = 30.00;
  goalCount = 7;
  break;

  case 3:
  gameType = 0;
  difficultyLevel = 2;
  defaultRemaingTime = 30.00;
  goalCount = 7;
  break;

  case 4:
  gameType = 0;
  difficultyLevel = 3;
  defaultRemaingTime = 30.00;
  goalCount = 10;
  break;

  case 5:
  gameType = 1;
  difficultyLevel = 0;
  defaultRemaingTime = 30.00;
  break;

  case 6:
  gameType = 2;
  difficultyLevel = 0;
  defaultRemaingTime = 30.00;
}


//その他の変数を宣言
let targetText;
let lastRandomNum = 0;
let typedCount;
let remaingTime = defaultRemaingTime;
let playedTime = 0.00;
let gameResult; //0 = リタイア, 1 = タイムアップ, 2 = ステージクリア
let isGamePlaying = false;
let isGameCountdowning = false;
let isAutoTyping = false; //true = 自動入力モード
let isNewHighestRecord = false;


//sound-toggle-buttonをセッティング
if(!localStorage["isPlaySound"] || localStorage.getItem("isPlaySound") == "false"){
  soundToggleButton.innerHTML = "<i class='fas fa-volume-mute fa-1x'></i>";
}else{
  soundToggleButton.innerHTML = "<i class='fas fa-volume-up fa-1x'></i>";
}


//ゲーム開始準備
readyToStart();

function readyToStart(){
  //変数をリセット
  isGamePlaying = false;
  isAutoTyping = false;
  typedCount = 0;
  playedTime = 0.00;
  isNewHighestRecord = false;

  //UIをリセット
  body.style.backgroundColor = "#eee";
  timerPara.style.color = "#555";
  timerPara.style.transform = "scale(1)";
  timerPara.innerHTML = defaultRemaingTime.toFixed(2);
  typedCount = 0;
  updateTypedCountPara();
  instructionPara.style.color = "#555";
  instructionPara.innerHTML = "スタートボタンを押してください";
  textbox.disabled = true;
  textbox.value = "";
  crossMark.style.display = "none";
  startButton.innerHTML = "スタート";
  textbox.addEventListener("keypress",enterKeyListener);
}


function startButtonClick(){
  if(!isGameCountdowning && !isGamePlaying){
    startCountdown();
  }else if(isGameCountdowning && !isGamePlaying){
    startCountdownStop();
  }else if(isGamePlaying && !isGameCountdowning){
    gameResult = 0;
    gameStop();
  }
}


function startCountdown(){

  isGameCountdowning = true;

  let second = 2;
  let countdown = function(){
    if(second > 0){
      instructionPara.innerHTML = second;
      scaleup(instructionPara, 1.2);
      second--;
    }else{
      clearInterval(countdownTimer);
      instructionPara.style.color = "#555";
      isGameCountdowning = false;
      gameStart();
    }
  }

  instructionPara.innerHTML = 3;
  instructionPara.style.color = "red";
  startButton.innerHTML = "ストップ";
  scaleup(instructionPara, 1.2);

  countdownTimer = setInterval(countdown, 1000);
}


function startCountdownStop(){
  clearInterval(countdownTimer);
  isGameCountdowning = false;
  readyToStart();
}


function gameStart(){
  isGamePlaying = true;
  typedCount = 0;

  timerPara.style.color = "#777";
  timerPara.style.transform = "scale(1)";
  crossMark.style.display = "none";
  textbox.disabled = false;
  textbox.value = "";
  textbox.focus();
  startButton.innerHTML = "リタイア";

  updateInstructionPara();
  updateTypedCountPara();
  scaleup(typedCountPara, 1.05);
  timerStart();
}


function gameStop(){
  //ゲームタイマー停止
  clearInterval(gameTimer);
  //記録更新なら保存
  saveRecord();
  //レポート表示
  openReport();
  //変数とUIをリセット
  readyToStart();
  //結果に応じて音を鳴らす
  if(gameResult == 1){
    playSound(3);
  }
}


function timerStart(){
  //countupメソッド
  let countup = function(){

    if(remaingTime.toFixed(2) <= 0.00){
      clearInterval(gameTimer);
      gameResult = 1;
      gameStop();
    }else{
      remaingTime -= 0.01;
      playedTime += 0.01;
      timerPara.innerHTML = remaingTime.toFixed(2);
      if(remaingTime.toFixed(2) <= 5.00){
        timerPara.style.color = "red";
        timerPara.style.transform = "scale(1.3)";
        if(remaingTime.toFixed(2) % 1 == 0 && remaingTime > 0.5){
          playSound(2);
        }
      }
    }
    
  }

  remaingTime = defaultRemaingTime;
  gameTimer = setInterval(countup,10);
}


function enterKeyListener(event){
  if(event.key == "Enter"){
    textboxCheck();
  }
}


function textboxCheck(){
  if(textbox.value == targetText){
    correctAnswer();
  }else if(isAutoTyping){
    textbox.value = targetText;
    setTimeout(() => {
      textboxCheck();
    }, 100);
  }else if(textbox.value == "auto typing"){
    isAutoTyping = true;
    textbox.value = "OK.";
    body.style.backgroundColor = "#bbb";
  }else if(textbox.value != targetText && !isAutoTyping){
    wrongAnswer();
  }
}


function correctAnswer(){
  playSound(0);
  textbox.value = "";

  typedCount++;
  
  updateTypedCountPara();
  scaleup(typedCountPara, 1.05);
  
  updateInstructionPara();

  if(gameType == 2){
    remaingTime += 2;
    scaleup(timerPara, 1.1);
  }else if(gameType == 0){
    if(typedCount >= goalCount){
      gameResult = 2;
      gameStop();
    }
  }
  crossMark.style.display = "none";
}


function wrongAnswer(){
  playSound(1);
  crossMark.style.display = "block";
  scaleup(crossMark, 1.2);
  scaleup(instructionPara, 1.1);
}


function updateInstructionPara(){
  //survivalなら徐々に難易度UP
  if(gameType == 2){
    if(typedCount < 10){
      difficultyLevel = 0;
    }else if(typedCount < 20){
      difficultyLevel = 1;
    }else if(typedCount < 30){
      difficultyLevel = 2;
    }else{
      difficultyLevel = 3;
    }
  }
  //scoraAttackなら難易度ランダム
  if(gameType == 1){
    difficultyLevel = Math.floor(Math.random() * words.length);
  }

  targetText = words[difficultyLevel][getRandomNum()];
  instructionPara.innerHTML = "「" + targetText + "」 と入力してください。";
  scaleup(instructionPara, 1.05);
}


function updateTypedCountPara(){
  switch(gameType){
    case 0:
    typedCountPara.innerHTML = "タイピング数：<span style='font-weight: bold;'>" + typedCount + " / " + goalCount + "</span>";
    break;

    case 1:
    case 2:
    typedCountPara.innerHTML = "タイピング数：<span style='font-weight: bold;'>" + typedCount + "</span>";
  }
}


function openReport(){
  switch(gameResult){
    case 0:
    resultPara.innerHTML = "リタイア";
    break;

    case 1:
    resultPara.innerHTML = "タイムアップ";
    break;

    case 2:
    resultPara.innerHTML = "ステージクリア";
  }
  playedTimeSpan.innerHTML = playedTime.toFixed(2) + " 秒";
  typedCountSpan.innerHTML = typedCount;
  if(typedCount == 0){
    averageTypingTimeSpan.innerHTML = "0.00 秒";
  }else{
    averageTypingTimeSpan.innerHTML = (playedTime.toFixed(2) / typedCount).toFixed(2) + " 秒";
  }
  if(isNewHighestRecord){
    newHighestRecordPara.innerHTML = "新記録更新!";
  }else{
    newHighestRecordPara.innerHTML = "　";
  }
  trigger.checked = true;
}


function scaleup(para, expansionRate){
  para.style.transition = "0.2s";
  para.style.transform = "scale(" + expansionRate + ")";
  setTimeout(() => {
    para.style.transform = "scale(1)";
  }, 200);
}


function getRandomNum(){
  let newRandomNum = Math.floor(Math.random() * words[difficultyLevel].length);
  while(newRandomNum == lastRandomNum){
    newRandomNum = Math.floor(Math.random() * words[difficultyLevel].length);
  }
  lastRandomNum = newRandomNum;
  return newRandomNum;
}


function playSound(soundNumber){
  if(localStorage.getItem("isPlaySound") == "true"){
    if(soundNumber == 0){
      correctAnswerSound.pause();
      correctAnswerSound.currentTime = 0;
      correctAnswerSound.play();
    }
    if(soundNumber == 1){
      wrongBuzzerSound.pause();
      wrongBuzzerSound.currentTime = 0;
      wrongBuzzerSound.play();
    }
    if(soundNumber == 2){
      countdownSound.play();
    }
    if(soundNumber == 3){
      timeupSound.play();
    }
  }
}


function soundToggle(){
  if(localStorage.getItem("isPlaySound") == "true"){
    localStorage.setItem("isPlaySound", "false");
    soundToggleButton.innerHTML = "<i class='fas fa-volume-mute fa-1x'></i>";
  }else{
    localStorage.setItem("isPlaySound", "true");
    soundToggleButton.innerHTML = "<i class='fas fa-volume-up fa-1x'></i>";
  }
}


function saveRecord(){
  
  if(!isAutoTyping){

    switch(stageId){
      case 1:
      if(gameResult == 2){
        if(!localStorage["level1_playedTime"] || playedTime < localStorage.getItem("level1_playedTime")){
          localStorage.setItem("level1_playedTime",playedTime.toFixed(2));
          localStorage.setItem("level1_typedCount",typedCount);
          isNewHighestRecord = true;
        }
      }
      break;
  
      case 2:
      if(gameResult == 2){
        if(!localStorage["level2_playedTime"] || playedTime < localStorage.getItem("level2_playedTime")){
          localStorage.setItem("level2_playedTime",playedTime.toFixed(2));
          localStorage.setItem("level2_typedCount",typedCount);
          isNewHighestRecord = true;
        }
      }
      break;
      
      case 3:
      if(gameResult == 2){
        if(!localStorage["level3_playedTime"] || playedTime < localStorage.getItem("level3_playedTime")){
          localStorage.setItem("level3_playedTime",playedTime.toFixed(2));
          localStorage.setItem("level3_typedCount",typedCount);
          isNewHighestRecord = true;
        }
      }
      break;
  
      case 4:
      if(gameResult == 2){
        if(!localStorage["level4_playedTime"] || playedTime < localStorage.getItem("level4_playedTime")){
          localStorage.setItem("level4_playedTime",playedTime.toFixed(2));
          localStorage.setItem("level4_typedCount",typedCount);
          isNewHighestRecord = true;
        }
      }
      break;
        
      case 5:
      if(gameResult == 1){
        if(!localStorage["scoreAttack_typedCount"] || typedCount > localStorage.getItem("scoreAttack_typedCount")){
          localStorage.setItem("scoreAttack_typedCount",typedCount);
          localStorage.setItem("scoreAttack_playedTime",playedTime.toFixed(2));
          isNewHighestRecord = true;
        }
      }
      break;
  
      case 6:
      if(gameResult == 1){
        if(!localStorage["survival_playedTime"] || playedTime > localStorage.getItem("survival_playedTime")){
          localStorage.setItem("survival_playedTime",playedTime.toFixed(2));
          localStorage.setItem("survival_typedCount",typedCount);
          isNewHighestRecord = true;
        }
      }
      break;
    }

  }
}