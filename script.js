document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
    var resetButton = document.getElementById("resetButton");
    var createGridButton = document.getElementById("createGridButton");
    var numSquaresInput = document.getElementById("numSquares");

    //Function to handle mouseover event
    function handleMouseOver(event){
        var randomColor = getRandomColor();
        event.target.style.backgroundColor = randomColor;
    }

    //Function to generate a random RGB color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for(var i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    //Function to handle reset button click
    function handleResetButtonClick() {
        //Remove the 'hovered' class from all grid items
        var gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(function(item){
            // item.classList.remove('hovered');
            item.style.backgroundColor = 'aquamarine';
        });
    }
    
    //Function to handle create button click
    function handleCreateGridButtonClick(){
        //clear existing grid
        container.innerHTML = '';

        //Get the number of sqaures per side from the input
        var numSqaures = parseInt(numSquaresInput.value, 10) || 16;

         // Looping to create rows
        for(var i = 0; i < numSqaures; i++){
            //create a new row div
            var row = document.createElement("div");
            row.className = "grid-row";

            //looping to create a columns
            for(var j = 0; j < numSqaures; j++){
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
    }
    //Add event listener for reset button click
    resetButton.addEventListener("click", handleResetButtonClick);

    //Add event listener for create grid button click
    createGridButton.addEventListener("click", handleCreateGridButtonClick);

    //Initial grid creation on page load
    handleCreateGridButtonClick();
});