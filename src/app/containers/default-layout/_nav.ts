import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },

  {
    title: true,
    name: 'Gestions des utilisateurs',
  },
  // {
  //   title: true,
  //   name: 'Theme',
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' },
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' },
  // },
  // {
  //   name: 'Components',
  //   title: true,
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Accordion',
  //       url: '/base/accordion',
  //     },
  //     {
  //       name: 'Breadcrumbs',
  //       url: '/base/breadcrumbs',
  //     },
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //     },
  //     {
  //       name: 'Carousel',
  //       url: '/base/carousel',
  //     },
  //     {
  //       name: 'Collapse',
  //       url: '/base/collapse',
  //     },
  //     {
  //       name: 'List Group',
  //       url: '/base/list-group',
  //     },
  //     {
  //       name: 'Navs & Tabs',
  //       url: '/base/navs',
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/pagination',
  //     },
  //     {
  //       name: 'Placeholder',
  //       url: '/base/placeholder',
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //     },
  //     {
  //       name: 'Spinners',
  //       url: '/base/spinners',
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/buttons/button-groups',
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //     },
  //   ],
  // },

  {
    name: 'Utilisateurs',
    url: '/utilisateurs',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Ajouter un utilisateur',
        url: '/',
      },
      {
        name: 'Lister les utilisateurs',
        url: '/',
      },
      // {
      //   name: 'Dropdowns',
      //   url: '/buttons/dropdowns',
      // },
    ],
  },

  {
    title: true,
    name: 'Gestions des Projets',
  },
  {
    name: 'Projets',
    url: '/',
    iconComponent: { name: 'cil-file' },
    children: [
      {
        name: 'Ajouter un projet',
        url: '/',
      },
      {
        name: 'Lister les projets',
        url: '/',
      },
      {
        name: 'Valider un commentaire',
        url: '/',
      },
    ],
  },
  {
    title: true,
    name: 'Gestions des sondages',
  },

  {
    name: 'Sondages',
    url: '/sondages',
    iconComponent: { name: 'cil-chart' },
    children: [
      {
        name: 'Ajouter un sondage',
        url: '/sondages/ajout-sondage',
      },
      {
        name: 'Lister les sondages',
        url: '/sondages/liste-sondages',
      },
      {
        name: 'Mes sondages',
        url: '/sondages/mes-sondages',
      },
    ],
  },
  {
    title: true,
    name: 'Gestions des informations',
  },
  {
    name: 'Informations',
    iconComponent: { name: 'cil-notes' },
    url: '/icons',
    children: [
      {
        name: 'Ajouter une information',
        url: '/icons/coreui-icons',
        // badge: {
        //   color: 'success',
        //   text: 'FREE',
        // },
      },
      {
        name: 'Lister les informations',
        url: '/icons/flags',
      },
      // {
      //   name: 'CoreUI Brands',
      //   url: '/icons/brands',
      // },
    ],
  },
  {
    name: "Propositions d'id??e",
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Proposer une id??e',
        url: '/notifications/alerts',
      },
      {
        name: 'Valider un commentaire',
        url: '/notifications/badges',
      },
      {
        name: 'Liste des id??es',
        url: '/notifications/modal',
      },
      {
        name: 'liste des id??es signal??es',
        url: '/notifications/toasts',
      },
    ],
  },

  {
    title: true,
    name: 'Gestions des probl??mes',
  },
  {
    name: 'Probl??mes',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Liste des probl??mes',
        url: '/notifications/alerts',
      },
    ],
  },

  {
    title: true,
    name: 'Gestions de la collecte',
  },

  {
    name: 'Collectes de fonds',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Liste des collectes',
        url: '/notifications/alerts',
      },
    ],
  },
  {
    title: true,
    name: 'Gestions de la carte',
  },

  {
    name: 'Cartes',
    url: '/notifications',
    iconComponent: { name: 'cil-map' },
    children: [
      {
        name: "S'identifier",
        url: '/notifications/alerts',
      },
      {
        name: 'Evaluer un lieu',
        url: '/notifications/badges',
      },
    ],
  },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    title: true,
    name: 'Services Administratifs',
  },
  {
    name: 'Acte de naissance',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Ajouter une demarche',
        url: '/login',
      },
      {
        name: 'Liste des demarches',
        url: '/register',
      },
    ],
  },
  {
    name: 'L??galisations ',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Ajouter une demarche',
        url: '/login',
      },
      {
        name: 'Liste des demarches',
        url: '/register',
      },
    ],
  },
  {
    name: 'Actes de d??c??s ',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Ajouter une demarche',
        url: '/login',
      },
      {
        name: 'Liste des demarches',
        url: '/register',
      },
    ],
  },
];
