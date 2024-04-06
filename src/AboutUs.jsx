import React from 'react'
import ansh from './places/ansh.png';
import vraj from './places/vraj 1.png'
import jaimin from './places/jaimin 1.png';
import tajesh from './places/tajesh 1.png';

;


const aboutUs = () => {
    return (
        <div>
            <div className="container aboutUs">
                <div className="view">
                    <h2 className='my-4'>About Bagpacker</h2>
                    <p>Welcome to Bagpacker, your go-to destination for affordable and memorable holiday experiences! Founded by a passionate team of travel enthusiasts, Bagpacker is dedicated to making travel accessible to everyone, without compromising on quality or adventure.At Bagpacker, we understand that the journey is just as important as the destination. That's why we go above and beyond to curate exciting holiday packages that cater to a variety of tastes and budgets. Whether you're seeking a relaxing beach getaway, an adrenaline-fueled adventure, or a cultural immersion in a far-flung destination, we have the perfect package for you.</p>
                    <p className="my-3">Our team is comprised of individuals with diverse expertise and a shared passion for travel. From developers who meticulously craft our user-friendly website to researchers who stay ahead of the latest trends and destinations, each member of our team plays a vital role in bringing your dream vacation to life.What sets Bagpacker apart is our commitment to reliability and transparency. We understand the importance of trust when it comes to planning your holidays, which is why we prioritize clear communication, secure bookings, and excellent customer service every step of the way. With Bagpacker, you can rest assured that your travel experience will be smooth, seamless, and unforgettable.</p>
                    <p className="my-4">Join us on an adventure of a lifetime and let Bagpacker be your trusted companion in exploring the world, one destination at a time.

                    </p>
                </div>
                <div className="view1">
                    <h2 className="my-3">About Us</h2>
                    <div className="cards my-5">
                        <div className="card card1 text-center">
                            <div className="card-body d-flex align-items-center flex-column">
                                <div className="inSvg d-flex align-items-center ">
                                    <img src={ansh} className='usImg' alt="" />
                                </div>
                                <h4 className="card-title mt-2">Ansh Chothani</h4>
                                <p className="card-text role">Website development. </p>
                                <p className="card-text mb-5 mt-3">Responsible for the design, development, and maintenance of the Bagpacker website. My role involves ensuring the website is user-friendly, providing visitors with a seamless booking experience.</p>
                                <div className="inSvg1  d-flex align-items-center">


                                </div>
                            </div>
                            <div className="card-footer " id="card-footer"></div>
                        </div>
                        <div className="card card1 text-center">
                            <div className="card-body d-flex align-items-center flex-column">
                                <div className="inSvg d-flex align-items-center ">
                                    <img src={vraj} className='usImg' alt="" />
                                </div>
                                <h4 className="card-title mt-2">Vraj</h4>
                                <p className="card-text role">Groundwork, customer interviews. </p>
                                <p className="card-text mb-5 mt-3">Conducted groundwork and interviews with traveling customers to understand their needs and preferences. Vraj's role involved gathering insights to shape Bagpacker's offerings and tailor them to meet customer expectations.</p>
                                <div className="inSvg1  d-flex align-items-center">


                                </div>
                            </div>
                            <div className="card-footer " id="card-footer"></div>
                        </div>
                        <div className="card card1 text-center">
                            <div className="card-body d-flex align-items-center flex-column">
                                <div className="inSvg d-flex align-items-center ">
                                    <img src={jaimin} className='usImg' alt="" />
                                    </div>
                                    <h4 className="card-title mt-2">Jaimin Prajapati</h4>
                                <p className="card-text role">Partnerships, networking.</p>
                                <p className="card-text mb-5 mt-3"> Focused on forging partnerships and building a network within the travel industry. Jaimin's role involved negotiating deals and collaborations with hotels, airlines, and tour operators to enhance Bagpacker's range of offerings and provide exclusive deals for customers.</p>
                                <div className="inSvg1  d-flex align-items-center">


                                </div>
                            </div>
                            <div className="card-footer " id="card-footer"></div>
                        </div>
                        <div className="card card1 text-center">
                            <div className="card-body d-flex align-items-center flex-column">
                                <div className="inSvg d-flex align-items-center ">
                                    <img src={tajesh} className='usImg' alt="" />
                                </div>
                                <h4 className="card-title mt-2">Tajes Thakker</h4>
                                <p className="card-text role">Market analysis, strategic planning. </p>
                                <p className="card-text mb-5 mt-3">Led market analysis and strategic planning for Bagpacker. Tejas's role involved researching industry trends, and developing marketing and business plans to position Bagpacker as a leading provider of affordable holiday packages.</p>
                                <div className="inSvg1  d-flex align-items-center">


                                </div>
                            </div>
                            <div className="card-footer " id="card-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutUs
