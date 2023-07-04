const weekDay = document.querySelector("#week-days");
console.log(weekDay.children)

fetch("./data.json")
    .then(res => res.json())
    .then(data => {

        
        for(let i = 0; i < data.length; i++){

            const amount = document.createElement("p");
            amount.classList.add("amount")
            weekDay.children[i].appendChild(amount);
            amount.innerText = `${data[i].amount}$`;
            amount.style.background = "black";
            amount.style.fontSize = "0.8rem";
            amount.style.color = "white";
            amount.style.padding = "0.1rem";
            amount.style.margin = "0.1rem";



            const column = document.createElement("div");
            weekDay.children[i].appendChild(column);

            column.style.background = "coral";
            column.style.borderRadius = "5px";
            column.style.height = `${data[i].amount}mm`;
            column.style.width = "2rem";
            column.style.transition = "all 0.2s ease-in";


            const day = document.createElement("p");
            weekDay.children[i].appendChild(day);
            day.innerHTML = data[i].day;

        
        }       
     
        const column = document.querySelectorAll("#week-days > li");
        for(let i = 0; i < column.length; i++){
            column[i].addEventListener("mouseover", () => {
                column[i].children[1].style.background = "rgb(94, 242, 247)";
                column[i].children[0].display = "block";

            })
            column[i].addEventListener("mouseout", () => {
                column[i].children[1].style.background = "coral";
                column[i].children[0].display = "none";
            })
        }        
        
        
        
        
        
        
        
        
        
        
        
    }
    )