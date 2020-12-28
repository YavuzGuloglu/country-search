import React from 'react';
import axios from 'axios';

class Country extends React.Component {
    state = {
        country: {}
    }

    componentDidMount() {
        let name = this.props.match.params.name;
        console.log(name);
        axios.get('https://restcountries.eu/rest/v2/name/' + name + '?fullText=true')
            .then(rsp => {
                this.setState({
                    country: rsp.data[0]
                })
            })
    }

    render() {
        const { country } = this.state;
        return (

            <div>
                <div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card-header bg-dark">
                        <h3 style={{ color: 'yellow' }}> {country.name} </h3></div>
                    <div class="card-body ">
                        <div className="card-body">
                            <div class="row">
                                <div class="col-7">
                                    <div className="row ">
                                        <dt className="col-sm-4 text-right"> Capital : </dt>
                                        <dd className="col-sm-8 text-left"> {country.capital} </dd>

                                        <dt className="col-sm-4 text-right">Population : </dt>
                                        <dd className="col-sm-8 text-left"> {country.population} </dd>

                                        <dt className="col-sm-4 text-right">Region : </dt>
                                        <dd className="col-sm-8 text-left"> {country.region} </dd>

                                        <dt className="col-sm-4 text-right">Subregion  : </dt>
                                        <dd className="col-sm-8 text-left"> {country.subregion} </dd>

                                    </div>
                                </div>
                                <div class="col-5">
                                    <div className="row ">
                                        <dt className="col-sm-6 text-right">Area : </dt>
                                        <dd className="col-sm-6 text-left"> {country.area} km² </dd>

                                        <dt className="col-sm-6 text-right">Demonym : </dt>
                                        <dd className="col-sm-6 text-left"> {country.demonym} </dd>

                                        <dt className="col-sm-6 text-right"> Abbreviations : </dt>
                                        <dd className="col-sm-6 text-left"> {country.alpha2Code} - {country.alpha3Code}  </dd>

                                        <dt className="col-sm-6 text-right"> Numeric Code : </dt>
                                        <dd className="col-sm-6 text-left"> {country.numericCode}  </dd>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="card-text" ><small class="text-muted" > {country.name}  Country Flag</small></p>
                        <div className="card">
                            <img src={country.flag} alt="" className="card-img-top " />
                          
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default Country;