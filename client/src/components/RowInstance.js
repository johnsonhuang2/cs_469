import {AiFillMinusCircle} from 'react-icons/ai';
import { useState, useEffect } from "react";
import Axios from "axios";

// RowInstance component, takes "props", which holds the properties of all the states held in the rowObj variable and functions from parent
export default function RowInstance( props ){
    const [sizeInfo, setSizeInfo] = useState( [{"chain_name": "", "size": "", "diameter": ""}] );
    const [sizeObj, setSizeObj] = useState(null);
    const [currSel, setCurrSel] = useState("");

    useEffect(() => {
        // useEffect hook. Always calls on default load. Makes an API call to the MongoDB back-end to retrieve all relevant values 
        Axios.get("http://localhost:3010/").then( (resp) => {
            setSizeInfo(resp['data']);
            let chainPull = resp['data'].reduce(
                (obj, item) => Object.assign(obj, {[item.chain_name+"_"+item.size]:item.diameter}), {});
            setSizeObj(chainPull);
        })
    }, []);    

    const dropDownSelect = ((e) => {
        // dropDownSelect handler, gets all values from MongoDB database and populates the drop-down
        let diameter = "";
        if(e.target.value === ""){
            setCurrSel("");
        }
        else{
            setCurrSel(e.target.value);
            diameter = sizeObj[e.target.value];
        }
        props.updateValues(props.id, diameter, "diameter");
        console.log(e.target.value);
        props.updateValues(props.id, e.target.value, "currSel")
    })


    const onDelete = (e) => {
        // onDelete handler, calls the property function "removeRow" passed from parent. Pass in the ID of the row to be removed.
        e.preventDefault();
        props.removeRow(props.id);
    }


    const callUpdate = (e) => {
        // callUpdate handler, calls the property function "updateValues" passed from parent. Pass in the ID of row, updated value, and property name 
        const editValue = e.target.value;
        const name = e.target.name;
        props.updateValues(props.id, editValue, name);
    }

    return(
        <>
            <td>
                <select name="chains" selected={currSel} id="chains" onChange={dropDownSelect} style={{marginRight: "15px"}} value={props.rowData.currSel}>
                    <option value=""></option>
                    {
                        // object iterator for the dropdown
                        sizeInfo.map( (option) => (
                            <option value={option['chain_name']+"_"+option["size"]} key={option['chain_name'] + option['size']}>{option['chain_name'] + " - " + option['size']}</option>
                        ))
                    }
                </select>
            </td>
            <td style={{padding:"10px"}}>
                <input name="qty" value={props.rowData.qty} onChange={callUpdate} type="number"></input>
            </td>
            <td style={{padding:"10px"}}>
                <input name="diameter" value={props.rowData.diameter} onChange={callUpdate} type="number"></input>
            </td>
            <td style={{padding:"10px"}}>
                <input name="price" value={props.rowData.price} onChange={callUpdate} type="number"></input>
            </td>
            <td style={{padding:"10px"}}>
                <input name="total" value={props.rowData.total} onChange={callUpdate} type="number"></input>
            </td>
            <td style={{padding:"10px"}}>
                <input value={props.rowData.area} readOnly></input>
            </td>
            <td style={{padding:"10px"}}>
                <input value={props.rowData.value} readOnly></input>
            </td>
            <td style={{padding:"10px"}}>
                <input value={props.rowData.costPerSqIn} readOnly></input>
            </td>
            <td><AiFillMinusCircle size={20} onClick={onDelete}/></td>
        </>
    );
}
