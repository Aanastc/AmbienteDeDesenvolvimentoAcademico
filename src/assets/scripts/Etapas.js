// Dados para etapas
const etapas = [
  { idEtapas: "etapa1", dataInicio: "2024-12-03", dataFim: "2024-12-10" },
  { idEtapas: "etapa2", dataInicio: "2025-04-28", dataFim: "null" },
  { idEtapas: "etapa3", dataInicio: "2025-04-28", dataFim: "2025-05-17" },
  { idEtapas: "etapa4", dataInicio: null, dataFim: null },
  { idEtapas: "etapa5", dataInicio: null, dataFim: null },
  { idEtapas: "etapa6", dataInicio: null, dataFim: null },
  { idEtapas: "etapa7", dataInicio: null, dataFim: null },
];

// Função para normalizar a data de comparação
function normalizeDate(date) {
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0);  // Resetando as horas, minutos e segundos
  return normalizedDate;
}

// Função para habilitar etapas pela data de início
function verificarInicio() {
  const hoje = normalizeDate(new Date());  // Data de hoje normalizada

  etapas.forEach(({ dataInicio, idEtapas }) => {
    const section = document.getElementById(idEtapas);
    const botao = document.getElementById(`${idEtapas}-button`);
    const inicio = dataInicio ? normalizeDate(dataInicio) : null;

    if (section && inicio && hoje >= inicio) {
      // Remover a classe 'disabled' para habilitar o botão
      botao.classList.remove("disabled");

      // Aplica o background dependendo da etapa
      const etapaNumero = parseInt(idEtapas.replace("etapa", ""), 10);

      if ([1, 3, 5, 7].includes(etapaNumero)) {
        section.classList.remove("background-neutral-100");
        section.classList.add("background-red-100");
      } else if ([2, 4, 6].includes(etapaNumero)) {
        section.classList.remove("background-neutral-100");
        section.classList.add("background-blue-100");
      }
    }
  });
}

// Função para encerrar etapas pela data de fim
function verificarFim() {
  const hoje = normalizeDate(new Date());  // Data de hoje normalizada

  etapas.forEach(({ dataFim, idEtapas }) => {
    const botao = document.getElementById(`${idEtapas}-button`);
    const endDate = dataFim ? normalizeDate(dataFim) : null;

    if (botao && endDate && hoje > endDate) {
      // Adicionar a classe 'disabled' para desabilitar o botão
      botao.classList.add("disabled");

      // Modificar texto e ícone do botão
      const botaoTexto = document.getElementById(`${idEtapas}-text`);
      const botaoIcone = document.getElementById(`${idEtapas}-button-icon`);

      if (botaoTexto) {
        botaoTexto.textContent = "Encerrado";
      }

      if (botaoIcone) {
        // Troca o ícone (adicione o ícone desejado aqui)
        botaoIcone.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path d="M12.2105 7.73045C12.2628 7.78269 12.3043 7.84473 12.3326 7.91301C12.3609 7.9813 12.3754 8.0545 12.3754 8.12842C12.3754 8.20234 12.3609 8.27554 12.3326 8.34382C12.3043 8.41211 12.2628 8.47415 12.2105 8.52639L8.27297 12.4639C8.22073 12.5162 8.15869 12.5577 8.0904 12.586C8.02212 12.6143 7.94892 12.6289 7.875 12.6289C7.80108 12.6289 7.72788 12.6143 7.6596 12.586C7.59131 12.5577 7.52927 12.5162 7.47703 12.4639L5.78953 10.7764C5.68398 10.6708 5.62469 10.5277 5.62469 10.3784C5.62469 10.2292 5.68398 10.086 5.78953 9.98045C5.89508 9.8749 6.03823 9.81561 6.1875 9.81561C6.33677 9.81561 6.47992 9.8749 6.58547 9.98045L7.875 11.2707L11.4145 7.73045C11.4668 7.67815 11.5288 7.63666 11.5971 7.60835C11.6654 7.58005 11.7386 7.56548 11.8125 7.56548C11.8864 7.56548 11.9596 7.58005 12.0279 7.60835C12.0962 7.63666 12.1582 7.67815 12.2105 7.73045ZM15.75 4.19092V15.4409C15.75 15.7393 15.6315 16.0254 15.4205 16.2364C15.2095 16.4474 14.9234 16.5659 14.625 16.5659H3.375C3.07663 16.5659 2.79048 16.4474 2.5795 16.2364C2.36853 16.0254 2.25 15.7393 2.25 15.4409V4.19092C2.25 3.89255 2.36853 3.6064 2.5795 3.39542C2.79048 3.18444 3.07663 3.06592 3.375 3.06592H14.625C14.9234 3.06592 15.2095 3.18444 15.4205 3.39542C15.6315 3.6064 15.75 3.89255 15.75 4.19092ZM14.625 15.4409V4.19092H3.375V15.4409H14.625Z" fill="#898FB2"/>
</svg>`;  // Exemplo de ícone
      }
    }
  });
}

// Função controladora para executar ambas as funções
function init() {
  verificarInicio();
  verificarFim();
}

// Garante que ambas as funções sejam chamadas após o carregamento da página
document.addEventListener("DOMContentLoaded", init);
