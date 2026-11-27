
const form = document.querySelector("form");
const userInput = document.getElementById("email");
const passInput = document.getElementById("password");
const rememberBox = document.querySelector(".remember input");

// Create error messages
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

// Remember previously entered User ID
const savedUser = localStorage.getItem("sgms_user");

if (savedUser) {
    userInput.value = savedUser;
    rememberBox.checked = true;
}

// Validate User ID / Email
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

// Validate Password
function checkPassword() {
    if (passInput.value.length < 6) {
        passError.textContent =
            "Password must be at least 6 characters.";
        return false;
    }

    passError.textContent = "";
    return true;
}

// Login form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const userOk = checkUser();
    const passOk = checkPassword();

    if (!userOk || !passOk) {
        return;
    }

    const username = userInput.value.trim();

    // Remember User ID
    if (rememberBox.checked) {
        localStorage.setItem("sgms_user", username);
    } else {
        localStorage.removeItem("sgms_user");
    }

    // Save username for welcome message
    sessionStorage.setItem("sgms_username", username);

    // Mark user as logged in
    sessionStorage.setItem("sgms_logged_in", "true");

    // Open Dashboard
    window.location.href = "../dashboard/dashboard.html";
});
