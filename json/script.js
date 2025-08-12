const objs = [
    {
        "nome": "Brunno" ,
        "sexo" : "Masculino" ,
        "idade" : 19 ,
        "trabalhando" : true ,
        "detalhes_profissao" : {
          "profissão" : "Estudante" ,
          "curso" : "Analise e Desenvolvimento de Sistemas"  
        } ,
        "hobs" : [
            "Programar",
            "Jogar",
            "Futebol"
        ]
     }
        
]

// JSON 
// converter um objeto para json

const jsonData = JSON.stringify(objs)
console.log(jsonData)  