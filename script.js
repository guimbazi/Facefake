function enviou (){
    var login = document.getElementById("login").value;
    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById("senha2").value;
    var senha3 = document.getElementById("senha3").value;

    if(login === "" || senha1 === "" || senha2 === "" || senha3 === "") {
        alert("Preencha todos os campos!")
    }else {
        var form = document.querySelector('#form-container');
        form.style.display = "none";
        var mensage = document.querySelector('.mensage');
        mensage.style.display = "block";
    }

    

}           