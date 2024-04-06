import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import icon from '../places/up-arrow-svgrepo-com.svg';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Slider from './Carousel'

const Packegs = ({ selectedCardTitle }) => {
    const [value, setValue] = useState(1);
    const [isRotatedDuration, setIsRotatedDuration] = useState(false); // State for Duration accordion arrow rotation
    const [value1, setValue1] = useState(2);
    const [isRotatedHotel, setIsRotatedHotel] = useState(false); // State for Hotel Category accordion arrow rotation
    const [isRotatedBudget, setIsRotatedBudget] = useState(false); // State for Budget accordion arrow rotation
    const [isRotatedFlight, setIsRotatedFlight] = useState(false); // State for Flight accordion arrow rotation
    const [isRotatedThemes, setIsRotatedThemes] = useState(false); // State for Themes accordion arrow rotation
    const [isRotatedPackageType, setIsRotatedPackageType] = useState(false); // State for Package Type accordion arrow rotation
    const [budget, setBudget] = useState(10000);
    const [fliInclude, setFliInclude] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedPackageType, setSelectedPackageType] = useState('');
    const [noOfNight, setNoOfNights] = useState(2)
    const [isAppliedDuration, setIsAppliedDuration] = useState(false);

const handleApplyToggle = () => {
    setIsAppliedDuration(!isAppliedDuration);
};


    const handleCheckboxChange = (option) => {
        // Check if the option is already selected
        const selectedIndex = selectedOptions.indexOf(option);
        if (selectedIndex === -1) {
            // If not selected, add it to the array
            setSelectedOptions([...selectedOptions, option]);
        } else {
            // If already selected, remove it from the array
            const newOptions = [...selectedOptions];
            newOptions.splice(selectedIndex, 1);
            setSelectedOptions(newOptions);
        }
    };
    const dummyData = {
        cards: [
            {
                title: 'London Group Departure 2024',
                duration: 5,
                hotelCategory: 3,
                budget: {
                    perPerson: 100000,
                    total: 200000
                },
                flight: true,
                themes: ['culture', 'adventure'],
                packageType: 'group'
            },
            {
                title: 'London Group Departure 2024',
                duration: 7,
                hotelCategory: 4,
                budget: {
                    perPerson: 150000,
                    total: 300000
                },
                flight: false,
                themes: ['honeymoon', 'offbeat'],
                packageType: 'couple'
            },
            {
                title: 'London Group Departure 2024',
                duration: 3,
                hotelCategory: 5,
                budget: {
                    perPerson: 200000,
                    total: 400000
                },
                flight: true,
                themes: ['culture', 'adventure'],
                packageType: 'solo'
            },
            {
                title: 'London Group Departure 2024',
                duration: 10,
                hotelCategory: 2,
                budget: {
                    perPerson: 50000,
                    total: 100000
                },
                flight: false,
                themes: ['honeymoon', 'offbeat'],
                packageType: 'group'
            },
            {
                title: 'London Group Departure 2024',
                duration: 6,
                hotelCategory: 4,
                budget: {
                    perPerson: 250000,
                    total: 500000
                },
                flight: true,
                themes: ['culture', 'adventure'],
                packageType: 'couple'
            },
            {
                title: 'London Group Departure 2024',
                duration: 8,
                hotelCategory: 3,
                budget: {
                    perPerson: 120000,
                    total: 240000
                },
                flight: false,
                themes: ['honeymoon', 'offbeat'],
                packageType: 'solo'
            }
        ]
    };

    const handleBudgetChange = (event) => {
        setBudget(parseInt(event.target.value));
    };

    const handleRatingChange = (newValue) => {
        setValue1(newValue);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handlePackageTypeChange = (type) => {
        setSelectedPackageType(type);
    };

    const handleArrowClickDuration = () => {
        setIsRotatedDuration(!isRotatedDuration);
    };

    const handleArrowClickHotel = () => {
        setIsRotatedHotel(!isRotatedHotel);
    };

    const handleArrowClickBudget = () => {
        setIsRotatedBudget(!isRotatedBudget);
    };

    const handleArrowClickFlight = () => {
        setIsRotatedFlight(!isRotatedFlight);
    };

    const handleArrowClickThemes = () => {
        setIsRotatedThemes(!isRotatedThemes);
    };

    const handleArrowClickPackageType = () => {
        setIsRotatedPackageType(!isRotatedPackageType);
    };

    return (
        <div>
            <div className="container pacCont mb-5">
                <div className="subContainer mt-2">
                    <h3 className='h2poc'>{selectedCardTitle}Europ Packages</h3>
                </div>
                <div className="row mainPac subContainer mt-3">
                    <div className="col-md-3 colPac">
                        <div className="filter">
                            <div className="filH5">
                                <h5 className='bH51'>Filters</h5>
                            </div>
                            <div className="catageries">
        <div className="dur">
            <div style={{ marginBottom: '30px' }}></div>
            <Accordion className='dur1'>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="typography d-flex " onClick={handleArrowClickDuration}>
                        <Typography>Duration</Typography>
                        <Typography className='textValue' sx={{ color: 'text.secondary', fontSize: '11px' }}>{value} Nights </Typography>
                        <img src={icon} className='imgUpArrow' alt="" style={{ transform: isRotatedDuration ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <input
                        type="range"
                        min="1"
                        max="15"
                        step="1"
                        value={value}
                        onChange={handleChange}
                    /><br />
                    <div className="pDur mx-4">{value} Nights </div>
                    <button onClick={handleApplyToggle} className='btn mx-5 mt-3 btnAply'> {isAppliedDuration ? 'Discard' : 'Apply'}</button>
                </AccordionDetails>
            </Accordion>
            <div style={{ marginBottom: '20px' }}></div>
            <Accordion className='dur1'>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="typography d-flex " onClick={handleArrowClickHotel}>
                        <Typography>Hotel Category</Typography>
                        <Typography className='textValue' sx={{ color: 'text.secondary', fontSize: '11px' }}>{value1} Stars </Typography>
                        <img src={icon} className='imgUpArrow' alt="" style={{ transform: isRotatedHotel ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={1.5}>
                        <Rating
                            name="hotel-rating"
                            value={value1}
                            className='mx-3'
                            onChange={(event, newValue) => {
                                handleRatingChange(newValue);
                            }}
                            precision={0.5}
                        />
                        <div className="pDur mx-4">{value1} Stars </div>
                    </Stack>
                </AccordionDetails>
                <button onClick={handleApplyToggle} className='btn mx-5 mt-3 btnAply mb-2'> {isAppliedDuration ? 'Discard' : 'Apply'}</button>   
            </Accordion>
            <div style={{ marginBottom: '20px' }}></div>
            <Accordion className='dur1'>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="typography d-flex " onClick={handleArrowClickBudget}>
                        <Typography> Budget</Typography>
                        <Typography className='textValue' sx={{ color: 'text.secondary', fontSize: '11px' }}>{budget} Per Person </Typography>
                        <img src={icon} className='imgUpArrow' alt="" style={{ transform: isRotatedBudget ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <input
                        type="range"
                        min="10000"
                        max="250000"
                        step="1000"
                        value={budget}
                        onChange={handleBudgetChange}
                    /><br />
                    <div className="pDur mx-4">Up to ₹ {budget}</div>
                </AccordionDetails>
            </Accordion>
            <div style={{ marginBottom: '20px' }}></div>
            <Accordion className='dur1'>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="typography d-flex " onClick={handleArrowClickFlight}>
                        <Typography> Flight</Typography>
                        <Typography className='textValue' sx={{ color: 'text.secondary', fontSize: '11px' }}>{fliInclude ? 'Flight Include' : 'Flight Exclude'} </Typography>
                        <img src={icon} className='imgUpArrow' alt="" style={{ transform: isRotatedFlight ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="fliInc d-flex justify-content-around">
                        <button className='btn btn-sucess btnFliInd' onClick={() => setFliInclude(true)} >Flight Include</button><br />
                        <button className='btn btn-sucess btnFliInd' onClick={() => setFliInclude(false)} >Flight Exclude</button>
                    </div>
                </AccordionDetails>
            </Accordion>
            <div style={{ marginBottom: '20px' }}></div>
            <Accordion className='dur1'>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="typography d-flex " onClick={handleArrowClickThemes}>
                        <Typography> Themes</Typography>
                        <Typography className='textValue' sx={{ color: 'text.secondary', fontSize: '11px' }}></Typography>
                        <img src={icon} className='imgUpArrow' alt="" style={{ transform: isRotatedThemes ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <h5 className='mb-3'>Themes</h5>
                    <div className="checkboxes">
                        <label>
                            Culture
                            <input
                                type="checkbox"
                                className='checkBox'
                                checked={selectedOptions.includes('culture')}
                                onChange={() => handleCheckboxChange('culture')}
                            />
                        </label>
                        <label>
                            Adventure
                            <input
                                type="checkbox"
                                className='checkBox'
                                checked={selectedOptions.includes('adventure')}
                                onChange={() => handleCheckboxChange('adventure')}
                            />
                        </label>
                        <label>
                            Offbeat
                            <input
                                type="checkbox"
                                className='checkBox'
                                checked={selectedOptions.includes('offbeat')}
                                onChange={() => handleCheckboxChange('offbeat')}
                            />
                        </label>
                        <label>
                            Honeymoon
                            <input
                                type="checkbox"
                                className='checkBox'
                                checked={selectedOptions.includes('honeymoon')}
                                onChange={() => handleCheckboxChange('honeymoon')}
                            />
                        </label>
                    </div>
                </AccordionDetails>
            </Accordion>
            <div style={{ marginBottom: '20px' }}></div>
            <Accordion className='dur1'>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className="typography d-flex " onClick={handleArrowClickPackageType}>
                        <Typography> Package Type</Typography>
                        <Typography className='textValue' sx={{ color: 'text.secondary', fontSize: '11px' }}>{selectedPackageType ? selectedPackageType : 'Type'} </Typography>
                        <img src={icon} className='imgUpArrow' alt="" style={{ transform: isRotatedPackageType ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <h5 className='mb-3'>Types</h5>
                    <div className="checkboxes">
                        <label>
                            Group
                            <input
                                type="radio"
                                className='checkBox'
                                checked={selectedPackageType === 'Group'}
                                onChange={() => handlePackageTypeChange('Group')}
                            />
                        </label>
                        <label>
                            Couple
                            <input
                                type="radio"
                                className='checkBox'
                                checked={selectedPackageType === 'Couple'}
                                onChange={() => handlePackageTypeChange('Couple')}
                            />
                        </label>
                        <label>
                            Solo
                            <input
                                type="radio"
                                className='checkBox'
                                checked={selectedPackageType === 'Solo'}
                                onChange={() => handlePackageTypeChange('Solo')}
                            />
                        </label>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
                        </div>
                    </div>
                    
                    <div className="col-md-9 colPac">
                        <div className="packegs">
                            <h5 className='bH52'>Packages</h5>
                            <div className="cardPac d-flex ">
                                {dummyData.cards.map((card, index) => (
                                    <div key={index} className="card cardAct my-2" style={{ width: '350px' }}>
                                        <div className='card-img-top my-2'><Slider /></div>
                                        <div className="card-body">
                                            <p className="card-title cT">{card.title}</p>
                                            <p className='text-left'>{card.duration}N/{card.duration + 1}D</p>
                                            <p className="cT">Facilities</p>
                                            <ul className="listPac">
                                            <div className="listPac d-flex mt-2">
                                            <div class="combined-list">
                                                <ul class="list1">
                                                    <li> Flight : {card.flight ? 'Included' : 'Not Included'}</li>
                                                    <li>{card.hotelCategory} Star Hotel</li>
                                                    <li>Airport Transfers</li>
                                                </ul>
                                                <ul class="list2">
                                                    <li>{card.flight ? 'Airport' : 'Station'} Pickup & Drop</li>
                                                    <li>Visa Assistance</li>
                                                    <li>Selected Meals</li>
                                                </ul>
                                            </div>
                                        </div>
                                            </ul>
                                            <div className="prise ">
                                                <div className="detl1">
                                                    <h6 className='detlH6'>Exclusive Offers At Checkout</h6>
                                                </div>
                                                <div className="detl1 text-right">
                                                    <p className='mb-0'><span>{card.budget.perPerson}</span>/Person</p>
                                                    <p>Total Price ₹{card.budget.total}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Packegs;
