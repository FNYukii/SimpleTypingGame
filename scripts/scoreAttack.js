//1～6文字の単語たち
const words = [
    "愛","網","鮎","案","イカ","石","犬","居間",
    "海老","貝","亀","ゴミ","鹿","島","舌","鯛",
    "鷹","なす","猫","灰","鳩","花","浜","富士",
    "赤","青","白","黒","桃","肌","虹","色",
    "ねぎ","塩","空","陸","海","雲","雪","雨",
    "棒","板","弓","矢","家","塀","部屋","蓋",
    "牛","馬","鳥","豚","鷹","鳩","犬","猫",
    "あさり","ごはん","きのこ","昆布","たけのこ","おかゆ","野菜","キャベツ",
    "レタス","大根","人参","もやし","トマト","玉ねぎ","大豆","納豆",
    "パソコン","水筒","マウス","モニター","電池","メモリ","CPU","HDD",
    "青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬",
    "埼玉","神奈川","新潟","富山","石川","福井","山梨","長野",
    "静岡","愛知","京都","大阪","兵庫","和歌山","鳥取","島根",
    "東京","じゃがいも","キーボード","スクリーン","炊飯器","ドライヤー","フライパン","紙袋",
    "カレンダー","コンセント","洗濯機","洗面台","シャンプー","インターホン","洗面器","食器棚",
    "ティッシュ","アルコール","消毒","ユーチューブ","チューリップ","スパゲッティ","ピッツァ","カルボナーラ",
    "オムライス","明石焼き","タコライス","ガパオライス","味噌ラーメン","マシンガン","ハンバーガー","ハンバーグ"
];

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
  reportMessagePara.innerHTML = "入力できた単語数：" + typedCount;
}


// 時間切れ
// function gameFailed(){
//   gameStop();
//   reportTitlePara.innerHTML = "時間切れ!";
//   reportMessagePara.innerHTML = "もう少し速くタイピングできるようになりましょう!";
// }


// ゲームクリア(タイムアップ)
function gameCleared(){
  gameStop();
  reportTitlePara.innerHTML = "ゲーム終了!";
  reportMessagePara.innerHTML = "入力できた単語数：" + typedCount;
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
      timerPara.innerHTML = "00.00";
      // gameFailed();
      gameCleared();
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
    // if(typedCount >= goalCount){
    //   gameCleared();
    // }
    updateInstruction();
  }else{
    instructionPara.innerHTML = "<span style='color: red;'>✕</span>「" + targetText + "」と入力してください。";
    scaleup(instructionPara);
  }
}


//timeAttackから変更
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
