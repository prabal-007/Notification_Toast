const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification(){
    const notify = document.createElement("div");
    notify.classList.add("toast")
    
    notify.innerText = "Successfully completed!\nLet's move to next project ";

    container.appendChild(notify);

    setTimeout(() =>{
        notify.remove();
    }, 3000);
}