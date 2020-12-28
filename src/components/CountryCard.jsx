import React from "react";
import { Link } from "react-router-dom";
import '../desing.css';

const CountryCard = ({ country }) => {
    return (
        <Link to={'/' + country.name}  >  
        <div className="list">
            <div className="card mb-3 card border-dark shadow-lg p-3 mb-5 bg-white rounded"  >
                <div class="card-header bg-dark">
                    <h5 style={{ color: '#ede574' }}>{country.nativeName}</h5>
                </div>
                <div className="card-body text-left h-100">
                    <h5 className="card-title " style={{ color: 'black' }} > {country.name}</h5>
                </div>
            </div>
        </div>
        </Link>

    )
}
export default CountryCard;