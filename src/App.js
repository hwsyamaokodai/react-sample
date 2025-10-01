import './App.css';

function App() {
  // JavaScript変数を定義
  const userName = "kodai";

  // ECサイトでよく使う値
  const productPrice = 12345;
  const discountRate = 0.15; // 15%割引
  const shippingFee = 500;
  const orderDate = new Date();
  const deliveryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3日後

  return (
    <div className="App">
      <header className="App-header">
        <h1>React学習を始めました！</h1>
        <hr style={{margin: '10px 0', borderColor: 'white'}} />
        <h2>🛒 ECサイトでよく使うメソッド</h2>
        
        <p>商品価格: ¥{productPrice.toLocaleString('ja-JP')}</p>
        <p>割引後価格: ¥{Math.floor(productPrice * (1 - discountRate)).toLocaleString('ja-JP')}</p>
        <p>送料: ¥{shippingFee.toLocaleString('ja-JP')}</p>
        <p>合計金額: ¥{(Math.floor(productPrice * (1 - discountRate)) + shippingFee).toLocaleString('ja-JP')}</p>
        
        <p>注文日: {orderDate.toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'long', 
          day: 'numeric',
          weekday: 'long'
        })}</p>
        <p>お届け予定日: {deliveryDate.toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'long', 
          day: 'numeric',
          weekday: 'long'
        })}</p>
        
        <p>割引率: {(discountRate * 100).toFixed(1)}% OFF</p>
        <p>税込価格（10%）: ¥{Math.floor(productPrice * 1.1).toLocaleString('ja-JP')}</p>
        <button onClick={() => alert(`${userName}さん、ボタンがクリックされました！`)}>
          クリックしてみて
        </button>
      </header>
    </div>
  );
}

export default App;
