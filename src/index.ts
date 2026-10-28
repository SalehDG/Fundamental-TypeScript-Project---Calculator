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
            if (a2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return a1 / a2;
    }



}

console.log(hasil(10, 3, "+"));
console.log(hasil(10, 3, "-"));
console.log(hasil(10, 3, "*"));
console.log(hasil(10, 3, "/"));

try {
        console.log(hasil(10, 0, "/"));
    }catch (error) {
        console.error("Tidak ada yang bisa dibagi dengan 0");
    }
