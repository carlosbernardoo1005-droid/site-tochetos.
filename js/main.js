(() => {
  const S = SITE;
  const $ = (s) => document.querySelector(s);
  const el = (tag, cls, txt) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt) e.textContent = txt;
    return e;
  };
  document.documentElement.classList.add("js");
  document.title = `${S.nome} Barbearia | ${S.cidade}`;
  document.querySelectorAll("[data-nome]").forEach((n) => (n.textContent = S.nome));
  document.querySelectorAll("[data-cidade]").forEach((n) => (n.textContent = S.cidade));
  $("#ano").textContent = new Date().getFullYear();

  /* Aviso rápido na tela */
  const toast = $("#toast");
  let tt;
  const aviso = (msg) => {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(tt);
    tt = setTimeout(() => toast.classList.remove("show"), 4500);
  };

  /* WhatsApp */
  const num = (S.whatsapp || "").replace(/\D/g, "");
  const bindWa = (a, msg) => {
    if (num) {
      a.href = `https://wa.me/${num}?text=${encodeURIComponent(msg || S.mensagemWhatsapp)}`;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        aviso("Configure o número do WhatsApp em js/config.js.");
      });
    }
  };
  document.querySelectorAll("[data-whatsapp]").forEach((a) => bindWa(a));

  /* Serviços */
  const lista = $("#lista-servicos");
  S.servicos.forEach((s, i) => {
    const li = el("li", "servico reveal");
    li.style.setProperty("--d", `${i * 0.08}s`);
    const info = el("div", "servico-info");
    info.append(el("h3", "", s.nome));
    if (s.descricao) info.append(el("p", "", s.descricao));
    const preco = el("span", "preco", s.preco || "Consulte");
    const a = el("a", "btn btn-sm btn-linha", "Agendar");
    a.href = "#";
    bindWa(a, `Olá! Gostaria de agendar: ${s.nome}.`);
    li.append(info, preco, a);
    lista.append(li);
  });

  /* Galeria + lightbox */
  const grade = $("#galeria-grade");
  const box = $("#lightbox");
  const boxImg = $("#lightbox-img");
  S.galeria.forEach((g, i) => {
    const b = el("button", "foto reveal");
    b.type = "button";
    b.style.setProperty("--d", `${(i % 3) * 0.08}s`);
    const img = new Image();
    img.loading = "lazy";
    img.alt = g.legenda || `Foto de corte ${i + 1}`;
    img.src = g.src;
    img.addEventListener("error", () => {
      img.remove();
      b.classList.add("vazia");
      b.disabled = true;
      b.append(el("span", "", "Adicione sua foto"));
    });
    b.append(img);
    b.addEventListener("click", () => {
      boxImg.src = img.src;
      boxImg.alt = img.alt;
      box.showModal();
    });
    grade.append(b);
  });
  $("#lightbox-x").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });

  /* Avaliações */
  const av = $("#lista-avaliacoes");
  if (S.avaliacoes.length) {
    S.avaliacoes.forEach((r, i) => {
      const c = el("figure", "avaliacao reveal");
      c.style.setProperty("--d", `${(i % 3) * 0.08}s`);
      const nota = Math.max(1, Math.min(5, Number(r.nota) || 5));
      const est = el("div", "estrelas", "★".repeat(nota) + "☆".repeat(5 - nota));
      est.setAttribute("aria-label", `${nota} de 5 estrelas`);
      c.append(est, el("blockquote", "", r.texto), el("figcaption", "", r.nome));
      av.append(c);
    });
  } else {
    av.append(el("p", "vazio reveal", "As avaliações dos clientes aparecerão aqui."));
  }
  if (S.linkAvaliacoes) {
    const a = el("a", "btn btn-linha reveal", "Ver avaliações no Google");
    a.href = S.linkAvaliacoes; a.target = "_blank"; a.rel = "noopener";
    av.after(a);
  }

  /* Localização, horários e mapa */
  $("#endereco").textContent = S.endereco ? `${S.endereco}, ${S.cidade}` : S.cidade;
  const consulta = S.endereco
    ? `${S.endereco}, ${S.cidade}`
    : `${S.nome} Barbearia, ${S.cidade}`;
  const q = encodeURIComponent(consulta);
  $("#mapa").src = `https://www.google.com/maps?q=${q}&output=embed`;
  $("#btn-rota").href = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  const hs = $("#horarios");
  if (S.horarios.length) {
    S.horarios.forEach((h) => {
      const r = el("div", "hora");
      r.append(el("span", "", h.dia), el("span", "", h.horas));
      hs.append(r);
    });
  } else {
    hs.append(el("p", "vazio", "Consulte os horários de atendimento pelo WhatsApp."));
  }

  if (S.instagram) {
    const ig = $("#link-instagram");
    ig.href = S.instagram; ig.hidden = false;
  }

  /* Menu mobile */
  const topo = $("#topo"), btn = $("#menu-btn");
  const fechar = () => { topo.classList.remove("aberto"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => {
    const aberto = topo.classList.toggle("aberto");
    btn.setAttribute("aria-expanded", String(aberto));
  });
  document.querySelectorAll("#menu a").forEach((a) => a.addEventListener("click", fechar));

  /* Cabeçalho ao rolar */
  const rolar = () => topo.classList.toggle("solido", window.scrollY > 40);
  rolar();
  window.addEventListener("scroll", rolar, { passive: true });

  /* Entrada suave ao rolar */
  const alvos = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.15 });
    alvos.forEach((a) => io.observe(a));
  } else alvos.forEach((a) => a.classList.add("in"));

  /* Lembrete para quem edita o site */
  const falta = [];
  if (!num) falta.push("whatsapp");
  if (!S.endereco) falta.push("endereco");
  if (!S.horarios.length) falta.push("horarios");
  if (!S.avaliacoes.length) falta.push("avaliacoes");
  if (falta.length) console.info("[Tochetto’s] Falta preencher em js/config.js:", falta.join(", "));
})();
