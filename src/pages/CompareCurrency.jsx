import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeCompareState } from "../store/compareSlice";
import { useCompareCurrency } from "../hooks/useCompareCurrency";
import CompareCard from "../components/CompareCard";
import { modifyCurrencies } from "../helper/modifyCurrencies";
import { useCurrencies } from "../hooks/useCurrencies";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";


function CompareCurrency() {
    const compare = useSelector(state => state.compare)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { currencyData } = useCurrencies()
    const { compareData, setIsCurrencySelected, isCurrencySelected } = useCompareCurrency(compare, currencyData.data)
    const handleWrite = (e) => {
        dispatch(changeCompareState(e.target.value))
    }
    const handleCompare = () => {
        setIsCurrencySelected(true)
        if (isCurrencySelected === true) {
            compareData.refetch()
        }
    }
    const currenciesToMap = compareData.data && modifyCurrencies(compareData.data.result)
    useEffect(() => {
        setIsCurrencySelected(false)
    }, [])
    return (<>
        <button onClick={() => navigate(-1)} className="btn btn-sm btn-primary">Go Back</button>
        <section className="container text-center">
            <h1 className="display-1 my-5">Compare Currency</h1>
            <div>
                <h2>Enter the currency: </h2>
                <input type="text" maxLength="3" className="form-control my-4 fs-3 text-center" onKeyUp={handleWrite} />
                <button className="btn btn-lg btn-dark px-5 py-2" onClick={handleCompare} disabled={compareData.isFetching}>Compare</button>
            </div>
            {(compareData.data && !compareData.isError && !compareData.isLoading && !compareData.isFetching) && < >
                <h1 className="m-5">{compareData.data.base} at {compareData.data.date} {new Date(compareData.data.timestamp).toLocaleTimeString()}</h1>
                <section className="container-cards">
                    {currenciesToMap.map(currency => <CompareCard key={currency.base} currency={currency} baseReal={compareData.data.base} />)}
                </section>
            </>}
            {(compareData.isError && !compareData.isFetching) && <h1 className="m-5">Currency not exist </h1>}
            {compareData.isFetching && <h1 className="m-5">Loading ...</h1>}

        </section>
    </>);
}

export default CompareCurrency;