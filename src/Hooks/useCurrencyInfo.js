import { useEffect, useState } from "react";

function useCurrencyInfo(from,to,amount) {

    // old API
    // const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${place}.json`

    // new API
    const url=`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`
    const options = {
        method: 'GET',
        headers: {
            "x-rapidapi-host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
            "x-rapidapi-key": "c763f7c6ccmsh4516b52e0e26ea9p14c81bjsnecae813296a8"
        }
    }
    const [data, setData] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url,options)
                const info = await response.json()
                // console.log(`currency convertion rate of${to} to ${from} is ${info.result} `)
                setData(info.result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [from,to,amount])


    return data

}
export default useCurrencyInfo;