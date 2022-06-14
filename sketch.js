const board = document.getElementById("sketchboard");

const divList = [];
const ArrayOfDivList = [];

function createGrid () {
    for (let j = 0; j < 16; j++) {
        ArrayOfDivList[j] = document.createElement("div");
        document.getElementById("Sketchboard").appendChild(ArrayOfDivList[j]);
        
        for (let i = 0; i < 16; i++) {

            divList[i] = document.createElement("div");
            ArrayOfDivList[j].appendChild(divList[i]);

            divList[i].style.display = "flex";
            
            divList[i].style.height = "10px";
            divList[i].style.width = "10px";
            divList[i].style.backgroundColor = "red";

            

            
            console.log("pix appended");
        }
        ArrayOfDivList[j] = divList;
    }


}


createGrid();
