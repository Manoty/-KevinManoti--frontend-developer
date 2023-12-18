import React from 'react';
import rocketImage1 from '../images/Angara A5 _ International Launch Service.jpeg';
import rocketImage2 from '../images/Artemis .jpeg';
import rocketImage3 from '../images/falcon.jpeg';
import rocketImage4 from '../images/corpenicus.jpeg';
import rocketImage5 from '../images/soyuz.jpeg';

const DataGrid = ({ data }) => {
    const getImageForRocket = (rocketName) => {
        const imageMap = {
            'Rocket 1': rocketImage1,
            'Rocket 2': rocketImage2,
            'Rocket 3': rocketImage3,
            'Rocket 4': rocketImage4,
            'Rocket 5': rocketImage5,
        };
        return imageMap[rocketName] || rocketImage1;
    }
    return (
        <div className="data-grid">
            {/* Your data grid content goes here */}
            {data.map(item => (
                <div key={item.id} className="grid-item">
                    <img src={getImageForRocket(item.name)} alt={`Rocket ${item.id}`} />
                    {/* Display grid item content including rocket image */}
                    {item.name}

                </div>
            ))}
            {/* Pagination component goes here */}
        </div>
    );
};

export default DataGrid;