function basketballGirl(input){

    let basketballTrainingYear = Number(input[0]);

    let shoesBasketball = 0.6 * basketballTrainingYear;
    let clothesBasketball = 0.8 * shoesBasketball;

    let ballBasketball = (1/4) * clothesBasketball;
    let acesoariesBasketball = (1/5) * ballBasketball;

    let allBasketballPrice = shoesBasketball + clothesBasketball + ballBasketball + acesoariesBasketball + basketballTrainingYear;

    console.log(allBasketballPrice);
}
basketballGirl(["550"]);