import { faker } from "@faker-js/faker";

export default function createData() {
  let data = [];
  for (let i = 0; i < 1000; i++) {
    data.push({
      employeeId: i,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      business: faker.company.name(),
    });
  }
  return data;
}
