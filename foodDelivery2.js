function deliveryFood(input){
     
   let menuChiken = Number(input[0]);
   let menuFish = Number(input[1]);
   let menuVeg = Number(input[2]);

   let chikens = 10.35;
   let fishes = 12.4;
   let veges = 8.15;
   let deliveryPrice = 2.5;

   let priceChikenMenu = menuChiken * chikens;
   let priceFishMenu = menuFish * fishes;
   let priceVegMenu = menuVeg * veges;

   let allDeliveryFoodPrice = priceChikenMenu + priceFishMenu + priceVegMenu;
   let priceDessert = allDeliveryFoodPrice * 20 / 100;

   let deliveryFoodPrice = priceChikenMenu + priceFishMenu + priceVegMenu + priceDessert + deliveryPrice;

   console.log(deliveryFoodPrice);

}
deliveryFood(["9" , "2" , "6"]);
