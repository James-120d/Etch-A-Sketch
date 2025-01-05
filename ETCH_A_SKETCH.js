// ETCH-A-SKETCH
// Create A webpage with 16 x 16 grid of 'Divs' using HTML
//JS      Create Divs using Java - I imagine using DOM techniques
//HTML    Create a 'container' for the Divs
//HTML    Use "FlexBox" to make Divs appear as a grid
// 
let gridSize = 16
function create_container(size) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div")
        cell.addEventListener("click", () => {
            cell.style.backgroundColor = "Black"
        })
        container.append(cell)
    }
}


const button = document.getElementById("gridbutton")
button.addEventListener("click", () => {
    let newSize = prompt("How many columns would you like to make your grid?");
    console.log("User Entered: ", newSize)
    if (newSize > 100) {
        alert("This is too many columns!")
        newSize = 16
    }

    create_container(newSize)
})

create_container(gridSize)




