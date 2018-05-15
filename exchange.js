//javascript

//選択された通貨を格納する変数を宣言
var selectedCurrency = "ドル";

//通貨を選択した時の処理
function changeCurrency() {
  //選択された通貨を変数selectedCurrencyに格納
  var currency = document.getElementById('currency');
  selectedCurrency = currency.options[currency.selectedIndex].value;

  //為替レートのDOM要素を取得
  var rateElement = document.getElementById('rate');

  //選択された通貨から為替レートをセット
  switch (selectedCurrency) {
    case "ドル":
      rateElement.value = 105.5;
      break;
    case "ユーロ":
      rateElement.value = 129.6;
      break;
    case "人民元":
      rateElement.value = 16.6;
      break;
    case "ポンド":
      rateElement.value = 147.2;
      break;
    default:
      rateElement.value = 1;
      break;
  }

  //ボタンのラベル変更
  document.getElementById('buttonExchange').value = selectedCurrency + "から円に両替";
  document.getElementById('buttonExchange2').value = "円から" + selectedCurrency + "に両替";
}


function exchange(exchangeType) {
  //為替レート、両替する金額の取得
  var rate = document.getElementById('rate').value;
  var inMoney = document.getElementById('inMoney').value;

  //計算結果と通貨の変数宣言
  var exchangeMoney;
  var currency;

  var outcurrencyElement = document.getElementById('outcurrency');

  //為替計算
  if (exchangeType == "toYen") {
    //選択した通貨から円へ両替
    exchangeMoney = inMoney * rate;
    currency = "円";
    outcurrencyElement.innerHTML = "両替結果：" + selectedCurrency + "→" + currency;
  } else {
    //円から選択した通貨へ両替
    exchangeMoney = inMoney / rate;
    //currency = "ドル";
    currency = selectedCurrency;
    outcurrencyElement.innerHTML = "両替結果：円→" + currency;
  }

  //少数点第３位を四捨五入
  exchangeMoney = Math.round(exchangeMoney * 100) / 100;

  //数値チェック
  if (isNaN(exchangeMoney)) {
    alert("数値を入力してください");
    exchangeMoney = "---";
  }
  //為替レート入力チェック
  if (rate <= 0) {
    alert("為替レートには0より大きな数値を入力してください");
    exchangeMoney = "---";
  }



  //両替結果要素へ計算結果を書き込む
  var outMoneyElement = document.getElementById('outMoney');
  outMoneyElement.innerHTML = exchangeMoney + currency;
}
