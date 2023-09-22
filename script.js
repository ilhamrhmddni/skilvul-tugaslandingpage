function handleFormData() {
    var formData = {
        name: document.getElementById("name").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
        zipCode: document.getElementById("zip-code").value,
        status: document.getElementById("status").checked
    };
    return formData;
}

function isNumber(inputString) {
    return !isNaN(inputString);
}

function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

function validateForm(data) {
    return data && isNumber(data.zipCode) && checkboxIsChecked();
}

function showError() {
    var warningDiv = document.getElementById("warning");
    warningDiv.textContent = "Periksa form Anda sekali lagi.";
}

function clearError() {
    var warningDiv = document.getElementById("warning");
    warningDiv.textContent = "";
}

function submit(event) {
    event.preventDefault();
    var formData = handleFormData();
    var isValid = validateForm(formData);
    if (!isValid) {
        showError();
    } else {
        clearError();
        var warningDiv = document.getElementById("warning");
        warningDiv.style.color = "black"
        warningDiv.textContent = "Pendaftaran Anda berhasil!";
    }
}

var form = document.getElementById("myForm");
form.addEventListener("submit", submit);
