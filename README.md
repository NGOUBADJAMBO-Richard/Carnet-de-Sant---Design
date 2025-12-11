# Carnet de Santé Gabonais - USTS

## 📋 Description

Application web interactive de Carnet de Santé pour Adultes développée pour la République Gabonaise par l'Unité de Suivi et de Traitement Sanitaire (USTS). Ce document officiel permet le suivi médical complet des patients adultes au Gabon.

## 🎯 Caractéristiques principales

### Structure du document

- Couverture : Page d'identification avec QR Code vers eGabon-SIS
- 12 pages de suivi médical comprenant :
  - Identification du patient
  - Vaccinations (contexte gabonais)
  - Antécédents médicaux
  - Suivi médical et consultations
  - État de santé et évaluations
  - Médicaments et traitements
  - Étiquette médicale d'urgence

### Fonctionnalités interactives

- ✅ Navigation entre les pages (boutons précédent/suivant)
- ✅ Menu rapide pour accéder directement à chaque section
- ✅ Navigation au clavier (flèches, Page Up/Down, Home/End)
- ✅ Cases à cocher interactives pour les vaccinations
- ✅ Champs de formulaire modifiables
- ✅ Indicateur de page en temps réel
- ✅ Design responsive et moderne

### Spécificités gabonaises

- 🟢 Couleurs nationales : Vert, Jaune, Bleu du drapeau gabonais
- 🏥 Vaccinations obligatoires : Fièvre jaune (certificat international requis)
- 📍 Centres agréés : Liste des centres de vaccination à Libreville
- 📞 Contacts PEV : Numéros d'urgence (1414, 1300)
- 🔗 Intégration eGabon-SIS : QR Code pour accès au système d'information sanitaire

## 🚀 Installation et utilisation

### Prérequis

- Navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Aucune installation requise (application web statique)

### Lancement

1. Ouvrir le fichier `index.html` dans un navigateur web
2. Utiliser les boutons de navigation pour parcourir les pages
3. Cliquer sur les champs pour les modifier
4. Cocher les cases de vaccination au besoin

### Navigation

- Boutons : Précédent / Suivant
- Menu : Accès direct aux sections
- Clavier :
  - `←` / `→` : Navigation entre pages
  - `Page Up` / `Page Down` : Navigation rapide
  - `Espace` : Page suivante
  - `Home` : Retour à la couverture
  - `End` : Dernière page

## 📁 Structure du projet

```
carnet-sante-gabonais/
│
├── index.html          # Page principale (structure complète)
├── style.css           # Styles et mise en page
├── script.js           # Fonctionnalités interactives
├── README.md           # Documentation (ce fichier)
├── Readme.txt          # Documentation texte
│
└── assets/             # Ressources
    ├── icons/          # Icônes personnalisées
    ├── img/            # Images
    └── logos/          # Logos officiels
```

## 🛠️ Technologies utilisées

- HTML5 : Structure sémantique
- CSS3 : Styles modernes avec variables CSS
- JavaScript (Vanilla) : Interactivité sans dépendances
- Font Awesome 6.4.0 : Icônes (via CDN)

## 📄 Sections du carnet

### Page 1 : Identification du patient

- Informations personnelles
- Coordonnées
- Numéro de carnet unique
- Date d'émission

### Page 2 : Vaccinations

- Tableau de suivi vaccinal complet
- Vaccins obligatoires (Fièvre jaune, Tétanos)
- Vaccins recommandés (Hépatites, Typhoïde, Rage, etc.)
- Centres agréés et contacts PEV
- Espace pour certificat international

### Pages 3-4 : Antécédents médicaux

- Antécédents familiaux
- Antécédents personnels
- Allergies
- Hospitalisations
- Chirurgies
- Consultations spécialisées

### Pages 5-6 : Suivi médical

- Consultations médicales
- Examens complémentaires
- Bilans de santé
- Suivi chronologique

### Pages 7-8 : État de santé

- Évaluation générale
- Signes vitaux
- Indicateurs de santé
- Recommandations médicales

### Pages 9-10 : Médicaments et traitements

- Traitements en cours
- Posologie
- Contre-indications
- Interactions médicamenteuses

### Pages 11-12 : Étiquette médicale

- Identification d'urgence
- Informations vitales
- Contacts d'urgence
- Pictogrammes médicaux
- Espace pour notes médicales

## 🔒 Confidentialité

Ce document contient des informations médicales confidentielles protégées par le secret médical. Il doit être conservé précieusement et ne doit être partagé qu'avec les professionnels de santé autorisés.

## 🌍 Contexte gabonais

### Vaccinations obligatoires

- Fièvre jaune : Obligatoire pour tous les résidents et voyageurs
- Tétanos : Rappel tous les 10 ans

### Vaccinations recommandées

- Hépatite A et B
- Typhoïde
- Rage (zone à risque)
- Méningite (saisonnier)
- Grippe (annuel)
- COVID-19

### Centres de vaccination agréés (Libreville)

- Institut d'Hygiène Publique
- Hôpital d'Instruction des Armées
- Centre Médical International

## 📞 Contacts utiles

- PEV (Programme Élargi de Vaccination) : 1414
- Urgence vaccination : 1300

## 🔗 Intégration eGabon-SIS

Le QR Code présent sur la couverture permet d'accéder au système d'information sanitaire eGabon-SIS pour :

- Consultation du dossier médical en ligne
- Mise à jour des informations
- Accès aux résultats d'examens
- Historique médical complet

## 📝 Notes de développement

### Fonctionnalités futures possibles

- Export PDF du carnet complet
- Sauvegarde locale des données
- Impression optimisée
- Mode hors ligne
- Synchronisation avec eGabon-SIS

### Personnalisation

Les couleurs et styles peuvent être modifiés via les variables CSS dans `style.css` :

```css
:root {
  --gabon-green: #3a9d5a;
  --gabon-yellow: #fcd20a;
  --gabon-blue: #0a4c8c;
}
```

## 📜 Licence

Document officiel - Ministère de la Santé et de la Protection Sociale  
République Gabonaise - Édition 2024

## 👥 Crédits

- Développement : USTS (Unité de Suivi et de Traitement Sanitaire)
- Ministère : Ministère de la Santé et de la Protection Sociale
- Pays : République Gabonaise

## 📅 Version

Version : 1.0  
Date : 2024  
Édition : Gabon 2024

---

_Ce carnet de santé est un document officiel destiné au suivi médical des adultes au Gabon. Il doit être complété par les professionnels de santé et conservé par le patient._
# Carnet-de-Sant---Design
