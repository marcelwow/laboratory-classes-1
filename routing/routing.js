// 📦 Zaimportuj moduł odpowiedzialne za routing poszczególnych części aplikacji.
// 📦 Zaimportuj obiekt STATUS_CODE.

// 🏗 Stwórz tutaj funkcję 'requestRouting', która będzie obsługiwać zapytania HTTP.
// Podpowiedź: const requestRouting = (request, response) => {
// 🏗 Tutaj stwórz logowanie do konsoli informacji, mówiące o typie logowania (INFO), dacie, metodzie oraz url żądania.
// 🏗 Tutaj stwórz podstawowy 'request routing' dla ścieżek '/', zawierającej /product' oraz '/logout'. Przekaż `request` i `routing` do odpowiednio routingu.

// 🏗 Obsłuż specjalny przypadek, jeśli użytkownik zostanie przekierowany na ścieżkę /kill, aplikacja się zamknie.
// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (PROCESS), dacie oraz informację, że wylogowowyanie zostało wywołane a aplikacja zamknie się.

// 🏗 Tutaj stwórz obsługę przypadku, jeśli żądany URL nie istnieje. Zwróć wtedy błąd 404.
// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (ERROR), dacie oraz informację, że żądany url nie istnieje.
//  };

// 🔧 Wyeksportuj funkcję 'requestRouting', aby inne moduł mogły jej używać.

const homeRouting = require('./home');
const productRouting = require('./product');
const logoutRouting = require('./logout');
const { STATUS_CODE } = require('../constants/statusCode');

const requestRouting = (req, res) => {
    const { url, method } = req;
    console.log(`info [${new Date().toISOString()}]: ${method} - ${url}`);

    if (url === '/') {
        homeRouting(method, res);
    } else if (url.startsWith('/product')) {
        productRouting(url, method, res);
    } else if (url === '/logout') {
        logoutRouting(method, res);
    } else if (url === '/kill') {
        console.log(`PROCESS [${new Date().toISOString()}]: Nastąpiło wylogowanie ,  aplikacja została zamknięta.`);
        process.exit();
    } else {
        console.error(`ERROR [${new Date().toISOString()}]: Strona ${url} nie istnieje.`);
        res.writeHead(STATUS_CODE.NOT_FOUND);
        res.end('<html><body><h1>404 - nie znaleziono strony</h1></body></html>');
    }
};
module.exports = requestRouting;