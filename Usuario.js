var faker = require('faker');

class Usuario {
    constructor() {
        this.rut = faker.random.alphaNumeric(11);
        this.firtName = faker.name.findName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumberFormat();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

module.exports = Usuario;