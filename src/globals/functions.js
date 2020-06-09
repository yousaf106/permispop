export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function isDatePast(selected){
    var today = new Date();
    var selectedDate =  toDate(selected);     
    var today = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var formattedDate = toDate(today);
    return selectedDate<formattedDate;
}
export function isDateFuture(selected){
    var today = new Date();
    var selectedDate =  toDate(selected);     
    var today = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var formattedDate = toDate(today);
    return selectedDate>formattedDate;
}
export function getCurrentDate(){
    var today = new Date();
    var today = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    return today;
}
export function toDate(dateStr) {
    var parts = dateStr.split("-")
    return new Date(parts[2], parts[1] - 1, parts[0])
  }
  