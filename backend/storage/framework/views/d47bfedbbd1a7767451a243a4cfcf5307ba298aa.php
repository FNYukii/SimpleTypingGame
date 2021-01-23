

<?php $__env->startSection('title'); ?>
トップ
<?php $__env->stopSection(); ?>

<?php $__env->startSection('link'); ?>
<link rel="stylesheet" href="/css/index.css">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('main'); ?>
<div class="panels-container">
  <div class="panel">
    <a href="level1"></a>
    <div class="stage-name">LEVEL 1</div>
    <div class="stage-info">2文字以下の短い単語が出題されます</div>
  </div>
  <div class="panel">
    <a href="level2"></a>
    <div class="stage-name">LEVEL 2</div>
    <div class="stage-info">3～4文字の単語が出題されます</div>
  </div>
  <div class="panel">
    <a href="level3"></a>
    <div class="stage-name">LEVEL 3</div>
    <div class="stage-info">5～6文字の単語が出題されます</div>
  </div>
  <div class="panel">
    <a href="level4"></a>
    <div class="stage-name">LEVEL 4</div>
    <div class="stage-info">7文字以上の長い単語が出題されます</div>
  </div>
  <div class="panel score-attack">
    <a href="score-attack"></a>
    <div class="stage-name">Score attack</div>
    <div class="stage-info">30秒間でより多くの単語を入力しましょう</div>
  </div>
  <div class="panel survival">
    <a href="survival"></a>
    <div class="stage-name">Survival</div>
    <div class="stage-info">入力に成功すると、残り時間が2秒回復します</div>
  </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\LocalStorage\Projects\SimpleTyping\resources\views/index.blade.php ENDPATH**/ ?>