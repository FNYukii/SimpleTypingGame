function Header() {
  return (
    <div>
      <a id="logo" href="index.html">シンプルタイピング☆</a>
      <a id="information" href="">Information</a>
      <a id="ranking" href="">Ranking</a>
    </div>
  );
}
const header = document.getElementsByTagName("header")[0];
ReactDOM.render(<Header/>, header);

function Footer() {
  return(
    <div>
      <p>©YuSan357</p>
    </div>
  );
}
const footer = document.getElementsByTagName("footer")[0];
ReactDOM.render(<Footer/>, footer);
