const request = require("supertest")
const app = require("./app")
const mongoose = require('mongoose');
const mockingoose = require('mockingoose');

const model = require('./model/user');
require("dotenv").config();


//jest.mock("mongoose");


describe('GET /users', function () {

    it('responds with json', async function () {
        const _doc = [{
            _id: '507f191e810c19729de860ea',
            name: 'name',
            email: 'name@email.com',
          }];
      
        mockingoose(model).toReturn(_doc, 'find');

        const response = await request(app)
            .get('/users')
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ "utilisateurs": _doc });
    });


    it('responds empty array with json', async function () {
        mockingoose(model).toReturn([], 'find');

        const response = await request(app)
            .get('/users')
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ "utilisateurs": [] });
    });



    it.skip('responds throw an error', async function () {
        mockingoose(model).toReturn(new Error('something wrong'));

        const response = await request(app)
            .get('/users')
            .set('Accept', 'application/json')
        expect(response).toThrow("something wrong");
    });
});