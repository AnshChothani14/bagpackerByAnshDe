import React, { useState } from 'react';
import Date from './Date';

const FlightDetl = () => {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedClass, setSelectedClass] = useState('Select Class');
    const [selectionType, setSelectionType] = useState(null);

    const handleClassSelect = (flightClass) => {
        setSelectedClass(flightClass);
    };

    const handleSubmit = () => {
        if (!fromCity || !toCity  || selectedClass === 'Select Class') {
            alert('Please fill in all the fields.');
            return;
        }
        console.log('All fields are filled.');
    };

    const cityData =
    [

        {
            "city": "Agartala",
            "airport": "Maharaja Bir Bikram Airport",
            "iata_code": "IXA"
        },
        {
            "city": "Kochi",
            "airport": "Cochin International Airport",
            "iata_code": "COK"
        },
        {
            "city": "Pune",
            "airport": "Pune Airport",
            "iata_code": "PNQ"
        },
        {
            "city": "Goa",
            "airport": "Goa International Airport",
            "iata_code": "GOI"
        },
        {
            "city": "Jaipur",
            "airport": "Jaipur International Airport",
            "iata_code": "JAI"
        },
        {
            "city": "Lucknow",
            "airport": "Chaudhary Charan Singh International Airport",
            "iata_code": "LKO"
        },
        {
            "city": "Chandigarh",
            "airport": "Chandigarh Airport",
            "iata_code": "IXC"
        },
        {
            "city": "Varanasi",
            "airport": "Lal Bahadur Shastri International Airport",
            "iata_code": "VNS"
        },
        {
            "city": "Guwahati",
            "airport": "Lokpriya Gopinath Bordoloi International Airport",
            "iata_code": "GAU"
        },
        {
            "city": "Amritsar",
            "airport": "Sri Guru Ram Dass Jee International Airport",
            "iata_code": "ATQ"
        },
        {
            "city": "Thiruvananthapuram",
            "airport": "Trivandrum International Airport",
            "iata_code": "TRV"
        },
        {
            "city": "Bhubaneswar",
            "airport": "Biju Patnaik International Airport",
            "iata_code": "BBI"
        },
        {
            "city": "Indore",
            "airport": "Devi Ahilya Bai Holkar Airport",
            "iata_code": "IDR"
        },
        {
            "city": "Coimbatore",
            "airport": "Coimbatore International Airport",
            "iata_code": "CJB"
        },
        {
            "city": "Visakhapatnam",
            "airport": "Visakhapatnam International Airport",
            "iata_code": "VTZ"
        },
        {
            "city": "Ahmedabad",
            "airport": "Sardar Vallabhbhai Patel International Airport",
            "iata_code": "AMD"
        },
        {
            "city": "Nagpur",
            "airport": "Dr. Babasaheb Ambedkar International Airport",
            "iata_code": "NAG"
        },
        {
            "city": "Gaya",
            "airport": "Gaya Airport",
            "iata_code": "GAY"
        },
        {
            "city": "Allahabad",
            "airport": "Allahabad Airport",
            "iata_code": "IXD"
        },
        {
            "city": "Bhuj",
            "airport": "Bhuj Airport",
            "iata_code": "BHJ"
        },
        {
            "city": "Kullu",
            "airport": "Kullu Manali Airport",
            "iata_code": "KUU"
        },
        {
            "city": "Jaisalmer",
            "airport": "Jaisalmer Airport",
            "iata_code": "JSA"
        },
        {
            "city": "Port Blair",
            "airport": "Veer Savarkar International Airport",
            "iata_code": "IXZ"
        },
        {
            "city": "Imphal",
            "airport": "Imphal International Airport",
            "iata_code": "IMF"
        },
        {
            "city": "Leh",
            "airport": "Kushok Bakula Rimpochee Airport",
            "iata_code": "IXL"
        },
        {
            "city": "Nagpur",
            "airport": "Dr. Babasaheb Ambedkar International Airport",
            "iata_code": "NAG"
        },
        {
            "city": "Surat",
            "airport": "Surat International Airport",
            "iata_code": "STV"
        },
        {
            "city": "Vadodara",
            "airport": "Vadodara Airport",
            "iata_code": "BDQ"
        },
        {
            "city": "Bhopal",
            "airport": "Raja Bhoj Airport",
            "iata_code": "BHO"
        },
        {
            "city": "Ranchi",
            "airport": "Birsa Munda Airport",
            "iata_code": "IXR"
        },
        {
            "city": "Raipur",
            "airport": "Swami Vivekananda Airport",
            "iata_code": "RPR"
        },
        {
            "city": "Jammu",
            "airport": "Jammu Airport",
            "iata_code": "IXJ"
        },
        {
            "city": "Dehradun",
            "airport": "Jolly Grant Airport",
            "iata_code": "DED"
        },
        {
            "city": "Srinagar",
            "airport": "Sheikh ul-Alam International Airport",
            "iata_code": "SXR"
        },
        {
            "city": "Udaipur",
            "airport": "Maharana Pratap Airport",
            "iata_code": "UDR"
        },
        {
            "city": "Vijayawada",
            "airport": "Vijayawada Airport",
            "iata_code": "VGA"
        },
        {
            "city": "Rajkot",
            "airport": "Rajkot Airport",
            "iata_code": "RAJ"
        },
        {
            "city": "Jamnagar",
            "airport": "Jamnagar Airport",
            "iata_code": "JGA"
        },
        {
            "city": "Madurai",
            "airport": "Madurai International Airport",
            "iata_code": "IXM"
        },
        {
            "city": "Tiruchirappalli",
            "airport": "Tiruchirappalli International Airport",
            "iata_code": "TRZ"
        },
        {
            "city": "Mangalore",
            "airport": "Mangalore International Airport",
            "iata_code": "IXE"
        },
        {
            "city": "Kozhikode",
            "airport": "Calicut International Airport",
            "iata_code": "CCJ"
        },
        {
            "city": "Patna",
            "airport": "Jay Prakash Narayan International Airport",
            "iata_code": "PAT"
        },
        {
            "city": "Agra",
            "airport": "Kheria Airport",
            "iata_code": "AGR"
        },
        {
            "city": "Shimla",
            "airport": "Shimla Airport",
            "iata_code": "SLV"
        },
        {
            "city": "Diu",
            "airport": "Diu Airport",
            "iata_code": "DIU"
        },
        {
            "city": "Dibrugarh",
            "airport": "Dibrugarh Airport",
            "iata_code": "DIB"
        },
        {
            "city": "Leh",
            "airport": "Kushok Bakula Rimpochee Airport",
            "iata_code": "IXL"
        },
        {
            "city": "Jodhpur",
            "airport": "Jodhpur Airport",
            "iata_code": "JDH"
        },
        {
            "city": "Siliguri",
            "airport": "Bagdogra International Airport",
            "iata_code": "IXB"
        },
        {
            "city": "Nagpur",
            "airport": "Dr. Babasaheb Ambedkar International Airport",
            "iata_code": "NAG"
        },
        {
            "city": "Ranchi",
            "airport": "Birsa Munda Airport",
            "iata_code": "IXR"
        },
        {
            "city": "Raipur",
            "airport": "Swami Vivekananda Airport",
            "iata_code": "RPR"
        },
        {
            "city": "Jammu",
            "airport": "Jammu Airport",
            "iata_code": "IXJ"
        },
        {
            "city": "Dehradun",
            "airport": "Jolly Grant Airport",
            "iata_code": "DED"
        },
        {
            "city": "Srinagar",
            "airport": "Sheikh ul-Alam International Airport",
            "iata_code": "SXR"
        },
        {
            "city": "Udaipur",
            "airport": "Maharana Pratap Airport",
            "iata_code": "UDR"
        },
        {
            "city": "Jaipur",
            "airport": "Jaipur International Airport",
            "iata_code": "JAI"
        },
        {
            "city": "Vijayawada",
            "airport": "Vijayawada Airport",
            "iata_code": "VGA"
        },
        {
            "city": "Rajkot",
            "airport": "Rajkot Airport",
            "iata_code": "RAJ"
        },
        {
            "city": "Jamnagar",
            "airport": "Jamnagar Airport",
            "iata_code": "JGA"
        },
        {
            "city": "Madurai",
            "airport": "Madurai International Airport",
            "iata_code": "IXM"
        },
        {
            "city": "Tiruchirappalli",
            "airport": "Tiruchirappalli International Airport",
            "iata_code": "TRZ"
        },
        {
            "city": "Mangalore",
            "airport": "Mangalore International Airport",
            "iata_code": "IXE"
        },
        {
            "city": "Kozhikode",
            "airport": "Calicut International Airport",
            "iata_code": "CCJ"
        },
        {
            "city": "Raipur",
            "airport": "Swami Vivekananda Airport",
            "iata_code": "RPR"
        },
        {
            "city": "Patna",
            "airport": "Jay Prakash Narayan International Airport",
            "iata_code": "PAT"
        },
        {
            "city": "Agra",
            "airport": "Kheria Airport",
            "iata_code": "AGR"
        },
        {
            "city": "Shimla",
            "airport": "Shimla Airport",
            "iata_code": "SLV"
        },
        {
            "city": "Diu",
            "airport": "Diu Airport",
            "iata_code": "DIU"
        },
        {
            "city": "Dibrugarh",
            "airport": "Dibrugarh Airport",
            "iata_code": "DIB"
        },
        {
            "city": "Leh",
            "airport": "Kushok Bakula Rimpochee Airport",
            "iata_code": "IXL"
        },
        {
            "city": "Jodhpur",
            "airport": "Jodhpur Airport",
            "iata_code": "JDH"
        },
        {
            "city": "Siliguri",
            "airport": "Bagdogra International Airport",
            "iata_code": "IXB"
        },
        {
            "city": "Agartala",
            "airport": "Maharaja Bir Bikram Airport",
            "iata_code": "IXA"
        },
        {
            "city": "New Delhi",
            "airport": "Indira Gandhi International Airport",
            "iata_code": "DEL"
        },
        {
            "city": "Mumbai",
            "airport": "Chhatrapati Shivaji Maharaj International Airport",
            "iata_code": "BOM"
        },
        {
            "city": "Bengaluru",
            "airport": "Kempegowda International Airport",
            "iata_code": "BLR"
        },
        {
            "city": "Chennai",
            "airport": "Chennai International Airport",
            "iata_code": "MAA"
        },
        {
            "city": "Kolkata",
            "airport": "Netaji Subhas Chandra Bose International Airport",
            "iata_code": "CCU"
        },
        {
            "city": "Hyderabad",
            "airport": "Rajiv Gandhi International Airport",
            "iata_code": "HYD"
        },
        {
            "city": "Kochi",
            "airport": "Cochin International Airport",
            "iata_code": "COK"
        },
        {
            "city": "Ahmedabad",
            "airport": "Sardar Vallabhbhai Patel International Airport",
            "iata_code": "AMD"
        },
        {
            "city": "Pune",
            "airport": "Pune Airport",
            "iata_code": "PNQ"
        },
        {
            "city": "Goa",
            "airport": "Goa International Airport",
            "iata_code": "GOI"
        },
        {
            "city": "Jaipur",
            "airport": "Jaipur International Airport",
            "iata_code": "JAI"
        },
        {
            "city": "Lucknow",
            "airport": "Chaudhary Charan Singh International Airport",
            "iata_code": "LKO"
        },
        {
            "city": "Chandigarh",
            "airport": "Chandigarh Airport",
            "iata_code": "IXC"
        },
        {
            "city": "Varanasi",
            "airport": "Lal Bahadur Shastri International Airport",
            "iata_code": "VNS"
        },
        {
            "city": "Guwahati",
            "airport": "Lokpriya Gopinath Bordoloi International Airport",
            "iata_code": "GAU"
        },
        {
            "city": "Amritsar",
            "airport": "Sri Guru Ram Dass Jee International Airport",
            "iata_code": "ATQ"
        },
        {
            "city": "Thiruvananthapuram",
            "airport": "Trivandrum International Airport",
            "iata_code": "TRV"
        },
        {
            "city": "Bhubaneswar",
            "airport": "Biju Patnaik International Airport",
            "iata_code": "BBI"
        },
        {
            "city": "Indore",
            "airport": "Devi Ahilya Bai Holkar Airport",
            "iata_code": "IDR"
        },
        {
            "city": "Coimbatore",
            "airport": "Coimbatore International Airport",
            "iata_code": "CJB"
        },
        {
            "city": "Visakhapatnam",
            "airport": "Visakhapatnam International Airport",
            "iata_code": "VTZ"
        },
        {
            "city": "Ahmedabad",
            "airport": "Sardar Vallabhbhai Patel International Airport",
            "iata_code": "AMD"
        },
        {
            "city": "Surat",
            "airport": "Surat International Airport",
            "iata_code": "STV"
        },
        {
            "city": "Vadodara",
            "airport": "Vadodara Airport",
            "iata_code": "BDQ"
        },
        {
            "city": "Bhopal",
            "airport": "Raja Bhoj Airport",
            "iata_code": "BHO"
        }
    ]

    const getAirportInfo = (cityName) => {
        const cityInfo = cityData.find(city => city.city === cityName);
        if (cityInfo) {
            return `${cityInfo.iata_code}, ${cityInfo.airport}`;
        }
        return '';
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        let filteredSuggestions = [];
        if (value.length > 0) {
            filteredSuggestions = cityData.filter(city => city.city.toLowerCase().includes(value.toLowerCase()));
        }
        setSuggestions(filteredSuggestions);
        if (selectionType === 'from') {
            setFromCity(value);
        } else if (selectionType === 'to') {
            setToCity(value);
        }
    };

    const handleSelection = (city) => {
        if (selectionType === 'from') {
            setFromCity(city);
        } else if (selectionType === 'to') {
            setToCity(city);
        }
        setSuggestions([]);
        setSelectionType(null); // Close the modal after selection
    };

    return (
        <div>
            <div className="mainFlight">
                <div className="box">
                    <div className="from">
                        <p className="pFrom">From :</p>
                        <button type="button" className="btn my-2" onClick={() => setSelectionType('from')} data-bs-toggle="modal" data-bs-target="#cityModal">
                            {fromCity ? fromCity : 'Select City'}
                        </button>
                        <p className='resultList'>{getAirportInfo(fromCity)}</p>
                    </div>
                    <div className="to">
                    <p className="pTo">To :</p>
                        <button type="button" className="btn my-2" onClick={() => setSelectionType('to')} data-bs-toggle="modal" data-bs-target="#cityModal">
                            {toCity ? toCity : 'Select City'}
                        </button>
                        <p className='resultList'>{getAirportInfo(toCity)}</p>
                    </div>
                    <div className="other d-flex">
                        <div className="date">
                            <p className="pDate mb-3">Departure</p>
                            <input type="date" name="" id="" />
                        </div>
                        <div className="class">
                            <p className="pClass mb-2">Class Preference</p>
                            <div className="dropdown">
                                <button
                                    className="btn classBtn dropdown-toggle ulFlight"
                                    type="button"
                                    id="flightClassDropdown"
                                    data-bs-toggle="dropdown"
                                >
                                    {selectedClass}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="flightClassDropdown">
                                    <li><a className="dropdown-item" href="#" onClick={() => handleClassSelect('All')}>All</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => handleClassSelect('Economy')}>Economy</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => handleClassSelect('Premium Economy')}>Premium Economy</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => handleClassSelect('Business')}>Business</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => handleClassSelect('First Class')}>First Class</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn-secondary flightSearch" onClick={handleSubmit}>Search Flights</button>
            </div>

            {/* Modal */}
            <div className="modal" id="cityModal" tabIndex="-1" aria-labelledby="cityModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cityModalLabel">{selectionType === 'from' ? 'From' : 'To'}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control searchInput"
                                value={selectionType === 'from' ? fromCity : toCity}
                                onChange={handleInputChange}
                                placeholder="Enter city name"
                            />
                            <ul className="list-group mt-2">
                                {suggestions.map((city, index) => (
                                    <li key={index} className="list-group-item" onClick={() => handleSelection(city.city)} data-bs-dismiss="modal">
                                        {city.city}, {city.iata_code}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightDetl;
