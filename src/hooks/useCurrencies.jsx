import { useQuery } from "@tanstack/react-query";

export const getCurrenciesData = async () => {
    const url = 'https://currency-converter-pro1.p.rapidapi.com/currencies';
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
        return Object.keys(result.result);
    } catch (error) {
        console.error(error);
    }
}



export const useCurrencies = () => {
    const currencyData = useQuery(
        ["currencies"],
        getCurrenciesData,
        {
            staleTime: 10000000 * 60
        }

    )
    return {
        currencyData
    }
}