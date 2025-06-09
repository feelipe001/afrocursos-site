const cursos = [
  "Academia de Importação",
  "Análise Gráfica do Extremo Básico ao Avançado",
  "Auto-Falante Lucrativo",
  "Bora Vender em Dólar",
  "CapCut Hacker",
  "CapCut PC",
  "CapCut Pro Edição de Vídeo para Celular",
  "China Link Trading – Importação da China",
  "Como Vender no Mercado Livre + Importação + Dropshipping",
  "Cosmético e Estética",
  "Curso de Automaquiagem",
  "Curso de Inglês Completo Ci Locatelli 2.0",
  "Curso de Manicure e Pedicure Iniciante",
  "Curso de Maquiagem Online",
  "Descomplicando Logos",
  "Dominando a Pronúncia Americana",
  "Drop on Fire – Ana Jords",
  "Estética Para Motos",
  "Faturando com Achadinhos",
  "Formação Dólar",
  "Formação Técnico em Informática 2.0",
  "Frajola Oficina do Trader",
  "Fórmula Riqueza Digital (Atualizado)",
  "Geração de Renda com Fundos Imobiliários",
  "Gestão Financeira de Empresas",
  "Gestão de Tráfego e Agência Digital",
  "Inglês Fácil Seu Inglês Fluente em 120 aulas",
  "Intensivo de Inglês Piratas do Caribe",
  "Jornada Start do Drop 3.0",
  "Leilão para Iniciantes – Passo a Passo dos Leilões",
  "Mercado Livre sem Estoque",
  "Mestre dos Jingles Lucrativos",
  "Método DNA do Lucro 2.0",
  "Método PNG",
  "Método Predestinado",
  "Método Trader Consistente 2.0",
  "Ninja da Revenda Fornecedores Brasileiros de Produtos Importados",
  "Notícia Lucrativa",
  "O Importador de Times",
  "Outlier Academy (Atualizado) – Thiago Finch",
  "Perito da Importação 2.0",
  "Pump Lips 2021",
  "Reels do Zero ao Avançado",
  "Tiktok na Gringa",
  "Treinamento Rei do Black",
  "Vivendo de Ar Condicionado",
  "Vivendo de Vídeos Curtos",
  "codigo-viral",
  "metodo brabo",
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
