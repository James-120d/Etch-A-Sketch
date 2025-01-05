// ETCH-A-SKETCH
// Create A webpage with 16 x 16 grid of 'Divs' using HTML
//JS      Create Divs using Java - I imagine using DOM techniques
//HTML    Create a 'container' for the Divs
//HTML    Use "FlexBox" to make Divs appear as a grid
// 

function Mouse_position() {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
}

function create_container() {
    const container = document.getElementById("container");

    for (let i = 0; i < 16; i++) {
        const newDiv = document.createElement("div")

        container.append(newDiv)
    }
}
create_container()