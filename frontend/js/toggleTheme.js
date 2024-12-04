document.getElementById('toggle-theme').addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    if (document.body.classList.contains("dark-theme")){
        document.getElementById("toggle-theme"). innerHTML =
    ` <img src="./images/sol.png" alt="Tema escuro">
    `;
    } else {
        document.getElementById("toggle-theme").innerHTML = `
        <img src="./images/lua.png" alt="Tema escuro">
        `;
}});