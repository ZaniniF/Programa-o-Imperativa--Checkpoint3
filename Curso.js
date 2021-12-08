const Aluno = require('./Aluno')
const Estudantes = require('./Estudante')

const aluno1 = new Aluno('Charles', 2, [5,6,8,6]);
const aluno2 = new Aluno('Nick', 3, [7,7,9,10]);
const aluno3 = new Aluno ('Sophi', 1, [10,9,9,7]);

aluno1.calcularMedia();
aluno1.exibirFaltas();

// Microdesafio 3 //

const curso = {
    nomeCurso: "Dev",
    notaAprovacao: 7,
    faltasMaximas: 4,
    estudantes: aluno1, aluno2, aluno3,
    estudantesNovos: [],
    


   // Microdesafio 4 //

 addAluno (aluno) {
  this.estudantesNovos.push(aluno)
 },

    // Microdesafio 5 //

    aprovado(aluno) {
        let media = 0
        for (let i = 0; i < aluno.notas.length; i++) {
            media = media + aluno.notas[i];
        }
        media = media / aluno.notas.length

        if (aluno.faltas < curso.faltasMaximas) {
            if (media >= curso.notaAprovacao) {
                console.log(`Aluno ${aluno.nome} Aprovado!`)
            } else {
                console.log(`Aluno ${aluno.nome} Reprovado!`)
            }
        } else if (aluno.faltas == curso.faltasMaximas) {
            curso.notaAprovacao = (curso.notaAprovacao * 1.1)

            if (media >= curso.notaAprovacao) {
                console.log(`Aluno ${aluno.nome} Aprovado!`)
            } else {
                console.log(`Aluno ${aluno.nome} Reprovado!`)
            }
        } else {
            console.log(`Aluno ${aluno.nome} Reprovado!`)
        }
        
    },


    // Microdesafio 6 //

    listaAprovados(estudantes) {
        for (let i = 0; i < estudantes.length; i++) {
            this.aprovado(estudantes[i])
            
        }
    }
}

// Microdesafio 4- Execução //

curso.addAluno([{
    nome: 'Paulinha',
    faltas: 2,
    notas: [9, 8, 7, 6]
},
{
    nome: 'Wendy',
    faltas: 1,
    notas: [9, 9, 10, 5]
}]);

// Microdesafio 7

curso.listaAprovados(Estudantes);














