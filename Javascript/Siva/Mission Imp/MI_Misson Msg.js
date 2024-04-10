let password = 1310;

guess = prompt("Enter the Password: ");

while (guess != password) {
    guess = prompt("Try Again");
}

console.log("Login Successful...");
console.log("Enter AgentID for furthur instructions..");
let id = prompt("Enter ID:");

if (id == 18) {
    console.log("Good Evening Agent Hunt,/nYour Mission should you choose to accept it....is to continue and finish your journey in the world of JavaScript/nGood Luck Agent!/nThis Message will Self-Distruct in...");

    let i = 3;
    while (i > 0) {
        console.log(i);
        i -= 1;
    }

    console.log("BOOM!!!");

}