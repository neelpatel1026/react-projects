// import { useEffect,useState } from "react";


// function useCurrencyInfo(currency){
//     const [data,setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{baseCurrency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data)
//     },
//      // eslint-disable-next-line react-hooks/exhaustive-deps
//      [currency])
     
//      console.log(data);
//      return data

// }

// export default useCurrencyInfo;


import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch currency data");
        }
        return res.json();
      })
      .then((res) => {
        setData(res[baseCurrency]);
      })
      .catch((error) => {
        console.error(error);
      });

  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
