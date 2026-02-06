const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

   res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>GIF funcionando</title>
      </head>
      <body style="text-align:center; font-family:sans-serif;">
        <h1>Hola Mundo 😎</h1>
        <p>Ahora sí debería verse animado 👇</p>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTY4NXFxbTNlaWpuNW95OWM1a3dzam80eThwYzZrc2swcGo5OG5vYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AT6LbRAazEoPm/giphy.gif" alt="GIF animado">
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
