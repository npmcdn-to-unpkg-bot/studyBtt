/**
 * Created by MSI on 26-Jan-16.
 */
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");