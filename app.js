document.getElementById("gerarPDF").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;

    // Criar o PDF
    const doc = new jsPDF();

    // Adicionar conteúdo (texto)
    doc.text("Este é um texto que foi convertido para PDF!", 10, 10);

    // Salvar o PDF gerado
    doc.save("arquivo_convertido.pdf");
  });