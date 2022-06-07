import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';

// Instructions component. Gives a brief overview of the features of the Table. 
export default function Instructions(){
    return(
        <>
            <div id="instructions"> 
            <div id="instructionsHeader">Instructions</div>
                <div>
                    <ul>
                        <p style={{textAlign:"center"}}>This calculator calculates the value of multiple pizzas (circles), using the area and total cost. 
                        It then highlights the pizza with the highest value in <span id="topValue" class="demoColor">green</span></p>
                        <li>Auto-fill - dropdown that autopopulates the diameter field of a chain's pizza, given the size of the pizza</li>
                        <li>Qty - Amount of pizzas being bought</li>
                        <li>Diameter - diameter of the pizza in inches (most chains list their pizza sizes in Diameter)</li>
                        <li>Price - Price per pizza</li>
                        <li>Total - auto-populated calculation of the pizza order, using price <span>&#215;</span> qty</li>
                        <li>Area - auto-populated calculation of the area of the combined pizza qty - qty
                        { /* This span contains the area calculation formula */}
                        <span>&#215;</span><span>&#960;</span>(<sup>d</sup>/<sub>2</sub>)<sup>2</sup></li>
                        <li>Value - auto-populated calculation of value, 
                        <sup>area</sup>/<sub>total</sub> </li>
                        <li>Cost Per in<sup>2</sup> - auto-populated calculation of cost per sq in, <sup>total</sup>/<sub>area</sub></li>
                        { /*Icons for the instructions*/ }
                        <li><AiFillMinusCircle/> - Click to delete the row</li>
                        <li><AiFillPlusCircle/> - Click to add a row</li>
                    </ul>
                </div>
            </div>
        </>
    );
};