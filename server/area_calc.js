const pi = Math.PI;

function calcArea(diameter){
    return Math.pow(diameter/2, 2)*pi;
}


function valueProp( pizzaVals ){
    let trueCost = pizzaVals["price"]/pizzaVals["qty"];
    const area = calcArea(pizzaVals["diameter"]);
    const value = area/trueCost;
    const costPerInSq = trueCost/area;

    let retVal = [area, value, costPerInSq];

    for (let i = 0; i < 3; i++){
        retVal[i] = retVal[i].toFixed(3);
    }
    
    return retVal;
}

console.log(valueProp( {"price":18, "qty":2, "diameter":10}));
