function vacationBooks(input){
  
    let pageNumbers = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let numberDays = Number(input[2]);

    let timeForReading = pageNumbers / pagesForHour;
    let dayTimeReading = timeForReading / numberDays;

    console.log(dayTimeReading);

}
vacationBooks(["432" , "15" , "4"]);