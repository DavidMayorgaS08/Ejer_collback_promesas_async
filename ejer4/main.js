console.log('Inicio del programa');

function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function principal() {
  await esperar(3000);
  console.log('Primer Timeout');
  // listado de clientes
  
  await esperar(100);
  console.log('Segundo Timeout');
  // total de compras
  
  await esperar(0);
  console.log('Tercer Timeout');
}

(async () => {
  await principal();
  console.log('Fin del programa');
})();