import logo from './logo.svg';
import './App.css';
import React from 'react';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';
import Popup from './components/Popup';

import rocketImage1 from './images/Angara A5 _ International Launch Service.jpeg';
import rocketImage2 from './images/Artemis .jpeg';
import rocketImage3 from './images/falcon.jpeg';
import rocketImage4 from './images/corpenicus.jpeg';
import rocketImage5 from './images/soyuz.jpeg';


function App() {

    const gridData = [
        {id: 1, name:'Falcon', status:'Active', image:rocketImage1},
        {id: 2, name:'Corpenicus-sentinel', status: 'Active', image:rocketImage2},
        {id: 3, name:'Raptor', status:'Active', image:rocketImage3},
        {id: 4, name:'Angara', status:'Active', image:rocketImage4},
        {id: 5, name:'Soyuz TMA-04', status:'Active', image:rocketImage5},
    ];
    const popupData ={id:1, name:'Rocket1', details:'some details about rocket 1'};
    return (
        <div className="App">
            <header className="App-header">
                <Banner />
                <SearchForm />
                <DataGrid data={gridData} />
                {gridData.map((rocket) => (
                   <Popup key={rocket.id} itemData={{id:rocket.id, name:rocket.name, details: 'Details about ${rocket.name}' }} onClose={() => {}} />
                ))}
                <Popup  itemData={popupData} onClose={() => {}} />
                <img src={logo} className="App-logo" alt="logo" />

            </header>
        </div>
    );
}

export default App;
