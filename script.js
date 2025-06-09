const cursos = [
  "Academia de Importação",
  "Análise Gráfica do Extremo Básico ao Avançado",
  "Auto-Falante Lucrativo",
  "Bora Vender em Dólar",
  "CapCut Hacker",
  "Clube de Marketing Digital",
  "Como Criar Produtos Digitais",
  "Comunicação Magnética",
  "Copywriting Afroimpactante",
  "Criando Produtos com ChatGPT",
  "Desbloqueio de Autoestima Preta",
  "Designer Criativo com Canva",
  "Desperte sua Autoconfiança",
  "Destrave sua Criatividade",
  "Domine Seu Estilo com IA",
  "Dropshipping da Liberdade",
  "Empreendedor Autêntico",
  "Excelência Preta",
  "Experiência do Cliente",
  "FBA Amazon",
  "Faz Dinheiro com Pix",
  "Fórmula da Persuasão Negra",
  "Funis Magnéticos",
  "Gestão Emocional para Negócios",
  "IA Designer",
  "Influência e Oratória",
  "Instagram do Zero",
  "Liderança Preta",
  "Linguagem Corporal no Digital",
  "Lucre com Audiobooks",
  "Mentalidade Milionária Preta",
  "Mercado Livre para Iniciantes",
  "Método Instagram Milionário",
  "Mindset de Vendas",
  "Negócios com Propósito",
  "Negócio de Infoproduto",
  "Neuromarketing para Iniciantes",
  "Persuasão de Impacto",
  "Pitch Magnético",
  "Plataformas para Monetizar",
  "Produtividade Sem Culpa",
  "Redes Sociais para Negócios",
  "Renda Passiva com Kiwify",
  "Segredos do YouTube",
  "Seu Negócio Digital em 7 Dias",
  "Storytelling Estratégico",
  "Tráfego para Começar a Vender",
  "Vendas de Alto Valor",
  "Venda sem Aparecer",
  "YouTube Magnético"
];

const container = document.getElementById('cursos-container');

cursos.forEach(nome => {
  const card = document.createElement('div');
  card.className = 'curso-card';
  card.innerHTML = `
    <img src="imagens/cursos/${nome}.jpg" alt="${nome}" class="curso-img">
    <h3 class="curso-titulo">${nome}</h3>
    <a href="https://t.me/afrocursos_bot" target="_blank" class="botao-comprar">Acessar via Telegram</a>
  `;
  container.appendChild(card);
});
