const Employee = require("../lib/Employee");
const test= {
    name: "james",
    id: "2",
    email: "engi@uw.edu"
};
describe("Employee", ()=>{
    describe("Return Employees Name", ()=>{
        it ("This will run the employyees name", ()=>{
            const answer ="james";
            const result =new Employee(test.name).getName();
            expect(result).toEqual(answer);
        });
    });

    describe("Return Employees id", ()=>{
        it ("This will run the employyees id", ()=>{
            const answer =test.id;
            const result =new Employee(test.name, test.id).getId();
            expect(result).toEqual(answer);
        });
    });

    describe("Return Employee email", ()=>{
        it ("This will run the employyees email", ()=>{
            const answer =test.email;
            const result =new Employee(test.name, test.id, test.email).getEmail();
            expect(result).toEqual(answer);
        });
    });

    describe("Return Employee Role", ()=>{
        it ("This will run the employyees role", ()=>{
            const answer = "Employee";
            const result =new Employee().getRole();
            expect(result).toEqual(answer);
        });
    });
});