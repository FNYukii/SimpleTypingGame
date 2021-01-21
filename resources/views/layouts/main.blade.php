<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="auther" content="YuSan357">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="/css/main.css">
    @yield('link')
  </head>
  <body>
    <header>
      <div class="global-nav">
        <h1 class="global-nav-logo">
          <a href="/">Simple Typing</a>
        </h1>
        <ul class="global-nav-items-container">
          <li class="global-nav-item"><a href="/">Top</a></li>
          <li class="global-nav-item"><a href="about">About</a></li>
          <li class="global-nav-item"><a href="record">Record</a></li>
        </ul>
      </div>  
    </header>
    <main>
      @yield('main')
    </main>
  </body>
</html>
@yield('script')