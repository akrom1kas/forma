let attempt = 3; // Prisujungimui duoti 3 bandymai.
function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    if ( username == "username" && email == "email@email.com" && password == "123456"){
        alert("Sėkmingai prisijungėt");
        window.location = "success.html"; // Pereina i kita puslapi.
        
    }
    else{
        attempt --; // Sumazinimas vienetu
        alert("Jums bandymų liko "+attempt+"");
        // Uzblokuoja, ivedus 3 kartus blogai
        if ( attempt == 0){
            alert("Jus esate užblokuotas")
            document.getElementById("username").disabled = true;
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;

  }  
    }
}

