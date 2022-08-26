// Si la info recibida no es JSON, podemos convertirlo en objeto
const data = {
    username: 'Listo',
    email: 'jhon@doe.com'
}

// Funcionamiento del fetch para consumir API del ejemplo de arriba (sin JSON)

fetch(
    'https://example.com/data.json', // Origen del API
    {
        method: 'POST', // Método
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    }
)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

// Funcionamiento básico del fetch para consumir API

fetch('https://example.com/data.json', 
    {method: 'GET'}
)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))