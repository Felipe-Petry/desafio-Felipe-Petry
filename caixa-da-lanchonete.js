class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!"
        }

        
        // Lógica para verificações de itens extras
        for (let i = 0; i < itens.length; i++) {
            const itensVerificados = itens[i].split(",");
            if (itensVerificados[0] === "chantily" && !itens.includes("cafe,1")) {
                itens.splice(i, 1); // Remove o item extra "chantily"
                return 'Item extra não pode ser pedido sem o principal';
            }
            else if (itensVerificados[0] === "queijo" && !itens.includes("sanduiche,1")){
                return 'Item extra não pode ser pedido sem o principal';
            }
        }

         //formas de pagamento    

        var total = retornaValorTotalItem(itens)
        
        if (metodoDePagamento === "dinheiro" && total === 0) {
            return "Quantidade inválida!";
        }
        else if (metodoDePagamento === "dinheiro") {
                return "R$ " + (total * 0.95).toFixed(2).replace(".", ",");
        }

        else if (metodoDePagamento === "credito") {
            return "R$ " + (total * 1.03).toFixed(2).replace(".", ",");
        }
        else if (metodoDePagamento === "debito" && total === 0) {
            return ;
        }
        else if (metodoDePagamento === "debito") {
            return "R$ " + total.toFixed(2).replace(".", ",");
        }
        else {
            return"Forma de pagamento inválida!"
        }


    }

}

function retornaValorTotalItem(itens) {
    var total = 0; //conferir o total dos itens e suas verificações         
    
    itens.forEach(posicaoItem => {
        var produtos = posicaoItem.split(",")
    switch (produtos[0]) {
        case "cafe":
            total += 3.0 * produtos[1];
            break;
        case "chantily":
            
            total += 1.50 * produtos[1];
            break;
        case "suco":
            total += 6.2 * produtos[1];
            break;
        case "sanduiche":
            total += 6.5 * produtos[1];
            break;
        case "queijo":
           
            total += 2.00 * produtos[1];
            break;
        case "salgado":
            total += 7.25 * produtos[1];
            break;
        case "combo1":
            total += 9.50 * produtos[1];
            break;
        case "combo2":
            total += 7.50 * produtos[1];
            break;
        default:
            "Item inválido!"
            break;
    }
})
    return total 

}




export { CaixaDaLanchonete };