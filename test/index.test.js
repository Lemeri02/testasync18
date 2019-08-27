const { get } = require('axios');
require('should');
const headers = { 'Content-Type' : 'application/json'};
const cases = [
    {n: 1, xs: 99},
    {n: 2, xs: 255},
    {n: 3, xs: 483},
    {n: 4, xs: 783},
    {n: 5, xs: 1155}
]; 

//const n = 1;
//const URL = `http://kodaktor.ru/api2/there/${n}`;
//get(URL, {headers})
//    .then(({ data : x }) => console.log(x))


cases.forEach(({n, xs }) => 
    describe(xs + ' asyncAdd', ()=> 
        it ('should respond with a number', async () => {
            const urlThere = `http://kodaktor.ru/api2/there/${n}`;
            const { data : x } = await get(urlThere, { headers })
            const urlAndba = `http://kodaktor.ru/api2/andba/${x}`;
            const { data : y } = await get(urlAndba, { headers })

            x.should.equal(xs);
            y.should.equal(n);
        })
    )
);