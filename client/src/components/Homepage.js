import Instructions from './Instructions.js';
import Table from './Table';

// Homepage component. Calls all relevant components for the Web app
export default function Homepage() {
    return(
        <>
            <Table/>
            <Instructions/>
        </>
    );
}
