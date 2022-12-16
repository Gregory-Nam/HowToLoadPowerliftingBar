import Plate from '../plate/Plate';

export default function WeightInputForm({loadBar}){

    const calculation = (weight) => {
        if(weight === 20) {
            console.log("empty bar");
            return;
        }
        const possibleWeights = [25, 20, 15, 10, 5, 2.5, 1.25];
        const orderedPlateColor = ["Red", "Blue", "Yellow", "Green", "White", "LittleRed", "Silver"];
        let plates = [];

        // minus 20 -> bar
        // minus 5 -> blockers
        let sideWeight = (weight-20-5)/2;
        let plateNumber = 0;
        possibleWeights.forEach((currentWeight, index)=>{
            while(currentWeight <= sideWeight && sideWeight % currentWeight !== sideWeight){
                plates.push(<Plate key={plateNumber++} color={orderedPlateColor[index]} weight={currentWeight}></Plate>);
                sideWeight -= currentWeight;
            }            
        });
        loadBar(plates);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const weightSubmitted = event.target[0].value;
        if(weightSubmitted === "") return;
        calculation(weightSubmitted);
    }
    
    return (<form onSubmit={handleSubmit}>
        <input type="number" step="2.5" min={20}/>
        <input type="submit" value="Submit"/>
    </form>);
}