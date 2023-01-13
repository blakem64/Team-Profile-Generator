const Intern = require("../lib/intern");
const intern = new Intern("james", 1, "james@gmail.com", "UFD");

test("Test#1 testing getName", () => {
  expect(intern.getName()).toBe("james");
});

test("Test#2 testing employee getEmail", () => {
  expect(intern.getEmail()).toBe("james@gmail.com");
});

test("Test#3 testing employee getId", () => {
  expect(intern.getId()).toBe(1);
});

test("Test#4 testing getRole of intern", () => {
  expect(intern.getRole()).toBe("Intern");
});

test("Test#4 testing getSchool of intern", () => {
  expect(intern.getSchool()).toBe("UFD");
});