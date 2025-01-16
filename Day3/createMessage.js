function createMessage(defMess,...names)
{
    return names.map(name => `${defMess} ${name}`);

}

console.log(createMessage("Hello", "John", "Alice", "Bob"));