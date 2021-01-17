@extends('layouts.app')

@section('title')
Record
@endsection

@section('link')
<link rel="stylesheet" href="/css/record.css">
@endsection

@section('main')
<div class="record-panel">
  <div class="record-panel-header">
    <h2>Record</h2>
  </div>
  <div class="record-panel-content">
    <table>
      <tr>
        <th>ステージ名</th>
        <th>最高記録</th>
      </tr>
      <tr>
        <td>LEVEL 1</td>
        <td><span id="record_level1Span">xx.xx秒</span></td>
      </tr>
      <tr>
        <td>LEVEL 2</td>
        <td><span id="record_level2Span">xx.xx秒</span></td>
      </tr>
      <tr>
        <td>LEVEL 3</td>
        <td><span id="record_level3Span">xx.xx秒</span></td>
      </tr>
      <tr>
        <td>LEVEL 4</td>
        <td><span id="record_level4Span">xx.xx秒</span></td>
      </tr>
      <tr>
        <td>Score Attack</td>
        <td><span id="record_scoreAttackSpan">xx個</span></td>
      </tr>
      <tr>
        <td>Survival</td>
        <td><span id="record_survivalSpan">xx.xx秒</span></td>
      </tr>
    </table>
  </div>
</div>
@endsection

@section('script')
<script src="/js/record.js"></script>
@endsection
