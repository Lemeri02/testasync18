const { get } = require('axios');
require('should');
const headers = { 'Content-Type' : 'application/json'};

const array = [];
for (let i=-10; i<10; i++){
    array.push(i);
}
  
array.forEach((n) => 
    describe(n + ' asyncAdd', ()=> 
        it ('should respond with a number', async () => {
            const urlThere = `http://kodaktor.ru/api2/there/${n}`;
            const { data : x } = await get(urlThere, { headers })
            const urlAndba = `http://kodaktor.ru/api2/andba/${x}`;
            const { data : y } = await get(urlAndba, { headers })
 
            y.should.equal(n);
        })
    )
);