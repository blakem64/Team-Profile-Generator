import { Engineer } from "../lib/Engineer";
import { expect, test } from "@jest/globals";
const engineer = new Engineer("james", 1, "james@gmail.com", "jgithubprofile");

test("Test#1 testing getName", () => {
  expect(engineer.getName()).toBe("james");
});

test("Test#2 testing employee getEmail", () => {
  expect(engineer.getEmail()).toBe("james@gmail.com");
});

test("Test#3 testing employee getId", () => {
  expect(engineer.getId()).toBe(1);
});

test("Test#4 testing getRole of engineer", () => {
  expect(engineer.getRole()).toBe("Engineer");
});

test("Test#4 testing getGithub of engineer", () => {
  expect(engineer.getGithub()).toBe("jgithubprofile");
});