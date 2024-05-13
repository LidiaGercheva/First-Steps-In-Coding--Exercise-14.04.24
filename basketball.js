function basketball(input){
  
    let basketballYeas = Number(input[0]);

    let basketballShoes = 0.6 * basketballYeas;
    let basketballClothes = 0.8 * basketballShoes;

    let basketballBall = (1/4) * basketballClothes;
    let basketballAcesoaries = (1/5) * basketballBall;

    let allPriceBasketball = basketballYeas + basketballShoes + basketballClothes + basketballBall + basketballAcesoaries;

    console.log(allPriceBasketball);

}
basketball(["365"]);
