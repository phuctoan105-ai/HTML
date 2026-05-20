function validate(){
    let number=document.getElementById("number").value;
    if (number==""){
        alert("Please enter your phone number.");
        return false;
    }return true;
}
