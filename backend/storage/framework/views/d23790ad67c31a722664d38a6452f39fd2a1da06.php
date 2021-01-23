

<?php $__env->startSection('title'); ?>
Level1
<?php $__env->stopSection(); ?>

<?php $__env->startSection('stageName'); ?>
LEVEL 1
<?php $__env->stopSection(); ?>

<?php $__env->startSection('stageId'); ?>
<script>
  const stageId = 1;
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.game', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/level1.blade.php ENDPATH**/ ?>