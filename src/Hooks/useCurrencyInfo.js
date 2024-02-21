import React, { useEffect, useState } from "react";

function useCurrencyInfo(place) {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${place}.json`
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const info = await response.json()
                // console.log(info[place])
                setData(info[place])
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [place])


    return data

}
export default useCurrencyInfo;