import { useQuery } from "@tanstack/react-query"
import { useState } from "react";


export const getDataToCompare = async (currency, currencies) => {
    const url = `https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${currency}&page=1&per_page=20`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '912ed96bd2msh8744e85583e08cep145e10jsn65fe4d870f31',
            'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let currencyExistOrNot = await currencies.find(el => el === currency.toUpperCase())
        if (currencyExistOrNot === undefined) {
            throw new Error()
        }
        return result

    } catch (error) {
        console.error(error);
    }
}
export const useCompareCurrency = (currency, currencies) => {
    const [isCurrencySelected, setIsCurrencySelected] = useState(false)
    const compareData = useQuery(
        ["compare"],
        () => getDataToCompare(currency, currencies),
        {
            enabled: isCurrencySelected
        }
    )
    return {
        compareData,
        setIsCurrencySelected,
        isCurrencySelected
    }
}