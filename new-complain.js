const form = document.querySelector(".complaint-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Your complaint has been submitted successfully!");
});