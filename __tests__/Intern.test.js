const Intern = require("../library/Intern");
​
const test={
  name: "Tom ",
  id: "3",
  email: "Tom@uw.edu",
  school: "UW"
};
​
describe("Intern", ()=>{
  describe("Return Intern School", ()=>{
      it ("This method should run Intern school", ()=>{
          const answer =test.school;
          const result =new Intern(test).getSchool();
          expect(result).toEqual(answer);
      });
  });

  describe("Return Intern role", ()=>{
      it ("This method should run Intern role", ()=>{
          const answer ="Intern";
          const result =new Intern(test).getRole();
          expect(result).toEqual(answer);
      });
  });
});