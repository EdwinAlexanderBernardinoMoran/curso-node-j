// .js -> por defecto utiliza CommonJs
// .mjs -> para utilizar ES Modules
// .cjs -> por defecto utiliza CommonJs

import { sum, sub, mul } from "./sum.mjs";

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));


