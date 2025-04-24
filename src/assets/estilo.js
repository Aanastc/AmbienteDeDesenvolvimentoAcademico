document.head.insertAdjacentHTML(
  "afterend",
  `

<style>
/* FONTES */
/* Roboto  */
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
/* Fira */
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
/* Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
/* Manrope */
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap");
/* Neulis Cursive */
@import url("https://use.typekit.net/xom3ule.css");
/* Satoshi */
@import url("https://fonts.cdnfonts.com/css/satoshi");
/* Code */
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap");

:root {
  /* TIPOGRAFIA */
  --font-family-Roboto: "Roboto", sans-serif;
  --font-family-Fira: "Fira Sans", sans-serif;
  --font-family-Poppins: "Poppins", sans-serif;
  --font-family-Manrope: "Manrope", sans-serif;
  --font-family-Neulis: "neulis-cursive", sans-serif;
  --font-family-Satoshi: "Satoshi", sans-serif;
  --font-family-Code: "Source Code Pro", monospace;
  /* Tamanhos */
  --font-size-sm: 0.875em; /* Legend */
  --font-size-p: 1em; /* Paragraph */
  --font-size-md: 1.125em; /* Heading 4 */
  --font-size-lg: 1.5em; /* Heading 3 */
  --font-size-xl: 1.75em; /* Heading 2 */
  --font-size-2xl: 2em; /* Heading 1 */
  --font-size-3xl: 2.25em; /* Display */
  /* Entrelinhas */
  --line-height-tight: 100%;
  --line-height-medium: 150%;
  --line-height-distant: 180%;
  /* Pesos  */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  /* CORES */
  /* Unifor */
  --Gelo: #e4f2fe;
  --Azul-claro: #87b7fe;
  --Anil: #004aff;
  --Marinho: #132190;
  /* Neutral */
  --color-neutral-050: #f6f7f9;
  --color-neutral-100: #ebedf3;
  --color-neutral-200: #d3d7e4;
  --color-neutral-300: #acb4cd;
  --color-neutral-400: #7f8db1;
  --color-neutral-500: #5f6e98;
  --color-neutral-600: #4b587e;
  --color-neutral-700: #3e4766;
  --color-neutral-800: #363e56;
  --color-neutral-900: #30354a;
  --color-neutral-950: #151720;
  /* Blue */
  --color-blue-050: #e9f2ff;
  --color-blue-100: #d6e8ff;
  --color-blue-200: #b6d3ff;
  --color-blue-300: #8ab3ff;
  --color-blue-400: #5c86ff;
  --color-blue-500: #375aff;
  --color-blue-600: #1529ff;
  --color-blue-700: #0b1cf7;
  --color-blue-800: #0d1dc6;
  --color-blue-900: #132190;
  --color-blue-950: #0c135a;
  /* Turquoise */
  --color-turquoise-050: #f0fdfa;
  --color-turquoise-100: #cdfaf1;
  --color-turquoise-200: #9af5e2;
  --color-turquoise-300: #60e8d2;
  --color-turquoise-400: #36d3be;
  --color-turquoise-500: #16b6a3;
  --color-turquoise-600: #0f9285;
  --color-turquoise-700: #11746c;
  --color-turquoise-800: #125d57;
  --color-turquoise-900: #144d49;
  --color-turquoise-950: #052e2d;
  /* Red */
  --color-red-050: #fef2f2;
  --color-red-100: #fee2e2;
  --color-red-200: #fecaca;
  --color-red-300: #fda4a4;
  --color-red-400: #f97070;
  --color-red-500: #f04343;
  --color-red-600: #dd2525;
  --color-red-700: #ba1b1b;
  --color-red-800: #9a1a1a;
  --color-red-900: #801c1c;
  --color-red-950: #450a0a;
  /* Yellow */
  --color-yellow-050: #fffbeb;
  --color-yellow-100: #fef3c7;
  --color-yellow-200: #fde68a;
  --color-yellow-300: #fcd34d;
  --color-yellow-400: #fbbf24;
  --color-yellow-500: #f59e0b;
  --color-yellow-600: #d97706;
  --color-yellow-700: #b45309;
  --color-yellow-800: #92400e;
  --color-yellow-900: #78350f;
  --color-yellow-950: #451a03;
  /* Purple */
  --color-purple-050: #f6f4fe;
  --color-purple-100: #eeebfc;
  --color-purple-200: #dfd9fb;
  --color-purple-300: #c7bbf7;
  --color-purple-400: #ab95f0;
  --color-purple-500: #8b64e8;
  --color-purple-600: #7f49de;
  --color-purple-700: #6f37ca;
  --color-purple-800: #5d2ea9;
  --color-purple-900: #4d278b;
  --color-purple-950: #2f175e;
  /* Gradients */
  --Midnight: linear-gradient(90deg, #1529ff 0%, #151720 100%);
  --Ash: linear-gradient(90deg, #a6abc5 0%, #151720 100%);
  --Smoke: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  /* Outras Cores */
  --white: #fff;
  /* elevation */
  --elevation-low: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  --elevation-medium: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  --elevation-inset-low: 0px 0px 12px 0px rgba(0, 0, 0, 0.15) inset;
  /* Bordas */
  --radius-full: 100%;
  --radius-025: 0.25rem;
  --radius-050: 0.5rem;
  --radius-075: 0.75rem;
  --radius-100: 1rem;
  --radius-125: 1.25rem;
  --radius-150: 1.5rem;
  /* Layout */
  --container-xl: 57.625rem; /*922px*/
  --container-lg: 52.75rem; /*844px*/
  --container-md: 47.875rem; /*766px*/
  --container-sm: 45rem; /*720px*/
  /* spaces */
  --space-012: 0.125rem; /*2px*/
  --space-025: 0.25rem; /*4px*/
  --space-050: 0.5rem; /*8px*/
  --space-075: 0.75rem; /*12px*/
  --space-100: 1rem; /*16px*/
  --space-125: 1.25rem; /*20px*/
  --space-150: 1.5rem; /*24px*/
  --space-200: 2rem; /*32px*/
  --space-250: 2.5rem; /*40px*/
  --space-300: 3rem; /*48px*/
  --space-350: 3.5rem; /*56px*/
  --space-400: 4rem; /*64px*/
  /* Iconografia */
  --icon-size-sm: 1rem;
  --icon-size-md: 1.5rem;
  --icon-size-lg: 2rem;
}

:root.dark-theme {
  /* Neutral */
  --color-neutral-050: #151720;
  --color-neutral-100: #30354a;
  --color-neutral-200: #363e56;
  --color-neutral-300: #3e4766;
  --color-neutral-400: #4b587e;
  --color-neutral-500: #5f6e98;
  --color-neutral-600: #7f8db1;
  --color-neutral-700: #acb4cd;
  --color-neutral-800: #d3d7e4;
  --color-neutral-900: #ebedf3;
  --color-neutral-950: #f6f7f9;
  /* Blue */
  --color-blue-050: #0c135a;
  --color-blue-100: #132190;
  --color-blue-200: #0d1dc6;
  --color-blue-300: #0b1cf7;
  --color-blue-400: #1529ff;
  --color-blue-500: #375aff;
  --color-blue-600: #5c86ff;
  --color-blue-700: #8ab3ff;
  --color-blue-800: #b6d3ff;
  --color-blue-900: #d6e8ff;
  --color-blue-950: #e9f2ff;
  /* Turquoise */
  --color-turquoise-050: #052e2d;
  --color-turquoise-100: #144d49;
  --color-turquoise-200: #125d57;
  --color-turquoise-300: #11746c;
  --color-turquoise-400: #0f9285;
  --color-turquoise-500: #16b6a3;
  --color-turquoise-600: #36d3be;
  --color-turquoise-700: #60e8d2;
  --color-turquoise-800: #9af5e2;
  --color-turquoise-900: #cdfaf1;
  --color-turquoise-950: #f0fdfa;
  /* Red */
  --color-red-050: #450a0a;
  --color-red-100: #801c1c;
  --color-red-200: #9a1a1a;
  --color-red-300: #ba1b1b;
  --color-red-400: #dd2525;
  --color-red-500: #f04343;
  --color-red-600: #f97070;
  --color-red-700: #fda4a4;
  --color-red-800: #fecaca;
  --color-red-900: #fee2e2;
  --color-red-950: #fef2f2;
  /* Yellow */
  --color-yellow-050: #451a03;
  --color-yellow-100: #78350f;
  --color-yellow-200: #92400e;
  --color-yellow-300: #b45309;
  --color-yellow-400: #d97706;
  --color-yellow-500: #f59e0b;
  --color-yellow-600: #fbbf24;
  --color-yellow-700: #fcd34d;
  --color-yellow-800: #fde68a;
  --color-yellow-900: #fef3c7;
  --color-yellow-950: #fffbeb;
  /* Purple */
  --color-purple-050: #2f175e;
  --color-purple-100: #4d278b;
  --color-purple-200: #5d2ea9;
  --color-purple-300: #6f37ca;
  --color-purple-400: #7f49de;
  --color-purple-500: #8b64e8;
  --color-purple-600: #ab95f0;
  --color-purple-700: #c7bbf7;
  --color-purple-800: #dfd9fb;
  --color-purple-900: #eeebfc;
  --color-purple-950: #f6f4fe;
  /* Outras Cores */
  --white: #151720;
  /* ELEVATIONS */
  --elevation-low: 0px 1px 3px 0px #000;
  --elevation-medium: 0px 5px 10px 0px #000;
  --elevation-inset-low: 0px 0px 12px 0px #000 inset;
}

/* Tipografia */
/* Tipografia font-family */
.font-family-Roboto {
  font-family: var(--font-family-Roboto);
}

.font-family-Fira {
  font-family: var(--font-family-Fira);
}

.font-family-Poppins {
  font-family: var(--font-family-Poppins);
}

.font-family-Manrope {
  font-family: var(--font-family-Manrope);
}

.font-family-Neulis {
  font-family: var(--font-family-Neulis);
}

.font-family-Satoshi {
  font-family: var(--font-family-Satoshi);
}

.font-family-Code {
  font-family: var(--font-family-Code);
  line-height: var(--line-height-medium);
  font-size: var(--font-size-p);
}

/* Tipografia Tamanhos */
.font-size-sm {
  font-size: var(--font-size-sm); /* Tamanho para legenda */
  line-height: var(--line-height-medium);
  margin: 0;
}

.font-size-p {
  font-size: var(--font-size-md) !important; /* Tamanho para parágrafo */
  line-height: var(--line-height-distant);
  margin: 0 0 0.5rem 0; /* 16px */
}

.font-size-md {
  font-size: var(--font-size-lg); /* Tamanho para H4 */
  font-weight: var(--font-weight-medium);
  margin: 0 0 0.5rem 0; /* 8px */
}

.font-size-lg {
  font-size: var(--font-size-xl); /* Tamanho para H3 */
  font-weight: var(--font-weight-semibold);
  margin: 0 0 0.5rem 0; /* 8px */
}

.font-size-xl {
  font-size: var(--font-size-2xl); /* Tamanho para H2 */
  font-weight: var(--font-weight-semibold);
  margin: 0 0 0.5rem 0; /* 8px */
}

.font-size-2xl {
  font-size: var(--font-size-3xl); /* Tamanho para H1 */
  margin: 0 0 0.5rem 0; /* 8px */
}

.font-size-3xl {
  font-size: var(--font-size-3xl); /* Tamanho para Display */
  margin: 0 0 0.5rem 0; /* 8px */
}

/* Pesos das fontes */
.font-regular {
  font-weight: var(--font-weight-regular) !important; /* Peso regular: 400 */
}

.font-medium {
  font-weight: var(--font-weight-medium); /* Peso médio: 500 */
}

.font-semibold {
  font-weight: var(--font-weight-semibold); /* Peso semi-negrito: 600 */
}

.font-bold {
  font-weight: var(--font-weight-bold); /* Peso negrito: 700 */
}

/* Listas */
/* Estilo para listas não ordenadas */
.list-ul {
  margin: 1rem 0;
}

.list-ul .list-item::marker {
  font-size: 0.875rem;
}

/* Estilo para listas ordenadas */
.list-ol {
  margin: 1rem 0;
}

.list-ol .list-item::marker {
  font-size: var(--font-size-md);
}

/* Estilo para os itens da lista */
.list-item {
  font-size: var(--font-size-md) !important;
  margin-bottom: 0.5rem;
  line-height: var(--line-height-medium);
}

/* Containers */
.container-xl {
  max-width: var(--container-xl);
  margin: auto;
}

.container-lg {
  max-width: var(--container-lg);
  margin: auto;
}

.container-md {
  max-width: var(--container-md);
  margin: auto;
}

.container-sm {
  max-width: var(--container-sm);
  margin: auto;
}

.container-texto {
  width: 80%;
  color: var(--N900);
}

/* FLEX */
.flexbox {
  display: flex;
}

.flexbox__center {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.flexbox__wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.flexbox__between--center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flexbox__around--center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.flexbox__center--center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flexbox__center--column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ALIGNS */
.block__text--center {
  text-align: center;
}

/* MARGINS */
.margim_0 {
  margin: 0 !important;
  padding: 0 !important;
}

.margin__bottom--default {
  margin-bottom: var(--space-150);
}

/* IMAGENS */
.image-fluid {
  width: 100%;
  height: auto;
  margin-bottom: var(--space-150);
}

/* ICONOGRAFIAS */
.icon-size-sm {
  width: var(--icon-size-sm);
  height: var(--icon-size-sm);
}

.icon-size-md {
  width: var(--icon-size-md);
  height: var(--icon-size-md);
}

.icon-size-lg {
  width: var(--icon-size-lg);
  height: var(--icon-size-lg);
}

/* CORES EM TEXTO, FUNDOS E BORDAS */
/* TEXTOS COLORS */
.text-blue-anil {
  color: var(--Anil) !important;
}

.text-neutral-950 {
  color: var(--color-neutral-950) !important;
}

.text-blue-600 {
  color: var(--color-blue-600) !important;
}

/* BACKGROUNDS */
.background-blue-100 {
  background: var(--color-blue-100);
}

.background-blue-300 {
  background: var(--color-blue-300);
}

.background-blue-600 {
  background: var(--color-blue-600);
}

.background-blue-900 {
  background: var(--color-blue-900);
}

.background-yellow-100 {
  background: var(--color-yellow-100);
}

.background-turquoise-100 {
  background: var(--color-turquoise-100);
}

/* border color */
/* tem important pq se não a cor não pega */
.border-color-blue-600 {
  border-color: var(--color-blue-600) !important;
}

/* ******* COMPONENTES ******** */
/* BANNER ALERT */
.banner-alert--fill {
  padding: var(--space-100);
  gap: var(--space-050);
  border-radius: var(--radius-075);
  margin-bottom: var(--space-150);
}

.banner-alert--fill__icon {
  display: flex;
  padding: var(--space-100);
  align-items: flex-start;
  gap: var(--space-050);
  border-radius: var(--radius-075);
  margin-bottom: var(--space-150);
}

.banner-alert--stroke {
  padding: var(--space-100);
  gap: var(--space-050);
  border-radius: var(--radius-075);
  border: 1px solid;
  margin-bottom: var(--space-150);
}

.banner-alert--stroke__icon {
  display: flex;
  padding: var(--space-100);
  align-items: flex-start;
  gap: var(--space-050);
  border: 1px solid;
  border-radius: var(--radius-075);
  margin-bottom: var(--space-150);
}

/* *************************************** */
/* BUTTON */
.button-pill {
  height: 2.5rem;
  min-width: 11.5625rem;
  max-width: fit-content;
  padding: 0rem var(--space-100);
  border-radius: var(--radius-150);
  border: 1px solid;
  display: flex;
  align-items: center;
  box-shadow: none;
  /* texto */
  font-family: var(--font-family-Poppins);
  text-decoration: none !important;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-medium);
}

.button--icon-left {
  justify-content: space-between;
}

.button-pill svg path {
  fill: var(--svg-fill, currentColor);
}

.button--blue {
  --button-color: var(--color-blue-600);
  --button-border: var(--color-blue-600);
  --button-hover-color: var(--color-blue-900);
  --button-active-bg: var(--color-blue-600);
  --button-active-border: var(--color-blue-900);
}

.button-pill {
  color: var(--button-color);
  border-color: var(--button-border);
}

.button-pill:hover {
  color: var(--button-hover-color);
  border-color: var(--button-hover-color);
}

.button-pill:focus {
  outline: none;
  color: var(--button-color);
  border-color: var(--button-border);
}

.button-pill:active {
  color: var(--white);
  background: var(--button-active-bg);
  border-color: var(--button-active-border);
}

.disabled {
  pointer-events: none;
  color: var(--color-neutral-300);
  border: 1px solid var(--color-neutral-300);
}

/* *************************************** */
/* CARDS */
.card-vertical {
  width: 12rem;
}

.card-horizontal {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: var(--space-150);
}

.card-horizontal__image {
  width: 9.875rem;
  height: 9.875rem;
}

.card-section {
  display: flex;
  padding: 1.25rem 1.625rem 1.625rem 1.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  border-radius: 0.5rem;
}

.card-section2 {
  display: flex;
  padding: 1.25rem 1.625rem 1.625rem 1.625rem;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  border-radius: 0.5rem;
}

.contato {
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.contatos {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.contato-icone {
  margin-top: 45%;
}

.logo-unifor {
  width: 200px;
  margin-bottom: 1.75rem;
}

/* BREAKPOINTS */
/* Dispositivos médios (telefones, de 375px a 280px) */
@media (max-width: 375px) {
  .flexbox__wrap {
    justify-content: center;
  }

  .card-horizontal {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .button-pill {
    max-width: 100%;
  }

  .card-section2 {
    align-items: center;
  }
}

/* Dispositivos médios (tablets na horizontal, de 768px a 375px) */
@media (max-width: 768px) {
  .card-section2 {
    flex-direction: column;
  }
}

/* Especificas moodle */
/* deixa amargim do p padrão do nosso ds */
.format-tiles #section-0 .contentwithoutlink .no-overflow .font-size-p {
  margin: 0 0 0.5rem 0;
}

/* padding do rotulo */
.activity-item.activityinline {
  padding: 0;
}

/* padding entre os rotulo */
.section .activity {
  list-style: none;
  padding: 0;
}



</style>

`
);
