// script.js - Navigation et interactions pour le carnet de santé

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
  const currentPageSpan = document.getElementById("currentPage");
  const totalPagesSpan = document.getElementById("totalPages");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const menuBtns = document.querySelectorAll(".menu-btn");

  // Initialisation
  function init() {
    totalPagesSpan.textContent = totalPages;
    updateNavigation();
    showPage(pages[currentPageIndex]);
    setupEventListeners();
  }

  // Configuration des événements
  function setupEventListeners() {
    // Boutons précédent/suivant
    prevBtn.addEventListener("click", goToPreviousPage);
    nextBtn.addEventListener("click", goToNextPage);

    // Navigation clavier
    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        goToPreviousPage();
      } else if (event.key === "ArrowRight" || event.key === "PageDown") {
        goToNextPage();
      }
    });

    // Menu rapide
    menuBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const targetPage = this.getAttribute("data-page");
        goToPage(targetPage);
      });
    });

    // Simulation de cases à cocher
    document
      .querySelectorAll(".check-box, .checkbox, .radio")
      .forEach((box) => {
        box.addEventListener("click", function () {
          this.classList.toggle("checked");
          if (this.classList.contains("radio")) {
            // Désélectionner les autres boutons radio du même groupe
            const radioGroup = this.closest(".radio-group");
            if (radioGroup) {
              radioGroup.querySelectorAll(".radio").forEach((radio) => {
                radio.classList.remove("checked");
              });
              this.classList.add("checked");
            }
          }
        });
      });

    // Simulation des QRs codes cliquables
    document.querySelectorAll(".qr-pattern, .qr-placeholder").forEach((qr) => {
      qr.addEventListener("click", function () {
        alert(
          "QR Code - Accès au portail eGabon-SIS\n\nCe code permettra d'accéder au dossier médical numérique une fois le système déployé."
        );
      });
    });
  }

  // Navigation entre pages
  function showPage(pageId) {
    // Cacher toutes les pages
    pages.forEach((page) => {
      const element = document.getElementById(page);
      if (element) {
        element.style.display = "none";
      }
    });

    // Afficher la page active
    const activePage = document.getElementById(pageId);
    if (activePage) {
      activePage.style.display = "block";
      activePage.scrollIntoView({ behavior: "smooth" });

      // Mettre à jour l'indicateur de page
      currentPageIndex = pages.indexOf(pageId);
      currentPageSpan.textContent = currentPageIndex + 1;
      updateNavigation();

      // Mettre à jour l'URL (sans rechargement)
      history.pushState(null, "", `#${pageId}`);

      // Mettre en surbrillance le bouton du menu correspondant
      updateActiveMenuButton(pageId);
    }
  }

  function goToPreviousPage() {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      showPage(pages[currentPageIndex]);
    }
  }

  function goToNextPage() {
    if (currentPageIndex < totalPages - 1) {
      currentPageIndex++;
      showPage(pages[currentPageIndex]);
    }
  }

  function goToPage(pageId) {
    const index = pages.indexOf(pageId);
    if (index !== -1) {
      currentPageIndex = index;
      showPage(pageId);
    }
  }

  function updateNavigation() {
    // Activer/désactiver les boutons selon la position
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === totalPages - 1;

    // Changer le style des boutons désactivés
    prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
    prevBtn.style.cursor = prevBtn.disabled ? "not-allowed" : "pointer";

    nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
    nextBtn.style.cursor = nextBtn.disabled ? "not-allowed" : "pointer";
  }

  function updateActiveMenuButton(pageId) {
    menuBtns.forEach((btn) => {
      if (btn.getAttribute("data-page") === pageId) {
        btn.style.backgroundColor = "var(--gabon-green)";
        btn.style.color = "var(--white)";
        btn.style.transform = "translateX(-8px)";
      } else {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.style.transform = "";
      }
    });
  }

  // Fonction d'impression
  function setupPrint() {
    const printBtn = document.createElement("button");
    printBtn.innerHTML = '<i class="fas fa-print"></i> Imprimer';
    printBtn.className = "print-btn";
    printBtn.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: var(--gabon-blue);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          z-index: 1001;
          box-shadow: 0 3px 10px rgba(0,0,0,0.2);
      `;

    printBtn.addEventListener("click", function () {
      // Afficher toutes les pages pour l'impression
      pages.forEach((page) => {
        const element = document.getElementById(page);
        if (element) {
          element.style.display = "block";
        }
      });

      // Masquer les éléments de navigation
      document.querySelector(".navigation").style.display = "none";
      document.querySelector(".quick-menu").style.display = "none";
      printBtn.style.display = "none";

      // Lancer l'impression
      window.print();

      // Restaurer après impression
      setTimeout(() => {
        showPage(pages[currentPageIndex]);
        document.querySelector(".navigation").style.display = "flex";
        document.querySelector(".quick-menu").style.display = "flex";
        printBtn.style.display = "flex";
      }, 100);
    });

    document.body.appendChild(printBtn);
  }

  // Gestion de l'historique du navigateur
  window.addEventListener("popstate", function () {
    const hash = window.location.hash.substring(1);
    if (hash && pages.includes(hash)) {
      goToPage(hash);
    }
  });

  // Vérifier l'URL au chargement
  const hash = window.location.hash.substring(1);
  if (hash && pages.includes(hash)) {
    goToPage(hash);
  }

  // Fonction de recherche dans le carnet
  function setupSearch() {
    const searchBtn = document.createElement("button");
    searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    searchBtn.className = "search-btn";
    searchBtn.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: var(--gabon-green);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          z-index: 1001;
          box-shadow: 0 3px 10px rgba(0,0,0,0.2);
      `;

    searchBtn.addEventListener("click", function () {
      const searchTerm = prompt("Rechercher dans le carnet de santé :");
      if (searchTerm) {
        searchInDocument(searchTerm);
      }
    });

    document.body.appendChild(searchBtn);
  }

  function searchInDocument(term) {
    // Recherche simplifiée - pour une vraie implémentation, utiliser un moteur de recherche plus sophistiqué
    let found = false;

    pages.forEach((pageId) => {
      const page = document.getElementById(pageId);
      if (page) {
        const text = page.textContent.toLowerCase();
        if (text.includes(term.toLowerCase())) {
          goToPage(pageId);
          found = true;

          // Surligner le terme trouvé (simplifié)
          alert(
            `Terme "${term}" trouvé sur la page ${pages.indexOf(pageId) + 1}`
          );
        }
      }
    });

    if (!found) {
      alert(`Le terme "${term}" n'a pas été trouvé dans le carnet.`);
    }
  }

  // Initialiser l'application
  init();
  setupPrint();
  setupSearch();

  // Styles supplémentaires pour les éléments interactifs
  const style = document.createElement("style");
  style.textContent = `
      .check-box.checked, 
      .checkbox.checked {
          background-color: var(--gabon-green);
          position: relative;
      }
      
      .check-box.checked::after,
      .checkbox.checked::after {
          content: '✓';
          color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 12px;
          font-weight: bold;
      }
      
      .radio.checked {
          background-color: var(--gabon-blue);
          position: relative;
      }
      
      .radio.checked::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
      }
      
      @media print {
          .print-btn, .search-btn {
              display: none !important;
          }
      }
  `;
  document.head.appendChild(style);
});
