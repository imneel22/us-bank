import React, { useState, useEffect } from 'react';
import './App.css';

import { Button } from 'react-bootstrap';
import querystring from 'querystring';
import YearData from './years';

const App = () => {
  const filterList = {
    limit: 150,
    launch_year: undefined,
    launch_success: undefined,
    land_success: undefined,
  }

  const [filters, setFiltersData] = useState(filterList)
  const [data, setData] = useState([])
  const baseUrl = "https://api.spacexdata.com/v3/launches?limit=100";
  const changedUrl = (filters) => {
    return baseUrl + querystring.stringify({ ...filters });
  }

  const getData = (filter) => {
   
    const url = changedUrl(filter);
    setFiltersData(filter)
 
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data)
      });
  }

  const updateData = (type, value) => {
    if (filters[type] === value) {
      value = undefined;
    }
    const filter = {
      ...filters,
      [type]: value,
    };

  
    getData(filter);
  }
  useEffect(() => {
    getData(filters);

  }, []);
  const years = ('' + Array(15)).split(',').map(function () { return this[0]++; }, [2006]);

  return (
    <div className="App main-container">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <h1>Spacix Launch Programs</h1>
      <div className="left-container">
        <h3>Filters</h3>
        <p>Launch Year</p>
        <YearData years={years} filters ={filters} updateDataList ={updateData}/>
      

      <div className="success-buttons">
        <div className="bullion">
          
        <p>Successful Launch</p>
          <div className="bullion-btns">
          <Button variant={
            filters.launch_success ===
              'true'
              ? "success"
              : "outline-success"
          } onClick={(e) => updateData("launch_success", e.target.value)} value="true">True</Button>
          </div>
          <div className="bullion-btns">
          <Button
            variant={
              filters.launch_success ===
                'false'
                ? "success"
                : "outline-success"
            } onClick={(e) => updateData("launch_success", e.target.value)} value="false">False</Button>
            </div>
        </div>
        <div className="bullion">
        <p>Successful Landing</p>
        <div className="bullion-btns">
          <Button variant={
            filters.land_success ===
              'true'
              ? "success"
              : "outline-success"
          } onClick={(e) => updateData("land_success", e.target.value)} value="true">True</Button>
          </div>
          <div className="bullion-btns">
          <Button variant={
            filters.land_success ===
              'false'
              ? "success"
              : "outline-success"
          } onClick={(e) => updateData("land_success", e.target.value)} value="false">False</Button>
          </div>
        </div>
      </div>
      </div>
     
      <div className="right-container">
        {data.map((item) => {
          return (
            <div className="gallery" key={item.flight_number}>
              <div className="gallery-image">
                <img
                 src={item.links.mission_patch}/>                
              </div>
               <h4> {item.mission_name} #{item.flight_number}</h4>
                <h5>Mission Ids:{" "}</h5>
                <ul>
                  {" "}
                  <li>{item.mission_id}</li>
                </ul>
                <h5>Launch Year:{" "}
                <span >{item.launch_year}</span>
                </h5>
              <h5 >
                Successful Launch:{" "}
                <span>
                  {item.launch_success ? "true" : "false"}
                </span>
              </h5>
              <h5 >
                Successful Landing:{" "}
                <span>
                  {item.rocket.first_stage.cores[0].land_success ? "true" : "false"}
                </span>
              </h5>
            </div>
         )
        })}

      </div>
      <footer>
        <p><b>Devolped By :</b>( Neel Mehta )</p></footer>
    </div>
  );
}

export default App
