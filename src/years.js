import React from 'react';
import './App.css';

import { Button } from 'react-bootstrap';




const YearData = (props) => {

    const { years, filters, updateDataList } = props;
    const updateData = (type, value) => {

        updateDataList(type, value);
    }



    return (
        <div>

            {
                years.map((year, i) => <div className="year-btns" key={i}>
                    <Button

                        variant={
                            filters.launch_year ===
                                year.toString()
                                ? "success"
                                : "outline-success"
                        }
                        onClick={(e) => updateData(
                            "launch_year",
                            e.target.value
                        )} key={i} value={year}>{year}</Button>
                </div>)}
        </div>)
}




export default YearData