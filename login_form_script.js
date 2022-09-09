// toggle between visible and invisible password
togglePassword = () =>{
    const hide = document.getElementById("password-hide");
    const show = document.getElementById("password-show");
    if (document.getElementById("show-password").checked == true){
        show.value = hide.value;
        hide.style.display = "none";
        show.style.display = "block";
    }
    else{
        hide.value = hide.value;
        show.style.display = "none";
        hide.style.display = "block";
    }
}
// mimic password to the other element on lose focus
mimicPassword = (current) => {
    if(current == "hide") {
        document.getElementById("password-show").value = document.getElementById("password-hide").value;
    }
    else if (current == "show") {
        document.getElementById("password-hide").value = document.getElementById("password-show").value;
    }
}