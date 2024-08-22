const { Runes3 } = require("../lib/index");

const Runes = new Runes3();

const start = async () => {
  const balances = await Runes.getAccount(
    "bc1pdcy7dw547w8qle3ltc3efulsv2ng66pwy3fwcxpphmn8ghc5sxfsgh72la"
  ).getBalances();

  console.log("This address has the following runes: ", balances.keys());

  console.log("The balance for 845769:3964 is: ");
  const balance = balances.get("845769:3964").parse();

  console.log(balance);
};

start();
