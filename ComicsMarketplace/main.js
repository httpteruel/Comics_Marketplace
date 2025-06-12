// main.js - (Seu script existente, agora com funcionalidade de busca)

// Comic synopses and prices data
const comicData = {
    batman: {
        title: "Batman - O Cavaleiro das Trevas",
        author: "Frank Miller",
        synopsis: `Em uma Gotham City sombria e decadente, Bruce Wayne retorna como Batman para enfrentar velhos inimigos e uma nova onda de crime implacável. Esta obra-prima de Frank Miller redefine o cavaleiro das trevas numa narrativa complexa e intensa.`,
        price: "R$ 49,90",
        image: "images/batman.jpg"
    },
    wonderwoman: {
        title: "Mulher-Maravilha - Deusa da Guerra",
        author: "Brian Azzarello",
        synopsis: `A origem e as batalhas de Diana Prince ganham vida nesta saga épica onde a deusa guerreira enfrenta inimigos míticos e questiona seu papel como símbolo de justiça e paz.`,
        price: "R$ 54,90",
        image: "images/mulher_maravilha.webp"
    },
    spiderman: {
        title: "Homem-Aranha - A Saga da Ilha",
        author: "Dan Slott",
        synopsis: `Peter Parker enfrenta desafios pessoais e inimigos perigosos em uma ilha misteriosa onde suas habilidades e coragem são postas à prova como nunca antes.`,
        price: "R$ 42,90",
        image: "images/spider_man.webp"
    },
    xmen: {
        title: "X-Men - Dias de um Futuro Esquecido",
        author: "Chris Claremont",
        synopsis: `Num futuro distópico, os mutantes lutam para sobreviver enquanto versões do passado são enviadas para impedir um evento que pode destruir seu destino. Uma das histórias mais aclamadas dos X-Men.`,
        price: "R$ 59,90",
        image: "images/xman.jpg"
    },
    sandman: {
        title: "Sandman - Prelúdios e Noturnos",
        author: "Neil Gaiman",
        synopsis: `O Sonhar, um dos Perpétuos, embarca em uma jornada para recuperar seus artefatos perdidos e restaurar a ordem dos sonhos nesta série inovadora de Neil Gaiman.`,
        price: "R$ 62,00",
        image: "images/sandman.webp"
    },
    flash: {
        title: "Flash - Renascimento",
        author: "Geoff Johns",
        synopsis: `Barry Allen retorna para o mundo dos vivos, enfrentando as consequências de sua ausência e redescobrindo seu lugar como o herói mais rápido da Terra.`,
        price: "R$ 47,90",
        image: "images/flash.jpg"
    },
    captainamerica: {
        title: "Capitão América - O Soldado Invernal",
        author: "Ed Brubaker",
        synopsis: `Quando um inimigo do passado de Steve Rogers ressurge, o Capitão América precisa desvendar uma conspiração sombria que ameaça tudo o que ele representa.`,
        price: "R$ 51,50",
        image: "images/capitao_america.jpg"
    },
    wolverine: {
        title: "Wolverine - Origem",
        author: "Paul Jenkins",
        synopsis: `Acompanhe a jornada de James Howlett, desde sua infância turbulenta até se tornar o mutante implacável conhecido como Wolverine, revelando os segredos de seu passado.`,
        price: "R$ 55,00",
        image: "images/wolverine.jpg"
    },
    greenlantern: {
        title: "Lanterna Verde - Renascimento",
        author: "Geoff Johns",
        synopsis: `Hal Jordan, o maior Lanterna Verde da Terra, ressuscita e deve lutar para limpar seu nome e restaurar a honra da Tropa dos Lanternas Verdes.`,
        price: "R$ 52,50",
        image: "images/lanterna.jpg"
    },
    watchmen: {
        title: "Watchmen",
        author: "Alan Moore",
        synopsis: `Em uma realidade alternativa, onde super-heróis são parte da vida cotidiana, o assassinato de um ex-herói desencadeia uma complexa investigação que revela segredos e conspirações.`,
        price: "R$ 67,90",
        image: "images/watchmen.jpg"
    },
    deadpool: {
        title: "Deadpool - Mercenário Tagarela",
        author: "Joe Kelly",
        synopsis: `Conheça as aventuras caóticas e hilárias do mercenário mais tagarela do universo Marvel, Deadpool, enquanto ele quebra a quarta parede e enfrenta vilões de forma única.`,
        price: "R$ 49,00",
        image: "images/deadpool.jpg"
    },
    ironman: {
        title: "Homem de Ferro - Extremis",
        author: "Warren Ellis",
        synopsis: `Tony Stark injeta em seu corpo um vírus experimental para aprimorar sua armadura, levando-o a um novo nível de poder e a enfrentar dilemas éticos.`,
        price: "R$ 57,00",
        image: "images/ironman.jpg"
    },
    thor: {
        title: "Thor - Deus do Trovão",
        author: "Jason Aaron",
        synopsis: `Explore as origens e os desafios do Deus do Trovão enquanto ele batalha contra ameaças cósmicas e descobre o verdadeiro significado de ser um deus.`,
        price: "R$ 50,00",
        image: "images/thor.webp"
    },
    punisher: {
        title: "Justiceiro - Zona de Guerra",
        author: "Garth Ennis",
        synopsis: `Frank Castle, o Justiceiro, embarca em uma guerra implacável contra o crime, usando táticas brutais para punir os culpados e proteger os inocentes.`,
        price: "R$ 46,00",
        image: "images/justiceiro.webp"
    },
    poisonivy1: {
        title: "Poison Ivy - Jardim Mortal",
        author: "Amy Chu",
        synopsis: `Pamela Isley, a Hera Venenosa, usa seu controle sobre as plantas para proteger a natureza e buscar vingança contra aqueles que a prejudicam, em uma história sombria e fascinante.`,
        price: "R$ 38,90",
        image: "images/hera.webp"
    },
    poisonivy2: {
        title: "Poison Ivy - Raízes de Vingança",
        author: "Kate Leth",
        synopsis: `Hera Venenosa intensifica sua cruzada ecológica, enfrentando novos desafios e aprofundando sua conexão com o reino vegetal, em uma jornada de poder e retribuição.`,
        price: "R$ 42,00",
        image: "images/hera2.webp"
    },
    harleyquinn1: {
        title: "Harley Quinn - Loucura e Sedução",
        author: "Amanda Conner",
        synopsis: `As hilárias e imprevisíveis aventuras de Harley Quinn após sua separação do Coringa, enquanto ela tenta encontrar seu próprio caminho no caos de Gotham.`,
        price: "R$ 45,50",
        image: "images/arlequina1.jpg"
    },
    harleyquinn2: {
        title: "Harley Quinn - Amores Perigosos",
        author: "Jimmy Palmiotti",
        synopsis: `Harley Quinn se envolve em novos relacionamentos e situações bizarras, equilibrando sua vida amorosa com sua carreira de "anti-heroína" em Gotham.`,
        price: "R$ 47,00",
        image: "images/arlequina2.jpg"
    },
    harleyquinn3: {
        title: "Harley Quinn - Caos e Diversão",
        author: "Chad Hardin",
        synopsis: `Mais loucuras e confusões com Harley Quinn, enquanto ela continua a causar estragos e a se divertir à sua maneira, com um toque de humor e imprevisibilidade.`,
        price: "R$ 44,00",
        image: "images/arlequina3.jpg"
    },
    junemoone: {
        title: "June Moone - Encantamentos",
        author: "Lilah Sturges",
        synopsis: `A história de June Moone e sua conexão com a poderosa e sombria Entidade, que a transforma na feiticeira Encantadora, explorando os desafios de controlar seus poderes.`,
        price: "R$ 39,50",
        image: "images/magia.jpg"
    },
    teentitans1: {
        title: "Teen Titans - Heróis Adolescentes",
        author: "Geoff Johns",
        synopsis: `Conheça os jovens heróis da DC Comics, os Titãs, enquanto eles aprendem a trabalhar em equipe, enfrentam ameaças e lidam com os desafios da adolescência.`,
        price: "R$ 46,90",
        image: "images/teen1.jpg"
    },
    teentitans2: {
        title: "Teen Titans - Tempestade Selvagem",
        author: "Marv Wolfman",
        synopsis: `Os Titãs enfrentam uma nova e perigosa ameaça que testa seus limites e a força de sua amizade, em uma batalha épica para salvar o mundo.`,
        price: "R$ 48,00",
        image: "images/teen2.jpg"
    },
    greenlantern2: {
        title: "Lanterna Verde - Coração Vermelho",
        author: "Geoff Johns",
        synopsis: `Hal Jordan se depara com a Fúria Vermelha, uma nova e mortal emoção que ameaça consumir não apenas ele, mas toda a Tropa dos Lanternas Verdes.`,
        price: "R$ 53,90",
        image: "images/lanterna2.webp"
    },
    gotg1: {
        title: "Guardiões da Galáxia - Jornada Estelar",
        author: "Dan Abnett",
        synopsis: `Junte-se a Peter Quill e sua equipe de desajustados intergalácticos em uma jornada emocionante pelo cosmos, repleta de ação e humor.`,
        price: "R$ 55,00",
        image: "images/gg1.jpg"
    },
    gotg2: {
        title: "Guardiões da Galáxia - Invasão Cósmica",
        author: "Brian Michael Bendis",
        synopsis: `Os Guardiões enfrentam uma ameaça cósmica que pode destruir o universo, testando sua coragem e união em uma aventura épica.`,
        price: "R$ 58,50",
        image: "images/g2.jpg"
    },
    gotg3: {
        title: "Guardiões da Galáxia - Batalha Final",
        author: "Steve McNiven",
        synopsis: `A equipe se une para sua batalha mais desafiadora, confrontando inimigos poderosos e fazendo sacrifícios para proteger a galáxia.`,
        price: "R$ 60,00",
        image: "images/gg5.jpg"
    },
};

// Array para armazenar os itens do carrinho
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    // Elementos do Modal de Detalhes do Quadrinho
    const comicModalOverlay = document.getElementById('comicModalOverlay');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalSynopsis = document.getElementById('modalSynopsis');
    const modalPrice = document.getElementById('modalPrice');
    const addToCartBtn = document.getElementById('addToCartBtn');
    let currentComicKey = null;

    // Elementos do Modal do Carrinho de Compras
    const shoppingCartModalOverlay = document.getElementById('shoppingCartModalOverlay');
    const shoppingCartModalCloseBtn = document.getElementById('shoppingCartModalCloseBtn');
    const cartBtn = document.getElementById('cartBtn');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotalSpan = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');

    const comicCards = document.querySelectorAll('.comic-card');

    // NOVO: Elementos do campo de busca
    const comicSearchInput = document.getElementById('comicSearchInput');
    const autocompleteList = document.getElementById('autocompleteList');
    const searchMessage = document.getElementById('searchMessage');
    let activeAutocompleteItem = -1; // Para navegação com teclado

    // --- Funções para o Modal de Detalhes do Quadrinho ---

    function openComicModal(title, synopsis, price, key) {
        modalTitle.textContent = title;
        modalSynopsis.textContent = synopsis;
        modalPrice.textContent = price;
        currentComicKey = key;
        comicModalOverlay.classList.add('active');
        comicModalOverlay.focus();
    }

    function closeComicModal() {
        comicModalOverlay.classList.remove('active');
        currentComicKey = null;
    }

    comicCards.forEach(card => {
        card.addEventListener('click', () => {
            const comicKey = card.dataset.key;
            const data = comicData[comicKey];
            if (data) {
                openComicModal(data.title, data.synopsis, data.price, comicKey);
            }
        });

        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const comicKey = card.dataset.key;
                const data = comicData[comicKey];
                if (data) {
                    openComicModal(data.title, data.synopsis, data.price, comicKey);
                }
            }
        });
    });

    modalCloseBtn.addEventListener('click', closeComicModal);
    comicModalOverlay.addEventListener('click', (event) => {
        if (event.target === comicModalOverlay) {
            closeComicModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && comicModalOverlay.classList.contains('active')) {
            closeComicModal();
        }
    });

    // --- Funções para o Carrinho de Compras ---

    addToCartBtn.addEventListener('click', () => {
        if (currentComicKey) {
            const comicToAdd = { ...comicData[currentComicKey], key: currentComicKey };
            cart.push(comicToAdd);
            updateCartUI();
            closeComicModal();
            alert(`"${comicToAdd.title}" adicionado ao carrinho!`);
        }
    });

    function removeItemFromCart(itemKey) {
        const initialLength = cart.length;
        // Encontra o índice da primeira ocorrência do item
        const index = cart.findIndex(item => item.key === itemKey);
        if (index > -1) {
            cart.splice(index, 1); // Remove apenas uma instância
            updateCartUI();
            alert('Item removido do carrinho.');
        } else {
            alert('Item não encontrado no carrinho.'); // Deveria ser inatingível se o botão só aparece para itens no carrinho
        }
    }


    function calculateCartTotal() {
        return cart.reduce((total, item) => {
            const priceString = item.price.replace('R$', '').replace(',', '.').trim();
            return total + parseFloat(priceString);
        }, 0);
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">Seu carrinho está vazio.</p>';
            return;
        }

        const uniqueCartItems = {};
        cart.forEach(item => {
            if (uniqueCartItems[item.key]) {
                uniqueCartItems[item.key].quantity++;
            } else {
                uniqueCartItems[item.key] = { ...item, quantity: 1 };
            }
        });

        Object.values(uniqueCartItems).forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.dataset.key = item.key;

            const itemPriceValue = parseFloat(item.price.replace('R$', '').replace(',', '.').trim());
            const itemSubtotal = (itemPriceValue * item.quantity).toFixed(2).replace('.', ',');

            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="Capa de ${item.title}" />
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p>${item.author}</p>
                    <p>Quantidade: ${item.quantity}</p>
                </div>
                <span class="cart-item-price">R$ ${itemSubtotal}</span>
                <button class="remove-item-btn" aria-label="Remover ${item.title} do carrinho" data-key="${item.key}">&times;</button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const itemKeyToRemove = event.target.dataset.key; // Pega a chave diretamente do botão
                removeItemFromCart(itemKeyToRemove);
            });
        });
    }

    function updateCartUI() {
        cartItemCount.textContent = cart.length;
        renderCartItems();
        const total = calculateCartTotal();
        cartTotalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

        // Checa o status de login antes de habilitar o botão de finalizar compra
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (cart.length === 0) {
            checkoutBtn.disabled = true;
            clearCartBtn.disabled = true;
        } else {
            clearCartBtn.disabled = false;
            // O botão de finalizar compra só é habilitado se houver itens e o usuário estiver logado
            checkoutBtn.disabled = !isLoggedIn;
            if (!isLoggedIn) {
                checkoutBtn.textContent = 'Finalizar Compra (Faça Login)';
                checkoutBtn.title = 'Você precisa estar logado para finalizar a compra.';
            } else {
                checkoutBtn.textContent = 'Finalizar Compra';
                checkoutBtn.title = ''; // Limpa o título se estiver logado
            }
        }
    }

    // --- Event Listeners para o Modal do Carrinho ---

    cartBtn.addEventListener('click', () => {
        updateCartUI();
        shoppingCartModalOverlay.classList.add('active');
        shoppingCartModalOverlay.focus();
    });

    shoppingCartModalCloseBtn.addEventListener('click', () => {
        shoppingCartModalOverlay.classList.remove('active');
    });

    shoppingCartModalOverlay.addEventListener('click', (event) => {
        if (event.target === shoppingCartModalOverlay) {
            shoppingCartModalOverlay.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && shoppingCartModalOverlay.classList.contains('active')) {
            shoppingCartModalOverlay.classList.remove('active');
        }
    });

    // Finalizar Compra
    checkoutBtn.addEventListener('click', () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            alert('Você precisa estar logado para finalizar a compra!');
            window.location.href = 'login.html'; // Redireciona para a página de login
            return;
        }

        if (cart.length > 0) {
            alert('Compra finalizada com sucesso! (Esta é apenas uma simulação)');
            cart = [];
            updateCartUI();
            shoppingCartModalOverlay.classList.remove('active');
        } else {
            alert('Seu carrinho está vazio!');
        }
    });

    // Limpar Carrinho
    clearCartBtn.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja limpar todo o carrinho?')) {
            cart = [];
            updateCartUI();
            alert('Carrinho limpo.');
        }
    });

    // Atualiza o estado de login no cabeçalho na carga da página
    function updateLoginButton() {
        const loginBtn = document.getElementById('loginBtn');
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (loginBtn) {
            if (isLoggedIn) {
                // Se estiver logado, muda para um botão de "Sair" ou "Minha Conta"
                loginBtn.textContent = 'Sair';
                loginBtn.href = '#'; // Remove o link direto para login.html
                loginBtn.onclick = function() {
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('loggedInUserEmail'); // Remove o email do usuário logado
                    alert('Você foi desconectado.');
                    updateLoginButton(); // Atualiza o botão novamente
                    updateCartUI(); // Atualiza o carrinho para refletir o logout
                    location.reload(); // Recarrega a página para atualizar o cabeçalho
                };
            } else {
                loginBtn.textContent = 'Login';
                loginBtn.href = 'login.html';
                loginBtn.onclick = null; // Remove o manipulador de clique se não estiver logado
            }
        }
    }

    // --- NOVO: Lógica de Busca com Autocompletar ---

    let comicTitles = Object.values(comicData).map(comic => comic.title); // Lista de todos os títulos

    comicSearchInput.addEventListener('input', () => {
        const searchTerm = comicSearchInput.value.toLowerCase();
        autocompleteList.innerHTML = ''; // Limpa a lista anterior
        searchMessage.textContent = ''; // Limpa a mensagem de erro/sucesso

        if (searchTerm.length === 0) {
            autocompleteList.style.display = 'none';
            return;
        }

        const filteredComics = Object.keys(comicData).filter(key =>
            comicData[key].title.toLowerCase().includes(searchTerm)
        );

        if (filteredComics.length > 0) {
            autocompleteList.style.display = 'block';
            filteredComics.forEach(key => {
                const item = document.createElement('li');
                item.textContent = comicData[key].title;
                item.dataset.key = key; // Armazena a chave do quadrinho no dataset
                item.addEventListener('click', () => {
                    comicSearchInput.value = comicData[key].title; // Preenche o input
                    autocompleteList.style.display = 'none'; // Esconde a lista
                    openComicModal(comicData[key].title, comicData[key].synopsis, comicData[key].price, key);
                    searchMessage.textContent = ''; // Limpa qualquer mensagem anterior
                });
                autocompleteList.appendChild(item);
            });
            activeAutocompleteItem = -1; // Reset para navegação do teclado
        } else {
            autocompleteList.style.display = 'none';
            searchMessage.textContent = 'Item não encontrado.';
        }
    });

    // Fechar a lista de autocompletar ao clicar fora
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.search-container')) {
            autocompleteList.style.display = 'none';
            // Se o campo de busca estiver vazio ou não houver resultados, limpa a mensagem
            if (comicSearchInput.value === '' || autocompleteList.children.length === 0) {
                searchMessage.textContent = '';
            }
        }
    });

    // Navegação com teclado na lista de autocompletar
    comicSearchInput.addEventListener('keydown', (e) => {
        const items = autocompleteList.querySelectorAll('li');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeAutocompleteItem = (activeAutocompleteItem + 1) % items.length;
            highlightAutocompleteItem(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeAutocompleteItem = (activeAutocompleteItem - 1 + items.length) % items.length;
            highlightAutocompleteItem(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeAutocompleteItem > -1) {
                items[activeAutocompleteItem].click(); // Simula o clique no item ativo
            } else {
                // Se Enter for pressionado sem item ativo, tenta buscar o que está no input
                const searchTerm = comicSearchInput.value.toLowerCase();
                const foundKey = Object.keys(comicData).find(key =>
                    comicData[key].title.toLowerCase() === searchTerm
                );
                if (foundKey) {
                    openComicModal(comicData[foundKey].title, comicData[foundKey].synopsis, comicData[foundKey].price, foundKey);
                    searchMessage.textContent = '';
                    autocompleteList.style.display = 'none';
                } else {
                    searchMessage.textContent = 'Item não encontrado.';
                    autocompleteList.style.display = 'none';
                }
            }
        } else if (e.key === 'Escape') {
            autocompleteList.style.display = 'none';
            searchMessage.textContent = ''; // Limpa a mensagem de busca ao fechar
            comicSearchInput.value = ''; // Limpa o input também
        }
    });

    function highlightAutocompleteItem(items) {
        items.forEach((item, index) => {
            if (index === activeAutocompleteItem) {
                item.classList.add('autocomplete-active');
                item.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); // Scroll para o item visível
            } else {
                item.classList.remove('autocomplete-active');
            }
        });
    }

    // Inicializa a UI do carrinho e o botão de login quando a página carrega
    updateCartUI();
    updateLoginButton();
});

function scrollToComics() {
    document.getElementById('comics').scrollIntoView({ behavior: 'smooth' });
}