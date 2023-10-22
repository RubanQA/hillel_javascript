
const userName = prompt("Enter your name:");
if (userName !== null && userName !== "") {
    const greeting = "Hello, " + userName + "! How are you? This is JavaScript world!";
    alert(greeting);
} else {
    alert("Please, enter your name!");
}