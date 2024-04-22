import "./styles/Common.scss";
import "./styles/Main.scss";
import Header from "./components/Header";
import HeaderInner from "./components/HeaderInner";

// server 및 db는 node js 간단한 인강이라도 듣고 하자.
// import "../server";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <HeaderInner />
      </main>
    </div>
  );
}

export default App;
