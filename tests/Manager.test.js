const Manager = require("../lib/Manager");
const manager = new Manager("james", 1, "james@gmail.com", 3);

test("Test#1 testing getName", () => {
  expect(manager.getName()).toBe("james");
});

test("Test#2 testing employee getEmail", () => {
  expect(manager.getEmail()).toBe("james@gmail.com");
});

test("Test#3 testing employee getId", () => {
  expect(manager.getId()).toBe(1);
});

test("Test#4 testing getRole of manager", () => {
  expect(manager.getRole()).toBe("Manager");
});

test("Test#4 testing officeNumber of manager", () => {
  expect(manager.getOfficeNumber()).toBe(3);
});