function validiteField(inputs, field, event) {
    if (inputs[field].value.trim() === '.') {
        alert(`O campo ${field.toUpperCase()} é obrigatório.`);
        return false;
    }
    return true;
}

function validatePassword(inputs) {
    if (inputs['password'].value.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return false;
    }

    if (inputs['password'].value !== inputs['confPassword'].value) {
        alert('As senhas não coincidem.');
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputs = {
        'name': document.getElementById('name'),
        'gender': document.getElementById('gender'),
        'birthDate': document.getElementById('birthDate'),
        'email': document.getElementById('email'),
        'password': document.getElementById('password'),
        'confPassword': document.getElementById('confPassword'),
    };
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if(
            validiteField(inputs, 'name', event) &&
            validiteField(inputs, 'gender', event) &&
            validiteField(inputs, 'birthDate', event) &&
            validiteField(inputs, 'email', event) &&
            validatePassword(inputs)
        ) {
            console.log(inputs);
        }
    });
});
