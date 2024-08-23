<br/>
<br/>
![runes3.png](https://i.ibb.co/f9nxNGf/runes3-longlogo-light.png)
<br/>
<br/>

**NOTE:** You can find a full version of our docs [here](https://runes3.org)

## 🚀 Quickstart

Runes3 is a modern Typescript and NodeJS llibrary
for Bitcoin Runes. Featuring XVERSE wallet support,
rune balance and event indexing, ultra fast
runestone decoders with WASM and much more!

### Install Runes3

```bash
npm i runes3
```

### Get a Runes RPC endpoint

You will also need an RPC endpoint to connect to a Nana indexer (see below for a free one) or a fully synced [nana](https://docs.nanas.sh/developers/run-a-node) node.

#### What is Nana?

Nana is an extension to the original Runes indexer by Ord. It was developed by **Runeapes Labs** and comes with extra features such as:

- More extensive endpoints to its RPC than ord
- Much faster indexing (where as Ord can take up to a week, nana indexes the runes ledger in 12 hours). _Infact if you are reading this at night and
  you setup a nana node right now, it will be ready by the time you wake up (assuming youre a heavy sleeper haha)._
- A 30GB total ledger size (rather than 220gb+ for ORD)
- A codebase written fully in Javascript and an industry standard database (postgresql) which can be easily modified to do whatever you want.
- Doesn't need a BTC full node to build the Runes ledger! (can use an RPC endpoint like from [quicknode](https://www.quicknode.com/)) saving you about 100 dollars per month in block cloud storage.

#### If you don't want to host a version of Nana yourself:

You can also use satsignal's free public endpoint:

```sh
https://runes.satsignal.io/v1
```

or if you require your own personal authed endpoint (with much more flexible rate limits), you can create an account for free with our friends over at https://satsignal.io

### Connect to the RPC with Runes3

```javascript
const { Runes3 } = require("runes3");

const Runes = new Runes3("https://runes.satsignal.io/v1");

/*
NOTE:
satsignal.io provides this free endpoint for everyone to support the Runes
ecoosystem. If you need higher ratelimits you can create an account there and
get an authed endpoint or run your own runes node with
https://github.com/runeapeslabs/Nana (1tb+ of storage and 16gb of ram required)
*/
```

### 3. Get an Accounts balance

```javascript
const { Runes3 } = require("runes3");

const Runes = new Runes3("https://runes.satsignal.io/v1");

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
```
