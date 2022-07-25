let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let hour1 = parseInt(hours / 10);
let hour2 = hours % 10;
let minute1 = parseInt(minutes / 10);
let minute2 = minutes % 10;

function addElement(element, parentId, pos, atrrId, atrrClass, content) {
    let newElement = document.createElement(element);
    let newParent = document.getElementById(parentId);
    newElement.className = atrrClass;
    newElement.id = atrrId;
    newElement.innerHTML = content;
    newParent.insertBefore(newElement, newParent.children[pos]);
}
function deleteElement(id) {
    document.getElementById(id).remove();
}
function setNumbers(id, content) {
    document.getElementById(id).innerHTML = content;
}
function efectDown(id) {
    document.getElementById(id).style.transform =
        "translateY(100px) rotateX(180deg)";
}
function setCurretTime() {
    setNumbers("phr_up1", hour1);
    setNumbers("phr_up2", hour2);
    setNumbers("phr_down1", hour1);
    setNumbers("phr_down2", hour2);
    setNumbers("pmin_up1", minute1);
    setNumbers("pmin_up2", minute2);
    setNumbers("pmin_down1", minute1);
    setNumbers("pmin_down2", minute2);
}
function updateTime() {
    if (hours != new Date().getHours()) {
        hours = new Date().getHours();
        if (hour1 != parseInt(hours / 10)) {
            hour1 = parseInt(hours / 10);
            efectDown("divhr_up1");
            deleteElement("divhr_up1");
            addElement("div", "container", 0, "divhr_up1", "up", "");
            addElement("p", "divhr_up1", 0, "phr_up1", "", hour1);
            setNumbers("phr_down1", hour1);
        }
        if (hour2 != hours % 10) {
            hour2 = hours % 10;
            efectDown("divhr_up2");
            deleteElement("divhr_up2");
            addElement("div", "container", 1, "divhr_up2", "up", "");
            addElement("p", "divhr_up2", 0, "phr_up2", "", hour2);
            setNumbers("phr_down2", hour2);
        }
    } else {
        minutes = new Date().getMinutes();
        if (minute1 != parseInt(minutes / 10)) {
            minute1 = parseInt(minutes / 10);
            efectDown("divmin_up1");
            setTimeout(() => {
                deleteElement("divmin_up1");
                addElement("div", "container", 3, "divmin_up1", "up", "");
                addElement("p", "divmin_up1", 0, "pmin_up1", "", minute1);
                setNumbers("pmin_down1", minute1);
            }, 2000);
        }
        if (minute2 != minutes % 10) {
            minute2 = minutes % 10;
            efectDown("divmin_up2");
            setTimeout(() => {
                deleteElement("divmin_up2");
                addElement("div", "container", 4, "divmin_up2", "up", "");
                addElement("p", "divmin_up2", 0, "pmin_up2", "", minute2);
                setNumbers("pmin_down2", minute2);
            }, 2000);
        }
    }
}
function watchDigital() {
    document.getElementById("digital").innerHTML =
        new Date().getHours() +
        " : " +
        new Date().getMinutes() +
        " : " +
        new Date().getSeconds();
}
window.addEventListener("load", () => {
    setCurretTime();
    setInterval(updateTime, 1000);
    setInterval(watchDigital, 1000);
});
