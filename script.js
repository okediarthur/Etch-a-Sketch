console.log("Script is running!");
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");

    //Function to handle mouseover event
    function handleMouseOver(event){
        event.target.classList.add("hovered");
    }
    
    // Looping to create rows
    for(var i = 0; i < 16; i++){
        //create a new row div
        var row = document.createElement("div");
        row.className = "grid-row";

        //looping to create a columns
        for(var j = 0; j < 16; j++){
            //create a new column
            var cell = document.createElement("div");
            cell.className = "grid-item";

            //Add event listener for hover
            cell.addEventListener("mouseover", handleMouseOver);

            //Append column div to row div
            row.appendChild(cell);
        }
        //append row div to container div
        container.appendChild(row);
    }
});