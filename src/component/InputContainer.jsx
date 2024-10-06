export default function InputContainer({ label, option, selectPlace, currencyChange, amount, amountChange }) {
    // console.log("options",option)
    return (<>
        <div className="h-[8rem] w-[21rem] flex flex-col rounded-lg" style={{
            backdropFilter: `blur(10px) saturate(200%)`,
            webkitBackdropFilter: `blur(2px) saturate(200%)`,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
        }}>
            <div className="flex flex-row justify-between pt-5 px-5">

                <span><h1>{label}</h1></span>
                <span><h1>Select Currency</h1></span>
            </div>
            <div className="flex flex-row justify-between pt-5 px-5">
                <input type="number" placeholder="enter Amount" className="w-32 rounded-md" value={amount} onChange={(e) => amountChange(Number(e.target.value))} />
                <select value={selectPlace} onChange={(e) => currencyChange(e.target.value)} >
                    {
                        option.map((place) => {
                            {/* console.log(place,i) */ }
                            return (<>
                                <option key={place} value={place}>{place}</option>
                            </>)
                        })
                    }
                </select>
            </div>
        </div>
    </>)
}
