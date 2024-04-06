import React, {useState , useRef} from 'react';
import europ from './places/tim-roosjen-FzDQrLFcRs4-unsplash.jpg';
import thai from './places/thailand.jpg';
import malasiya from './places/malasiya.jpg';
import bali from './places/bali.jpg';
import dubai from './places/dubai.jpg';
import singapore from './places/singapore.jpg';
import maldives from './places/maldives.jpg';
import austreliya from './places/austreliya.jpg';
import turkey from './places/turky.jpg';
import vietnam from './places/vietnam.jpg'
import maurititius from './places/morutitit.jpg';
import gujarat from './places/guj.jpg';
import maharastra from './places/mumbai.jpg';
import uttrakhand from './places/uk.jpg';
import sa from './places/SA.jpg'
import egypt from './places/egypt.jpg'
import hongkong from './places/hinkong.jpg'
import Europ from './packegs/EuropPac'
import Thai from './packegs/thaiPac'
import Maru from './packegs/MaruPac'
import Malesiya from './packegs/MalaPac'
import Vietnam from './packegs/VietPac'
import Guj from './packegs/gujPac'


const destinations = [
    {
        name: 'Europ',
        image: europ,
        startingPrice: 'Rs.2,22,200 per person'
    },
    {
        name: 'Thailand',
        image: thai,
        startingPrice: 'Rs.54,200 per person'
    },
    {
        name: 'Malaysia',
        image: malasiya,
        startingPrice: 'Rs.59,800 per person'
    },
    {
        name: 'Bali',
        image: bali,
        startingPrice: 'Rs.98,800 per person'
    },
    {
        name: 'Dubai',
        image: dubai,
        startingPrice: 'Rs.80,600 per person'
    },
    {
        name: 'Singapore',
        image: singapore,
        startingPrice: 'Rs.62,800 per person'
    },
    {
        name: 'Maldives',
        image: maldives,
        startingPrice: 'Rs.79,500 per person'
    },
    {
        name: 'Australia',
        image: austreliya,
        startingPrice: 'Rs.56,200 per person'
    },
    {
        name: 'Turkey',
        image: turkey,
        startingPrice: 'Rs.1,22,100 per person'
    }
];
const uxDestination = [
    {
        name: 'Vietnam',
        image: vietnam,
        startingPrice: 'Rs.14,600 per person'
    },
    {
        name: 'Mauritius',
        image: maurititius,
        startingPrice: 'Rs.34,600 per person'
    },
    {
        name: 'Gujarat',
        image: gujarat,
        startingPrice: 'Rs.24,400 per person'
    },
    {
        name: 'Maharashtra',
        image: maharastra,
        startingPrice: 'Rs.35,300 per person'
    },
    {
        name: 'Uttarakhand',
        image: uttrakhand,
        startingPrice: 'Rs.4,200 per person'
    },
    {
        name: 'South Africa',
        image: sa,
        startingPrice: 'Rs.1,71,300 per person'
    },
    {
        name: 'Egypt',
        image: egypt,
        startingPrice: 'Rs.48,200 per person'
    },
    {
        name: 'Australia',
        image: austreliya,
        startingPrice: 'Rs.56,200 per person'
    },
    {
        name: 'Hong Kong',
        image: hongkong,
        startingPrice: 'Rs.1,01,600 per person'
    }
]

function Holiday() {
    const selectedRef = useRef(null);
    const [selectedCardTitle, setSelectedCardTitle] = useState(null);

    const handleCardClick = (title) => {
        setSelectedCardTitle(title);
        window.scrollTo(0, document.body.scrollHeight);
    };
    const renderPackageComponent = () => {
        switch (selectedCardTitle) {
            case 'Europ':
                return <Europ />;
            case 'Thailand':
                return <Thai />;
            case 'Malaysia':
                return <Malesiya />;
                case 'Vietnam':
                    return <Vietnam />;
                case 'Mauritius':
                    return <Maru />;
                case 'Gujarat':
                    return <Guj />;
            default:
                return null;
        }
    };
    return (
        <div>
            <div className="container holiday">
                <h2 className='my-4'>Holiday Packages</h2>
                <div className="desCards">
                    <div className="intDes my-4 d-flex">
                        <h4>International Destinations</h4>
                        <div className="cards1 des">
                            {destinations.map(destination => (
                                <div className="card des1" key={destination.name}>
                                    <div className="card-body">
                                        <img src={destination.image} className='imgDes' alt={destination.name} onClick={() => handleCardClick(destination.name)}ref={destination.name === selectedCardTitle ? selectedRef : null} />
                                        
                                        <span className='card-title titleDes mt-3 mb-1'>{destination.name}</span>
                                        <p className="card-text textC">Starting At {destination.startingPrice}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h4 className='mt-5 mb-3'>Explore The Unexplore</h4>
                        <div className="cards1 des">
                            {uxDestination.map(destination => (
                                <div className="card des1" key={destination.name} onClick={() => handleCardClick(destination.name)}>
                                    
                                    <div className="card-body">
                                        <img src={destination.image} className='imgDes' alt={destination.name} />
                                        <span className='card-title titleDes mt-3 mb-1'>{destination.name}</span>
                                        <p className="card-text textC">Starting At {destination.startingPrice}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {selectedCardTitle && renderPackageComponent()}
        </div>
    );
}

export default Holiday;
