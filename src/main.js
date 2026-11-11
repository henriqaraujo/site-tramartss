/* TRAMÁRTSS | fonte do js/app.js (gerado com esbuild) */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Group, Mesh,
  MeshStandardMaterial, TubeGeometry, CatmullRomCurve3, Vector3,
  HemisphereLight, DirectionalLight, CanvasTexture, CylinderGeometry,
  TorusGeometry, CircleGeometry, ShadowMaterial, PCFSoftShadowMap,
  RepeatWrapping, SRGBColorSpace, ACESFilmicToneMapping
} from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const isDesktop = () => matchMedia("(min-width: 900px)").matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

/* ---------- rolagem suave (só mouse) ---------- */
let lenis = null;
if (!reduce && finePointer) {
  lenis = new Lenis({ anchors: true, lerp: 0.09 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- nav ---------- */
const nav = $("#nav");
const sentinel = $(".hero");
if (nav && sentinel) {
  new IntersectionObserver((e) => nav.classList.toggle("is-solid", !e[0].isIntersecting),
    { rootMargin: "-68px 0px 0px 0px" }).observe(sentinel);
}
const btn = $("#menuBtn");
const menu = $("#menu");
if (btn && menu) {
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Fechar" : "Menu";
    document.body.style.overflow = open ? "hidden" : "";
  };
  btn.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));
}

/* ---------- foto ampliada ---------- */
const lb = $("#lightbox");
const lbImg = $("#lightboxImg");
const openPhoto = (img) => {
  if (!lb || !lb.showModal) return;
  lbImg.src = img.currentSrc || img.src;
  lbImg.alt = img.alt;
  lb.showModal();
  if (lenis) lenis.stop();
};
if (lb) {
  $("#lightboxClose").addEventListener("click", () => lb.close());
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("close", () => { if (lenis) lenis.start(); });
}
$$(".g").forEach((b) => b.addEventListener("click", () => openPhoto($("img", b))));


/* ---------- utilitários: texto em letras / palavras (preserva <em> e fotos na frase) ---------- */
function splitChars(el) {
  el.setAttribute("aria-label", el.textContent.trim().replace(/\s+/g, " "));
  const walk = (node) => {
    Array.from(node.childNodes).forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
          const w = document.createElement("span");
          w.className = "word";
          w.setAttribute("aria-hidden", "true");
          Array.from(part).forEach((c) => {
            const ch = document.createElement("span");
            ch.className = "char";
            ch.textContent = c;
            w.appendChild(ch);
          });
          frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(el);
  return $$(".char", el);
}
function splitWords(el) {
  el.setAttribute("aria-label", el.textContent.trim().replace(/\s+/g, " "));
  Array.from(el.childNodes).forEach((n) => {
    if (n.nodeType !== 3) return;
    const frag = document.createDocumentFragment();
    n.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
      const w = document.createElement("span");
      w.className = "w";
      w.setAttribute("aria-hidden", "true");
      w.textContent = part;
      frag.appendChild(w);
    });
    n.replaceWith(frag);
  });
  return $$(".w", el);
}

/* =====================================================================
   TRAMA 3D em tons claros (seção de materiais)
   ===================================================================== */
const weave3d = (() => {
  const canvas = $("#stage");
  const host = $(".weave__sticky");
  if (!canvas || !host) return null;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  } catch (e) { return null; }
  const BG = new Color("#e8ede6");
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  const scene = new Scene();
  scene.background = BG;
  const camera = new PerspectiveCamera(32, 1, 0.1, 80);
  scene.add(new HemisphereLight("#ffffff", "#b9c7bb", 1.35));
  const key = new DirectionalLight("#fff4e2", 2.6);
  key.position.set(3.5, 7, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(1536, 1536);
  key.shadow.camera.left = -4; key.shadow.camera.right = 4;
  key.shadow.camera.top = 4; key.shadow.camera.bottom = -4;
  key.shadow.radius = 5; key.shadow.bias = -0.0004;
  scene.add(key);
  const fill = new DirectionalLight("#d7e8dc", 0.8);
  fill.position.set(-5, 3, 2);
  scene.add(fill);

  /* chão: só a sombra da peça sobre o fundo verde claro */
  const floor = new Mesh(new CircleGeometry(30, 48), new ShadowMaterial({ opacity: 0.2, color: "#1e3a2e" }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.02;
  floor.receiveShadow = true;
  scene.add(floor);

  /* textura de torção da corda (bump) e de veios da madeira */
  const tc = document.createElement("canvas");
  tc.width = tc.height = 64;
  const g = tc.getContext("2d");
  g.fillStyle = "#777"; g.fillRect(0, 0, 64, 64);
  g.strokeStyle = "#fff"; g.lineWidth = 9;
  for (let i = -64; i < 128; i += 21) { g.beginPath(); g.moveTo(i, 64); g.lineTo(i + 64, 0); g.stroke(); }
  g.strokeStyle = "#111"; g.lineWidth = 3;
  for (let i = -54; i < 128; i += 21) { g.beginPath(); g.moveTo(i, 64); g.lineTo(i + 64, 0); g.stroke(); }
  const twist = new CanvasTexture(tc);
  twist.wrapS = twist.wrapT = RepeatWrapping;
  twist.repeat.set(1, 26);

  const wc = document.createElement("canvas");
  wc.width = 256; wc.height = 64;
  const w2 = wc.getContext("2d");
  w2.fillStyle = "#b07a45"; w2.fillRect(0, 0, 256, 64);
  for (let i = 0; i < 90; i++) {
    w2.strokeStyle = `rgba(${90 + Math.random() * 40},${50 + Math.random() * 30},20,${0.08 + Math.random() * 0.18})`;
    w2.lineWidth = 0.6 + Math.random() * 1.6;
    const y = Math.random() * 64;
    w2.beginPath(); w2.moveTo(0, y); w2.bezierCurveTo(80, y + (Math.random() - 0.5) * 6, 170, y + (Math.random() - 0.5) * 6, 256, y); w2.stroke();
  }
  const grain = new CanvasTexture(wc);
  grain.colorSpace = SRGBColorSpace;

  const ropeMat = (color) => new MeshStandardMaterial({ color, roughness: 0.88, metalness: 0, bumpMap: twist, bumpScale: 1.4 });
  const ropeDark = ropeMat("#2f3a35");
  const ropeAlt = ropeMat("#3d4a44");
  const alu = new MeshStandardMaterial({ color: "#39433f", roughness: 0.5, metalness: 0.35 });
  const teakA = new MeshStandardMaterial({ color: "#e0b27a", map: grain, roughness: 0.55 });
  const teakB = new MeshStandardMaterial({ color: "#cf9a60", map: grain, roughness: 0.55 });

  /* a peça: mesa de centro de tricô náutico com tampo de madeira, em camadas */
  const piece = new Group();
  scene.add(piece);
  const base = new Group(), body = new Group(), top = new Group();
  piece.add(base, body, top);
  const profile = (t) => 0.92 + 0.14 * Math.sin(Math.PI * t);   // barril levemente abaulado
  const H = 1.05;

  // alumínio: aro inferior, base e pés
  const ringB = new Mesh(new TorusGeometry(0.9, 0.045, 14, 72), alu);
  ringB.rotation.x = Math.PI / 2; ringB.position.y = 0.05; ringB.castShadow = true;
  const disc = new Mesh(new CylinderGeometry(0.86, 0.86, 0.04, 56), alu);
  disc.position.y = 0.03; disc.castShadow = true;
  base.add(ringB, disc);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const foot = new Mesh(new CylinderGeometry(0.05, 0.06, 0.07, 16), alu);
    foot.position.set(Math.cos(a) * 0.72, -0.015, Math.sin(a) * 0.72);
    base.add(foot);
  }

  // corda: fios verticais que alternam para dentro e para fora, como no trançado
  const strands = [];
  const NS = isDesktop() ? 72 : 56;
  for (let i = 0; i < NS; i++) {
    const a = (i / NS) * Math.PI * 2;
    const pts = [];
    for (let k = 0; k <= 26; k++) {
      const t = k / 26;
      const r = profile(t) + (i % 2 ? 1 : -1) * 0.028 * Math.cos(t * Math.PI * 2 * 3.5);
      pts.push(new Vector3(Math.cos(a) * r, 0.08 + t * H, Math.sin(a) * r));
    }
    const geo = new TubeGeometry(new CatmullRomCurve3(pts), 52, 0.044, 8, false);
    const mesh = new Mesh(geo, i % 2 ? ropeDark : ropeAlt);
    mesh.castShadow = true;
    mesh.userData.count = geo.index.count;
    geo.setDrawRange(0, 0);
    body.add(mesh);
    strands.push(mesh);
  }
  // duas voltas de corda por fora, para fechar o trançado
  [0.3, 0.62].forEach((t) => {
    const r = new Mesh(new TorusGeometry(profile(t) + 0.05, 0.032, 10, 90), ropeDark);
    r.rotation.x = Math.PI / 2; r.position.y = 0.08 + t * H; r.castShadow = true;
    body.add(r);
  });

  // alumínio: aro superior + tampo de madeira em raios
  const ringT = new Mesh(new TorusGeometry(0.93, 0.05, 14, 72), alu);
  ringT.rotation.x = Math.PI / 2; ringT.position.y = 0.08 + H + 0.02; ringT.castShadow = true;
  top.add(ringT);
  const SL = 22, gap = 0.012;
  for (let i = 0; i < SL; i++) {
    const th = (Math.PI * 2) / SL;
    const s = new Mesh(new CylinderGeometry(0.94, 0.94, 0.075, 1, 1, false, i * th, th - gap), i % 2 ? teakA : teakB);
    s.position.y = 0.08 + H + 0.085;
    s.castShadow = true; s.receiveShadow = true;
    top.add(s);
  }
  const cap = new Mesh(new CylinderGeometry(0.16, 0.16, 0.085, 36), alu);
  cap.position.y = 0.08 + H + 0.09;
  top.add(cap);
  piece.position.y = 0;

  /* anotações das camadas: ficam presas à peça */
  const pins = $$(".pin").map((el, i) => ({ el, y: [0.08 + H + 0.12, 0.08 + H * 0.5, 0.06][i] }));
  const v = new Vector3();

  const st = { p: 0, on: false, mx: 0, my: 0, tx: 0, ty: 0, t0: performance.now(), woven: false };
  let aspect = 1;
  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h, false);
    aspect = w / h;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);
  if (finePointer) {
    host.addEventListener("pointermove", (e) => {
      const r = host.getBoundingClientRect();
      st.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      st.ty = ((e.clientY - r.top) / r.height) * 2 - 1;
    }, { passive: true });
  }
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const look = new Vector3();
  const frame = () => {
    const t = (performance.now() - st.t0) / 1000;
    st.mx += (st.tx - st.mx) * 0.05;
    st.my += (st.ty - st.my) * 0.05;
    const p = st.p;
    const e = sm(0.14, 0.52, p);              // 0 = peça fechada, 1 = camadas abertas
    top.position.y = e * 1.15;
    base.position.y = -e * 0.28;
    body.position.y = e * 0.32;
    piece.rotation.y = 0.4 + p * 2.4 + st.mx * 0.35 + Math.sin(t * 0.15) * 0.05;
    const dist = Math.max(7.4, 5.9 / aspect);
    camera.position.set(0, 3.2 + e * 0.6 - st.my * 0.3, dist);
    look.set(0, 0.7 + e * 0.5, 0);
    camera.lookAt(look);
    // anotações
    pins.forEach((pn, i) => {
      v.set(1.5, pn.y + [top.position.y, body.position.y, base.position.y][i], 0).project(camera);
      const x = (v.x * 0.5 + 0.5) * host.clientWidth, y = (-v.y * 0.5 + 0.5) * host.clientHeight;
      pn.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      pn.el.style.opacity = String(sm(0.4 + i * 0.04, 0.55 + i * 0.04, p) * (1 - sm(0.97, 1, p)));
    });
    renderer.render(scene, camera);
  };
  const intro = (instant) => {
    if (st.woven) return;
    st.woven = true;
    strands.forEach((m, i) => {
      if (instant) { m.geometry.setDrawRange(0, m.userData.count); return; }
      const o = { v: 0 };
      gsap.to(o, {
        v: 1, duration: 1.6, ease: "power2.inOut", delay: i * 0.018,
        onUpdate: () => m.geometry.setDrawRange(0, Math.floor((o.v * m.userData.count) / 3) * 3)
      });
    });
  };
  return { st, frame, intro, tick: () => { if (st.on) frame(); } };
})();

/* =====================================================================
   SEM MOVIMENTO: tudo parado
   ===================================================================== */
const loader = $("#loader");
if (reduce) {
  if (loader) loader.remove();
  if (weave3d) { weave3d.intro(true); weave3d.st.p = 0.6; weave3d.frame(); window.addEventListener("resize", () => weave3d.frame()); }
} else {
  run();
}

function run() {
  /* trama: tece quando a seção aparece, câmera acompanha a rolagem */
  if (weave3d) {
    gsap.ticker.add(weave3d.tick);
    ScrollTrigger.create({
      trigger: ".weave", start: "top bottom", end: "bottom top", scrub: true,
      onUpdate: (s) => { weave3d.st.p = Math.min(1, Math.max(0, (s.progress - 0.27) / 0.45)); },
      onToggle: (s) => { weave3d.st.on = s.isActive; }
    });
    ScrollTrigger.create({ trigger: ".weave", start: "top 75%", once: true, onEnter: () => weave3d.intro(false) });
  }

  /* abertura: a marca aparece, a foto nasce como um quadro pequeno e abre até a tela cheia */
  const title = $("#heroTitle");
  const chars = title ? $$(".line", title).flatMap((l) => splitChars(l)) : [];
  if (title) title.setAttribute("aria-label", "Móveis artesanais para viver ao ar livre.");
  const small = "inset(34% 37% 34% 37% round 18px)";
  const full = "inset(0% 0% 0% 0% round 0px)";
  gsap.set(chars, { yPercent: 115, rotationX: -80, opacity: 0, transformOrigin: "50% 100%" });
  gsap.set(".hero__row", { opacity: 0, y: 24 });
  gsap.set("#heroMedia", { clipPath: small });
  gsap.set("#heroMedia img", { scale: 1.35 });
  gsap.set("#nav", { opacity: 0, y: -20 });

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  if (loader) {
    const lc = splitChars($("#loaderName"));
    tl.from(lc, { yPercent: 120, duration: 0.8, stagger: 0.04 })
      .to(lc, { yPercent: -120, duration: 0.6, stagger: 0.025, ease: "power3.in" }, "+=0.3")
      .to(loader, { opacity: 0, duration: 0.5, ease: "power2.out" })
      .add(() => loader.remove());
  }
  tl.to("#heroMedia", { clipPath: full, duration: 1.7, ease: "expo.inOut" }, "-=0.2")
    .to("#heroMedia img", { scale: 1, duration: 2.2, ease: "power3.out" }, "<")
    .to(chars, { yPercent: 0, rotationX: 0, opacity: 1, duration: 1.2, stagger: 0.018 }, "-=1.1")
    .to(".hero__row", { opacity: 1, y: 0, duration: 0.9 }, "-=0.9")
    .to("#nav", { opacity: 1, y: 0, duration: 0.9, clearProps: "transform" }, "<")
    .add(() => {
      /* ao rolar, a foto vira um cartão arredondado e o texto sobe: saída com profundidade */
      gsap.fromTo("#heroMedia", { clipPath: full }, {
        clipPath: "inset(0% 3% 8% 3% round 34px)", ease: "none", immediateRender: false,
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
      });
    });
  gsap.to("#heroMedia img", {
    yPercent: 10, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });
  gsap.to(".hero__content", {
    yPercent: -30, opacity: 0, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "65% top", scrub: true }
  });

  /* manifesto: palavras acendem e as fotos se abrem dentro da frase */
  const intro = $("#intro");
  if (intro) {
    gsap.fromTo(splitWords(intro), { opacity: 0.16 }, {
      opacity: 1, stagger: 0.1, ease: "none",
      scrollTrigger: { trigger: intro, start: "top 80%", end: "bottom 55%", scrub: true }
    });
    $$(".inl", intro).forEach((el) => {
      gsap.from(el, {
        width: 0, duration: 1.3, ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 78%", once: true }
      });
    });
  }

  /* fatos entram em sequência */
  gsap.from(".fact", {
    opacity: 0, y: 36, duration: 1, stagger: 0.1, ease: "power3.out",
    scrollTrigger: { trigger: ".facts", start: "top 85%", once: true }
  });

  /* frase dos materiais: palavras acendem na ordem da leitura */
  const stm = $("#statement");
  if (stm) {
    gsap.fromTo(splitWords(stm), { opacity: 0.18 }, {
      opacity: 1, stagger: 0.12, ease: "none",
      scrollTrigger: { trigger: ".weave", start: "top 15%", end: "bottom 90%", scrub: true }
    });
  }

  /* fotos que abrem como persiana */
  $$(".reveal-img").forEach((el) => {
    gsap.from(el, {
      clipPath: "inset(100% 0% 0% 0% round 22px)", duration: 1.4, ease: "power4.inOut",
      scrollTrigger: { trigger: el, start: "top 82%", once: true }
    });
    gsap.fromTo($("img", el), { scale: 1.25 }, {
      scale: 1, ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
    });
  });
  $$(".mat li, .kit__text > *").forEach((el) => {
    gsap.from(el, {
      opacity: 0, y: 34, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true }
    });
  });

  /* títulos de seção: letras sobem */
  $$(".sec-title").forEach((h) => {
    const cs = splitChars(h);
    gsap.from(cs, {
      yPercent: 115, duration: 1, stagger: 0.018, ease: "power4.out",
      scrollTrigger: { trigger: h, start: "top 88%", once: true }
    });
  });

  /* peças: linhas entram em sequência; no hover a foto aparece e segue o cursor, inclinando com a velocidade */
  gsap.from(".prow", {
    opacity: 0, y: 50, duration: 1, stagger: 0.07, ease: "power3.out",
    scrollTrigger: { trigger: "#plist", start: "top 85%", once: true }
  });
  const pf = $("#pfloat");
  const plist = $("#plist");
  if (pf && plist && finePointer) {
    const pimg = $("img", pf);
    gsap.set(pf, { xPercent: -50, yPercent: -50, scale: 0.6 });
    const fx = gsap.quickTo(pf, "x", { duration: 0.55, ease: "power3" });
    const fy = gsap.quickTo(pf, "y", { duration: 0.55, ease: "power3" });
    const fr = gsap.quickTo(pf, "rotation", { duration: 0.7, ease: "power3" });
    let lastX = 0;
    plist.addEventListener("pointermove", (e) => {
      fx(e.clientX + 160); fy(e.clientY);
      fr(gsap.utils.clamp(-14, 14, (e.clientX - lastX) * 0.9));
      lastX = e.clientX;
    });
    $$(".prow", plist).forEach((row) => {
      row.addEventListener("pointerenter", () => {
        if (!isDesktop()) return;
        pimg.src = row.dataset.img;
        gsap.fromTo(pimg, { scale: 1.3 }, { scale: 1, duration: 0.9, ease: "power3.out", overwrite: true });
        gsap.to(pf, { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out", overwrite: "auto" });
      });
    });
    plist.addEventListener("pointerleave", () => {
      gsap.to(pf, { opacity: 0, scale: 0.6, duration: 0.4, ease: "power3.in", overwrite: "auto" });
      fr(0);
    });
  }

  /* faixa: corre sozinha e acelera com a rolagem */
  const mq = $("#marquee");
  if (mq) {
    const loop = gsap.to(mq, { xPercent: -50, ease: "none", duration: 38, repeat: -1 });
    const slow = gsap.delayedCall(0.2, () => gsap.to(loop, { timeScale: 1, duration: 0.8 })).pause();
    ScrollTrigger.create({
      trigger: ".marquee", start: "top bottom", end: "bottom top",
      onUpdate: (s) => {
        gsap.to(loop, { timeScale: 1 + Math.min(6, Math.abs(s.getVelocity()) / 260), duration: 0.3, overwrite: true });
        slow.restart(true);
      }
    });
  }

  /* ambientes: zoom parallax. Cada foto cresce em ritmo diferente e a central toma a tela */
  const zoomEls = $$(".zoom__el");
  if (zoomEls.length) {
    const scales = [4, 4.6, 5, 4.6, 5, 5.6, 6];
    const ztl = gsap.timeline({
      scrollTrigger: { trigger: ".zoom", start: "top top", end: "bottom bottom", scrub: true }
    });
    zoomEls.forEach((el, i) => ztl.fromTo(el, { scale: 0.25 }, { scale: (scales[i] || 5) / 4, ease: "none", duration: 1 }, 0));
    ztl.fromTo("#zoomCap", { opacity: 0 }, { opacity: 1, ease: "none", duration: 0.25 }, 0.72);
    ztl.fromTo("#zoomCap h2", { yPercent: 40 }, { yPercent: 0, ease: "none", duration: 0.28 }, 0.72);
  }

  /* galeria: cada foto cresce a partir de um canto conforme entra na tela */
  const origins = ["0% 100%", "100% 100%", "0% 0%", "100% 0%"];
  $$(".g").forEach((el, i) => {
    gsap.fromTo(el, { scale: 0.15, opacity: 0.4, transformOrigin: origins[i % 4] }, {
      scale: 1, opacity: 1, ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "top 45%", scrub: true }
    });
  });

  /* processo: a linha de cada etapa se desenha ao entrar */
  $$(".step").forEach((el, i) => {
    gsap.from(el, { "--line": 0, duration: 1.2, delay: i * 0.08, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
    gsap.from(el.children, { y: 24, opacity: 0, duration: 0.9, stagger: 0.08, delay: 0.15 + i * 0.08, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
  });

  /* entrega: siglas sobem uma a uma */
  gsap.from("#states span", {
    yPercent: 110, duration: 1.2, stagger: 0.09, ease: "power4.out",
    scrollTrigger: { trigger: "#states", start: "top 85%", once: true }
  });

  /* dúvidas */
  gsap.from(".faq details", {
    opacity: 0, y: 26, duration: 0.8, stagger: 0.07, ease: "power3.out",
    scrollTrigger: { trigger: ".faq__list", start: "top 86%", once: true }
  });

  /* contato */
  const ch = $(".contact h2");
  if (ch) {
    gsap.from(splitChars(ch), {
      yPercent: 110, opacity: 0,
      duration: 1.1, stagger: 0.02, ease: "power4.out",
      scrollTrigger: { trigger: ".contact", start: "top 65%", once: true }
    });
  }
  gsap.from(".contact__card", {
    scale: 0.94, ease: "none",
    scrollTrigger: { trigger: ".contact", start: "top bottom", end: "top 30%", scrub: true }
  });

  /* botões magnéticos */
  if (finePointer) {
    $$(".btn").forEach((b) => {
      const bx = gsap.quickTo(b, "x", { duration: 0.5, ease: "power3" });
      const by = gsap.quickTo(b, "y", { duration: 0.5, ease: "power3" });
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        bx((e.clientX - r.left - r.width / 2) * 0.25);
        by((e.clientY - r.top - r.height / 2) * 0.35);
      });
      b.addEventListener("pointerleave", () => { bx(0); by(0); });
    });
  }


  window.addEventListener("load", () => ScrollTrigger.refresh());
}
