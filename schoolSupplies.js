function shoolSupplies(input){

    let penPacNumber = Number(input[0]);
    let markrerPacNumber = Number(input[1]);
    let preparationLiter = Number (input[2]);
    let discountProcent = Number(input[3]) / 100;

    let pen = 5.8;
    let marker = 7.2;
    let preparation = 1.2;

    let penPacPrice = penPacNumber * pen;
    let markerPacPrice = markrerPacNumber * marker;
    let preparationPrice = preparationLiter * preparation;
    let allPriceSupplies = penPacPrice + markerPacPrice + preparationPrice;
    let allDiscountPrice = allPriceSupplies - (allPriceSupplies * discountProcent);

    console.log(allDiscountPrice);
}
console.log(["2" , "3" , "4" , "25"]);