//   | codigo    | descrição                   | valor   |
//   |-----------|-----------------------------|---------|
//   | cafe      | Café                        | R$ 3,00 |
//   | chantily  | Chantily (extra do Café)    | R$ 1,50 |
//   | suco      | Suco Natural                | R$ 6,20 |
//   | sanduiche | Sanduíche                   | R$ 6,50 |
//   | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
//   | salgado   | Salgado                     | R$ 7,25 |
//   | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
//   | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |


class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        
        total = 0
        
        if (metodoDePagamento == "Dinheiro"){ //pegando só dinheiro
            itens.forEach(item => { //passando por cada item           
                arrayItem = item.split(",") // separando as virgulas
            //valorItem = retornaValorItem(arrayItem[0]) * arrayItem[1] //retornando valor do item
            total += valorItem * 0.95 //somando todos os itens           
            return "voçe vai pagar " + total;                        
            });
        
            
            if (metodoDePagamento === "credito") {
                return "R$" + total * 1.03;
                
                }
            
            else if (metodoDePagamento === "debito" ){
                console.log("voce ira pagar total " + total)

            }
            return "R$" + total;      
        
        }

        return "R$ " + total;
    }

    
    retornaValorItem(itens){  total = 0;
        itens.forEach(posicaoIten => {
            produtos = posicaoIten.split(",")})
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
                "Quantidade inválida"
                break;
    }
    verificarItem(itens){
        itens.forEach((verificacao, index) => {
            itemVerificado = verificacao.split(",");
            if (itemVerificado.includes("chantily")) {
              if (!itens.includes("cafe,1")) {
                itens.splice(index, 2); // Remove "chantily" e a quantidade associada
                console.log("Para adicionar chantily você deve pedir um café.");
              }
            } else {
              console.log("para adicionar chantily você deve pedir um café");
            }
          });
            
            itens.forEach((verificacao, index) => {
                itemVerificado = verificacao.split(",");
                if (itemVerificado.includes("queijo")) {
                  if (!itens.includes("sanduiche,1")) {
                    itens.splice(index, 2); // Remove "chantily" e a quantidade associada
                    console.log("Para adicionar chantily você deve pedir um café.");
                  }
                } else {
                  console.log("para adicionar chantily você deve pedir um café");
                }
              });  
            }
        } //Retorna o valor de cada produto
      
        
    }

export { CaixaDaLanchonete } ;
