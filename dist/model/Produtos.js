"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(_nome, _preco) {
        this.nome = _nome;
        this.preco = _preco;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getNome() {
        return this.nome;
    }
    setPreco(_preco) {
        this.preco = _preco;
    }
    getPreco() {
        return this.preco;
    }
}
exports.Produto = Produto;
//# sourceMappingURL=Produtos.js.map