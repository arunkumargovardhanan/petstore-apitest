const request = require("supertest")("https://petstore.swagger.io/v2");
const expect = require("chai").expect;
const getPropertyValue = require('./utilities/helper')
const payload = require('./utilities/addPet')
let generatedId;
describe("GET /pet", function() {
    it("Post a Pet object that needs to be added to the store", async function() {
        const response = await request
            .post("/pet")
            .send(payload);

        expect(response.status).to.eql(200);

        const attributes = response.body;
        expect(attributes).to.include.keys("id", "category", "name");
        generatedId = attributes.id;
        // expect(attributes.id).to.eql(payload.id);
    });


    it("returns pet details which are available", async function() {
        const response = await request.get("/pet/findByStatus?status=available");
        expect(response.status).to.eql(200);
        expect(response.body.length).greaterThan(0);
        let x = response.body.map(function(el) { return el.id; });
        expect(x).includes(generatedId)
    });

    it("PUT- Update an existing Pet by ID", async function() {
        payload.id = generatedId
        const response = await request
            .put("/pet")
            .send(payload);

        expect(response.status).to.eql(200);

        const attributes = response.body;
        expect(attributes).to.include.keys("id", "category", "name");
        generatedId = attributes.id;
    });

    it("DELETE- Update an existing Pet by ID", async function() {
        payload.id = generatedId
        const response = await request
            .delete(`/pet/${generatedId}`)
            .set('Authorization', 'special-key')
        expect(response.status).to.eql(200);

        const attributes = response.body;
        expect(attributes).to.include.keys("code", "type", "message");
        expect(attributes.message).to.equal(String(generatedId))
        console.log(attributes)
    });

});