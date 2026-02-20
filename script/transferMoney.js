document.getElementById("transfer-btn").addEventListener("click", function () {
  const transferAcc = document.getElementById("transfer-number").value;

  const pin = document.getElementById("transfer-pin").value;

  const transfer = document.getElementById("transfer-amount").value;

  const transferAmount = Number(transfer);

  const balance = document.getElementById("balance").innerText;

  const balanceAmount = Number(balance);

  if (transferAcc.length != 11) {
    alert("Invalid Transfer Number");
    return;
  }

  if (pin != 1234) {
    alert("Invalid Pin");
    return;
  }

  if (transferAmount <= 0 || transferAmount > balance) {
    alert("Invalid Amount");
    return;
  }

  const newBalance = balanceAmount - transferAmount;

  document.getElementById("balance").innerText = newBalance;

  alert("Transfer Successful");
});
