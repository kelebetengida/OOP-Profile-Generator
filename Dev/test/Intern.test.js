const Intern = require("../library/Intern");
​
test("Test github", () => {
  const test = "User";
  const e = new Intern("Foo", 1, "test@test.com", test);
  expect(e.github).toBe(test);
});
​
test("getRole() should return \"Intern\"", () => {
  const testValue = "Engineer";
  const e = new Intern("Foo", 1, "test@test.com", "school");
  expect(e.getRole()).toBe(testValue);
})