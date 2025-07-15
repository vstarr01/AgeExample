const age=parseInt(prompt("Enter your age:"));
switch (true){
    case age>=65:
        alert("You are a senior citizen");
        break;
    case age>=18:
        alert("You are an adult");
        break;
    default:
        alert("You are a minor");
}