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
var correctAnswerSound = new Audio("./material/correct-answer.mp3");
var wrongBuzzerSound = new Audio("./material/wrong-buzzer.mp3");


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
switch(stageName){
  case "level1":
  gameType = 0;
  difficultyLevel = 0;
  defaultRemaingTime = 30.00;
  goalCount = 5;
  break;

  case "level2":
  gameType = 0;
  difficultyLevel = 1;
  defaultRemaingTime = 30.00;
  goalCount = 7;
  break;

  case "level3":
  gameType = 0;
  difficultyLevel = 2;
  defaultRemaingTime = 30.00;
  goalCount = 7;
  break;

  case "level4":
  gameType = 0;
  difficultyLevel = 3;
  defaultRemaingTime = 30.00;
  goalCount = 10;
  break;

  case "scoreAttack":
  gameType = 1;
  difficultyLevel = 0;
  defaultRemaingTime = 30.00;
  break;

  case "survival":
  gameType = 2;
  difficultyLevel = 0;
  defaultRemaingTime = 30.00;
}


//その他の変数を宣言
let targetText;
let lastRandomNum = 0;
let typedCount = 0;
let remaingTime = defaultRemaingTime;
let playedTime = 0.00;
let isGamePlaying = false;
let isAutoFill = false; //true = 自動入力モード
let isPlaySound = false; //true = 効果音ON


//ゲーム開始準備
timerPara.innerHTML = defaultRemaingTime.toFixed(2);
updateTypedCountPara();
textbox.addEventListener("keypress",enterKeyListener);


function startButtonClick(){
  if(!isGamePlaying){
    gameStart();
  }else{
    gameRetired();
  }
}


function gameStart(){
  isGamePlaying = true;
  typedCount = 0;
  playedTime = 0.00;

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


//リタイア
function gameRetired(){
  clearInterval(timerMethod);
  gameStop();
  openReport("リタイア");
}
//時間切れ
function gameTimeUp(){
  gameStop();
  timerPara.innerHTML = "0.00";
  openReport("タイムアップ!");
}
//ゲームクリア
function gameCleared(){
  clearInterval(timerMethod);
  gameStop();
  openReport("ステージクリア!");
}


function gameStop(){
  isGamePlaying = false;
  isAutoFill = false;
  textbox.disabled = true;
  startButton.innerHTML = "もう一度プレイ";
}


function timerStart(){
  //countupメソッド
  let countup = function(){

    if(remaingTime.toFixed(2) <= 0.00){
      clearInterval(timerMethod);
      gameTimeUp();
    }else{
      remaingTime -= 0.01;
      playedTime += 0.01;
      timerPara.innerHTML = remaingTime.toFixed(2);
      if(remaingTime.toFixed(2) <= 5.00){
        timerPara.style.color = "red";
        timerPara.style.transform = "scale(1.3)";
      }
    }

  }

  remaingTime = defaultRemaingTime;
  timerMethod = setInterval(countup,10);
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
      // correctAnswer();
    }, 100);
  }else if(textbox.value == "auto fill"){
    isAutoFill = true;
    textbox.value = "OK.";
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

  if(gameType == 2){
    remaingTime += 2;
    scaleup(timerPara, 1.1);
  }else if(gameType == 0){
    if(typedCount >= goalCount){
      gameCleared();
    }
  }
  updateInstructionPara();
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
    // typedCountPara.innerHTML = "ポイント：" + typedCount;
    // break;
    
    case 2:
    typedCountPara.innerHTML = "タイピング数：<span style='font-weight: bold;'>" + typedCount + "</span>";
  }
}


function openReport(result){
  resultPara.innerHTML = result;
  playedTimeSpan.innerHTML = playedTime.toFixed(2) + "秒";
  typedCountSpan.innerHTML = typedCount;
  if(typedCount == 0){
    averageTypingTimeSpan.innerHTML = "0.00秒";
  }else{
    averageTypingTimeSpan.innerHTML = (playedTime.toFixed(2) / typedCount).toFixed(2) + "秒";
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
    soundToggleButton.style.border = "3px solid #fff";
    soundToggleButton.style.fontSize = "25px";
    // soundToggleButton.innerHTML = "♪";
    // soundToggleButton.style.color = "tomato";
    // soundToggleButton.style.border = "2px solid tomato";
  }else{
    isPlaySound = false;
    soundToggleButton.style.border = "1px solid #fff";
    soundToggleButton.style.fontSize = "20px";
    // soundToggleButton.innerHTML = "";
    // soundToggleButton.style.color = "#fff";
    // soundToggleButton.style.border = "2px solid #fff";
  }
}