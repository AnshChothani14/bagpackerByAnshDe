import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()} // Set minimum date to today's date
        placeholderText="Select Date"
        dateFormat="dd/MM/yyyy" // Format for displaying the date
        isClearable // Allow clearing the date
        showYearDropdown // Show year dropdown
        scrollableYearDropdown // Enable year dropdown to be scrollable
      />
    </div>
  );
};

export default DatePickerComponent;
