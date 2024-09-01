document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};

    // Convert FormData to a regular object
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Simple client side validation
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm_password");

    // Log email and validation result for debugging
    console.log('Email entered:', email);
    console.log('Email validation result:', validateEmail(email));
    
    // email validation
    if(!validateEmail(email)){
        document.getElementById("error-message").textContent="Plese enter valid E-mail address.";
        return;
    }

    // Password length validation
    if (password.length < 6) {
        document.getElementById('error-message').textContent = 'Password must be at least 6 characters long.';
        return;
    }
    
    // password match validation
    if (password != confirmPassword)
    {
        document.getElementById("error-message").textContent="Password don't match";
        return;
    }
    fetch("http://127.0.0.1:8000/api/register/",{
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "content-Type":"application/json",
            'X-CSRFToken': getCookie('csrftoken') // Include CSRF token if using Django
        }
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            window.location.href = "login_page.html";
        } 
        else {
            document.getElementById("error-message").textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = 'An error occurred. Please try again.';
    });
});
// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// CSRF token helper function for Django
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}