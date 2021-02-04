function somarRenda(...meses: number[]): number {

    return meses.
        reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);

}

console.log(somarRenda(880, 1000, 642, 400, 2000, 1586));

