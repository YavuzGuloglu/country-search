import React from 'react'

const About = () => {
    return (
        <div className="card border-dark shadow-lg p-3 mb-5 bg-white rounded ">
            <div className="card-header bg-dark" style={{ color: 'yellow',fontSize:"19px" }}>
                <h3>Uygulama Hakkında</h3>
            </div>
            <div class=" mt-3 ">
                <div className="text-left">
                    <p style={{ fontSize: "19px" }}>
                        Country search adlı uygulama. React JavaScript kütüphanesi ile geliştrilimiştir.
                        Uygulamada ülkeler liste halinde gelmektedir.
                   Arama işlemi yapılabilmektedir.İstenen ülkeye tıklanıldığunda ülke hakkında bilgiler bulunmaktadır.</p>
                </div>
                <b> Ülke Api : https://restcountries.eu/</b>
            </div>
        </div>
    )
}

export default About;