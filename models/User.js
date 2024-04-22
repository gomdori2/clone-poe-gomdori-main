const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    typeof: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    // 존 안 @naver.com
    // trim이 존 안의 공백을 없애줌
    // 존안이됨
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastnname: {
    type: String,
    maxlength: 50,
  },
  role: {
    typeof: Number,
    default: 0,
    // default 값 안주면 0을 주겠다.
  },
  image: String, // 한줄이면 이래도됨
  token: {
    type: String, // 유효성 관리를 위한 토큰
  },
  // token 유효기간
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
