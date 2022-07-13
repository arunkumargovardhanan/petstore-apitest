function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const id = getRandomInt(999999);
module.exports = payload = {
    "id": 0,
    "category": {
        "id": id,
        "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
        "string"
    ],
    "tags": [{
        "id": 0,
        "name": "string"
    }],
    "status": "available"
}