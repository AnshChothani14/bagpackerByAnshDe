  import React, { useState, useEffect } from 'react';

  const HotelDetl = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [numberOfRooms, setNumberOfRooms] = useState(1);
    const [numberOfAdults, setNumberOfAdults] = useState(2);
    const [numberOfChildren, setNumberOfChildren] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [tempRoom, setTempRoom] = useState(1);
    const [tempAdult, setTempAdult] = useState(2);
    const [tempChildren, setTempChildren] = useState(1);



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

    const handleCityClick = (cityName) => {
      setSelectedCity(cityName);
      setShowModal(false);
    };

    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };

    const handleApply = (temp1, temp2, temp3) => {
      setNumberOfRooms(temp1);
      setNumberOfAdults(temp2);
      setNumberOfChildren(temp3)

    };

    const handleSelectNumber = (number) => {
      switch (selectedOption) {
        case 'rooms':
          setNumberOfRooms(number);
          break;
        case 'adults':
          setNumberOfAdults(number);
          break;
        case 'children':
          setNumberOfChildren(number);
          break;
        default:
          break;
      }
    };

    const renderNumbersDropdown = () => {
      const numbers = [];
      for (let i = 1; i <= 6; i++) {
        numbers.push(
          <button key={i} className="dropdown-item" onClick={() => handleSelectNumber(i)}>{i}</button>
        );
      }
      return numbers;
    };

    return (
      <div className="container mainHot mt-5">
        <div className="row  rowMain">
          <div className="col-md-3 p-0">
            <div className="mainHotel b1">
              <p className="mx-2">Where are you going ?</p>
              <div className="">
                <button className="btn btn-primary plcHotel" onClick={() => setShowModal(true)}>{selectedCity || 'Select City'}</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-0">
            <div className="mainHotel b2">
              {/* Second part with two subparts */}
              <p className="mx-3 my-0">Check In</p>
              <input type="date" name="" className='my-0' id="" />
              <p className="mx-3 my-0">Check Out</p>
              <input type="date" name="" className='my-0' id="" />
            </div>
          </div>
          <div className="col-md-3 p-0">
            <div className="mainHotel b3">
              <p className='mx-3'>Rooms & Guest</p>
              <button type="button" className="btn  rngBtn " data-bs-toggle="modal" data-bs-target="#myModal">
                {numberOfRooms} Rooms ,{numberOfAdults} Adult
              </button>
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Set  Number of Guests</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                      <div className="rooms">
                        <h5>Rooms</h5>
                        <div class="dropdown">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                            {tempRoom}
                          </button>
                          <ul class="dropdown-menu">
                            <li onClick={() => setTempRoom(1)}>1</li>
                            <li onClick={() => setTempRoom(2)}>2</li>
                            <li onClick={() => setTempRoom(3)}>3</li>
                            <li onClick={() => setTempRoom(4)}>4</li>
                            <li onClick={() => setTempRoom(5)}>5</li>
                            <li onClick={() => setTempRoom(6)}>6</li>
                          </ul>
                        </div>
                      </div>
                      <div className="rooms">
                        <h5>Adults</h5>
                        <div class="dropdown">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                            {tempAdult}
                          </button>
                          <ul class="dropdown-menu">
                            <li onClick={() => setTempAdult(1)}>1</li>
                            <li onClick={() => setTempAdult(2)}>2</li>
                            <li onClick={() => setTempAdult(3)}>3</li>
                            <li onClick={() => setTempAdult(4)}>4</li>
                            <li onClick={() => setTempAdult(5)}>5</li>
                            <li onClick={() => setTempAdult(6)}>6</li>
                          </ul>
                        </div>
                      </div>
                      <div className="rooms">
                        <div className=""><h5>Childrens</h5>
                        <p>0 - 11 Years</p></div>
                        <div class="dropdown">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                            {tempChildren}
                          </button>
                          <ul class="dropdown-menu">
                            <li onClick={() => setTempChildren(1)}>1</li>
                            <li onClick={() => setTempChildren(2)}>2</li>
                            <li onClick={() => setTempChildren(3)}>3</li>
                            <li onClick={() => setTempChildren(4)}>4</li>
                            <li onClick={() => setTempChildren(5)}>5</li>
                            <li onClick={() => setTempChildren(6)}>6</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleApply(tempRoom, tempAdult, tempChildren)}>Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-0">
            <div className="mainHotel b4">
                <p className="mx-4">Starting From :</p>
                <h5 className='mx-4'>1,500</h5>
                <p className='mx-4'>Per Night</p>
            </div>
          </div>
        </div>
        <button className='btn btn-secondary mt-4'>Search</button>
        <div className={`modal cityModel  ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog custom-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Search Cities</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control modelInput mb-4"
                  placeholder="City"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul className='modelLi'>
                  {searchResults && searchResults.map(city => (
                    <li key={city.id} onClick={() => handleCityClick(city.name)} >
                      {city.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default HotelDetl;
