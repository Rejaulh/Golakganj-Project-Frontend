const url = "http://127.0.0.1:8000/api/login/";
document.getElementById("login-form").addEventListener('submit', function(e){
e.preventDefault();

fetch(url, {
    method : "POST",
    headers : {
        "content-Type":"application/json",
    },
    body: JSON.stringify({
        username:document.getElementById("username").value,
        password: document.getElementById("password").value
    })
})
.then(response => response.json())
.then(data => {
    if (data.access){
        // localStorage.setItem("token", data.access);
        window.location.href = "home_page.html";
        // alert("Login Succesfull !");
    }else {
        alert("Login Failed!");
    }
})
.catch(error => {
    console.log('Error:', error);
});
});


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


