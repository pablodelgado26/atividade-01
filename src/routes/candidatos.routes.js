import { Router } from "express"

const candidatosRoutes = Router()

let candidatos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Gabriel Barbosa",
        partido: "FLA",
        idade: 24,
        segundo: true, //concorrente ao segundo mandato
        propostas: [
            "Aumentar o número de gols",
            "Aumentar o número de títulos",
            "Aumentar o número de assistências",
        ],
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Bruno Henrique",
        partido: "FLA",
        idade: 30,
        segundo: true, //concorrente ao segundo mandato
        propostas: [
            "Aumentar o número de participação em gols",
            "Aumentar o número de titulariedade",
            "Aumentar o número de assistências",
        ],
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Arrascaeta",
        partido: "FLA",
        idade: 27,
        segundo: true, //concorrente ao segundo mandato
        propostas: [
            "Aumentar o número de assistências",
            "Aumentar o número de libertadores",
            "Aumentar o número de Melhor meio campo do Brasil",
        ],
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Pedro",
        partido: "FLA",
        idade: 24,
        segundo: true, //concorrente ao segundo mandato
        propostas: [
            "Aumentar o número de gols",
            "Aumentar o número de títulos para o mengão malvadão",
            "Aumentar o número de passes",
        ],
    },
];

candidatosRoutes.get("/", (req, res) => {
    return res.status(200)      
    .send( candidatos ) 
});

candidatosRoutes.post("/", (req, res) => {
    const{ nome, partido, idade, segundo, propostas } = req.body;

    //Validação de campos obrigatórios: nome, partido.
    if(!nome || !partido){
        return res.status(400).send({
            message: "Nome e Partido são obrigatórios!",
        });
    }

    // Validação de idade
    if(idade < 18){
        return res.status(400).send({
            message: "Candidato menor de idade!",
        });
    }

    const novoCandidato = {
        id: Math.floor(Math.random() * 1000000),
        nome,
        partido,
        idade,
        segundo,
        propostas,
    };

    candidatos.push(novoCandidato);
    return res.status(201).send({
        message: "Candidato cadastrado!",
        novoCandidato,
    });
})

candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const candidato  = candidatos.find((politico)=> politico.id == id);
    
    if(!candidato ){
        return res.status(404).send({
            message: "Candidato não encontrado!"
        });
    }
    return res.status(200).send({
        message: "Candidato encontrado!", 
        candidato,
    });
});

candidatosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const candidato = candidatos.find((politico) => politico.id == id);
    if(!candidato){
        return res.status(404).send({
            message: "Emoção não encontrada!"
        });
    }
    const { nome, cor } = req.body;
    candidato.nome = nome;
    candidato.cor = cor;
    return res.status(200).send({
        message: "Emoção atualizada!",
        candidato,
    });
});
candidatosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    const candidato = candidatos.find((politico) => politico.id == id);
    if(!candidato){
        return res.status(404).send({
            message: "Emoção não encontrada!"
        });
    }
    candidatos = candidatos.filter((politico) => politico.id != id);
    return res.status(200).send({
        message: "Emoção deletada!",
        candidato,
    });
});
export default candidatosRoutes;