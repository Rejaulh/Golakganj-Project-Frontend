    // function validateAWC_Code(AWC_Code) {
    // AWC_Code should be a number and have exactly 11 digits
        //     const awcCodePattern = /^[0-9]{11}$/;
        //     return awcCodePattern.test(AWC_Code);
        // }
        const apiUrl = 'http://127.0.0.1:8000/api/worker/';  // Replace with your API URL
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzNTU4MzUzLCJpYXQiOjE3MjM1NDc1NTMsImp0aSI6IjA4ZTQ1NDMzNWRjZjQxMTI4N2M2OGU5ZmY1NjNhZWIwIiwidXNlcl9pZCI6MX0.08u1tRPgZY3Vh_q5_A5er28saBGiAKjBkolYmSSe8yY";
        document.getElementById('awc-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
     // Validate AWC_Code
    // if (!validateAWC_Code(AWC_Code)) {
    //     alert("Invalid AWC Code. Please enter a valid 11-digit number.");
    //     return;
    // }

    
        
        const data = {sector: {
                    sector_name: document.getElementById('sector_name').value
                },
                AWC_Code: document.getElementById('AWC_Code').value,
                AWC_Name: document.getElementById('AWC_Name').value,
                AWW_Name: document.getElementById('AWW_Name').value,
                AWW_Phone: document.getElementById('AWW_Phone').value,
                AWH_Name: document.getElementById('AWH_Name').value,
                AWH_Phone: document.getElementById('AWH_Phone').value,
                AWC_Address: document.getElementById('AWC_Address').value,
                Building_Type: document.getElementById('Building_Type').value,
                Drinking_Water_Facility: document.getElementById('Drinking_Water_Facility').checked,
                Toilet_Facility: document.getElementById('Toilet_Facility').checked,
                Electricity_Avaiable: document.getElementById('Electricity_Avaiable').checked,
                Kitchen_Garden_Available: document.getElementById('Kitchen_Garden_Available').checked,
                AWC_Image: null // Placeholder for image field
            };

    // Send the data using the fetch API
    fetch(apiUrl, { // Replace with your server's API endpoint
        method: 'POST', // Use POST method
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/json' // Specify the content type as JSON
        },
        body: JSON.stringify(data) // Convert the JavaScript object into a JSON string
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response from the server
    })
    .then(data => {
        document.getElementById('response').textContent = 'Thank you for your message!';
        document.getElementById('awc-form').reset(); // Clear the form after submission
        // if(data.exists){
        //     errorElement.textContent="This AWC Code already exist";
        // }
        // else{
        //     document.getElementById(AWC_Code).setCustomValidity("");
        // }
        // console.log(data);
    })
    .catch(error => {
        document.getElementById('response').textContent = 'An error occurred: ' + error.message;
    });
});