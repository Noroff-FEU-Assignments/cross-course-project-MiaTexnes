// Select the containers
const errorIndicator = document.querySelector("#errorIndicator");
const loadingIndicator = document.querySelector("#loadingIndicator");

// Function to show the loading indicator
export function showLoadingIndicator() {
    loadingIndicator.style.display = "block";
}

// Function to hide the loading indicator
export function hideLoadingIndicator() {
    loadingIndicator.style.display = "none";
}

// Function to show the error indicator
export function showErrorIndicator(error) {
    errorIndicator.style.display = "block";
    errorIndicator.innerHTML = `<p>Error: ${error}. Please contact support</p>`; // Display the error message
}
