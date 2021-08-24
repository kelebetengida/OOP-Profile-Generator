
const Engineer = require("../library/Engineer");
​
const test={
  name: "James",
  id: "2",
  email: "James@uw.edu",
  gitHub: "kelebetengida"
};
​
describe("Engineer", ()=>{
  describe("Return Engineers Name", ()=>{
      it ("This method should run Engineers gitHub username", ()=>{
          const answer =test.gitHub;
          const result =new Engineer(test).getGithub();
          expect(result).toEqual(answer);
      });
  });

  describe("Return Engineers role", ()=>{
      it ("This method should run Engineers role", ()=>{
          const answer ="Engineer";
          const result =new Engineer(test).getRole();
          expect(result).toEqual(answer);
      });
  });
});