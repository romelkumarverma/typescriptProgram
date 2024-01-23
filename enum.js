/*enum Days{
    sun,mon,tue,wed,thu,fri,sat
}
//let whichDay:Days;
//whichDay=Days.mon
//console.log(whichDay);


function whichDay(day:Days)
{
    return day;
}
console.log(whichDay(Days.wed)); */
/*enum Role{
    admin,hr,manager
}

function whichDay(day:Role)
{
    return day;
}
console.log(whichDay(Role.hr));  */
/* enum Days{
    //mon,tue,wed,thu,fri
    mon="mon",tue="tue"
}

let whichDay:Days;
whichDay=Days.mon

console.log(whichDay) */
var Days;
(function (Days) {
    Days["mon"] = "mon";
    Days["tue"] = "tue";
})(Days || (Days = {}));
function whichDay(day) {
    return day;
}
console.log(whichDay(Days.tue));
