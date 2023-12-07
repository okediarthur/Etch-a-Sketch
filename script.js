console.log("Script is running!");
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");

    //Looping to create rows
    for(var i = 0; i < 16; i++){
        //create a new row div
        var row = document.createElement("div");
        row.className = "grid-row";

        //loop to create columns
        for(var j = 0; j < 16; j++){
            //create a new div for each column
            var cell = document.createElement("div");
            cell.className = "grid-item";

            //appending the column div to the row div
            row.appendChild(cell);
            // console.log(row);
        }
        //Append the row div to the container div
        container.appendChild(row);
        // console.log(container);
    }

});