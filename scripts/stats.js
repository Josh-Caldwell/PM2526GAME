import NumericalStat from "./numerical_stat.js";

const stats = {
    money: new NumericalStat("money", 100),
    schizophrenia: new NumericalStat("schizophrenia", 0),
    gambling_anxiety: new NumericalStat("gambling_anxiety", 50),
}

export { stats }