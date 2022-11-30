import React, { Component, useState } from 'react';
import { createRoot } from "react-dom/client";


export default class App extends Component {

  constructor(props) {
    super(props)
  }


  sayHello() {
    alert('Hello News 7!');
  }

  AddResourceToDB(){
    
  }

  SearchResource(){
    alert('Search Resource');
  }

  inventoryType = "";
  resourceType = "";
  resourceName = "";
  maxResources = 0; 

  onSelectInventoryType(event) {
    this.inventoryType = event.target.value;
    console.log(this.inventoryType);
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <div style={{backgroundColor: 'white', width: '800px',height: 'auto', border: '1px solid #1a780c'}}>
          <h3>ABC Resource Management</h3>
          <br />
          <table border="1">
            <tr>

              <td>
          <label>Selection Inventory Type</label>
          <br />
          <select onChange={this.onSelectInventoryType} name="Inventory" id="Inventory">
            <option value="1">Kruger Barge</option>
            <option value="2">Kruger Warehouse</option>
            <option value="3">Kruger Store Front</option>
            <option value="4">Lowels Barge</option>
            <option value="5">Lowels Warehouse</option>
            <option value="6">Lowels Store Front</option>
            <option value="7">Ham Deput Barge</option>
            <option value="8">Ham Deput Warehouse</option>
            <option value="9">Ham Deput Store Front</option>
            <option value="10">Pooblix Barge</option>
            <option value="11">Pooblix Warehouse</option>
            <option value="12">Pooblix Store Front</option>
            <option value="13">Targit Barge</option>
            <option value="14">Targit Warehouse</option>
            <option value="15">Targit Store Front</option>
            <option value="16">Amazoom Barge</option>
            <option value="17">Amazoom Warehouse</option>
            <option value="18">Amazoom Store Front</option>
            <option value="19">Toys R We Barge</option>
            <option value="20">Toys R We Warehouse</option>
            <option value="21">Toys R We Store Front</option>
            <option value="22">EB Gamers Barge</option>
            <option value="23">EB Gamers Warehouse</option>
            <option value="24">EB Gamers Store Front</option>
            <option value="25">WW Chocolate Barge</option>
            <option value="26">WW Chocolate Warehouse</option>
            <option value="27">WW Chocolate Store Front</option>
            <option value="28">Hello World Barge</option>
            <option value="29">Hello World Warehouse</option>
            <option value="30">Hello World Store Front</option>
            <option value="31">Baby Made Barge</option>
            <option value="32">Baby Made Warehouse</option>
            <option value="33">Baby Made Store Front</option>
          </select>
                
          </td>
<td>
          <label>Seletion Resource Type</label>
          <br />
          <select name="Inventory" id="Inventory">
            <option value="1">Appliance</option>
            <option value="2">Window</option>
            <option value="3">Tool</option>
            <option value="4">Bathroom</option>
            <option value="5">Flooring</option>
            <option value="6">Garden</option>
            <option value="7">Frozen Good</option>
            <option value="8">Dairy</option>
            <option value="9">Storage</option>
            <option value="10">Lighting</option>
            <option value="11">Paint</option>
            <option value="12">Vegetable</option>
            <option value="13">Fruit</option>
            <option value="14">Paper Product</option>
            <option value="15">Electronic</option>
            <option value="16">Pet Care</option>
            <option value="17">Automotive</option>
            <option value="18">Snacks</option>
            <option value="19">Breakfast</option>
            <option value="20">Bakery</option>
            <option value="21">Baby</option>
            <option value="22">Candy</option>
            <option value="23">Deli</option>
          </select>
          </td>
          </tr>
          <tr>
            <td>
            <label>Resource Name</label>
             <br />
             <input id="ResourceName"></input>
             <br />
             <button type=""  onClick={this.SearchResource} >Search Resource</button>
            </td>
            <td>
            <label>Max Number of resource</label>
             <br />
             <input id="MaxNumber"></input>
            </td>
            <td>
            <label>Current Number of resource</label>
             <br />
             <input id="CurrNumber"></input>
            </td>
           </tr>
           <tr>
            <td colSpan="4" align="right">
              <button type=""  onClick={this.sayHello} >Add Resource</button>
              </td>
           </tr>
          </table>
        </div>
      </header>
    </div>
  );
}
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv)
root.render(<App />);
