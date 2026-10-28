import { simpanRiwayat, tampilkanRiwayat  } from "./history.js";

simpanRiwayat({ a1: 10, a2: 5, operator: "+" });
simpanRiwayat({ a1: 10, a2: 5, operator: "-" });    

try {
        simpanRiwayat({ a1: 10, a2: 0, operator: "/" });
    }catch (error) {
       if (error instanceof Error) {
            console.error(error.message);
        }
    }

tampilkanRiwayat();

