import {AiFillPlusCircle} from 'react-icons/ai';

// AddRow Component - adds a row with the imported AiFillPlusCircle icon. Takes as a param - the addRowHandler event from parent. 
export default function AddRow( {addRowHandler}  ){
    return(
        <>
            <tr>
                <td colSpan="9">
                    <AiFillPlusCircle onClick={addRowHandler}></AiFillPlusCircle>
                </td>
            </tr>
        </>
    );
}