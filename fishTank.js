function fishTank(input){
 
    let lenghTank = Number(input[0]);
    let widthTank = Number(input[1]);
    let heighTank = Number(input[2]);
    let procentTank = Number(input[3]) / 100;

    let sTank = lenghTank * widthTank * heighTank; 
    let sLitersTank = sTank * 0.001;

    let needLithers = sLitersTank * (1 - procentTank);
    
    console.log(needLithers);
}
fishTank(["85" , "75" , "47" , "17"]);
