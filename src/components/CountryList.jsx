import React from 'react';
import Data from '../Data'
import CountryCard from './CountryCard';
import axios from 'axios';


class CountryList extends React.Component {

    state = {
        countries: []
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(rsp => {
                // console.log(rsp.data);
                this.setState({ countries: rsp.data.slice(0, 20) })
            })
    }
    searchHandler = (e) => {
        //console.log(e.target.value);
        axios.get('https://restcountries.eu/rest/v2/name/' + e.target.value)
            .then(res => {
                // console.log(res.data);
                this.setState({ countries: res.data })
            })

    }

    render() {
        const countryList = this.state.countries.map((ct) => {
            return (
                <CountryCard country={ct} key={ct.numericCode} />
            )
        })
        return (
            <div>
                { <input type="text" className="form-control mb-3 " name="search"
                 style={{ place: 'dark' }} onChange={this.searchHandler} placeholder="Enter Country Name" />}
                
                <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor: '#000000'
                }} />
                
                <div className="card-columns " >
                    {countryList}
                </div>
            </div>
        )
    }
}
export default CountryList;

