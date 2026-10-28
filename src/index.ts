function tambah(a: number, b: number): number {
    return a + b;
}

function kurang(a: number, b: number): number {
    return a - b;
}

function kali(a: number, b: number): number {
    return a * b;
}  

function bagi(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Pembagian dengan nol tidak diperbolehkan.");
    }
    return a / b;
}

console.log(tambah(10, 3));
console.log(kurang(5, 7));
console.log(kali(4, 6));
console.log(bagi(8, 2));