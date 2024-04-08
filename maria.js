const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "localhost",
  port: 3306,
  user: "gomdori2",
  password: "4589",
  database: "poeData",
  connectionLimit: 5, // 필요한 경우 조정 가능
});
module.exports = pool;
pool
  .getConnection()
  .then((conn) => {
    console.log("데이터베이스에 성공적으로 연결되었습니다.");

    // 쿼리 실행
    conn
      .query("select * from user_data")
      .then((rows) => {
        // 결과 처리
        console.log(rows);
        conn.release(); // 연결 해제
      })
      .catch((err) => {
        // 에러 처리
        console.error(err);
        conn.release(); // 연결 해제
      });

    // 연결 종료

    // USE poeData;

    conn.release();
  })
  .catch((err) => {});
