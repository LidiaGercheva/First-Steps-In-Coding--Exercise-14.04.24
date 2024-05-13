function foodDelivery(input){
     
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);
    
    let chiken = 10.35;
    let fish = 12.4;
    let veg = 8.15;
    let delivery = 2.5;

    let chikenMenuPrice = chikenMenu * chiken;
    let fishMenuPrice = fishMenu * fish;
    let vegMenuPrice = vegMenu * veg;

    let allPriceMenu = chikenMenuPrice + fishMenuPrice + vegMenuPrice;
    let dessertPrice = allPriceMenu * 20 / 100;

    let allFoodDeliveryPrice = allPriceMenu + dessertPrice + delivery;

    console.log(allFoodDeliveryPrice);
    
}
foodDelivery(["2" , "4" , "3"]);