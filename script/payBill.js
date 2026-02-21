document.getElementById("pay-bill-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("pay-bill-bank");
  console.log(bankAccount);

  if (bankAccount === "Select A Bank") {
    alert("please select a bank");
    return;
  }

  const accno = getValueFromInput("pay-bill-number");
  if (accno.length != 11) {
    alert("invalid acc no");
    return;
  }

  const amount = getValueFromInput("pay-bill-amount");
  const newBalance = getBalance() - Number(amount);
  console.log(newBalance);
  setBalance(newBalance);

  const pin = getValueFromInput("pay-bill-pin");

  if (pin === "1234") {
    alert(`add money success from ${bankAccount}`);
  } else {
    alert("invalid pin");
    return;
  }
});
