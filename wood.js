/* 
    chair = 3cft;
    table = 10cft;
    bed = 50cft;
 */

const woodPerChair = 3;
const woodPerTable = 10;
const woodPerBed = 50;

function getTotalWood(chairQuantity, tableQuantity, bedQuantity){
    const woodForChair = woodPerChair * chairQuantity;
    const woodForTable = woodPerTable * tableQuantity;
    const woodForBed = woodPerBed * bedQuantity;

    const totalWoodNeeded = woodForChair + woodForTable + woodForBed;
    return totalWoodNeeded;
}

const totalWood = getTotalWood(10, 10, 10);
console.log(totalWood);