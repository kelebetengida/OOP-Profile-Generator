const Employee = require("../lib/Employee");

​

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

/*
describe("Employee", ()=>{
    describe("Return Employees Name", ()=>{
        it ("This will run the employyees name", ()=>{
            const answer =test.name;
            const result =new Employee(test).getName();
            expect(result).toEqual(answer);
        });
    });

    describe("Return Employees id", ()=>{
        it ("This will run the employyees id", ()=>{
            const answer =test.id;
            const result =new Employee(testa).getId();
            expect(result).toEqual(answer);
        });
    });

    describe("Return Employee email", ()=>{
        it ("This will run the employyees email", ()=>{
            const answer =test.email;
            const result =new Employee(test).getEmail();
            expect(result).toEqual(answer);
        });
    });

    describe("Return Employee Role", ()=>{
        it ("This will run the employyees role", ()=>{
            const answer = "Employee";
            const result =new Employee(test).getRole();
            expect(result).toEqual(answer);
        });
    });
});
*/