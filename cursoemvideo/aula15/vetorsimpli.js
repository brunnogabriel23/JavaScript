let valores = [8, 1, 7, 4, 2, 9]
valores.push(3)
valores.push(5)
valores.push(6)
valores.sort()
console.log(valores)
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}