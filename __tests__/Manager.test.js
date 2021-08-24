const Manager = require("../lib/Manager");
const test= {
    name: "james",
    id: "2",
    email: "engi@uw.edu",
    officeNumber: "4"
};
describe("Manager", ()=>{
    describe("Return Manager Name", ()=>{
        it ("This will run the Manager office number", ()=>{
            const answer =test.officeNumber;
            const result =new Manager(test.name, test.id, test.email, test.officeNumber).getOfficeNumber();
            expect(result).toEqual(answer);
        });
    });


    describe("Return Manager Role", ()=>{
        it ("This will run the Manager role", ()=>{
            const answer = "Manager";
            const result =new Manager().getRole();
            expect(result).toEqual(answer);
        });
    });
});