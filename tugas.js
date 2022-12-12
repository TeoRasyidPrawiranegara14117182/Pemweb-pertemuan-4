function themes(){
    set = document.getElementById("themes").value;

    if(set == "light"){
        document.getElementById("header").style.backgroundColor = "#4c6793";
        document.getElementById("nama").style.color = "black";
        document.getElementById("left-cont").style.backgroundColor = "#150050";
        document.getElementById("right-cont").style.backgroundColor = "blue";
    }
    else if (set == "dark") {
        document.getElementById("header").style.backgroundColor = "#1B2430";
        document.getElementById("nama").style.color = "white";
        document.getElementById("left-cont").style.backgroundColor = "#1B2430";
        document.getElementById("right-cont").style.backgroundColor = "#1B2430";

    }
}