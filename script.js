document.addEventListener("DOMContentLoaded", function () {
  // Configuration des pages
  const pages = [
    "cover",
    "page1",
    "page2",
    "page3",
    "page4",
    "page5",
    "page6",
    "page7",
    "page8",
    "page9",
    "page10",
    "page11",
    "page12",
  ];

  let currentPageIndex = 0;
  const totalPages = pages.length;

  // Éléments DOM
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const currentPageSpan = document.getElementById("currentPage");
  const totalPagesSpan = document.getElementById("totalPages");
  const menuBtns = document.querySelectorAll(".menu-btn");

  // Initialisation
  if (totalPagesSpan) {
    totalPagesSpan.textContent = totalPages - 1; // -1 car la couverture est page 0
  }
  showPage(currentPageIndex);

  // Navigation précédent/suivant
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentPageIndex < totalPages - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
      }
    });
  }

  // Menu rapide
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const pageId = btn.getAttribute("data-page");
      const index = pages.indexOf(pageId);
      if (index !== -1) {
        currentPageIndex = index;
        showPage(currentPageIndex);
      }
    });
  });

  // Navigation au clavier
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "PageUp") {
      if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
      }
    } else if (
      e.key === "ArrowRight" ||
      e.key === "PageDown" ||
      e.key === " "
    ) {
      if (currentPageIndex < totalPages - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
      }
    } else if (e.key === "Home") {
      currentPageIndex = 0;
      showPage(currentPageIndex);
    } else if (e.key === "End") {
      currentPageIndex = totalPages - 1;
      showPage(currentPageIndex);
    }
  });

  // Fonction pour afficher une page
  function showPage(index) {
    // Masquer toutes les pages
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active");
    });

    // Afficher la page courante
    const currentPage = document.getElementById(pages[index]);
    if (currentPage) {
      currentPage.classList.add("active");

      // Mettre à jour l'indicateur de page
      if (currentPageSpan) {
        if (index === 0) {
          currentPageSpan.textContent = "Couverture";
        } else {
          currentPageSpan.textContent = index;
        }
      }

      // Gérer les boutons de navigation
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === totalPages - 1;

      // Mettre à jour les boutons du menu
      updateMenuButtons(index);

      // Animation de la page
      animatePage(currentPage);
    }
  }

  // Mettre à jour l'état des boutons du menu
  function updateMenuButtons(index) {
    menuBtns.forEach((btn) => {
      const pageId = btn.getAttribute("data-page");
      const btnIndex = pages.indexOf(pageId);
      if (btnIndex === index) {
        btn.style.backgroundColor = "var(--gabon-green)";
        btn.style.color = "white";
      } else {
        btn.style.backgroundColor = "white";
        btn.style.color = "var(--gabon-green)";
      }
    });
  }

  // Animation d'entrée de page
  function animatePage(page) {
    page.style.animation = "none";
    setTimeout(() => {
      page.style.animation = "fadeIn 0.5s ease";
    }, 10);
  }

  // Simulation de cases à cocher pour les vaccins
  document.querySelectorAll(".check-box").forEach((box) => {
    box.addEventListener("click", function () {
      if (this.style.backgroundColor === "var(--gabon-green)") {
        this.style.backgroundColor = "";
        this.textContent = "";
      } else {
        this.style.backgroundColor = "var(--gabon-green)";
        this.textContent = "✓";
        this.style.color = "white";
        this.style.display = "flex";
        this.style.alignItems = "center";
        this.style.justifyContent = "center";
        this.style.fontWeight = "bold";
      }
    });
  });

  // Simulation de champs de formulaire interactifs
  document.querySelectorAll(".form-field").forEach((field) => {
    field.addEventListener("click", function () {
      const currentText = this.textContent.trim();
      const inputText = prompt("Entrez la valeur :", currentText);
      if (inputText !== null) {
        this.textContent = inputText;
      }
    });
  });

  // Ajout de la date actuelle dans certains champs
  const today = new Date();
  const formattedDate = today.toLocaleDateString("fr-FR");

  // Mettre à jour la date dans les exemples
  document.querySelectorAll('.form-field:contains("___")').forEach((field) => {
    if (Math.random() > 0.7) {
      // 30% de chance de pré-remplir
      field.textContent = formattedDate;
    }
  });

  // Fonction utilitaire pour le contenu contenant
  Element.prototype.containsText = function (text) {
    return this.textContent.includes(text);
  };
});

// Simulation de génération de QR Code
function generateQRCode() {
  const qrPlaceholder = document.querySelector(".qr-placeholder");
  if (qrPlaceholder) {
    qrPlaceholder.innerHTML = `
            <div style="width: 100%; height: 100%; display: grid; grid-template-columns: repeat(10, 1fr); grid-template-rows: repeat(10, 1fr);">
                ${Array(100)
                  .fill(0)
                  .map(
                    (_, i) =>
                      `<div style="background-color: ${
                        Math.random() > 0.5 ? "black" : "white"
                      };"></div>`
                  )
                  .join("")}
            </div>
            <div style="position: absolute; bottom: 10px; font-size: 12px; color: #666;">eGabon-SIS</div>
        `;
  }
}

// Avec jsPDF
const doc = new jsPDF();
doc.setFontSize(20);
doc.text("CARNET DE SANTÉ", 105, 20, { align: "center" });
doc.save("carnet-sante-gabonais.pdf");

// Générer le QR Code au chargement
window.addEventListener("load", generateQRCode);
