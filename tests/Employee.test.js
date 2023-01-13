const Employee = require ("../lib/Employee.js")
const employee = new Employee("james", 1, "james@gmail.com");

test("Test#1 testing getName", () => {
  expect(employee.getName()).toBe("james");
});

test("Test#2 testing employee getEmail", () => {
  expect(employee.getEmail()).toBe("james@gmail.com");
});

test("Test#3 testing employee getId", () => {
  expect(employee.getId()).toBe(1);
});