function validate()
{
  var password=document.getElementById('password').value;
  var confirm=document.getElementById('confirm').value;
  if(password==confirm){
    alert("password set");
    return false;
  }
  else{
    alert("confirm password again");
  }
}
