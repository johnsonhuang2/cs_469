import RowInstance from './RowInstance.js';
import AddRow from './AddRow.js';
import { FcCalculator } from "react-icons/fc";
import {GiDoughRoller} from "react-icons/gi";
import { useState, useEffect } from "react";
import valueProp from '../value_calc.js';

// Table component - Handles the row rendering and value calculation. Holds all the relevant row states and their properties.
export default function Table(){
    // Variables for the Table. Rowobj references each individual row, identified via an id (Date) and their properties. Initializes the first row.
    // maxKey refers to the row ID with the highest "value" property
    const [rowObj, setRowObj] = useState( {[Date.now()]:{value: "", qty:"", diameter:"", price:"", total:"",area:"", cost:"", costPerSqIn:""}} );
    const [maxKey, setMaxkey] = useState(null);

    // Receives the specific row ID and deletes it from the object 
    const removeRow = ((id) => {
        const newRowObj = {...rowObj};
        delete newRowObj[id];
        setRowObj(newRowObj);
    })

    // Event to add a row. Receives the event to add a row, then initializes a default (empty) row for the user by adding it in the rowObj. 
    const addRowHandler = (e) => {
        e.preventDefault();
        const newId = Date.now();
        const newRow = {currSel:"", value: "", qty:"", diameter:"", price:"", total:"",area:"", cost:"", costPerSqIn:""};
        const newRowObj = {};
        // Adds a row object by cloning the old rowObj state and appending the default (new) row 
        newRowObj[newId] = newRow;
        setRowObj( prevState => ({
            ...prevState, [newId]: newRow
        }));
    }

    // Event to update values. Receives the specific id of the row being updated, the property being updated, and the updated value. 
    const updateValues = (id, updatedValue, name) => {
        const newRowObj = {...rowObj};
        newRowObj[id][name] = updatedValue;
        const input = {diameter:[newRowObj[id]["diameter"]], qty:[newRowObj[id]["qty"]], price:[newRowObj[id]["price"]]};
        const valueInputs = valueProp(input);
        newRowObj[id]["value"] = valueInputs[1];
        newRowObj[id]["costPerSqIn"] = valueInputs[2];
        newRowObj[id]["area"] = valueInputs[0];
        newRowObj[id]["total"] = valueInputs[3];
        setRowObj(newRowObj);
    }

    // useEffect hook. Calls whenever rowObj is updated and on page load.
    useEffect(() => {
        // On call, we get the current highest ID row (if any), and assign it to getMaxKey. 
        const getMaxKey = (() => {
            let currMax = 0;
            let currMaxId = null;
            for(let row in rowObj){
                if(rowObj[row]["value"] > currMax){
                    currMax = rowObj[row]["value"];
                    currMaxId = row;
                }
            }
            setMaxkey(currMaxId);
        });
        getMaxKey();
    }, [rowObj]);    

    return (
        <>
        <div class="tableLayout">
            <div class="header"> Pizza Value Calculator <FcCalculator size={30}/> </div>
            <div class="header"> Get more dough for less dough. <GiDoughRoller size={30}/> </div>
            <table>
                <thead>
                    <tr>
                            <th>Auto-fill</th>
                            <th>Qty</th>
                            <th>Diameter</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Area</th>
                            <th>Value</th>
                            <th>Cost per in<sup>2</sup></th>
                            <th>Delete Row</th>
                    </tr>
                </thead>
                <tbody>
                        {/* Iterate through the entire rowObj object */}
                        { Object.keys( rowObj ).map( (key) => 
                            {
                                {/* If the id is identified as the maxKey (id of highest value row), color the background green */}
                                if(key === maxKey){
                                    return <tr id="topValue"><RowInstance rowData={rowObj[key]} id={key} removeRow={removeRow} updateValues={updateValues}/></tr>
                                }
                                else{
                                    return <tr><RowInstance rowData={rowObj[key]} id={key} removeRow={removeRow} updateValues={updateValues}/></tr>
                                }
                            }
                        )
                        }
                    <AddRow addRowHandler={addRowHandler}/>
                </tbody>
            </table>
            </div>
        </>
        );
}