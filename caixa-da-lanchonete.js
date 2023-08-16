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
        
        if (itens.length === 0){
            return "Forma de pagamento inválida!"
        }
        console.log(itens);
        total = 0;
        itens.forEach(element => {
            produtos = element.split(",")
            switch (produtos[0]) {
                case "cafe":
                    total += 3;   
                    break;
                case "suco":
                    total += 6.2;   
                    break;
                case "sanduiche":
                    total += 6.5;  
                    break;
                default:
                    break;
            }
            
        });

        if (metodoDePagamento === "credito") {
            return "R$" + total + 0.09;
        }
        returno "R$" + total;
 

    }
}

export { CaixaDaLanchonete };
