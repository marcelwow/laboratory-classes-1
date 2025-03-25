// 🏗 Stwórz funkcję 'logoutRouting', która obsłuży stronę wylogowania.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();

// 🔧 Wyeksportuj funkcję 'logoutRouting', aby inne moduł mogły jej używać.
const logoutRouting = (method, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`
        <html>
        <head>
            <title>Sklep wyloguj</title>
                <style>
                    body { background-color: #d5bebe; color: #333; font-family: Arial, sans-serif; }
                    h1 { color: #716b4c; }
                    nav a { margin: 0 10px; color: #dc3545; text-decoration: none; }
                </style>
        </head>
        <body>
            <h1>Zostales wylogowany</h1>
            <nav>
                <a href="/kill">wyjdz</a>
                <a href="/">powroc do strony glownej</a>
            </nav>
        </body>
        </html>
    `);
};
module.exports = logoutRouting;