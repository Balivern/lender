const mysql = require('mysql2');

// Créer une connexion à la base de données
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'lender'
});

module.exports = connection;

 /* Effectuer une requête SELECT
 connection.query('SELECT * FROM nom_de_la_table', (err, result) => {
    if (err) throw err;
    console.log('Résultats: ', result);
 });

 // Fermer la connexion
 connection.end();
});*/