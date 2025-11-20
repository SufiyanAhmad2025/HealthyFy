function calculateBMR(){
    let age = Number(document.querySelector("#age").value);
    let weight = Number(document.querySelector("#weight").value);
    let height = Number(document.querySelector("#height").value);
    let gender = document.querySelector("#gender").value;
    let TDEE = Number(document.querySelector("#activity").value);

    if (!age || !weight || !height || !gender || !TDEE) {
        alert("Please fill all fields!");
        return;
    }


let BMR;

    if(gender==="male"){
      BMR=(88.362+(13.397*weight)+(4.799*height)-(5.677*age))*TDEE;
    }
    else{
        BMR=(447.593+(9.247*weight)+(3.098*height)-(4.330*age))*TDEE;
    }
    BMR = Math.round(BMR);
    document.getElementById("ageop").innerText=age;
    document.getElementById("heightop").innerText=height+"cm";
    document.getElementById("weightop").innerText=weight+"kg";
    document.getElementById("genderop").innerText=gender;
    document.getElementById("BMR").innerText="~"+BMR;

}

function reset(){

 // Output values reset
 document.getElementById("ageop").innerText = 0;
 document.getElementById("heightop").innerText = 0;
 document.getElementById("weightop").innerText = 0;
 document.getElementById("genderop").innerText = "-";
 document.getElementById("BMR").innerText = 0;

 // Input fields reset
 document.getElementById("age").value = "";
 document.getElementById("weight").value = "";
 document.getElementById("height").value = "";
 document.getElementById("gender").value = "";
 document.getElementById("activity").value = "";
}

