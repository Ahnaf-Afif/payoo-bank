document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("add-money-bank");
  console.log(bankAccount);

  if (bankAccount === "Select A Bank") {
    alert("please select a bank");
    return;
  }

  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("invalid acc no");
    return;
  }

  const amount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);
  console.log(newBalance);
  setBalance(newBalance);

  const pin = getValueFromInput("add-money-pin");

  if (pin === "1234") {
    alert(`add money success from ${bankAccount}`);
  } else {
    alert("invalid pin");
    return;
  }
});
