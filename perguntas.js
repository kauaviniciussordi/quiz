const perguntas = [
    {
      categoria: 'Futebol',
      pergunta: 'Qual a seleção maior campeã da copa do mundo ?',
      resposta: 'Brasil'
    },
    {
      categoria: 'Biologia',
      pergunta: 'Qual a quantidade da ossos do corpo humano ?',
      resposta: '206'
    },
    {
      categoria: 'Politica',
      pergunta: 'Qual o atual presidente da Argetina?',
      resposta: 'Javier Milei'
    },
    {
      categoria: 'Geografia',
      pergunta: ' Qual o país com a maior população mundial?',
      resposta: 'Índia'
    },
    {
      categoria: 'Matemática',
      pergunta: 'Qual é o valor de PI ?',
      resposta: 'Aproximadamente 3,14'
    },
    {
      categoria: 'História',
      pergunta: 'Em que ano ocorreu a independencia do Brasil ?',
      resposta: '1822'
    }
  ];
  
  perguntas.forEach(({ categoria, pergunta, resposta }) => criaCartao(categoria, pergunta, resposta));