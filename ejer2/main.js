console.log('Inicio del programa');
setTimeout(() => {
    console.log('Primer Timeout');
    return new Promise((resolve) => {
        resolve(
            setTimeout(() => {
                console.log('Segundo Timeout');
                return new Promise((resolve) => {
                    resolve(
                        setTimeout(() => {
                            console.log('Tercer Timeout');
                            return new Promise((resolve) => {
                                resolve(console.log('Fin del programa'))
                            });
                        }, 0)
                    );
                });
            }, 100)
        );
    });
}, 3000);
