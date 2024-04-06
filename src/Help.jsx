import React from 'react'

const Help = () => {
  return (
    <div>
      <div className="container help mb-5">
        <h3 className='my-4'>How Can I Help You</h3>
        <form action="" className='mb-5'>
            <textarea name="qustions" id="" cols="60" rows="5" placeholder='Ask your question here...'></textarea><br />
            <button typeof first="submit" className='mt-3'>Submit Questions</button>
        </form>
        <h3 className='mb-5'>FAQs</h3>
        <div className="faqs mb-4">
            <h5>Q. How do I book a holiday package with Bagpacker?</h5>
            <p className='mb-2'> Booking a holiday package with Bagpacker is easy! Simply visit our website, browse through our selection of destinations and packages, select your preferred option, and follow the prompts to complete the booking process.</p>
            <h5>Q. Can I customize my holiday package to suit my preferences?</h5>
            <p className='mb-2'> Yes, absolutely! We understand that every traveler has unique preferences. You can customize your holiday package by selecting specific activities, accommodations, and add-on options during the booking process.</p>
            <h5>Q.  What payment methods do you accept ?</h5>
            <p className='mb-2'> We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Rest assured, our payment gateway is secure, ensuring your financial information remains protected.</p>
            <h5>Q. Are there any hidden fees or charges?</h5>
            <p className='mb-2'> No, we believe in transparency and honesty. The price you see during the booking process is the final price you'll pay, with no hidden fees or charges.</p>
            <h5>Q. Can I cancel or modify my booking?</h5>
            <p className='mb-2'> Yes, you can cancel or modify your booking, subject to our cancellation policy and any applicable fees. Please refer to your booking confirmation or contact our customer service team for assistance.</p>
            <h5>Q. What happens if my flight or accommodation is canceled by the provider?</h5>
            <p className='mb-2'>  In the unlikely event that your flight or accommodation is canceled by the provider, we'll work with you to find suitable alternatives or provide a refund, depending on the circumstances.</p>
            <h5>Q. Do you offer travel insurance?</h5>
            <p className='mb-2'> Yes, we highly recommend purchasing travel insurance for added peace of mind. You can purchase travel insurance during the booking process or contact our customer service team for assistance.</p>
            <h5>Q.  How can I contact Bagpacker's customer support team?</h5>
            <p className='mb-2'> You can contact our customer support team via email, phone, or live chat. Our dedicated team is available to assist you with any inquiries or concerns you may have..</p>
            <h5>Q.Is my personal information secure when booking with Bagpacker?</h5>
            <p className='mb-2'> Yes, protecting your personal information is our top priority. We utilize industry-standard encryption and security measures to safeguard your data throughout the booking process.</p>
            <h5>Q. Can I request special accommodations for medical or dietary needs?</h5>
            <p className='mb-2'> Absolutely! Please let us know about any special accommodations or requirements you have during the booking process, and we'll do our best to accommodate your needs.</p>

        </div>
      </div>
    </div>
  )
}

export default Help
