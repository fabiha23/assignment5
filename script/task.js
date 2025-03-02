const complete = document.getElementsByClassName('complete');

for (let button of complete) {
    button.addEventListener('click', function() {
        alert("Board Updated Successfully");
        
        const convertedNumber = textConvertedToNumber("tasks");
        
        let subs=convertedNumber-1;
        document.getElementById("tasks").innerText=subs;

        const convertedNumber2 = textConvertedToNumber("nav-task");
        let sum=convertedNumber2+1;
        document.getElementById("nav-task").innerText=sum;

        let parentCard = button.parentElement.parentElement; 
        let taskTitle = parentCard.querySelector("h2").innerText;

        const p =document.createElement("p");
        p.classList.add("bg-[#F4F7FF]","mt-4","mx-3", "p-2", "rounded-md","font-medium", "font-poppins");
        p.innerText=` You have completed the task ${taskTitle} at ${new Date().toLocaleTimeString()}`;
        document.getElementById("new").appendChild(p);

        button.disabled=true;
        button.classList.add("opacity-50"); 
        button.classList.remove("cursor-pointer");

        if(document.getElementById("tasks").innerText==="0"){
            alert("Congrats! You have completed all the tasks!")
        }

    });
  }

