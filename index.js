window.addEventListener('load' , () => {
    const x = document.querySelector('#form');
    const y = document.querySelector('#new-task-form');
    const z = document.querySelector('#tasks');
    
    x.addEventListener('submit' , (e) => {
        e.preventDefault(); 

        const newtask = y.value;

        if(!newtask) 
        {
            alert("Please enter a task");
        }

        else
        {
            const task1 = document.createElement("div");
            task1.classList.add("task"); 

            const task1content = document.createElement("div");
            task1content.classList.add("content");

            const task1text = document.createElement("input");
            task1text.classList.add("text");
            task1text.value = newtask;
            task1text.setAttribute("readonly" , "readonly") 

            const actions = document.createElement("div");
            actions.classList.add("action");

            const actionEdit = document.createElement("button");
            actionEdit.classList.add("edit");
            actionEdit.innerHTML = "Edit";

            const actionDelete = document.createElement("button");
            actionDelete.classList.add("delete");
            actionDelete.innerHTML = "Delete";
            
            z.appendChild(task1);
            task1.appendChild(task1content); 
            task1content.appendChild(task1text);

            task1.appendChild(actions);
            actions.appendChild(actionDelete);
            actions.appendChild(actionEdit);
            
            y.value=""; 
            
            actionEdit.addEventListener('click' , () => {
                if(actionEdit.innerHTML == "Edit")
                {
                    task1text.removeAttribute("readonly"); 
                    task1text.focus();
                    actionEdit.innerHTML = "Save";
                }

                else
                {
                    task1text.setAttribute("readonly" , "readonly");
                    actionEdit.innerHTML = "Edit";
                }
            });

            actionDelete.addEventListener('click' , () => {
                z.removeChild(task1);
            });
        }
    });
});