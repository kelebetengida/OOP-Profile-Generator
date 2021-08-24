const Manager = require("../library/Manager");
​
const test={
  name: "jamie ",
  id: "4",
  email: "Jemie@uw.edu",
  officeNumber: "2"
};
​
describe("Manager", ()=>{
  describe("Return Manager School", ()=>{
      it ("This method should run Manager school", ()=>{
          const answer =test.officeNumber;
          const result =new Manager(test).getOfficeNumber();
          expect(result).toEqual(answer);
      });
  });

  describe("Return Manager role", ()=>{
      it ("This method should run Manager role", ()=>{
          const answer ="Manager";
          const result =new Manager(test).getRole();
          expect(result).toEqual(answer);
      });
  });
});