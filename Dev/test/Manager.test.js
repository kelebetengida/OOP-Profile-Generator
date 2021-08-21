const Manager = require("../library/Manager");
​
test("Test github", () => {
  const test = "User";
  const e = new Manager("Foo", 1, "test@test.com", test);
  expect(e.github).toBe(test);
});
​
test("getRole() should return \"Manager\"", () => {
  const testValue = "Engineer";
  const e = new Manager("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
})