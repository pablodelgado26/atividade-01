import { Router } from "express"

const candidatosRoutes = Router()

let candidatos = [
    {
        id: Math.random() * 1000000,
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
        id: Math.random() * 1000000,
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
        id: Math.random() * 1000000,
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
        id: Math.random() * 1000000,
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

// Rota para criar uma nova emoção
candidatosRoutes.post("/", (req, res) => {
    const{ nome, cor } = req.body;
    const novaEmocao = {
        id: candidatos.length + 1,
        nome: nome,
        cor: cor
    }
    candidatos.push(novaEmocao)
    return res.status(201)
    .send( novaEmocao ) 
});

candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const emocao  = candidatos.find((emotion)=> emotion.id == id)
    if(!emocao ){
        return res.status(404).send({
            message: "Emoção não encontrada!"
        });
    }
    return res.status(200).send({
        message: "Emoção encontrada", 
        emocao,
    });
});

candidatosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const emocao = candidatos.find((emotion) => emotion.id == id);
    if(!emocao){
        return res.status(404).send({
            message: "Emoção não encontrada!"
        });
    }
    const { nome, cor } = req.body;
    emocao.nome = nome;
    emocao.cor = cor;
    return res.status(200).send({
        message: "Emoção atualizada!",
        emocao,
    });
});
candidatosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    const emocao = candidatos.find((emotion) => emotion.id == id);
    if(!emocao){
        return res.status(404).send({
            message: "Emoção não encontrada!"
        });
    }
    candidatos = candidatos.filter((emotion) => emotion.id != id);
    return res.status(200).send({
        message: "Emoção deletada!",
        emocao,
    });
});
export default candidatosRoutes;