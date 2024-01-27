// a function called showRadioButtonSelectedValue with no parameters
function showRadioButtonSelectedValue() {
    // The value from the selected radio button is saved in a constant variable called selectedRockBand
    const selectedRockBand = document.querySelector('input[name="preferedRockBand"]:checked').value;
    // The value stored in variable selectedRockBand is displayed in an alert window.
    alert("You selected: " + selectedRockBand);
    // Prevent form submission unless they made a selection
    return false; 
}