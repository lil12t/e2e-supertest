import * as request from 'supertest'


const app = request.agent('https://jsonplaceholder.typicode.com')

describe('GET /users', function () {
    it('responds with json', async() => {
        const response = await app.get('/todos/1')

        expect(response.status).toEqual(200);
    });
});