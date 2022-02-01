/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    //Wood calculation
    const charWoodQuatity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    // add all wood quantity
    const totalWood = charWoodQuatity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;

}
const firstOption = woodCalculator(2, 2, 2);
console.log(firstOption);