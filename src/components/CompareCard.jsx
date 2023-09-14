function CompareCard({ currency, baseReal }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h3 className="card-title">{baseReal} / {currency.base}</h3>
                <hr />
                <p className="card-text">1 {baseReal}/{currency.value} {currency.base}</p>
            </div>
        </div>);
}

export default CompareCard;