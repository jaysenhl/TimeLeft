let numberinput = document.getElementById("numberinput").value;
let toLive = 100;
let days = (toLive - numberinput) * 365;
let weeks = (toLive - numberinput) * 52;
let months = (toLive - numberinput) * 12;


function calculate(){
    numberinput = document.getElementById("numberinput").value;
    toLive = 100;
    days = (toLive - numberinput) * 365;
    weeks = (toLive - numberinput) * 52;
    months = (toLive - numberinput) * 12;
    
    document.getElementById("days").innerText += " " + days;
    document.getElementById("weeks").innerText += " " + weeks;
    document.getElementById("months").innerText += " " + months;
    document.getElementById("calc").disabled = true;

    if(days === 0){
        alert("oh you dead");
    }
}

function deleteAll(){
    document.getElementById("days").innerText = "Days: ";
    document.getElementById("weeks").innerText = "Weeks: ";
    document.getElementById("months").innerText = "Months: ";
    document.getElementById("calc").disabled = false;
    document.getElementById("numberinput").value = "";
}