import SizeComp from '../pizza-size-comparison.webp';

// Renders the about page for the web app
export default function About(){
    return(
        <>
        <div class="aboutStyling">
        <div id="instructions"> 
            <div id="instructionsHeader">About</div>
            <p> Stop paying more for a worse deal! In this macro-economic environment, your wallet can use that extra penny!</p>
            <p> 
                There are many pizza enjoyers out there who try to get the best deal on their pizzas. One common misconception is that quantity is greater than size. I would know, 
                I used to be one of these people. Choosing two mediums over a large. However, this cannot be further from the truth when it comes to Pizzas and the power of area.
                As you probably know, (most) pizzas are circular in nature. As such, we would calculate the amount of dough using the area formula. The formula for the area given the
                size of a pizza is: <span>&#960;</span>(<sup>d</sup>/<sub>2</sub>)<sup>2</sup>.
                <br></br>
                <br></br> 
                Because the area grows at an exponential pace, it often makes sense to buy the pizza with a larger diameter (d). 
            </p>
            <div class="aboutFooter">
                <img src={SizeComp}></img>
                <p>Source: https://www.omnicalculator.com/food/pizza</p>
            </div>
            </div>
        </div>
        </>
    );
}