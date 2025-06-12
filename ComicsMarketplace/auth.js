// auth.js
document.addEventListener('DOMContentLoaded', () => {
    // ==== Elementos comuns para validação ====
    function validateField(inputElement, errorElement, validationFn) {
        const value = inputElement.value.trim();
        const errorMessage = validationFn(value);
        if (errorMessage) {
            errorElement.textContent = errorMessage;
            inputElement.classList.remove('valid');
            inputElement.classList.add('invalid');
            return false;
        } else {
            errorElement.textContent = '';
            inputElement.classList.remove('invalid');
            inputElement.classList.add('valid');
            return true;
        }
    }

    function clearValidationStyles(inputElement, errorElement) {
        inputElement.classList.remove('valid', 'invalid');
        errorElement.textContent = '';
    }

    // ==== Funções de Validação ====

    function isValidEmail(email) {
        if (!email) return 'E-mail é obrigatório.';
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) return 'E-mail inválido.';
        return '';
    }

    function isValidPassword(password) {
        if (!password) return 'Senha é obrigatória.';
        if (password.length < 8) return 'A senha deve ter no mínimo 8 dígitos.';
        if (!/[0-9]/.test(password)) return 'A senha deve conter no mínimo 1 número.';
        if (!/[A-Z]/.test(password)) return 'A senha deve conter no mínimo 1 letra maiúscula.';
        return '';
    }

    function isValidName(name, fieldName = 'Nome') {
        if (!name) return `${fieldName} é obrigatório.`;
        if (name.length < 2) return `${fieldName} muito curto.`;
        return '';
    }

    function isValidPhone(phone) {
        if (!phone) return 'Telefone é obrigatório.';
        const re = /^\(\d{2}\) \d{5}-\d{4}$/; // Formato (XX) XXXXX-XXXX
        if (!re.test(phone)) return 'Formato de telefone inválido (Ex: (XX) XXXXX-XXXX).';
        return '';
    }

    function isValidCEP(cep) {
        if (!cep) return 'CEP é obrigatório.';
        const re = /^\d{5}-\d{3}$/; // Formato 00000-000
        if (!re.test(cep)) return 'Formato de CEP inválido (Ex: 00000-000).';
        return '';
    }

    function isValidAddressNumber(number) {
        if (!number) return 'Número da residência é obrigatório.';
        if (isNaN(number) && number.trim() === '') return 'Número da residência inválido.';
        return '';
    }


    // ==== Lógica para login.html ====
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const loginEmailInput = document.getElementById('loginEmail');
        const loginPasswordInput = document.getElementById('loginPassword');
        const loginEmailError = document.getElementById('loginEmailError');
        const loginPasswordError = document.getElementById('loginPasswordError');
        const loginSuccessMessage = document.getElementById('loginSuccessMessage');
        const loginErrorMessage = document.getElementById('loginErrorMessage');

        // Limpa as mensagens de erro ao focar
        loginEmailInput.addEventListener('focus', () => clearValidationStyles(loginEmailInput, loginEmailError));
        loginPasswordInput.addEventListener('focus', () => clearValidationStyles(loginPasswordInput, loginPasswordError));

        // Validação em tempo real (opcional, pode ser adicionado onblur)
        loginEmailInput.addEventListener('blur', () => validateField(loginEmailInput, loginEmailError, isValidEmail));
        loginPasswordInput.addEventListener('blur', () => validateField(loginPasswordInput, loginPasswordError, isValidPassword));

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            isValid = validateField(loginEmailInput, loginEmailError, isValidEmail) && isValid;
            isValid = validateField(loginPasswordInput, loginPasswordError, isValidPassword) && isValid;

            if (!isValid) {
                loginErrorMessage.textContent = 'Por favor, corrija os erros no formulário.';
                loginSuccessMessage.textContent = '';
                return;
            }

            const email = loginEmailInput.value;
            const password = loginPasswordInput.value;

            // Simulação de autenticação: verifica se o usuário existe no localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('loggedInUserEmail', email); // Armazena o email do usuário logado
                loginSuccessMessage.textContent = 'Login realizado com sucesso! Redirecionando...';
                loginErrorMessage.textContent = '';
                // Redireciona para a página principal após 1 segundo
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                loginErrorMessage.textContent = 'E-mail ou senha inválidos.';
                loginSuccessMessage.textContent = '';
                localStorage.setItem('isLoggedIn', 'false');
                localStorage.removeItem('loggedInUserEmail');
            }
        });
    }

    // ==== Lógica para register.html ====
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        const regFirstNameInput = document.getElementById('regFirstName');
        const regLastNameInput = document.getElementById('regLastName');
        const regEmailInput = document.getElementById('regEmail');
        const regPasswordInput = document.getElementById('regPassword');
        const regPhoneInput = document.getElementById('regPhone');
        const regCEPInput = document.getElementById('regCEP');
        const regAddressStreetInput = document.getElementById('regAddressStreet');
        const regAddressNumberInput = document.getElementById('regAddressNumber');
        const regAddressDistrictInput = document.getElementById('regAddressDistrict');
        const regAddressCityInput = document.getElementById('regAddressCity');
        const regAddressStateInput = document.getElementById('regAddressState');

        const regFirstNameError = document.getElementById('regFirstNameError');
        const regLastNameError = document.getElementById('regLastNameError');
        const regEmailError = document.getElementById('regEmailError');
        const regPasswordError = document.getElementById('regPasswordError');
        const regPhoneError = document.getElementById('regPhoneError');
        const regCEPError = document.getElementById('regCEPError');
        const regAddressNumberError = document.getElementById('regAddressNumberError');
        const registerSuccessMessage = document.getElementById('registerSuccessMessage');
        const registerErrorMessage = document.getElementById('registerErrorMessage');

        // Limpa mensagens de erro ao focar
        regFirstNameInput.addEventListener('focus', () => clearValidationStyles(regFirstNameInput, regFirstNameError));
        regLastNameInput.addEventListener('focus', () => clearValidationStyles(regLastNameInput, regLastNameError));
        regEmailInput.addEventListener('focus', () => clearValidationStyles(regEmailInput, regEmailError));
        regPasswordInput.addEventListener('focus', () => clearValidationStyles(regPasswordInput, regPasswordError));
        regPhoneInput.addEventListener('focus', () => clearValidationStyles(regPhoneInput, regPhoneError));
        regCEPInput.addEventListener('focus', () => clearValidationStyles(regCEPInput, regCEPError));
        regAddressNumberInput.addEventListener('focus', () => clearValidationStyles(regAddressNumberInput, regAddressNumberError));


        // Validação em tempo real (onblur)
        regFirstNameInput.addEventListener('blur', () => validateField(regFirstNameInput, regFirstNameError, (val) => isValidName(val, 'Nome')));
        regLastNameInput.addEventListener('blur', () => validateField(regLastNameInput, regLastNameError, (val) => isValidName(val, 'Sobrenome')));
        regEmailInput.addEventListener('blur', () => validateField(regEmailInput, regEmailError, isValidEmail));
        regPasswordInput.addEventListener('blur', () => validateField(regPasswordInput, regPasswordError, isValidPassword));
        regPhoneInput.addEventListener('blur', () => validateField(regPhoneInput, regPhoneError, isValidPhone));
        regCEPInput.addEventListener('blur', () => validateField(regCEPInput, regCEPError, isValidCEP));
        regAddressNumberInput.addEventListener('blur', () => validateField(regAddressNumberInput, regAddressNumberError, isValidAddressNumber));


        // Formatação de telefone e CEP
        regPhoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            if (value.length > 0) {
                value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}${value.length > 7 ? '-' + value.substring(7, 11) : ''}`;
            }
            e.target.value = value;
        });

        regCEPInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            if (value.length > 5) {
                value = `${value.substring(0, 5)}-${value.substring(5, 8)}`;
            }
            e.target.value = value;
        });

        // Consulta de CEP via ViaCEP
        regCEPInput.addEventListener('blur', async () => {
            const cep = regCEPInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
            if (cep.length === 8) {
                try {
                    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                    const data = await response.json();

                    if (!data.erro) {
                        regAddressStreetInput.value = data.logradouro;
                        regAddressDistrictInput.value = data.bairro;
                        regAddressCityInput.value = data.localidade;
                        regAddressStateInput.value = data.uf;
                        regCEPError.textContent = '';
                        regCEPInput.classList.remove('invalid');
                        regCEPInput.classList.add('valid');
                    } else {
                        regCEPError.textContent = 'CEP não encontrado.';
                        regAddressStreetInput.value = '';
                        regAddressDistrictInput.value = '';
                        regAddressCityInput.value = '';
                        regAddressStateInput.value = '';
                        regCEPInput.classList.remove('valid');
                        regCEPInput.classList.add('invalid');
                    }
                } catch (error) {
                    console.error('Erro ao buscar CEP:', error);
                    regCEPError.textContent = 'Erro ao buscar CEP. Tente novamente.';
                    regCEPInput.classList.remove('valid');
                    regCEPInput.classList.add('invalid');
                }
            } else {
                regCEPError.textContent = 'Formato de CEP inválido (Ex: 00000-000).';
                regCEPInput.classList.remove('valid');
                regCEPInput.classList.add('invalid');
            }
        });


        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            isValid = validateField(regFirstNameInput, regFirstNameError, (val) => isValidName(val, 'Nome')) && isValid;
            isValid = validateField(regLastNameInput, regLastNameError, (val) => isValidName(val, 'Sobrenome')) && isValid;
            isValid = validateField(regEmailInput, regEmailError, isValidEmail) && isValid;
            isValid = validateField(regPasswordInput, regPasswordError, isValidPassword) && isValid;
            isValid = validateField(regPhoneInput, regPhoneError, isValidPhone) && isValid;
            isValid = validateField(regCEPInput, regCEPError, isValidCEP) && isValid;
            isValid = validateField(regAddressNumberInput, regAddressNumberError, isValidAddressNumber) && isValid;


            if (!isValid) {
                registerErrorMessage.textContent = 'Por favor, corrija os erros no formulário.';
                registerSuccessMessage.textContent = '';
                return;
            }

            const newUser = {
                firstName: regFirstNameInput.value.trim(),
                lastName: regLastNameInput.value.trim(),
                email: regEmailInput.value.trim(),
                password: regPasswordInput.value.trim(),
                phone: regPhoneInput.value.trim(),
                address: {
                    cep: regCEPInput.value.trim(),
                    street: regAddressStreetInput.value.trim(),
                    number: regAddressNumberInput.value.trim(),
                    district: regAddressDistrictInput.value.trim(),
                    city: regAddressCityInput.value.trim(),
                    state: regAddressStateInput.value.trim()
                }
            };

            // Simulação de armazenamento de usuário no localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Verifica se o e-mail já está cadastrado
            if (users.some(u => u.email === newUser.email)) {
                registerErrorMessage.textContent = 'Este e-mail já está cadastrado.';
                registerSuccessMessage.textContent = '';
                return;
            }

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            registerSuccessMessage.textContent = 'Cadastro realizado com sucesso! Redirecionando para o login...';
            registerErrorMessage.textContent = '';

            // Redireciona para a página de login após 2 segundos
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        });
    }
});

// Esta função é chamada do index.html. Mantenha-a se precisar.
function scrollToComics() {
    document.getElementById('comics').scrollIntoView({ behavior: 'smooth' });
}