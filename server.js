// express 불러오기
const express = require("express");
// express 인스턴스 생성
const app = express();
// 포트 정보
const port = 3000;

// 몽고디비
// 아래 오브젝트 에러같은거 잡아준다함.
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://seonghwanyoon0:5zwmKeTc9cqTaSIZ@cluster0.18jmhqw.mongodb.net/"
  )
  .then(() => console.log("MongoDb Connect..."))
  .catch((err) => console.log(err));

// 라우트 설정
// HTTP GET 방식으로 '/' 경로를 요청하였을 때
// Hello World!라는 문자열을 결과값으로 보냄
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 서버 실행
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});


// model 스키마를 감싸주는 역할

// 스키마는 하나하나의 정보들을 적어주는거 