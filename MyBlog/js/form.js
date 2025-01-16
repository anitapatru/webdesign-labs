document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", validateForm);
});

function validateForm(event) {
    event.preventDefault(); 

  
    const form = event.target;
    const salutation = form.salutation.value.trim();
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const gender = form.gender.value; 
    const email = form.email.value.trim();
    const birthDate = form.birthDate.value.trim();
    const message = form.message.value.trim();

   
    if (salutation === "--None--") {
        alert("Please select a salutation.");
        return false;
    }

    if (!firstName) {
        alert("First name is required.");
        return false;
    }

    if (!lastName) {
        alert("Last name is required.");
        return false;
    }

    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email) {
        alert("Email is required.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!birthDate) {
        alert("Please select your date of birth.");
        return false;
    }

    if (!message) {
        alert("Please enter your message.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
