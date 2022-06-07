const pi = Math.PI;

function calcArea(diameter){
    return Math.pow(diameter/2, 2)*pi;
}


function valueProp( pizzaVals ){
    let total = pizzaVals["price"]*pizzaVals["qty"];
    const area = calcArea(pizzaVals["diameter"])*pizzaVals["qty"];
    const value = area/total;
    const costPerInSq = total/area;
    

    let retVal = [area, value, costPerInSq, total];
    
    for (let i = 0; i < 4; i++){
        if(typeof(retVal[i]) !== "number" || retVal[i] === Infinity || retVal[i] === 0 || isNaN(retVal[i])){
            retVal[i] = "";
        }
        else{
            retVal[i] = +retVal[i].toFixed(3);
        }
    }
    return retVal;
}

export default valueProp;
