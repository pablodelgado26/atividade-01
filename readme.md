### **Sistema de Cadastro de Candidatos Para um Debate Político**

### **Contexto:**

Você foi contratado para desenvolver o sistema de cadastro de candidatos para um debate político. O sistema deverá permitir que os candidatos sejam cadastrados com informações como nome, partido, idade e um breve resumo das suas propostas. Além disso, o sistema deverá permitir que os candidatos sejam listados, atualizados e excluídos. O foco será em garantir que o sistema tenha rotas bem definidas, utilize métodos HTTP adequados, e retorne os códigos de status HTTP corretos.

### **Requisitos do Sistema:**

O sistema deve atender aos seguintes requisitos:

1. **Cadastrar Candidatos:**
    - Os candidatos deverão ser cadastrados com as seguintes informações: nome, partido, idade, concorrente ao segundo mandato e propostas (resumo curto).
    - Validação: Nome e partido são obrigatórios. Idade mínima de 18 anos.
2. **Listar Candidatos:**
    - Deve ser possível listar todos os candidatos já cadastrados no sistema.
3. **Buscar Candidato Específico:**
    - Deve ser possível buscar um candidato específico pelo seu ID.
4. **Atualizar Candidato:**
    - O sistema deve permitir atualizar as informações de um candidato específico, exceto o ID.
    - Validação: Mesmas regras de cadastro, como idade mínima de 18 anos.
5. **Excluir Candidato:**
    - Deve ser possível excluir um candidato específico do sistema, buscando-o pelo ID.

### **Instruções:**

1. **Defina as Rotas:**
    - Para cada funcionalidade, crie uma rota específica e defina qual o método HTTP adequado para cada ação. As rotas podem seguir o padrão: `POST /candidatos`, `GET /candidatos`, `GET /candidatos/:id`, `PUT /candidatos/:id`, `DELETE /candidatos/:id`.
2. **Escolha os Métodos de Requisição:**
    - **POST**: Para cadastrar um novo candidato.
    - **GET**: Para listar todos os candidatos e buscar um candidato específico.
    - **PUT**: Para atualizar as informações de um candidato.
    - **DELETE**: Para remover um candidato do sistema.
3. **Validação:**
    - Verifique se todos os campos obrigatórios (nome, partido) estão preenchidos.
    - Verifique se a idade do candidato é maior ou igual a 18 anos.
4. **Códigos de Status HTTP:**
    - **200 OK**: Operações de listagem, busca, atualização e exclusão bem-sucedidas.
    - **201 Created**: Para indicar que o candidato foi cadastrado com sucesso.
    - **400 Bad Request**: Quando há um erro de validação (ex: idade abaixo de 18 anos, campos obrigatórios não preenchidos).
    - **404 Not Found**: Se o candidato não for encontrado na busca ou na tentativa de atualização/exclusão.
    - **500 Internal Server Error**: Para capturar quaisquer outros erros inesperados no servidor.

---

### **Dicas:**

- Use o método `POST` para criar novos candidatos e o método `GET` para listar e buscar candidatos.
- Use `PUT` para atualizar e `DELETE` para excluir candidatos.
- Aplique a validação de idade e dos campos obrigatórios dentro das funções de criação e atualização.
- Retorne os códigos de status adequados, como `201 Created` para um novo candidato ou `404 Not Found` se um ID não for encontrado.