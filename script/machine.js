function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("current balance", Number(balance));
  return Number(balance);
}

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

let addMoneyCount = 0;
let cashoutCount = 0;

function hideShow(id) {
  const target = document.getElementById(id);
  const isAlreadyVisible = !target.classList.contains("hidden");

  document.getElementById("add-money").classList.add("hidden");
  document.getElementById("cashout").classList.add("hidden");
  document.getElementById("transfer").classList.add("hidden");

  if (!isAlreadyVisible) {
    target.classList.remove("hidden");
  }
}
