const Manager = require("../library/Manager");
​
const testdata={
  name: "Kelebet",
  id: "1",
  email: "Engidk@uw.edu",
};
​
describe("Employee", ()=>{
  describe("Return Employee Name", ()=>{
      it ("This method should run employyee name", ()=>{
          const answer =testdata.name;
          const result =new Employee(testdata).getName();
          expect(result).toEqual(answer);
      });
  });

  describe("Return Employee id", ()=>{
      it ("This method should run employyee id", ()=>{
          const answer =testdata.id;
          const result =new Employee(testdata).getId();
          expect(result).toEqual(answer);
      });
  });

  describe("Return Employee email", ()=>{
      it ("This method should run employyee email", ()=>{
          const answer =testdata.email;
          const result =new Employee(testdata).getEmail();
          expect(result).toEqual(answer);
      });
  });

  describe("Return Employee Role", ()=>{
      it ("This method should run employyee role", ()=>{
          const answer = "Employee";
          const result =new Employee(testdata).getRole();
          expect(result).toEqual(answer);
      });
  });
})