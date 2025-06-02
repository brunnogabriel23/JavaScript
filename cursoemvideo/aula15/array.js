 let num = [5, 8, 2, 9, ]
 num.push(1)
 num.push(3)
 num.push(4)
 num.push(6)
 num.push(7)
 num.sort()
 console.log(num)
 console.log(`Nosso vetor tem ${num.length} posições`)
 console.log(`O número 4 tem o valor de ${num[3]}`)
 let pos = num.indexOf(9)
 if (pos == -1) {
    console.log(`O valor não foi encontrado`)
 } else { 
    console.log(`O valor foi encontrada na posição ${pos}`)
}
