const words = [
  [
    "愛","網","鮎","案","イカ","石","犬","居間",
    "海老","貝","亀","ゴミ","鹿","島","舌","鯛",
    "鷹","なす","猫","灰","鳩","花","浜","富士",
    "赤","青","白","黒","桃","肌","虹","色",
    "ねぎ","塩","空","陸","海","雲","雪","雨",
    "棒","板","弓","矢","家","塀","部屋","蓋",
    "牛","馬","鳥","豚","鷹","鳩","犬","猫"
  ],
  [
    "あさり","ごはん","きのこ","昆布","たけのこ","おかゆ","野菜","キャベツ",
    "レタス","大根","人参","もやし","トマト","玉ねぎ","大豆","納豆",
    "パソコン","水筒","マウス","モニター","電池","メモリ","CPU","HDD",
    "青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬",
    "埼玉","神奈川","新潟","富山","石川","福井","山梨","長野",
    "静岡","愛知","京都","大阪","兵庫","和歌山","鳥取","島根"
  ],
  [
    "東京","じゃがいも","キーボード","スクリーン","炊飯器","ドライヤー","フライパン","紙袋",
    "カレンダー","コンセント","洗濯機","洗面台","シャンプー","インターホン","洗面器","食器棚",
    "ティッシュ","アルコール","消毒","ユーチューブ","チューリップ","スパゲッティ","ピッツァ","カルボナーラ",
    "オムライス","明石焼き","タコライス","ガパオライス","味噌ラーメン","マシンガン","ハンバーガー","ハンバーグ"
  ],
  [
    "電動ドライバー","電気ストーブ","無線マウス","無線キーボード","ノートパソコン","リュックサック","クローゼット","パソコンケース",
    "コンセントプラグ","電気自動車","アルコールランプ","ウェブブラウザ","フロントエンド","バックエンド","オブジェクト指向","フレームワーク",
    "スマートフォン","ガソリンスタンド","正面玄関","高速道路","洗濯ばさみ","発泡スチロール","オレンジジュース","アップルジュース"
  ]
];


//各要素のid取得
const body = document.body;
const timerPara = document.getElementById("timerPara");
const instructionPara = document.getElementById("instructionPara");
const textbox = document.getElementById("textbox");
const typedCountPara = document.getElementById("typedCountPara");
const startButton = document.getElementById("startButton");
const resultReport = document.getElementById("resultReport");
const reportTitlePara = document.getElementById("reportTitlePara");
const reportMessagePara = document.getElementById("reportMessagePara");


//どのステージなのか取得して難易度や制限時間を決定
let gameType; //0 = timeAttack, 1 = scoreAttack, 2 = survival
let difficultyLevel;
let defaultRemaingTime;
let goalCount;
switch(stageName){
  case "level1":
    gameType = 0;
    difficultyLevel = 0;
    defaultRemaingTime = 10.00;
    goalCount = 5;
    break;

  case "level2":
    gameType = 0;
    difficultyLevel = 1;
    defaultRemaingTime = 30.00;
    goalCount = 10;
    break;

  case "level3":
    gameType = 0;
    difficultyLevel = 2;
    defaultRemaingTime = 30.00;
    goalCount = 10;
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
    defaultRemaingTime = 10.00;
    break;

  case "survival":
    gameType = 2;
    difficultyLevel = 0;
    defaultRemaingTime = 30.00;
}


//その他の変数を宣言
let targetText;
let typedCount = 0;
let remaingTime = defaultRemaingTime;
let playedTime = 0.00;
let isGamePlaying = false;


//ゲーム開始準備
timerPara.innerHTML = defaultRemaingTime.toFixed(2);
updateTypedCountPara();
instructionPara.innerHTML = "startボタンをクリックしてください。";
textbox.addEventListener("keypress",enterKeyListener);
startButton.innerHTML = "ゲームスタート";


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
  textbox.disabled = false;
  textbox.value = "";
  textbox.focus();
  startButton.innerHTML = "リタイアする";
  resultReport.style.transform = "scale(0)";
  updateInstructionPara();
  updateTypedCountPara();
  scaleup(typedCountPara, 1.05);
  timerStart();
}


function timerStart(){

  let countup = function(){
    if(remaingTime > 0.00){
      remaingTime -= 0.01;
      playedTime += 0.01;
      timerPara.innerHTML = remaingTime.toFixed(2);
    }else{
      clearInterval(timer);
      gameTimeUp();
    }
  }

  remaingTime = defaultRemaingTime;
  timer = setInterval(countup,10);
}


//リタイア
function gameRetired(){
  clearInterval(timer);
  gameStop();
  updateResultReport("retired");
}
//時間切れ
function gameTimeUp(){
  timerPara.innerHTML = "0.00";
  gameStop();
  updateResultReport("timeUped");
}
//ゲームクリア
function gameCleared(){
  clearInterval(timer);
  gameStop();
  updateResultReport("cleared");
}


function gameStop(){
  isGamePlaying = false;
  textbox.disabled = true;
  startButton.innerHTML = "もう一度プレイ";
}


function enterKeyListener(event){
  if(event.key == "Enter"){
    textboxCheck();
    textbox.value = "";
  }
}


function textboxCheck(){
  if(textbox.value == targetText){
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
  }else if(textbox.value != targetText){
    instructionPara.innerHTML = "<span style='color: red;'>✕</span>「" + targetText + "」と入力してください。";
    scaleup(instructionPara, 1.2);
  }
}


function updateInstructionPara(){
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
  if(gameType == 1){
    difficultyLevel = Math.floor(Math.random() * words.length);
  }
  
  let randomNum = Math.floor(Math.random() * words[difficultyLevel].length);
  targetText = words[difficultyLevel][randomNum];
  instructionPara.innerHTML = "「" + targetText + "」 と入力してください。";
  scaleup(instructionPara, 1.05);
}


function updateTypedCountPara(){
  if(stageName == "scoreAttack" || stageName == "survival"){
    typedCountPara.innerHTML = "入力できた単語数：" + typedCount;
  }else{
    typedCountPara.innerHTML = "入力できた単語数：" + typedCount + " / " + goalCount;
  }
}


function updateResultReport(gameResult){
  resultReport.style.transform = "scale(1.2)";
  //リタイア
  if(gameResult == "retired"){
    reportTitlePara.innerHTML = "リタイア";
    if(gameType == 2){
      reportMessagePara.innerHTML = "生き残った時間：" + playedTime.toFixed(2) + "秒";
    }else if(gameType == 1){
      reportMessagePara.innerHTML = "スコア：" + typedCount;
    }else{
      reportMessagePara.innerHTML = "プレイ時間：" + playedTime.toFixed(2) + "秒";
    }
  }
  //時間切れ
  if(gameResult == "timeUped"){
    reportTitlePara.innerHTML = "時間切れ";
    if(gameType == 0){
      reportMessagePara.innerHTML = "生き残った時間：" + playedTime.toFixed(2) + "秒";
    }else if(gameType == 1){
      reportMessagePara.innerHTML = "スコア：" + typedCount;
    }else{
      reportMessagePara.innerHTML = "プレイ時間：" + defaultRemaingTime.toFixed(2) + "秒";
    }
  }
  //クリア
  if(gameResult == "cleared"){
    reportTitlePara.innerHTML = "クリア";
    reportMessagePara.innerHTML = "プレイ時間：" + playedTime.toFixed(2) + "秒";
  }
}


function scaleup(para, expansionRate){
  para.style.transition = "0.2s";
  para.style.transform = "scale(" + expansionRate + ")";
  setTimeout(() => {
    para.style.transform = "scale(1)";
  }, 200);
}
