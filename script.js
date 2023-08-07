
// function to get the value and hide and show the order-details
function getValue(selectedRadio) {

    // Get the selected radio button
    var selectedRadio = document.querySelector('input[name="radio"]:checked');

    var subSections = document.getElementsByClassName('sub-section');

    // Looping through all sub-sections to hide the order details for each one
    for (var i = 0; i < subSections.length; i++) {
        subSections[i].querySelector('.order-details').style.display = 'none';
        subSections[i].classList.remove('selected');
    }

    // Showing the order details for the selected sub-section
    var parentSubSection = selectedRadio.closest('.sub-section');
    parentSubSection.querySelector('.order-details').style.display = 'block';
    parentSubSection.classList.add('selected');

    // Getting the value of the selected radio button
    var selectedValue = selectedRadio.value;

    // Updating the "Total" value with the selected value
    document.getElementById('selectedValue').innerText = selectedValue;

}

// funtion to show and hide the success message
function addToCart() {

    // setting the display property to success message
    document.getElementById('success-msg').style.display = "block"

    // Hiding the success message after 5 seconds
    setTimeout(function () {
        document.getElementById('success-msg').style.display = 'none';
    }, 5000);
}





