function tankFish(input){
   
    let tankLenght = Number(input[0]);
    let tankWidth = Number(input[1]);
    let tankHeight = Number(input[2]);
    let tankProcens = Number(input[3]) / 100;

    let tankS = tankLenght * tankWidth * tankHeight;
    let tankLitersS = tankS * 0.001; 
    let tankAllProcent = tankS * (1 - tankProcens);

    console.log(tankAllProcent);

}
tankFish(["105" , "77" , "89" , "18.5"]);