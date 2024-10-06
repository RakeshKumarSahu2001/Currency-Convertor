import { useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import InputContainer from './component/InputContainer'
import backgroundImg from "./assets/background.jpg"


function App() {
  useCurrencyInfo("USD", "INR", 1)
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const data = useCurrencyInfo(from, to, amount)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const dataArr = [
    "USD",
    "EUR",
    "GBP",
    "CAD",
    "AUD",
    "JPY",
    "ADA",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BCH",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTC",
    "BTN",
    "BWP",
    "BYN",
    "BYR",
    "BZD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOGE",
    "DOP",
    "DOT",
    "DZD",
    "EEK",
    "EGP",
    "ERN",
    "ETB",
    "ETH",
    "FJD",
    "FKP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LINK",
    "LKR",
    "LRD",
    "LSL",
    "LTC",
    "LTL",
    "LUNA",
    "LVL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLL",
    "SOS",
    "SPL",
    "SRD",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "UNI",
    "UYU",
    "UZS",
    "VEF",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XCD",
    "XDR",
    "XLM",
    "XOF",
    "XPD",
    "XPF",
    "XPT",
    "XRP",
    "YER",
    "ZAR",
    "ZMK",
    "ZMW",
    "ZWD"
  ]

  // console.log("appdata", data)

  const convert = () => {
    if (data === "" || data === undefined || data === null) {
      alert("convertion rate is not present")
    }
    setConvertedAmount(data)
  }


  return (<>
    <div className='h-screen w-screen grid place-content-center space-y-2' style={{ background: url(`${backgroundImg}`) }}>
      <div className='h-96 w-96 grid place-content-center border-solid border-gray-950 space-y-3'>
        <InputContainer label="From" option={dataArr} selectPlace={from} currencyChange={(e) => setFrom(e)} amount={amount} amountChange={(e) => setAmount(e)} />
        <InputContainer label="To" option={dataArr} selectPlace={to} currencyChange={(e) => setTo(e)} amount={convertedAmount} amountChange={(e) => setAmount(e)} />
        <button onClick={convert} className='bg-gray-500 py-2 rounded-lg'>Click to convert</button>

      </div>
    </div>
  </>)
}

export default App
