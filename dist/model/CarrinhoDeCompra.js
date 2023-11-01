"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhodeCompra = void 0;
class CarrinhodeCompra {
    constructor() {
        this.produtos = [];
    }
    inserirProdutos(...produtos) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }
    quantidadedeProdutos() {
        return this.produtos.length;
    }
    valorTotal() {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}
exports.CarrinhodeCompra = CarrinhodeCompra;
//# sourceMappingURL=CarrinhoDeCompra.js.map