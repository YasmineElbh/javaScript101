const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask()
{
    if(inputbox.value == "")
        alert("write something here!!");
    else
    {
        let tap = document.createElement("tap");
        tap.innerHTML = inputbox.value;
        listcontainer.append(tap);
    }
    inputbox.value = "";
}