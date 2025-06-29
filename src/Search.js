import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';

function Search({
    isSelectingCheckIn, setIsSelectingCheckIn,
    checkInDate, setCheckInDate,
    checkOutDate, setCheckOutDate,
    dateFlexibility, setDateFlexibility
}) {
    const handleSelect = (ranges) => {
        const selectedDate = ranges.selection.startDate;

        if (isSelectingCheckIn) {
            setCheckInDate(selectedDate);
            setIsSelectingCheckIn(false);
        } else {
            setCheckOutDate(selectedDate);
        }
    };

    return (
        <div className="search">
            <div className="date-mode">
                <button className={dateFlexibility === "Exact dates" ? "active" : ""} onClick={() => setDateFlexibility("Exact dates")}>Exact dates</button>
                <button className={dateFlexibility === "±1" ? "active" : ""} onClick={() => setDateFlexibility("±1")}>± 1 day</button>
                <button className={dateFlexibility === "±2" ? "active" : ""} onClick={() => setDateFlexibility("±2")}>± 2 days</button>
                <button className={dateFlexibility === "±3" ? "active" : ""} onClick={() => setDateFlexibility("±3")}>± 3 days</button>
            </div>
            <DateRangePicker
                ranges={[{
                    startDate: isSelectingCheckIn ? checkInDate : checkOutDate,
                    endDate: isSelectingCheckIn ? checkInDate : checkOutDate,
                    key: 'selection'
                }]}
                onChange={handleSelect}
                minDate={new Date()}
                months={2}
                direction="horizontal"
            />
        </div>
    );
}

export default Search;
