const Intern = require("../lib/Intern");
const test= {
    name: "james",
    id: "2",
    email: "engi@uw.edu",
    school:"UW"
};
describe("Intern", ()=>{
    describe("Return Intern school", ()=>{
        it ("This will run the Intern school", ()=>{
            const answer =test.school;
            const result =new Intern(test.name, test.id, test.email, test.school).getSchool();
            expect(result).toEqual(answer);
        });
    });

    describe("Return Intern Role", ()=>{
        it ("This will run the Intern role", ()=>{
            const answer = "Intern";
            const result =new Intern().getRole();
            expect(result).toEqual(answer);
        });
    });
});