const board = document.getElementById("Sketchboard");

const divList = [];
const ArrayOfDivList = [];

let input = document.getElementById("color");
let colorButton = document.getElementById("submit-button");

let gameColor;
let width;
let height;
let size = width * height;

function setColor(color) {
    gameColor = color;
}





function createGrid (x, y) {

    for (let j = 0; j < x; j++) {
        
        let row = document.createElement("div");

        document.getElementById("Sketchboard").appendChild(row);
        
        for (let i = 0; i < y; i++) {
            
            
            
            divList[i] = document.createElement("div");

            divList[i].style.display = "flex";
            
            divList[i].style.height = "1px";
            divList[i].style.width = "1px";
            divList[i].style.backgroundColor = "red";

            divList[i];

            row.appendChild(divList[i]);


            

            
            console.log("pix appended");
        }
        ArrayOfDivList[j] = divList;
        
        
    }


};


function askSize() {
    width = prompt("Write your x value: ");
    height = prompt("Write your y value: ");
}

askSize();
createGrid(width, height);
