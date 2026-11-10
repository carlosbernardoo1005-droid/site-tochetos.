/* =====================================================
   CONFIGURAÇÕES DO SITE – edite apenas este arquivo.
   Campos vazios ("" ou []) ficam ocultos ou com texto neutro.
   ===================================================== */
const SITE = {
  nome: "Tochetto’s",
  cidade: "Passo Fundo, RS",

  // WhatsApp: só números, com 55 + DDD + número. Exemplo: "5554999999999"
  whatsapp: "5554999430754",
  mensagemWhatsapp: "Olá! Gostaria de agendar um horário na Tochetto’s Barbearia.",

  // Endereço completo (rua, número, bairro). Usado no texto e no mapa.
  endereco: "R. Silva Jardim, 133, Centro",

  // Links opcionais. Exemplo: "https://instagram.com/seuperfil"
  instagram: "https://instagram.com/tochettosbarbearia",
  linkAvaliacoes: "", // link do Google Meu Negócio para "Ver avaliações"

  // Horários. Exemplo: { dia: "Terça a sexta", horas: "09h às 19h" }
  horarios: [
    { dia: "Segunda a sexta", horas: "08h30 às 19h" },
    { dia: "Sábado",          horas: "08h30 às 16h" },
    { dia: "Domingo",         horas: "Fechado" }
  ],

  // Serviços. Deixe preco vazio para mostrar "Consulte". Exemplo de preço: "R$ 00,00"
  servicos: [
    { nome: "Corte",         descricao: "", preco: "" },
    { nome: "Barba",         descricao: "", preco: "" },
    { nome: "Corte + barba", descricao: "", preco: "" }
  ],

  // Fotos: coloque os arquivos na pasta images/ e confira os nomes abaixo.
  // Sem a foto, aparece um espaço reservado. Adicione ou remova linhas à vontade.
  galeria: [
    { src: "images/corte-1.jpg", legenda: "" },
    { src: "images/corte-2.jpg", legenda: "" },
    { src: "images/corte-3.jpg", legenda: "" },
    { src: "images/corte-4.jpg", legenda: "" },
    { src: "images/corte-5.jpg", legenda: "" },
    { src: "images/corte-6.jpg", legenda: "" }
  ],

  // Avaliações REAIS de clientes (com autorização). nota de 1 a 5.
  // Exemplo: { nome: "Nome do cliente", texto: "Texto da avaliação.", nota: 5 }
  avaliacoes: []
};
