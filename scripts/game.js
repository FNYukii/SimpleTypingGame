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
let correctAnswerSound = new Audio("./material/correct-answer.mp3");
let wrongBuzzerSound = new Audio("./material/wrong-buzzer.mp3");
let countdownSound = new Audio("./material/countdown.mp3");
let piSound = new Audio("./material/pi.mp3");


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
let isAutoFill = false; //true = 自動入力モード
let isPlaySound; //true = 効果音ON


//isPlaySoundにlocalStorageの値を格納
if(!localStorage["isPlaySound"] || localStorage.getItem("isPlaySound") == "false"){
  isPlaySound = false;
}else{
  isPlaySound = true;
}


//sound-toggle-buttonをセッティング
if(isPlaySound){
  soundToggleButton.innerHTML = "<i class='fas fa-volume-up fa-1x'></i>";
}else if(isPlaySound == false){
  soundToggleButton.innerHTML = "<i class='fas fa-volume-mute fa-1x'></i>";
}


//ゲーム開始準備
readyToStart();

function readyToStart(){
  //変数をリセット
  isGamePlaying = false;
  isAutoFill = false;
  typedCount = 0;
  playedTime = 0.00;

  //UIをリセット
  body.style.backgroundColor = "#eee";
  timerPara.innerHTML = defaultRemaingTime.toFixed(2);
  typedCount = 0;
  updateTypedCountPara();
  instructionPara.innerHTML = "スタートボタンを押してください";
  textbox.disabled = true;
  crossMark.style.display = "none";
  startButton.innerHTML = "スタート";
  textbox.addEventListener("keypress",enterKeyListener);
}


function startButtonClick(){
  if(!isGamePlaying){
    startCountdown();
  }else{
    //リタイア
    gameResult = 0;
    gameStop();
  }
}


function startCountdown(){

  isGameCountdowning = true;

  textbox.value = "";
  startButton.disabled = true;
  startButton.innerHTML = "";

  let second = 2;
  let countdown = function(){
    if(second > 0){
      instructionPara.innerHTML = second;
      scaleup(instructionPara, 1.2);
      second--;
    }else{
      clearInterval(countdownMethod);
      instructionPara.style.color = "#555";
      isGameCountdowning = false;
      gameStart();
    }
  }
  instructionPara.innerHTML = 3;
  scaleup(instructionPara, 1.2);
  instructionPara.style.color = "red";
  countdownMethod = setInterval(countdown, 1000);
}


function gameStart(){
  isGamePlaying = true;
  typedCount = 0;

  startButton.disabled = false;

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
  //レポート表示
  openReport();
  //記録更新なら保存
  saveRecord();

  //変数とUIをリセット
  readyToStart();
}


function timerStart(){
  //countupメソッド
  let countup = function(){

    if(remaingTime.toFixed(2) <= 0.00){
      clearInterval(gameTimer);
      //タイムアップ
      gameResult = 1;
      gameStop();
      // gameTimeUp(); //todo:fix
    }else{
      remaingTime -= 0.01;
      playedTime += 0.01;

      // console.log("0: " + playedTime);
      // console.log("2: " + playedTime.toFixed(2));
      // console.log(" ");

      timerPara.innerHTML = remaingTime.toFixed(2);
      if(remaingTime.toFixed(2) <= 5.00){
        timerPara.style.color = "red";
        timerPara.style.transform = "scale(1.3)";
        if(remaingTime.toFixed(2) % 1 == 0 && remaingTime > 0.5){
          if(isPlaySound){
            countdownSound.play();
          }
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
  }else if(isAutoFill){
    textbox.value = targetText;
    setTimeout(() => {
      textboxCheck();
    }, 100);
  }else if(textbox.value == "auto fill"){
    isAutoFill = true;
    textbox.value = "OK.";
    body.style.backgroundColor = "#bbb";
  }else if(textbox.value != targetText && !isAutoFill){
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
      //ステージクリア
      gameResult = 2;
      gameStop();
      // gameCleared(); //todo:fix
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
  console.log("問題更新");
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
  if(isPlaySound){
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
  }
}


function soundToggle(){
  if(!isPlaySound){
    isPlaySound = true;
    soundToggleButton.innerHTML = "<i class='fas fa-volume-up fa-1x'></i>";
  }else{
    isPlaySound = false;
    soundToggleButton.innerHTML = "<i class='fas fa-volume-mute fa-1x'></i>";
  }
  localStorage.setItem("isPlaySound",isPlaySound);
  console.log("isPlaySound: " + localStorage.getItem("isPlaySound"));
}


function saveRecord(){
  switch(stageId){
    case 1:
    if(gameResult == 2){
      if(!localStorage["record_level1"] || playedTime < localStorage.getItem("record_level1")){
        localStorage.setItem("record_level1",playedTime.toFixed(2));
      }
    }
    break;

    case 2:
    if(gameResult == 2){
      if(!localStorage["record_level2"] || playedTime < localStorage.getItem("record_level2")){
        localStorage.setItem("record_level2",playedTime.toFixed(2));
      }
    }
    break;
    
    case 3:
    if(gameResult == 2){
      if(!localStorage["record_level3"] || playedTime < localStorage.getItem("record_level3")){
        localStorage.setItem("record_level3",playedTime.toFixed(2));
      }
    }
    break;

    case 4:
    if(gameResult == 2){
      if(!localStorage["record_level4"] || playedTime < localStorage.getItem("record_level4")){
        localStorage.setItem("record_level4",playedTime.toFixed(2));
      }
    }
    break;

    case 5:
    if(gameResult == 1){
      if(!localStorage["record_scoreAttack"] || typedCount > localStorage.getItem("record_scoreAttack")){
        localStorage.setItem("record_scoreAttack",typedCount);
      }
    }
    break;

    case 6:
    if(gameResult == 1){
      if(!localStorage["record_survival"] || playedTime > localStorage.getItem("record_survival")){
        localStorage.setItem("record_survival",playedTime.toFixed(2));
      }
    }
  }
}