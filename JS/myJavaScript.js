
function greetUser()  {
    let name = document.getElementById('greetingName').value;
    document.getElementById('userName').innerHTML = name;
    $('#getUserName').modal('hide');
    $('#greetUser').modal('show');
   
}
$(document).ready(() => {
    $('#getUserName').modal('show');
});

