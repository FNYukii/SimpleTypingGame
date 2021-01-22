@extends('layouts.main')

@section('title')
Record
@endsection

@section('link')
<link rel="stylesheet" href="/css/about-and-record.css">
@endsection

@section('main')
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
        <td><span id="record_level1Span">xx.xx秒</span></td>
        <td><span id="">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name nomalmode-color">LEVEL 2</td>
        <td><span id="record_level2Span">xx.xx 秒</span></td>
        <td><span id="">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name nomalmode-color">LEVEL 3</td>
        <td><span id="record_level3Span">xx.xx 秒</span></td>
        <td><span id="">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name nomalmode-color">LEVEL 4</td>
        <td><span id="record_level4Span">xx.xx 秒</span></td>
        <td><span id="">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name score-attack-color">Score Attack</td>
        <td><span id="">xx.xx 秒</span></td>
        <td><span id="record_scoreAttackSpan">xx 個</span></td>
      </tr>
      <tr>
        <td class="stage-name survival-color">Survival</td>
        <td><span id="record_survivalSpan">xx.xx 秒</span></td>
        <td><span id="">xx 個</span></td>
      </tr>
    </table>
  </div>
</div>
@endsection

@section('script')
<script src="/js/record.js"></script>
@endsection
