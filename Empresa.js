var faker = require('faker');

class Empresa {
    constructor() {
        this.rut = faker.random.alphaNumeric(11);
        this.companyName = faker.company.companyName();
        this.address = new Address();
    }
}

class Address {
    constructor() {
        this.streetName = faker.address.streetName();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.postalCode = faker.address.zipCode();
        this.contry = faker.address.country();
    }
}

module.exports = Empresa;