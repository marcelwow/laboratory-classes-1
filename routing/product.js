// 📦 Zaimportuj moduły 'fs' oraz 'STATUS_CODE' do obsługi produktów.

// 🏗 Stwórz funkcję 'productRouting', która obsłuży żądania dotyczące produktów.

// 🏗 Stwórz funkcję 'renderAddProductPage', która wyrenderuje stronę dodawania produktu.

// 🏗 Stwórz funkcję 'renderNewProductPage', która wyświetli najnowszy produkt z pliku 'product.txt'.
// Podpowiedź: fileSystem.readFile(...);

// 🏗 Stwóz funkcję 'addNewProduct', która obsłuży dodawanie nowego produktu, zapisywanie go do pliku 'product.txt' oraz przeniesie użytkownika na stronę '/product/new'.
// Podpowiedź: fileSystem.writeFile(...);
// Podpowiedź: response.setHeader("Location", "/product/new");

// 🔧 Wyeksportuj funkcję 'productRouting', aby inne moduł mogły jej używać.
const productRouting = (url, method, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    if (url.includes('/product/add')) {
        if (method === 'GET') {
            response.end('<html><body><h1>Dodaj nowy produkt</h1></body></html>');
        } else if (method === 'POST') {
            response.end('<html><body><h1>Produkt dodany</h1></body></html>');
        }
    } else if (url.includes('/product/new')) {
        response.end('<html><body><h1>Sprawdz nowe produkty</h1></body></html>');
    } else {
        console.error(`ERROR: Strona ${url} nie istnieje.`);
        response.writeHead(STATUS_CODE.NOT_FOUND);
        response.end('<html><body><h1>404 - Nie znaleziono strony</h1></body></html>');
    }
};
module.exports = productRouting;