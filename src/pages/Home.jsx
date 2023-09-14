import { useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { getCurrenciesData, useCurrencies } from "../hooks/useCurrencies";



function Home() {
    const queryClient = useQueryClient()

    const handleMouseEnter = () => {
        queryClient.prefetchQuery(
            ["currencies"],
            getCurrenciesData,
            {
                staleTime: 10000000 * 60
            }
        )
    }


    return (<section className="container home d-flex flex-column justify-content-center align-items-center">
        <h1 className="m-5 display-4">What operation do you want to do?</h1>
        <div className="w-50 d-flex justify-content-around">
            <NavLink className="btn btn-lg p-3 btn-outline-primary" to="/calculate" onMouseEnter={handleMouseEnter}>Calculate Currencies</NavLink>
            <NavLink className="btn btn-lg p-3 btn-outline-danger" to="/compare">Compare Currencies</NavLink>
        </div>
    </section>);
}

export default Home;