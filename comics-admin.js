document.addEventListener('DOMContentLoaded', () => {
    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        alert('Você precisa estar logado para acessar esta página!');
        window.location.href = 'login.html';
        return;
    }

    // Elementos do formulário
    const comicForm = document.getElementById('comicForm');
    const comicTitleInput = document.getElementById('comicTitle');
    const comicNumberInput = document.getElementById('comicNumber');
    const comicEditionInput = document.getElementById('comicEdition');
    const comicPublicationDateInput = document.getElementById('comicPublicationDate');
    const comicPublisherInput = document.getElementById('comicPublisher');
    const comicAuthorInput = document.getElementById('comicAuthor');
    const comicDescriptionInput = document.getElementById('comicDescription');
    const comicTitleError = document.getElementById('comicTitleError');
    const comicNumberError = document.getElementById('comicNumberError');
    const comicEditionError = document.getElementById('comicEditionError');
    const comicPublicationDateError = document.getElementById('comicPublicationDateError');
    const comicPublisherError = document.getElementById('comicPublisherError');
    const comicAuthorError = document.getElementById('comicAuthorError');
    const comicDescriptionError = document.getElementById('comicDescriptionError');
    const comicSuccessMessage = document.getElementById('comicSuccessMessage');
    const comicErrorMessage = document.getElementById('comicErrorMessage');
    const submitComicBtn = document.getElementById('submitComicBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const formTitle = document.getElementById('form-title');
    const comicsTableBody = document.getElementById('comicsTableBody');

    let editingComicId = null;

    // Funções de validação
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

    function isValidTitle(title) {
        if (!title) return 'Título é obrigatório.';
        if (title.length < 2) return 'Título muito curto.';
        return '';
    }

    function isValidNumber(number) {
        if (!number) return 'Número é obrigatório.';
        if (isNaN(number) || number < 1) return 'Número deve ser maior que 0.';
        return '';
    }

    function isValidEdition(edition) {
        if (!edition) return 'Edição é obrigatória.';
        if (edition.length < 2) return 'Edição muito curta.';
        return '';
    }

    function isValidPublicationDate(date) {
        if (!date) return 'Data de publicação é obrigatória.';
        const selectedDate = new Date(date);
        const today = new Date();
        if (selectedDate > today) return 'Data de publicação não pode ser futura.';
        return '';
    }

    function isValidPublisher(publisher) {
        if (!publisher) return 'Editora é obrigatória.';
        if (publisher.length < 2) return 'Nome da editora muito curto.';
        return '';
    }

    function isValidAuthor(author) {
        if (!author) return 'Autor é obrigatório.';
        if (author.length < 2) return 'Nome do autor muito curto.';
        return '';
    }

    function isValidDescription(description) {
        if (!description) return 'Descrição é obrigatória.';
        if (description.length > 300) return 'Descrição deve ter no máximo 300 caracteres.';
        return '';
    }

    // Limpa validações ao focar
    comicTitleInput.addEventListener('focus', () => clearValidationStyles(comicTitleInput, comicTitleError));
    comicNumberInput.addEventListener('focus', () => clearValidationStyles(comicNumberInput, comicNumberError));
    comicEditionInput.addEventListener('focus', () => clearValidationStyles(comicEditionInput, comicEditionError));
    comicPublicationDateInput.addEventListener('focus', () => clearValidationStyles(comicPublicationDateInput, comicPublicationDateError));
    comicPublisherInput.addEventListener('focus', () => clearValidationStyles(comicPublisherInput, comicPublisherError));
    comicAuthorInput.addEventListener('focus', () => clearValidationStyles(comicAuthorInput, comicAuthorError));
    comicDescriptionInput.addEventListener('focus', () => clearValidationStyles(comicDescriptionInput, comicDescriptionError));

    // Validação em tempo real (onblur)
    comicTitleInput.addEventListener('blur', () => validateField(comicTitleInput, comicTitleError, isValidTitle));
    comicNumberInput.addEventListener('blur', () => validateField(comicNumberInput, comicNumberError, isValidNumber));
    comicEditionInput.addEventListener('blur', () => validateField(comicEditionInput, comicEditionError, isValidEdition));
    comicPublicationDateInput.addEventListener('blur', () => validateField(comicPublicationDateInput, comicPublicationDateError, isValidPublicationDate));
    comicPublisherInput.addEventListener('blur', () => validateField(comicPublisherInput, comicPublisherError, isValidPublisher));
    comicAuthorInput.addEventListener('blur', () => validateField(comicAuthorInput, comicAuthorError, isValidAuthor));
    comicDescriptionInput.addEventListener('blur', () => validateField(comicDescriptionInput, comicDescriptionError, isValidDescription));

    // Função para gerar ID único
    function generateId() {
        return 'comic_' + Math.random().toString(36).substr(2, 9);
    }

    // Função para carregar quadrinhos do localStorage
    function loadComics() {
        const comics = JSON.parse(localStorage.getItem('adminComics')) || [];
        return comics;
    }

    // Função para salvar quadrinhos no localStorage
    function saveComics(comics) {
        localStorage.setItem('adminComics', JSON.stringify(comics));
    }

    // Função para renderizar a tabela
    function renderComicsTable() {
        const comics = loadComics();
        comicsTableBody.innerHTML = '';
        comics.forEach(comic => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td style="padding: var(--spacing-sm); border: 1px solid var(--color-border);">${comic.id}</td>
                <td style="padding: var(--spacing-sm); border: 1px solid var(--color-border);">${comic.title}</td>
                <td style="padding: var(--spacing-sm); border: 1px solid var(--color-border);">${comic.number}</td>
                <td style="padding: var(--spacing-sm); border: 1px solid var(--color-border);">${comic.edition}</td>
                <td style="padding: var(--spacing-sm); border: 1px solid var(--color-border);">${comic.publicationDate}</td>
                <td style="padding: var(--spacing-sm); border: 1px solid var(--color-border);">${comic.publisher}</td>
                <td style="padding: var(--spacing-sm); border: 1px solid var(--color-border);">${comic.author}</td>
                <td style="padding: var(--spacing-sm); border: 1px solid var(--color-border);">${comic.description}</td>
                <td style="padding: var(--spacing-sm); border: 1px solid var(--color-border);">
                    <button class="button button-primary edit-btn" data-id="${comic.id}" style="margin-right: var(--spacing-sm);">Editar</button>
                    <button class="button button-secondary delete-btn" data-id="${comic.id}">Excluir</button>
                </td>
            `;
            comicsTableBody.appendChild(row);
        });

        // Adiciona eventos aos botões de editar e excluir
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => editComic(btn.dataset.id));
        });
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => deleteComic(btn.dataset.id));
        });
    }

    // Função para limpar formulário
    function clearForm() {
        comicForm.reset();
        [comicTitleInput, comicNumberInput, comicEditionInput, comicPublicationDateInput, comicPublisherInput, comicAuthorInput, comicDescriptionInput].forEach(input => {
            input.classList.remove('valid', 'invalid');
        });
        [comicTitleError, comicNumberError, comicEditionError, comicPublicationDateError, comicPublisherError, comicAuthorError, comicDescriptionError].forEach(error => {
            error.textContent = '';
        });
        comicSuccessMessage.textContent = '';
        comicErrorMessage.textContent = '';
        submitComicBtn.textContent = 'Salvar';
        cancelEditBtn.style.display = 'none';
        formTitle.textContent = 'Adicionar Quadrinho';
        editingComicId = null;
    }

    // Função para editar quadrinho
    function editComic(id) {
        const comics = loadComics();
        const comic = comics.find(c => c.id === id);
        if (comic) {
            comicTitleInput.value = comic.title;
            comicNumberInput.value = comic.number;
            comicEditionInput.value = comic.edition;
            comicPublicationDateInput.value = comic.publicationDate;
            comicPublisherInput.value = comic.publisher;
            comicAuthorInput.value = comic.author;
            comicDescriptionInput.value = comic.description;
            submitComicBtn.textContent = 'Atualizar';
            cancelEditBtn.style.display = 'inline-flex';
            formTitle.textContent = 'Editar Quadrinho';
            editingComicId = id;
        }
    }

    // Função para excluir quadrinho
    function deleteComic(id) {
        if (confirm('Tem certeza que deseja excluir este quadrinho?')) {
            let comics = loadComics();
            comics = comics.filter(c => c.id !== id);
            saveComics(comics);
            renderComicsTable();
            alert('Quadrinho excluído com sucesso!');
        }
    }

    // Manipulação do formulário
    comicForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        isValid = validateField(comicTitleInput, comicTitleError, isValidTitle) && isValid;
        isValid = validateField(comicNumberInput, comicNumberError, isValidNumber) && isValid;
        isValid = validateField(comicEditionInput, comicEditionError, isValidEdition) && isValid;
        isValid = validateField(comicPublicationDateInput, comicPublicationDateError, isValidPublicationDate) && isValid;
        isValid = validateField(comicPublisherInput, comicPublisherError, isValidPublisher) && isValid;
        isValid = validateField(comicAuthorInput, comicAuthorError, isValidAuthor) && isValid;
        isValid = validateField(comicDescriptionInput, comicDescriptionError, isValidDescription) && isValid;

        if (!isValid) {
            comicErrorMessage.textContent = 'Por favor, corrija os erros no formulário.';
            comicSuccessMessage.textContent = '';
            return;
        }

        const comic = {
            id: editingComicId || generateId(),
            title: comicTitleInput.value.trim(),
            number: parseInt(comicNumberInput.value),
            edition: comicEditionInput.value.trim(),
            publicationDate: comicPublicationDateInput.value,
            publisher: comicPublisherInput.value.trim(),
            author: comicAuthorInput.value.trim(),
            description: comicDescriptionInput.value.trim()
        };

        let comics = loadComics();
        if (editingComicId) {
            comics = comics.map(c => c.id === editingComicId ? comic : c);
        } else {
            comics.push(comic);
        }
        saveComics(comics);
        clearForm();
        renderComicsTable();
        comicSuccessMessage.textContent = editingComicId ? 'Quadrinho atualizado com sucesso!' : 'Quadrinho adicionado com sucesso!';
        comicErrorMessage.textContent = '';
    });

    // Cancelar edição
    cancelEditBtn.addEventListener('click', clearForm);

    // Inicializa a tabela
    renderComicsTable();
});