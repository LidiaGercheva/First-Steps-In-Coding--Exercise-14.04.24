function depositCalc(input){
     
let depositSum = Number(input[0]);
let depositPer = Number(input[1]);
let allDiscountYear = Number(input[2]) / 100;


    let finalSum = depositSum + depositPer * (depositSum * allDiscountYear) / 12;

    console.log(finalSum);
}
depositCalc([ "2350" , "6 " , "7 " ]);
