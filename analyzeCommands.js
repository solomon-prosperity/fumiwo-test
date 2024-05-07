const analyzeCommands = (commands) => {
    if (!Array.isArray(commands)) throw new Error("input must be an Array");

    let result = {};

    for (let i = 0; i < commands.length; i += 1) {
        const products = commands[i].products;
        for (const key in products) {
            if (products.hasOwnProperty(key)) {
                const productKey = key;
                const quantity = products[key];
                if (!result[productKey]) {
                    result[productKey] = 0;
                }
                result[productKey] += quantity;
            }
        }
    }

    return result;
};

const commands = [
    {
        _id: "1",
        date: 1234566789900,
        totalPrice: 475,
        products: {
            refA: 3,
            refB: 5
        }
    },
    {
        _id: "1",
        date: 1234566789900,
        totalPrice: 475,
        products: {
            refB: 4
        }
    },
];

console.log(analyzeCommands(commands));
