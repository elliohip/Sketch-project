const board = document.getElementById("Sketchboard");

const divList = [];
const ArrayOfDivList = [];

let input = document.getElementById("color");
let colorButton = document.getElementById("submit-button");

let gameColor = "black";
let width;
let height;

let colorChecker = (gameColor != undefined);




function changeColor(ev) {

    ev.currentTarget.backgroundColor = gameColor;

};



function setColor() {
    gameColor = document.getElementById("color").value;

    colorChecker = true;

    console.log(gameColor);
};

colorButton.addEventListener("click", setColor);




function createGrid (x, y) {

    let pixnum = x*y;

    let pixw = 1/x * 100;
    let pixh = 1/y * 100;

    

    for (let j = 0; j < x; j++) {
        
        

        
        
        for (let i = 0; i < y; i++) {

            
            
            
            divList[i] = document.createElement("div");


            divList[i].style.display.alignSelf = "center";


            divList[i].style.backgroundColor = "black";

            
            divList[i].style.borderColor = "black";
            divList[i].style.borderWidth = "1px";

            divList[i].style.width = pixw + "%";
            divList[i].style.height = pixh + "%";
            


            divList[i].addEventListener("mouseover", changeColor)


        

            document.getElementById("Sketchboard").appendChild(divList[i]);


            

            
            console.log("pix appended");
        }

        ArrayOfDivList[j] = divList;
        
        console.log("made Row");
    }


};


function askSize() {
    width = prompt("Write your x value: ");
    height = prompt("Write your y value: ");
}

askSize();




if (colorChecker) {
    createGrid(width, height);
}
