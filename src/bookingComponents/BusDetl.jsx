import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const BusDetl = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectionType, setSelectionType] = useState('from');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedFromCity, setSelectedFromCity] = useState('');
    const [selectedToCity, setSelectedToCity] = useState('');

    const handleClose = () => setShowModal(false);
    const handleShow = (type) => {
        setShowModal(true);
        setSelectionType(type);
    };

    const handleCitySelect = (cityName) => {
        if (selectionType === 'from') {
            setSelectedFromCity(cityName);
        } else {
            setSelectedToCity(cityName);
        }
        setShowModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0d495dae1emshb22946f1284feaap176e4ajsn0f05a28b1f97',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                }
            };

            const queryParams = new URLSearchParams({
                countryIds: 'IN',
                namePrefix: searchTerm,
                limit: '10'
            });

            try {
                const response = await fetch(`${url}?${queryParams}`, options);
                const data = await response.json();

                if (!data || !data.data || !Array.isArray(data.data)) {
                    console.error('Invalid data format:', data);
                    return;
                }

                setSearchResults(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [searchTerm]);

    return (
        <div>
            <div className="container mainBus">
                <div className="row rowBus d-flex justify-content-between">
                    <div className="col-md-4 ali bl">
                        <p className="bpF">From :</p>
                        <Button variant="secondary" onClick={() => handleShow('from')}>
                            {selectedFromCity ? `${selectedFromCity}` : 'Select From city'}
                        </Button>
                    </div>
                    <div className="col-md-4 ali bl">
                    <p className="bpF">From :</p>
                        <Button variant="secondary" onClick={() => handleShow('to')}>
                            {selectedToCity ? ` ${selectedToCity}` : 'Select To city'}
                        </Button>
                    </div>
                    <div className="col-md-3 ali">
                        <p>Date</p>
                        <input type="date" name="" id="" />
                    </div>
                </div>
            </div>
            <button className='btn btn-secondary mt-5'>Search</button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectionType === 'from' ? 'From' : 'To'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for cities..."
                    />
                    <ul className='modelLi'>
                        {searchResults.map(city => (
                            <li key={city.id} onClick={() => handleCitySelect(city.name)}>
                                {city.name}
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    );
}

export default BusDetl;
