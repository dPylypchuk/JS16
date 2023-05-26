const user1 = {
    name: `Alex`,
    age: `16`,
    orders: [
        {
            name: `Laptop`,
            price: 1000,
            count: 2
        },
        {
            name: `Phone`,
            price: 300,
            count: 3
        },
        {
            name: `TV`,
            price: 3000,
            count: 1
        },
    ]
}

const user2 = {
    name: `Felix`,
    age: `17`,
    orders: [
        {
            name: `Playstation 5`,
            price: 400,
            count: 1
        },
        {
            name: `PC`,
            price: 250,
            count: 2
        },
        {
            name: `Nintendo switch`,
            price: 300,
            count: 1
        },
    ]
}

const user1Copy = {
    ...user1,
    orders: [...user1.orders]
};

const user2Copy = {
    ...user2,
    orders: [...user2.orders]
}; 

console.log(`User 1:`, user1Copy);
console.log(`User 2:`, user2Copy);

function sum(user) {
    let total = 0;
    for (const order of user.orders){
        total += order.price * order.count;
    }
    return total
}





console.log("Orders sum of user 1:", sum(user1Copy), "$")

console.log("Orders sum of user 1:", sum(user2Copy), "$")