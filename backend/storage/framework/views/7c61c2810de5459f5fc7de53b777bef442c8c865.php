<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="auther" content="YuSan357">
    <title><?php echo $__env->yieldContent('title'); ?></title>
    <link rel="stylesheet" href="/css/main.css">
    <?php echo $__env->yieldContent('link'); ?>
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
      <?php echo $__env->yieldContent('main'); ?>
    </main>
  </body>
</html>
<?php echo $__env->yieldContent('script'); ?><?php /**PATH D:\LocalStorage\Projects\SimpleTyping\resources\views/layouts/main.blade.php ENDPATH**/ ?>