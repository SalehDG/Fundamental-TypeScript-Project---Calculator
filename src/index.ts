type operator = "+" | "-" | "*" | "/";

function hasil(a1: number, a2: number, operator: operator): number {
    switch (operator) {
        case "+":
            return a1 + a2;
        case "-":
            return a1 - a2;
        case "*":
            return a1 * a2;
        case "/":
            return a1 / a2;
    }
}

console.log(hasil(10, 3, "+"));
console.log(hasil(10, 3, "-"));
console.log(hasil(10, 3, "*"));
console.log(hasil(10, 3, "/"));