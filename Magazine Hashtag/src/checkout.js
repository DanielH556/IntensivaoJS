import { apagarDoLocalStorage, desenharProdutoCarrinhoSimples, lerLocalStorage, salvarLocalStorage } from "./utilidades";

function desenharProdutosCheckout() {
   const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
   const articleClasses = ["flex", "bg-stone-200", "rounded-lg", "p-1", "relative", "mb-2"];

   for (const idProduto in idsProdutoCarrinhoComQuantidade) {
      desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
   }
}

function finalizarCompra(evento) {
   evento.preventDefault();

   const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
   if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
      return;
   }

   const dataAtual = new Date();
   const pedidoFeito = {
      dataPedido: dataAtual,
      pedido: idsProdutoCarrinhoComQuantidade
   }

   const historicoDePedidos = lerLocalStorage("historico") ?? [];
   const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos];

   salvarLocalStorage("historico", historicoDePedidosAtualizados);
   apagarDoLocalStorage("carrinho");

   window.location.href = window.location.origin + "/pedidos.html";
}

document.addEventListener("submit", (evt) => finalizarCompra(evt));

desenharProdutosCheckout();