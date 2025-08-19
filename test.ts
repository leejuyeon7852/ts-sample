interface User{
    name: string;
    age: number;
    home? : boolean;
}

const user1: User = {
    name: "user1",
    age: 30
}

const user2: User = {
    name: "user2",
    age: 35,
    home: true
}

console.log(user1)
console.log(user2)