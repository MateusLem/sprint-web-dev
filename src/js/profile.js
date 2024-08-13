const user = {
    'name': "Mateus",
    'gender': "Masculino",
    'birthDate': "09/08/2004",
    'email': "557803@fiap.com.br",
    'password': "123456",
    'points': 2000
}

function loadContent(){
    document.querySelector("#name").textContent = user.name;
    document.querySelector("#gender").textContent = user.gender;
    document.querySelector("#dateBirth").textContent = user.birthDate;
    document.querySelector("#email").textContent = user.email;
    document.querySelector("#points").textContent = user.points;
}