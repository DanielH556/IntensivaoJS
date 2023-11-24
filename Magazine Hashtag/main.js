import { inicializarCarrinho } from "./src/menuCarrinho";
import { renderizarCatalogo } from "./src/cartaoProduto";
import { atualizarPrecoCarrinho, renderizarProdutosNoCarrinho } from "./src/menuCarrinho";
import { inicializarFiltros } from "./src/filtrosCatalogo";

renderizarCatalogo();
inicializarCarrinho();
inicializarFiltros();
renderizarProdutosNoCarrinho();
atualizarPrecoCarrinho();