function submitForm() {
    var divObj = document.getElementById("finalMessage");
    divObj.style.display = "block";
    divObj.innerHTML = "Thank you for your report. If necessary, we may contact you within 2-4 days to find out more about the problem.    (｡◕‿◕｡)";
}

function resetForm() {
    document.getElementById("problems").reset();
    divobj = document.getElementById("finalMessage");
    divobj.style.display = 'none';
}