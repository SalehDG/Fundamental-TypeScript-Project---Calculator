export type Operator = "+" | "-" | "*" | "/";

function hasil(a1: number, a2: number, Operator: Operator): number {
    switch (Operator) {
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