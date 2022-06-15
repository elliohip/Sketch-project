const board = document.getElementById("Sketchboard");

const divList = [];
const ArrayOfDivList = [];

let gameColor;

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

            row.appendChild(divList[i]);
            

            

            
            console.log("pix appended");
        }
        ArrayOfDivList[j] = divList;
        
        
    }


};




createGrid(100, 100);
