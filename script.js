console.log("Script is running!");
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");

    //looping to create rows
    for(var i = 0; i < 16; i++){
        //create a new row div
        var row = document.createElement("div");
        row.className = "grid-row";

        //looping to create columns
        for(var j = 0; j < 16; j++){
            //create a new column
            var cell = document.createElement("div");
            cell.className = "grid-item";
            //append column div to row div
            row.appendChild(cell);
        }
        //append the row div to the coontainer div
        container.appendChild(row);
        console.log(container)
    }

});