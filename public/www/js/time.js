window.addEventListener("load", () => {
  const imgDay = document.getElementById("imgDay");
  const imgHour = document.getElementById("imgHour");
  const imgMin = document.getElementById("imgMin");
  const imgSec = document.getElementById("imgSec");
  function clock() {
    const date = new Date();
    let d = date.getDay();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    // String(s).length 기존에 length 로 잡던게 - 되면서 50부터라 length가 의미 없어짐
    // charAt으로 첫째값뽑는걸로 변경
    let dString = String(d).length === 1 ? `0${d}` : `${30 - d}`;
    let hString = String(h).length === 1 ? `0${h}` : `${24 - h}`;
    console.log(String(h).length === 1);
    let mString =
      String(m).charAt(0) === "5" && String(m) !== "50" && String(m).length > 1
        ? "0" + `${60 - m}`
        : 60 - m;
    let sString =
      String(s).charAt(0) === "5" && String(s) !== "50" && String(s).length > 1
        ? "0" + `${60 - s}`
        : 60 - s;
    imgDay.innerHTML = `${dString}`;
    imgHour.innerHTML = `${hString}`;
    imgMin.innerHTML = `${mString}`;
    imgSec.innerHTML = `${sString}`;
  }
  const timer = setInterval(() => {
    clock();
  }, 1000);
  //   setTimeout(function () {
  //     // 시간 멈추기 평생 도는건 아니니
  //     clearInterval(timer);
  //   }, 60000);
});
