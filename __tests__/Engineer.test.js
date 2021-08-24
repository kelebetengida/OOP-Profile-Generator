
const Engineer = require("../lib/Engineer");
const test= {
    name: "james",
    id: "2",
    email: "engi@uw.edu",
    gitHub: "kelebetengida"
};
describe("Engineer", ()=>{
    describe("Return Engineer Name", ()=>{
        it ("This will run the Engineer github", ()=>{
            const answer =test.gitHub;
            const result =new Engineer(test.name, test.id, test.email, test.gitHub).getGithub();
            expect(result).toEqual(answer);
        });
    });

    describe("Return Engineer Role", ()=>{
        it ("This will run the Engineer role", ()=>{
            const answer = "Engineer";
            const result =new Engineer().getRole();
            expect(result).toEqual(answer);
        });
    });
});