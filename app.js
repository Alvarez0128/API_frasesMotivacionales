const http = require('http');

// Array de frases motivacionales
const frasesMotivacionales = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "El único límite para tus logros es tu propia imaginación.",
  "Cree en ti mismo y todo será posible.",
  "El secreto del éxito es empezar antes de estar listo.",
  "La mejor forma de predecir el futuro es creándolo.",
  "La clave del éxito es comenzar antes de estar listo.",
  "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
  "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes al no intentarlo.",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
  "No dejes que los obstáculos te detengan. Si tropiezas, haz de ellos un escalón hacia algo mejor.",
  "El único modo de hacer un gran trabajo es amar lo que haces.",
  "La mente es todo. Lo que pienses, lo serás.",
  "El éxito no es para los débiles y vacilantes. Es para aquellos que están dispuestos a luchar, a persistir, a resistir y a trabajar duro en ser mejores cada día.",
  "Cuando te sientas como si estuvieras perdiendo todo, recuerda que los árboles pierden sus hojas cada año y aún así siguen creciendo.",
  "Cada día es una nueva oportunidad para cambiar tu vida.",
  "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
  "El éxito es aprender a ir de fracaso en fracaso sin perder el entusiasmo.",
  "No cuentes los días, haz que los días cuenten.",
  "No te preocupes por los errores del pasado, concéntrate en el éxito del futuro.",
  "La persistencia es el camino al éxito.",
  "La diferencia entre lo imposible y lo posible radica en la determinación de una persona.",
  "No esperes a que las condiciones sean perfectas para avanzar. Avanza ahora con las condiciones que tienes. Las condiciones mejorarán con el tiempo.",
  "Nada en la vida que valga la pena es fácil.",
  "La confianza en sí mismo es el primer secreto del éxito.",
  "No tengas miedo de renunciar a lo bueno para perseguir lo grandioso.",
  "El camino hacia el éxito y el camino hacia el fracaso son casi exactamente los mismos.",
  "Cada fracaso es un paso hacia el éxito.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
  "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
  "No cuentes los días, haz que los días cuenten.",
  "No te preocupes por los errores del pasado, concéntrate en el éxito del futuro.",
  "La persistencia es el camino al éxito.",
  "Nada en la vida que valga la pena es fácil.",
  "La confianza en sí mismo es el primer secreto del éxito.",
  "Cada fracaso es un paso hacia el éxito.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
  "No cuentes los días, haz que los días cuenten.",
  "No te preocupes por los errores del pasado, concéntrate en el éxito del futuro.",
  "La persistencia es el camino al éxito.",
  "Nada en la vida que valga la pena es fácil.",
  "La confianza en sí mismo es el primer secreto del éxito.",
  "El camino hacia el éxito y el camino hacia el fracaso son casi exactamente los mismos.",
  "Cada fracaso es un paso hacia el éxito.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No dejes que los obstáculos te detengan. Si tropiezas, haz de ellos un escalón hacia algo mejor.",
  "La mente es todo. Lo que pienses, lo serás.",
  "El éxito no es para los débiles y vacilantes. Es para aquellos que están dispuestos a luchar, a persistir, a resistir y a trabajar duro en ser mejores cada día.",
  "Cuando te sientas como si estuvieras perdiendo todo, recuerda que los árboles pierden sus hojas cada año y aún así siguen creciendo."
];


// Función para obtener una frase aleatoria
function obtenerFraseAleatoria() {
    const indice = Math.floor(Math.random() * frasesMotivacionales.length);
    return frasesMotivacionales[indice];
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/frase') {
        // Configurar encabezados de respuesta
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        // Obtener una frase aleatoria
        const fraseAleatoria = obtenerFraseAleatoria();
        
        // Enviar la frase como respuesta
        res.end(JSON.stringify({ frase: fraseAleatoria }));
    } else {
        // Si la ruta no es válida, devolver un error 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
