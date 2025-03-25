// 🏗 Stwórz funkcję 'homeRouting', która obsłuży stronę główną.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();
//🔧 Wyeksportuj funkcję 'homeRouting', aby inne moduł mogły jej używać.
const homeRouting = (method, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`
        <html>
        <head>
            <title>sklep</title>
                <style>
                    body { background-color: #f4f4f4; color: #333; font-family: Arial, sans-serif; }
                    h1 { color: #007bff; }
                    nav a { margin: 0 10px; color: #28a745; text-decoration: none; }
                </style>
        </head>
        
        <body>
            <h1>Witamy w naszym sklepie</h1>
            <nav>
                <a href="/product/new">Najnowszy produkt</a>
                <a href="/product/add">Dodaj produkt</a>
                <a href="/logout">Wyloguj</a>
            </nav>
        </body>
        </html>
    `);
};
module.exports = homeRouting;