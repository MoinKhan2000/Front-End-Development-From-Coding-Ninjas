//Complete the createUserObjects function
//Do not alter the starter Code
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUserObjects(ids, names, images) {
    let users = [];
    users = ids.map((key, index) => {
        return { id: ids[index], name: names[index], image: images[index] };
    })
    return users
}

createUserObjects(ids, names, images)