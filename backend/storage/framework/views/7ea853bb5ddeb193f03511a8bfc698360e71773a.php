

<?php $__env->startSection('title'); ?>
Record
<?php $__env->stopSection(); ?>

<?php $__env->startSection('link'); ?>
<link rel="stylesheet" href="/css/about-and-record.css">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('main'); ?>
<div class="content-card">
  <div class="content-card-header">
    <h2>最高記録</h2>
  </div>
  <div class="content-card-content">
    <table>
      <tr>
        <th>ステージ名</th>
        <th>プレイ時間</th>
        <th>入力した単語数</th>
      </tr>
      <tr>
        <td class="stage-name nomalmode-color">LEVEL 1</td>
        <td><span id="level1_playedTimeSpan">xx.xx 秒</span></td>
        <td><span id="level1_typedCountSpan">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name nomalmode-color">LEVEL 2</td>
        <td><span id="level2_playedTimeSpan">xx.xx 秒</span></td>
        <td><span id="level2_typedCountSpan">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name nomalmode-color">LEVEL 3</td>
        <td><span id="level3_playedTimeSpan">xx.xx 秒</span></td>
        <td><span id="level3_typedCountSpan">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name nomalmode-color">LEVEL 4</td>
        <td><span id="level4_playedTimeSpan">xx.xx 秒</span></td>
        <td><span id="level4_typedCountSpan">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name score-attack-color">Score Attack</td>
        <td><span id="scoreAttack_playedTimeSpan">xx.xx 秒</span></td>
        <td><span id="scoreAttack_typedCountSpan">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name survival-color">Survival</td>
        <td><span id="survival_playedTimeSpan">xx.xx 秒</span></td>
        <td><span id="survival_typedCountSpan">xx 個</span></td>
      </tr>
      
    </table>
  </div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('script'); ?>
<script src="/js/record.js"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\LocalStorage\Projects\SimpleTyping\resources\views/record.blade.php ENDPATH**/ ?>