// Microdesafio 1 //

class Aluno {
    constructor(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;

       // console.log(`O nome do aluno é ${this.nome}, sua quantidade de faltas é de ${this.faltas} e suas notas até o momento são: ${this.notas}`) //
    }

    // Microdesafio  2 //

    calcularMedia() {
        let total = 0;
        for (let i = 0; i < this.notas.length; i++) {
            total = total + this.notas[i];
        }
        total = total / this.notas.length
       // console.log(`A média do aluno(a) ${this.nome} é ${total}`) //
        }
    exibirFaltas() {
        const faltasAluno = this.faltas + 1;
       // console.log(`Faltas atualizadas do aluno(a) ${this.nome} é ${faltasAluno}`) //
    }
}

module.exports = Aluno;

