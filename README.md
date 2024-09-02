# Exercicio PretaLab Semana3 Blog API

## Descrição

Nesta semana, foram apresentados conceitos de padrões de projeto, como Factory, Singleton e Strategy. Focamos na refatoração da API do blog, aplicando essas melhores práticas de desenvolvimento. Reestruturamos o código para separar responsabilidades em módulos distintos, melhorando a organização e manutenção. Utilizamos o padrão Singleton para garantir uma única instância de armazenamento de dados e o padrão Factory para a criação de textos. Essas mudanças visam tornar a API mais eficiente, escalável e fácil de atualizar.

## Funcionalidades Implementadas

- Criar um texto (POST)
- Listar todos os textos (GET)
- Listar um texto específico (GET)
- Atualizar um texto específico (PUT)
- Excluir um texto específico (DELETE)

## Depedencias 

- **Node.js e Express**: Como configurar um servidor e criar rotas.
- **UUID**: Utilizado para gerar identificadores únicos.
- **Slug**: Para criar slugs amigáveis com base nos títulos dos textos.
- **Singleton Pattern**: Implementado no `TextStorage` para garantir que haja apenas uma instância de armazenamento de textos.
  
  '''
   "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "nodemon": "^3.1.4",
    "slug": "^9.1.0",
    "uuid": "^10.0.0"
}
 '''

## Testes Realizados

Testei a API utilizando o Insomnia. Aqui estão os prints dos testes bem-sucedidos:
- **Criação de Postes**:
- ![image](https://github.com/user-attachments/assets/4f6be255-3257-4a2a-b55a-ed244695aa61)
- **Listagem de todos Postes**:
- ![image](https://github.com/user-attachments/assets/d81d09c9-8bed-4a19-be8a-3815bbd028b9)
- ![image](https://github.com/user-attachments/assets/c9ac6b6d-4364-446c-8d33-0ed3e13defaf)
  
- **Listar uma Postagem**:
- ![image](https://github.com/user-attachments/assets/48df66f2-9cc3-4b8d-bbb4-1ad5e9f1a7eb)

- **Editar uma postagem**:
- ![image](https://github.com/user-attachments/assets/cefaf37e-43b2-4a18-8f80-767f424e4b15)
- verificando que foi editado
- ![image](https://github.com/user-attachments/assets/ac071c39-d852-428d-a990-6062128f6afb)
- **Excluindo  uma postagem**:
- mostrando o antes:
- ![image](https://github.com/user-attachments/assets/d6e85722-fcab-437a-b4ab-0bc5071e4b41)
- mostrando o DELETE
- ![image](https://github.com/user-attachments/assets/d910d243-8333-4d6d-be1e-74d17183ca82)
- mostrando que foi excluido:
- ![image](https://github.com/user-attachments/assets/b2148727-1417-4fd6-9aa3-f195f18ec65e)
- se tentar excluir o mesmo ID
- ![image](https://github.com/user-attachments/assets/5d762588-9fc3-400d-ac8a-56aed2d59df5)






