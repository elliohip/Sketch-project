const board = document.getElementById("Sketchboard");

const divList = [];
const ArrayOfDivList = [];
const wholeBoard = [];


let colorButton = document.getElementById("submit-button");
let sizeButton = document.getElementById("size-button");

let c = 0;


let isDrawing = false;
let gameColor = prompt("what color do you want to draw?");
let width;
let height;
let evtChecker;

let colorChecker = (gameColor != undefined);


sizeButton.addEventListener("click", sizeBtn);

colorButton.addEventListener("click", askColor);

function sizeBtn() {
    askSize();
    createGrid(width, height);
}




function askSize() { 
    console.log("event fired");
    width = prompt("Write your x value: ");
    height = prompt("Write your y value: ");
}

function askColor() {
    gameColor = prompt("what color do you want to draw? ");
    console.log(gameColor);
}

document.getElementById("submit-button").addEventListener("click", askColor);

/*
document.getElementById("size-button").addEventListener("click", askSize());
*/

function changeColor(ev) {
    
    

    ev.currentTarget.style.backgroundColor = gameColor;

    console.log("color changed");
    
    
};

function setDrawing(evt) {

    


    // event chacker to check if this event has been fired after process

    console.log("event fired");
    

   
    if (!isDrawing) {
        isDrawing = true;
        drawing();
    } else {
        isDrawing = false;
        drawing();
    }

    console.log(isDrawing);

}

function drawing() {
    if (isDrawing) {
        
        for (i = 0; i < width * height; i++) {

            
            wholeBoard[i].addEventListener("mouseleave", changeColor);
            
        }
    }
    else if (!isDrawing) {
        for (i = 0; i < width * height; i++) {

            
            wholeBoard[i].removeEventListener("mouseleave", changeColor);
            
        }
    }
}


function setColor() {

    
    
    

    console.log(gameColor);
};

colorButton.addEventListener("click", setColor);




function createGrid (x, y) {

    let pixnum = x*y;

    let pixw = 1/x * 100;
    let pixh = 1/y * 100;

    

    for (let j = 0; j < x; j++) {
        
        

        
        
        for (let i = 0; i < y; i++) {

            p = document.createElement("div");
            
            
            


            p.style.display.alignSelf = "center";


            p.style.backgroundColor = "black";

            p.className = "sketchPix";

            

            

            
            p.style.borderColor = "black";
            p.style.borderWidth = "1px";

            p.style.width = pixw + "%";
            p.style.height = pixh + "%";


            document.getElementById("Sketchboard").appendChild(p);

            
            // p.addEventListener("click", setDrawing);
            



            divList[i] = p;
            
            wholeBoard[c] = p;

            c++;

            
            
        }

        ArrayOfDivList[j] = divList;
        
        console.log("made Row");
    }

    


};









function main() {
    askSize();
    createGrid(width, height);
    askColor();

    document.getElementById("Sketchboard").addEventListener("click", setDrawing);
    

}

main();
