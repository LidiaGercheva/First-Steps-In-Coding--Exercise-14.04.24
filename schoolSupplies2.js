function suppliesSchool(input){
   
    let numberPenPac = Number(input[0]);
    let numberMarkrerPac = Number(input[1]);
    let literPreparation = Number(input[2]);
    let procentDiscount = Number(input[3]) / 100;

    let penP = 5.8;
    let markerP = 7.2;
    let preparationL = 1.2;

    let priceNumberPenPac = numberPenPac * penP;
    let priceNumberMarkerPac = numberMarkrerPac * markerP;
    let priceLiterPreparation = literPreparation * preparationL;

    let allSuppliesPrice = priceNumberPenPac + priceNumberMarkerPac + priceLiterPreparation;
    let allProcentDiscount = allSuppliesPrice - (allSuppliesPrice * procentDiscount);

    console.log(allProcentDiscount);

}
suppliesSchool(["4" , "2" , "5" , "13"]); 