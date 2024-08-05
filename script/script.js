//Desenvolva sua lógica aqui utlizando o método de array reduce e verifique o resultado no console do seu navegador.

//1) Vamos começar de uma maneira bem simples. Crie uma função que some todos os números contidos dentro do array [20, 13, 50, 36, 97].
const numbers = [20, 13, 50, 36, 97];

function sumNumbers(array) {
  let x = array.reduce((accumulator,element) => element + accumulator)
  return x;
}
console.log(sumNumbers(numbers));

//2) Agora utilizaremos o nosso array de produtos. Crie uma função que percorra todos os elementos desse array e retorne o valor total de todos os produtos do carrinho.
function totalProducts(array) {
  let x = array.reduce((accumulator,element) => element.price + accumulator,0)
  return x;
}
console.log(totalProducts(products));

//3) Vamos deixar mais interessante? Utilizando o nosso array products, crie uma função que filtre apenas os produtos com tamanho GG e retorne a soma dos preços desses produtos.
function totalProductsSize(array) {
  let y = array.filter(element => {
    return element.size == "GG"
  })
  let x = y.reduce((accumulator,element) => element.price + accumulator,0)
  return x;
}
console.log(totalProductsSize(products));

//DESAFIO
//4) Crie uma função que filtre os elementos em promoção e aplique 50% de desconto no preço deles. Após isso, some o valor total desses produtos.
function totalProductsSale(array) {
  let y = array.filter(element =>{
    return element.sale == true
  })
  let x = y.reduce((accumulator,element) => element.price/2 + accumulator,0);
  return x;
}
console.log(totalProductsSale(products));
