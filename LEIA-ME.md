# Site da Tochetto’s Barbearia

Site estático (HTML, CSS e JavaScript), sem instalação e sem custo de servidor.

## Estrutura
```
index.html        página principal
css/style.css     visual (cores, fontes, animações)
js/config.js      TODOS os dados editáveis (preços, WhatsApp, endereço...)
js/main.js        funcionamento (não precisa mexer)
images/           fotos da galeria
```

## 1. Preencha seus dados (js/config.js)
Abra `js/config.js` em qualquer editor de texto (o Bloco de Notas serve):

- **whatsapp**: `"5554999999999"` (55 + DDD + número, só números). Enquanto estiver vazio, os botões de agendar avisam que falta configurar.
- **endereco**: rua, número e bairro. Alimenta o texto e o mapa.
- **servicos**: nome, descrição e `preco` (ex.: `"R$ 00,00"`). Preço vazio mostra "Consulte". Copie uma linha para adicionar outro serviço.
- **horarios**: ex.: `{ dia: "Terça a sexta", horas: "09h às 19h" }`.
- **avaliacoes**: só avaliações reais, com autorização do cliente.
- **instagram** e **linkAvaliacoes**: opcionais.

Salve e abra o `index.html` no navegador para conferir.

## 2. Fotos
Coloque as imagens na pasta `images/` com os nomes `corte-1.jpg` a `corte-6.jpg` (ou altere a lista `galeria` no config). Sem foto, aparece um espaço reservado.

## 3. Publicar de graça
**Netlify Drop (mais fácil)**
1. Acesse app.netlify.com/drop
2. Arraste a **pasta inteira** do site para a página.
3. O link público sai na hora. Em "Site settings" você troca o nome do endereço.

**GitHub Pages**
1. Crie uma conta e um repositório público no GitHub.
2. Envie todos os arquivos (Add file > Upload files).
3. Em Settings > Pages, escolha a branch `main` e a pasta `/ (root)`. O link aparece em instantes.

**Cloudflare Pages**
1. Em dash.cloudflare.com > Workers & Pages > Create > Pages > Upload assets.
2. Envie a pasta e publique.

Para atualizar depois, edite os arquivos e envie de novo pelo mesmo método.

## 4. Domínio próprio (opcional)
Os três serviços aceitam domínio personalizado (ex.: tochettos.com.br). O registro do domínio é pago à parte; o resto continua gratuito.
