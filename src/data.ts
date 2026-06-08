/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  reportUrl: string; // Ready for GitHub link or report PDF URL
  details?: string[]; // Extra bullet points for detailed views
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
  lucideIconName: string; // Name of Lucide React icon to map
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    subTitle: string;
    socialLinks: {
      github: string;
      linkedin: string;
    };
  };
  about: {
    title: string;
    paragraphs: string[];
    highlights: { label: string; value: string }[];
    softSkills: string[];
  };
  skillGroups: SkillGroup[];
  verifiedTools: string[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "RADJI Kefyl",
    title: "Sécurisation Systèmes, Réseaux & Cloud",
    subTitle: "Je suis passionné par l'investigation numérique et la sécurité réseau ; je développe des compétences dans ce sens à travers mes projets.",
    socialLinks: {
      github: "https://github.com/", // Remplacez par votre lien GitHub réel
      linkedin: "https://www.linkedin.com/in/" // Remplacez par votre lien LinkedIn réel
    }
  },
  about: {
    title: "À Propos de Moi",
    paragraphs: [
      "Étudiant spécialisé en Cybersécurité, je me passionne pour la sécurité réseau, l'investigation numérique et le fonctionnement des infrastructures IT réelles ou virtualisées. Mon approche est axée sur la pratique et la simulation d'environnements sécurisés pour mieux anticiper les menaces. Mon objectif est d'intégrer une structure professionnelle pour mettre à profit mes compétences et continuer à évoluer auprès d'experts."
    ],
    highlights: [
      { label: "Domaine principal", value: "Systèmes, Réseaux & Sécurité" },
      { label: "Laboratoires", value: "Wazuh SIEM / GNS3 / Active Directory" },
      { label: "Environnements", value: "Linux RedHat, Windows Server, Azure" },
      { label: "Langages & Scripts", value: "Python, Bash, SQL, Java" }
    ],
    softSkills: [
      "Esprit d'équipe",
      "Adaptabilité",
      "Capacité à travailler sous pression",
      "Rigueur & Réactivité"
    ]
  },
  skillGroups: [
    {
      category: "Administration Réseau",
      description: "Conception, routage et simulation d'architectures réseau.",
      skills: [
        "Architecture & Routage réseau (niveau CCNA)",
        "Logiciel de simulation réseau GNS3",
        "Protocoles de routage standard et segmentation VLAN",
        "Dépannage de configurations de routage et commutation"
      ],
      lucideIconName: "Network"
    },
    {
      category: "Administration Système",
      description: "Gestion et administration sécurisée des serveurs.",
      skills: [
        "Administration de serveurs Windows Server",
        "Administration Linux RedHat (RH124)",
        "Configuration de services réseau et gestion des droits",
        "Automatisation de scripts d'administration système"
      ],
      lucideIconName: "Server"
    },
    {
      category: "Cryptographie & Protection des Données",
      description: "Mise en œuvre des fondations de la confidentialité et gestion d'accès.",
      skills: [
        "Mise en place d'une infrastructure PKI complète",
        "Administration et sécurisation d'Active Directory (AD)",
        "Gestion des certificats numériques et chiffrement",
        "Application de politiques de sécurité (GPO)"
      ],
      lucideIconName: "KeyRound"
    },
    {
      category: "Cloud Computing",
      description: "Déploiement et gestion de ressources réseau et de machines virtuelles dans le cloud.",
      skills: [
        "Compétences Azure acquises via les cursus AZ-900 & AZ-104",
        "Gestion des identités (Entra ID) et contrôle d'accès (RBAC)",
        "Déploiement de machines virtuelles et réseaux virtuels",
        "Surveillance des coûts et des performances cloud"
      ],
      lucideIconName: "Cloud"
    },
    {
      category: "Investigation Numérique & Sécurité",
      description: "Détection des intrusions, analyse de logs et filtrage réseau.",
      skills: [
        "Déploiement et configuration fine de pare-feux Fortigate",
        "Mise en place du SIEM Wazuh avec règles de détection",
        "Simulation de cyberattaques et analyse d'indicateurs de compromission (IOC)",
        "Durcissement logique de serveurs et des flux"
      ],
      lucideIconName: "ShieldAlert"
    },
    {
      category: "Programmation & Bases de données",
      description: "Développement d'outils, scripts de sécurité et requiétage.",
      skills: [
        "Python (automatisation, manipulation système via module OS, appels d'API)",
        "Java (applications utilitaires de base, interfaces utilisateur légères)",
        "Requêtes de bases de données relationnelles en SQL",
        "Déploiement et requiétage PostgreSQL et SQLite"
      ],
      lucideIconName: "Code2"
    }
  ],
  verifiedTools: [
    "Python",
    "Java",
    "C",
    "VMware",
    "GNS3",
    "Fortigate",
    "Azure",
    "Linux",
    "Windows",
    "Docker"
  ],
  projects: [
    {
      id: "proj-1",
      title: "Mise en place d'une infrastructure Active Directory de domaine",
      description: "Conception complète d'un domaine d'entreprise fictif avec serveurs redondants, configuration des unités d'organisation (OU), des comptes utilisateurs, et création de politiques de groupe (GPO) restrictives conformes aux recommandations ANSSI pour restreindre les privilèges locaux.",
      category: "Système & Sécurité",
      technologies: ["Windows Server", "Active Directory", "PowerShell", "VMware"],
      reportUrl: "#" // Insérez le lien GitHub pour ce projet ici
    },
    {
      id: "proj-2",
      title: "Déploiement d'une solution de supervision réseau (SolarWinds NPM)",
      description: "Installation, configuration et intégration du protocole SNMP pour monitorer la disponibilité, la bande passante et l'utilisation du CPU des commutateurs et serveurs. Création d'un tableau de bord synthétique et d'alertes par courriel lors du dépassement de seuil critique.",
      category: "Administration Réseau",
      technologies: ["SolarWinds NPM", "SNMP", "GNS3", "Réseau Commuté"],
      reportUrl: "#" // Insérez le lien GitHub pour ce projet ici
    },
    {
      id: "proj-3",
      title: "Déploiement d'une infrastructure PKI d'entreprise",
      description: "Installation d'une autorité de certification (CA) racine hors ligne et d'une sous-autorité intermédiaire émettrice. Gestion du cycle de vie des certificats numériques, configuration des profils de certificat et révocation (publication de listes de révocation CRL).",
      category: "Cryptographie",
      technologies: ["ADCS", "PKI", "Sécurité des Certificats", "Chiffrement"],
      reportUrl: "#" // Insérez le lien GitHub pour ce projet ici
    },
    {
      id: "proj-4",
      title: "SIEM Wazuh & Mini-Lab d'attaques",
      description: "Déploiement du SIEM Wazuh avec agents légers installés sur machines Windows/Linux. Simulation de scénarios malveillants réels (attaques par force brute, exécution de scripts suspects) pour observer la remontée des alertes de sécurité et l'indexation de logs.",
      category: "Cybersécurité",
      technologies: ["SIEM Wazuh", "Log Analysis", "Cyber-Attaques", "Linux / Windows VM"],
      reportUrl: "#" // Insérez le lien GitHub pour ce projet ici
    },
    {
      id: "proj-5",
      title: "SP_Sentinel - Solution contre le Smishing",
      description: "Développement d'une application intelligente et d'outils d'analyse pour détecter et signaler les campagnes de smishing (SMS d'hameçonnage) ciblant spécifiquement la population togolaise, l'aidant à valider les liens ou numéros suspects.",
      category: "Développement & Sécurité",
      technologies: ["Python", "Java", "React", "NLP Toolkit", "API"],
      reportUrl: "#" // Insérez le lien GitHub pour ce projet ici
    },
    {
      id: "proj-6",
      title: "Solution de vidéosurveillance institutionnelle",
      description: "Étude, dimensionnement et mise en place d'une infrastructure de vidéosurveillance moderne pour une institution bancaire. Configuration des serveurs de stockage (NVR), découpage réseau par VLAN pour isoler le trafic vidéo et sécurisation des flux de caméras IP.",
      category: "Réseaux & Sécurité Physique",
      technologies: ["IP Cameras", "CCTV Security", "VLAN Segmentation", "NVR Storage"],
      reportUrl: "#" // Insérez le lien GitHub pour ce projet ici
    }
  ]
};
