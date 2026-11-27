
const form = document.querySelector(".complaint-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const complaint = {
        id: Date.now(),
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        studentId: document.getElementById("id").value.trim(),
        category: document.getElementById("category").value,
        subcategory: document.getElementById("subcategory").value,
        location: document.getElementById("location").value,
        priority: document.getElementById("priority").value,
        subject: document.getElementById("subject").value.trim(),
        description: document.getElementById("description").value.trim(),
        date: new Date().toLocaleDateString(),
        status: "Pending"
    };

    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.push(complaint);

    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Your complaint has been submitted successfully!");

    window.location.href = "../complaint_details/details.html";
});
