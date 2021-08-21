
const Engineer = require("../library/Engineer");
​
test("Test github", () => {
  const test = "User";
  const e = new Engineer("Foo", 1, "test@test.com", test);
  expect(e.github).toBe(test);
});
​
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});