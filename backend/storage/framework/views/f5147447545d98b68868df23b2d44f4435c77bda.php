<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="auther" content="YuSan357">
    <title><?php echo $__env->yieldContent('title'); ?></title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/game.css">
    <?php echo $__env->yieldContent('link'); ?>
    <script src="https://kit.fontawesome.com/40af242834.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <header>
      <div class="global-nav">
        <h1 class="global-nav-logo">
          <a href="/">Simple Typing</a>
        </h1>
        <ul class="global-nav-items-container">
          <li class="global-nav-item"><a href="/">Top</a></li>
          <li class="global-nav-item"><a href="about">遊び方</a></li>
          <li class="global-nav-item"><a href="record">記録</a></li>
        </ul>
      </div>  
    </header>
    <main>
      <div class="game-board">
        <div class="game-board-header">
          <?php echo $__env->yieldContent('stageName'); ?>
          <button class="sound-toggle-button" id="soundToggleButton" onclick="soundToggle()"></button>
        </div>
        <div class="game-board-content">
          <p class="timer-para" id="timerPara">　　　</p>
          <p class="typed-count-para" id="typedCountPara">　　　</p>
          <p class="instruction-para" id="instructionPara">　　　　　　　　</p>
          <div class="textbox-container">
            <p class="cross-mark" id="crossMark">×</p>
            <input class="textbox" id="textbox" type="text" autocomplete="off" disabled/>
          </div>
          <div class="start-button-container">
            <button class="start-button" id="startButton" onclick="startButtonClick()">　　　</button>
          </div>
        </div>
      </div>

      <!-- ナビゲーションボタン -->
      <div class="nav-button">
        <a href="/">トップへもどる</a>
      </div>
        
      <!-- レポート -->
      <input type="checkbox" id="trigger">
      <div class="overlay">
        <label for="trigger"></label>
        <div class="report" id="report">
          <div class="report-header">結果レポート</div>
          <div class="report-content">
            <p class="result-para" id="resultPara">xxxx</p>
            <div class="statistics">
              <span class="dataKey">プレイ時間</span>
              <span id="playedTimeSpan" class="dataValue">xx.xx秒</span>
            </div>
            <div class="statistics">
              <span class="dataKey">入力できた単語数</span>
              <span id="typedCountSpan" class="dataValue">xx</span>
            </div>
            <div class="statistics">
              <span class="dataKey">平均タイピング時間</span>
              <span id="averageTypingTimeSpan" class="dataValue">xx.xx秒</span>
            </div>
            <p class="new-highest-record-para" id="newHighestRecordPara">xxx xxxx xxx</p>
            <div class="closeButton">
              <label for="trigger"></label>
              閉じる
            </div>
          </div>
        </div>
      </div>

    </main>
  </body>
</html>
  <?php echo $__env->yieldContent('stageId'); ?>
<script src="/js/game.js"></script><?php /**PATH D:\LocalStorage\Projects\SimpleTyping\resources\views/layouts/game.blade.php ENDPATH**/ ?>