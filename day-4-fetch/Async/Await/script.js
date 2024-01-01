

async function myFunctionAsync() {
    return "hello";
}

function myFunction() {
    return Promise.resolve("Hello");
}

myFunctionAsync();

myFunction();

