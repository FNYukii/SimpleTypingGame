function IndexMain() {
  return (
    <div>
      <p className="largeText">概要</p>
      <p>「シンプルタイピング☆」はその名のとおり、無駄な機能を省いたシンプルなタイピング練習ゲームです。ぜひここであなたのタイピングスキルを証明してみてください。</p>

      <p className="largeText">ルール</p>
      <p>ゲーム画面に表示された指示に従って単語や文章を入力してください。正しく入力されていれば次の指示が表示されます。なるべく速く、正確に入力してください。<br/>※同じ単語が連続して出題される場合もあります。</p>

      <p className="largeText">ステージ選択</p>
      <div className="stage">
        <a href="level1.html" className="jumpToGame">プレイ</a>
        <p className="stageName">Level 1</p>
        <p>2文字以下の短い単語が出題されます。<br/>クリア条件：30秒間で10単語入力</p>
      </div>
      <div className="stage">
        <a href="level2.html" className="jumpToGame">プレイ</a>
        <p className="stageName">Level 2</p>
        <p>3～4文字の単語が出題されます。<br/>クリア条件：30秒間で10単語入力</p>
      </div>
      <div className="stage">
        <a href="level3.html" className="jumpToGame">プレイ</a>
        <p className="stageName">Level 3</p>
        <p>5～6文字の単語が出題されます。<br/>クリア条件：30秒間で10単語入力</p>
      </div>
      <div className="stage">
        <a href="level4.html" className="jumpToGame">プレイ</a>
        <p className="stageName">Level 4</p>
        <p>7文字以上の単語が出題されます。<br/>クリア条件：30秒間で10単語入力</p>
      </div>
      <div className="stage">
        <a href="level5.html" className="jumpToGame">プレイ</a>
        <p className="stageName">Level 5</p>
        <p>簡単な文章が出題されます。<br/>クリア条件：30秒間で10文入力</p>
      </div>
      <div className="stage">
        <a href="scoreAttack.html" className="jumpToGame">プレイ</a>
        <p className="stageName">スコアアタック</p>
        <p>30秒でどれだけ多くの単語を入力できるか挑戦！</p>
      </div>
      <div className="stage">
        <a href="survival.html" className="jumpToGame">プレイ</a>
        <p className="stageName">サバイバル</p>
        <p>単語の入力に成功すると、残り時間が2秒回復します！<br/>なるべく長時間生き残りましょう！</p>
      </div>
    </div>
  );
}
const indexMain = document.getElementsByTagName("main")[0];
ReactDOM.render(<IndexMain/>, indexMain);