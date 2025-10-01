import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React学習を始めました！</h1>
        <p>これが私の最初のReactアプリケーションです。</p>
        <p>現在時刻: {new Date().toLocaleString()}</p>
        <button onClick={() => alert('ボタンがクリックされました！')}>
          クリックしてみて
        </button>
      </header>
    </div>
  );
}

export default App;
