function vacationBook(input){
    let numberPages = Number(input[0]);
    let pages = Number(input[1]);
    let numberDays = Number(input[2]);
     
    let readingPagesTime = numberPages / pages;
    let dailyPagesTime = readingPagesTime / numberDays;

      console.log(dailyPagesTime);
}
vacationBook(["212" , "20" , "2"]);