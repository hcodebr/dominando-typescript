"use strict";
function somarRenda(...meses) {
    return meses.
        reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
console.log(somarRenda(880, 1000, 642, 400, 2000, 1586));
//# sourceMappingURL=rest_parameters.js.map