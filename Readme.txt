================================================================================
    CARNET DE SANTÉ GABONAIS - USTS
    Application Web Interactive
================================================================================

DESCRIPTION
-----------

Application web interactive de Carnet de Santé pour Adultes développée pour
la République Gabonaise par l'Unité de Suivi et de Traitement Sanitaire (USTS).
Ce document officiel permet le suivi médical complet des patients adultes au
Gabon.


CARACTÉRISTIQUES PRINCIPALES
-----------------------------

STRUCTURE DU DOCUMENT
- Couverture : Page d'identification avec QR Code vers eGabon-SIS
- 12 pages de suivi médical comprenant :
  * Identification du patient
  * Vaccinations (contexte gabonais)
  * Antécédents médicaux
  * Suivi médical et consultations
  * État de santé et évaluations
  * Médicaments et traitements
  * Étiquette médicale d'urgence

FONCTIONNALITÉS INTERACTIVES
- Navigation entre les pages (boutons précédent/suivant)
- Menu rapide pour accéder directement à chaque section
- Navigation au clavier (flèches, Page Up/Down, Home/End)
- Cases à cocher interactives pour les vaccinations
- Champs de formulaire modifiables
- Indicateur de page en temps réel
- Design responsive et moderne

SPÉCIFICITÉS GABONAISES
- Couleurs nationales : Vert, Jaune, Bleu du drapeau gabonais
- Vaccinations obligatoires : Fièvre jaune (certificat international requis)
- Centres agréés : Liste des centres de vaccination à Libreville
- Contacts PEV : Numéros d'urgence (1414, 1300)
- Intégration eGabon-SIS : QR Code pour accès au système d'information sanitaire


INSTALLATION ET UTILISATION
----------------------------

PRÉREQUIS
- Navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Aucune installation requise (application web statique)

LANCEMENT
1. Ouvrir le fichier index.html dans un navigateur web
2. Utiliser les boutons de navigation pour parcourir les pages
3. Cliquer sur les champs pour les modifier
4. Cocher les cases de vaccination au besoin

NAVIGATION
- Boutons : Précédent / Suivant
- Menu : Accès direct aux sections
- Clavier :
  * Flèches gauche/droite : Navigation entre pages
  * Page Up / Page Down : Navigation rapide
  * Espace : Page suivante
  * Home : Retour à la couverture
  * End : Dernière page


STRUCTURE DU PROJET
--------------------

carnet-sante-gabonais/
│
├── index.html          # Page principale (structure complète)
├── style.css           # Styles et mise en page
├── script.js           # Fonctionnalités interactives
├── README.md           # Documentation Markdown
├── Readme.txt          # Documentation texte (ce fichier)
│
└── assets/             # Ressources
    ├── icons/          # Icônes personnalisées
    ├── img/            # Images
    └── logos/          # Logos officiels


TECHNOLOGIES UTILISÉES
----------------------

- HTML5 : Structure sémantique
- CSS3 : Styles modernes avec variables CSS
- JavaScript (Vanilla) : Interactivité sans dépendances
- Font Awesome 6.4.0 : Icônes (via CDN)


SECTIONS DU CARNET
-------------------

PAGE 1 : IDENTIFICATION DU PATIENT
- Informations personnelles
- Coordonnées
- Numéro de carnet unique
- Date d'émission

PAGE 2 : VACCINATIONS
- Tableau de suivi vaccinal complet
- Vaccins obligatoires (Fièvre jaune, Tétanos)
- Vaccins recommandés (Hépatites, Typhoïde, Rage, etc.)
- Centres agréés et contacts PEV
- Espace pour certificat international

PAGES 3-4 : ANTÉCÉDENTS MÉDICAUX
- Antécédents familiaux
- Antécédents personnels
- Allergies
- Hospitalisations
- Chirurgies
- Consultations spécialisées

PAGES 5-6 : SUIVI MÉDICAL
- Consultations médicales
- Examens complémentaires
- Bilans de santé
- Suivi chronologique

PAGES 7-8 : ÉTAT DE SANTÉ
- Évaluation générale
- Signes vitaux
- Indicateurs de santé
- Recommandations médicales

PAGES 9-10 : MÉDICAMENTS ET TRAITEMENTS
- Traitements en cours
- Posologie
- Contre-indications
- Interactions médicamenteuses

PAGES 11-12 : ÉTIQUETTE MÉDICALE
- Identification d'urgence
- Informations vitales
- Contacts d'urgence
- Pictogrammes médicaux
- Espace pour notes médicales


CONFIDENTIALITÉ
---------------

Ce document contient des informations médicales confidentielles protégées par
le secret médical. Il doit être conservé précieusement et ne doit être partagé
qu'avec les professionnels de santé autorisés.


CONTEXTE GABONAIS
-----------------

VACCINATIONS OBLIGATOIRES
- Fièvre jaune : Obligatoire pour tous les résidents et voyageurs
- Tétanos : Rappel tous les 10 ans

VACCINATIONS RECOMMANDÉES
- Hépatite A et B
- Typhoïde
- Rage (zone à risque)
- Méningite (saisonnier)
- Grippe (annuel)
- COVID-19

CENTRES DE VACCINATION AGRÉÉS (LIBREVILLE)
- Institut d'Hygiène Publique
- Hôpital d'Instruction des Armées
- Centre Médical International


CONTACTS UTILES
---------------

- PEV (Programme Élargi de Vaccination) : 1414
- Urgence vaccination : 1300


INTÉGRATION eGABON-SIS
-----------------------

Le QR Code présent sur la couverture permet d'accéder au système d'information
sanitaire eGabon-SIS pour :
- Consultation du dossier médical en ligne
- Mise à jour des informations
- Accès aux résultats d'examens
- Historique médical complet


NOTES DE DÉVELOPPEMENT
-----------------------

FONCTIONNALITÉS FUTURES POSSIBLES
- Export PDF du carnet complet
- Sauvegarde locale des données
- Impression optimisée
- Mode hors ligne
- Synchronisation avec eGabon-SIS

PERSONNALISATION
Les couleurs et styles peuvent être modifiés via les variables CSS dans
style.css :
  --gabon-green: #3a9d5a;
  --gabon-yellow: #fcd20a;
  --gabon-blue: #0a4c8c;


LICENCE
-------

Document officiel - Ministère de la Santé et de la Protection Sociale
République Gabonaise - Édition 2024


CRÉDITS
-------

- Développement : USTS (Unité de Suivi et de Traitement Sanitaire)
- Ministère : Ministère de la Santé et de la Protection Sociale
- Pays : République Gabonaise


VERSION
-------

Version : 1.0
Date : 2024
Édition : Gabon 2024


================================================================================

Ce carnet de santé est un document officiel destiné au suivi médical des
adultes au Gabon. Il doit être complété par les professionnels de santé et
conservé par le patient.

================================================================================

