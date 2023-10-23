// Add event listener to the "Check/Uncheck All" button
const checkUncheckAllButton = document.getElementById("checkUncheckAll");
checkUncheckAllButton.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".status");
    const checkAll = checkboxes[0].checked;

    checkboxes.forEach(checkbox => {
        checkbox.checked = !checkAll;
        const statusLabel = checkbox.nextElementSibling.nextElementSibling;
        statusLabel.textContent = checkbox.checked ? "Available" : "Not available";
    });
});
