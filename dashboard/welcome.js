const username = sessionStorage.getItem("sgms_username");

if (username) {
    document.getElementById("userName").textContent =
        username.split("@")[0];
}