
// Get saved complaints
const complaints = JSON.parse(
    localStorage.getItem("complaints")
) || [];

const complaintList = document.getElementById("complaintList");
const emptyState = document.getElementById("emptyState");

// Check if complaints are available
if (complaints.length === 0) {

    emptyState.style.display = "block";

} else {

    emptyState.style.display = "none";

    complaints.forEach(function(c) {

        const card = document.createElement("div");
        card.className = "complaint-card";

        card.innerHTML = `
            <h2>${escapeHTML(c.subject || "Untitled Complaint")}</h2>

            <p><strong>Complaint ID:</strong> ${c.id}</p>
            <p><strong>Name:</strong> ${escapeHTML(c.name || "N/A")}</p>
            <p><strong>Email:</strong> ${escapeHTML(c.email || "N/A")}</p>
            <p><strong>Category:</strong> ${escapeHTML(c.category || "N/A")}</p>
            <p><strong>Sub-category:</strong> ${escapeHTML(c.subcategory || "N/A")}</p>
            <p><strong>Location:</strong> ${escapeHTML(c.location || "N/A")}</p>
            <p><strong>Priority:</strong> ${escapeHTML(c.priority || "N/A")}</p>
            <p><strong>Date:</strong> ${escapeHTML(c.date || "N/A")}</p>
            <p><strong>Description:</strong> ${escapeHTML(c.description || "N/A")}</p>
            <p><strong>Preferred Resolution:</strong> ${escapeHTML(c.resolution || "N/A")}</p>
            <p><strong>Status:</strong>
                <span class="status">${escapeHTML(c.status || "Pending")}</span>
            </p>
        `;

        complaintList.appendChild(card);

    });
}

// Safely display user-entered text
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}
