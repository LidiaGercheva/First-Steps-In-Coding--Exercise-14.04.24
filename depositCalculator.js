function depositCalculator(input){

    let depositPeriod = Number(input[0]);
    let depositMo = Number(input[1]);
    let yearDiscount = Number(input[2]) / 100;

    let sum =depositPeriod + depositMo * (depositPeriod * yearDiscount ) / 12;

    console.log(sum);

}
depositCalculator(["200 " , "3" ,"5.7"]);
