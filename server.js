const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

const userObject = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

// const companyObject = () => ({
//     _id: faker.datatype.uuid(),
//     name: faker.company.companyName(),
//     address: {
//         street: faker.address.streetAddress(),
//         city: faker.address.city(),
//         state: faker.address.state(),
//         zipCode: faker.address.zipCode(),
//         country: faker.address.country(),
//     },
// });

// app.get("/api/users/new", (request, response) => {
//     const newUser = userObject();
//     response.json(newUser);
// });

// app.get("/api/companies/new", (request, response) => {
//     const newCompany = companyObject();
//     response.json(newCompany);
// });

// app.get("/api/user/company", (request, response) => {
//     const newUser = userObject();
//     const newCompany = companyObject();
//     const userCompany = {
//         user: newUser,
//         company: newCompany,
//     };
//     response.json(userCompany);
// });

// app.listen( port, () => console.log(`Listening on port: ${port}`));