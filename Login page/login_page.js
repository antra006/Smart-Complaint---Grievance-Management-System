

const form = document.querySelector("form");
const userInput = document.getElementById("email");
const passInput = document.getElementById("password");
const rememberBox = document.querySelector(".remember input");

// Create one small error message under each input
const userError = createError(userInput);
const passError = createError(passInput);

function createError(input) {
    const p = document.createElement("p");
    p.style.color = "red";
    p.style.fontSize = "12px";
    p.style.marginTop = "6px";
    input.parentElement.appendChild(p);
    return p;
}

// If the user ticked "Remember me" earlier, fill the User ID back in
const savedUser = localStorage.getItem("sgms_user");
if (savedUser) {
    userInput.value = savedUser;
    rememberBox.checked = true;
}

// Returns true if the User ID / Email is valid
function checkUser() {
    const value = userInput.value.trim();

    if (value === "") {
        userError.textContent = "User ID or Email is required.";
        return false;
    }
    if (value.includes("@") && !value.includes(".")) {
        userError.textContent = "Please enter a valid email address.";
        return false;
    }

    userError.textContent = "";
    return true;
}

// Returns true if the password is valid
function checkPassword() {
    if (passInput.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters.";
        return false;
    }

    passError.textContent = "";
    return true;
}

// Runs when the Login button is clicked
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    const userOk = checkUser();
    const passOk = checkPassword();

    if (!userOk || !passOk) {
        return; // stay on the page and show the errors
    }

    // Saave or remove the User ID (never save the password)
    if (rememberBox.checked) {
        localStorage.setItem("sgms_user", userInput.value.trim());
    } else {
        localStorage.removeItem("sgms_user");
    }

    // Demo login: mark the user as logged in, then open the dashboard
    sessionStorage.setItem("sgms_logged_in", "true");
    window.location.href = "../dashboard/dashboard.html";
});