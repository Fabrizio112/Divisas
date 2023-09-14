import { useQuery } from "@tanstack/react-query"
import { useState } from "react";


export const getCurrenciesConversionData = async (from, to, amount) => {
    const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`;
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
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const useConversionCurrency = (from, to, amount) => {
    const [calculated, setCalculated] = useState(false)
    const conversionCurrencyData = useQuery(
        ["conversion"],
        () => getCurrenciesConversionData(from, to, amount),
        {
            enabled: calculated
        }
    )

    return {
        conversionCurrencyData,
        setCalculated
    }
}