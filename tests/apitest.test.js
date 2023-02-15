const server = require('../server/server.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

// /Status endpoint endtoend tests
describe('get /status endpoint', () => {

  it('POST /status send correct data expect 200', async () => {
    const res = await requestWithSupertest.get('/status');
    expect(res.status).toEqual(200);
  });

});

// /elements endpoint endtoend tests
describe('PUT /elements endpoint', () => {

  it('PUT /elements send correct data expect 200', async () => {
    const res = await requestWithSupertest.put('/elements').send([{ id: 1, seats: 4 }]).set('Accept', 'application/json');
    expect(res.status).toEqual(200);
  });

  it('PUT /elements no array, expect 400', async () => {
    const res = await requestWithSupertest.put('/elements').send({ id: 1, seats: 4 }).set('Accept', 'application/json');
    expect(res.status).toEqual(400);
  });

  it('PUT /elements no id, expect 400', async () => {
    const res = await requestWithSupertest.put('/elements').send([{ seats: 4 }]).set('Accept', 'application/json');
    expect(res.status).toEqual(400);
  });

  it('PUT /elements no seats, expect 400', async () => {
    const res = await requestWithSupertest.put('/elements').send([{ id: 1 }]).set('Accept', 'application/json');
    expect(res.status).toEqual(400);
  });

  it('PUT /elements id not numeric, expect 400', async () => {
    const res = await requestWithSupertest.put('/elements').send([{ id: "hi", seats: 4 }]).set('Accept', 'application/json');
    expect(res.status).toEqual(400);
  });

  it('PUT /elements seats not numeric, expect 400', async () => {
    const res = await requestWithSupertest.put('/elements').send([{ id: 1, seats: "hi" }]).set('Accept', 'application/json');
    expect(res.status).toEqual(400);
  });

});


afterAll(done => {
  server.close();
  done();
});
