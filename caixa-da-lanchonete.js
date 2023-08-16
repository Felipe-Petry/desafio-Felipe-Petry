class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        
        var total = retornaValorTotalItem(itens)
        
        if (metodoDePagamento === "Dinheiro"){  ///formas de pagamento            
                   
            return "R$ " + total * 0.95;                        
        }           
        else if (metodoDePagamento === "credito") {
                return "R$" + total * 1.03;                
                }
            
        else if (metodoDePagamento === "debito" ){
                console.log("Você ira pagar total " + total)
            }
        else{
            console.log("forma de pagamento inválida")
            }
        }       
    }

    
    retornaValorTotalItem(itens);{ 
        var total = 0; //conferir o total dos itens e suas verificações
        if (total.sum(itens) ===0){
            console.log("Quantidade inválida")
        }       
        itens.forEach(posicaoIten => {
            var produtos = posicaoIten.split(",")})
            switch (produtos[0])  {
                case "cafe":
                    total += 3.0;   
                    break;
                case "chantily":
                    total += 1.50;
                    break;
                case "suco":
                    total += 6.2;   
                    break;
                case "sanduiche":
                    total += 6.5;  
                    break;
                case "queijo":
                    total += 2.00
                    break;
                case "salgado":
                    total += 7.25
                    break;
                case "combo1":
                    total += 9.50
                    break;
                case "combo2":
                    total += 7.50
                    break;
                
                default:
                    "Não há itens no carrinho de compra!"
                    break;
        }
            return total , itens
    }
    
    verificarItens(itens); {
        itens.forEach(verificacao => {
            var itemVerificado = verificacao.split(",");
            if (itemVerificado.includes("chantily")) {
                if (!itens.includes("cafe")) {
                    console.log("Para adicionar chantily você deve pedir um café.");
                }
            } else if (itemVerificado.includes("queijo")) {
                if (!itens.includes("sanduiche,1")) {
                    console.log("Para adicionar queijo você deve pedir um sanduíche.");
                }
            } else {
                console.log("Item extra não pode ser pedido sem o principal");
            }
        });
    }

export { CaixaDaLanchonete } ;
