function stepstocalories(){
    let weight=Number(document.querySelector("#weight").value);
    let steps=Number(document.querySelector("#steps").value);
    let gender=document.querySelector("#gender").value;
    let intensityfactor=Number(document.querySelector("#intensity").value);
    let caloriesburned=0;


    if (!weight || !steps || !gender || !intensityfactor) {
        alert("Please fill all fields!");
        return;
    }

    if(gender==="male"){
        caloriesburned=(steps*0.0005*weight*intensityfactor);
    }
    else{
        caloriesburned=(steps*0.00045*weight*intensityfactor);
    }
    caloriesburned=Math.round(caloriesburned);
    document.getElementById("weightop").innerText=weight+"kg";
    document.getElementById("genderop").innerText=gender;
    document.getElementById("stepsop").innerText=steps;
    document.getElementById("StoC").innerText="~"+caloriesburned;
    



}
function reset(){
    // Input values reset
    document.querySelector("#weight").value = "";
    document.querySelector("#steps").value = "";
    document.querySelector("#gender").value = "";
    document.querySelector("#intensity").value = "";

    // Output values reset
    document.getElementById("weightop").innerText = 0;
    document.getElementById("stepsop").innerText = 0;
    document.getElementById("genderop").innerText = "-";
    document.getElementById("StoC").innerText = 0;
}