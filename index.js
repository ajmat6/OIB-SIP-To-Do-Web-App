window.addEventListener('load' , () => {
    const x = document.querySelector('#form');
    const y = document.querySelector('#new-task-form');
    const z = document.querySelector('#tasks');
    
    x.addEventListener('submit' , (e) => {
        e.preventDefault(); //stops from refreshing the page as when you submit a form then it refreshes the page. So this prevent default function will prevent the default action that usually takes place while doing an action.

        const newtask = y.value;

        if(!newtask) //if the user haven't added any task and still try to submitt. 
        {
            alert("Please enter a task");
        }

        else
        {
            const task1 = document.createElement("div"); //creates an instance of an element of type div
            task1.classList.add("task"); //or usme phir task naam vaale class ko add kardo(that is also in div)

            const task1content = document.createElement("div");
            task1content.classList.add("content");

            const task1text = document.createElement("input");
            task1text.classList.add("text");
            task1text.value = newtask;
            task1text.setAttribute("readonly" , "readonly") //not able to edit the set task

            const actions = document.createElement("div");
            actions.classList.add("action");

            const actionEdit = document.createElement("button");
            actionEdit.classList.add("edit");
            actionEdit.innerHTML = "Edit";

            const actionDelete = document.createElement("button");
            actionDelete.classList.add("delete");
            actionDelete.innerHTML = "Delete";
            
            z.appendChild(task1);
            task1.appendChild(task1content); //adding the content at the end of the list.
            task1content.appendChild(task1text);

            task1.appendChild(actions);
            actions.appendChild(actionDelete);
            actions.appendChild(actionEdit);
            
            y.value=""; //after adding a task add your new task here will become empty.
            
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