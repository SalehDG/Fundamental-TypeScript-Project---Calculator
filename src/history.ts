import { hasil, type Operator } from "./engine.js";

export type Riwayat = {
    a1: number;
    a2: number;
    operator: Operator;
    hasil: number;
};

const riwayat: Riwayat[] = [];

export function simpanRiwayat({
    a1,
    a2,
    operator
}: {
    a1: number;
    a2: number;
    operator: Operator;
}): void {
    const nilaiHasil = hasil(a1, a2, operator);

    riwayat.push({
        a1,
        a2,
        operator,
        hasil: nilaiHasil
    });
}

export function tampilkanRiwayat(): void {
    for (const item of riwayat) {
        console.log(
            `${item.a1} ${item.operator} ${item.a2} = ${item.hasil}`
        );
    }
}