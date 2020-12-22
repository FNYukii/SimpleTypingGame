function GameMain(props){
  return(
    <div>
      <p id="stageName">LEVEL</p>
      <div id="gameController">
        <p id="timerPara">default-string</p>
        <p id="typedCountPara">default-string</p>
        <p id="instructionPara">default-string</p>
        <input id="textbox" type="text" size={30} value="default-string" disabled/>
        <div id="buttonDiv">
          <button id="startButton" onclick="startButtonClick()">default-string</button>
        </div>
      </div>
      <div id="resultReport">
        <p id="reportTitlePara">default-string</p>
        <p id="playedTimePara">default-string</p>
        <p id="reportMessagePara">default-string</p>
        <a href="index.html">トップページへ戻る</a>
      </div>
    </div>
  );
}
const gameMain = document.getElementsByTagName("main")[0];
ReactDOM.render(<GameMain/>,gameMain);