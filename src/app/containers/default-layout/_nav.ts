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
        url: '/buttons/button-groups',
      },
      {
        name: 'Lister les utilisateurs',
        url: '/buttons/button-groups',
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
    url: '/projets',
    iconComponent: { name: 'cil-file' },
    children: [
      {
        name: 'Ajouter un projet',
        url: '/buttons/button-groups',
      },
      {
        name: 'Lister les projets',
        url: '/buttons/button-groups',
      },
      {
        name: 'Valider un commentaire',
        url: '/buttons/dropdowns',
      },
    ],
  },

  {
    title: true,
    name: 'Gestions des sondages',
  },

  {
    name: 'Sondages',
    url: '/forms',
    iconComponent: { name: 'cil-chart' },
    children: [
      {
        name: 'Ajouter un sondage',
        url: '/forms/form-control',
      },
      {
        name: 'Lister les sondages',
        url: '/forms/select',
        // children: [
        //   {
        //     name: '',
        //     url: '/buttons/button-groups',
        //   },
        // ],
      },
      {
        name: 'Mes sondages',
        url: '/forms/checks-radios',
      },
      // {
      //   name: 'Range',
      //   url: '/forms/range',
      // },
      // {
      //   name: 'Input Group',
      //   url: '/forms/input-group',
      // },
      // {
      //   name: 'Floating Labels',
      //   url: '/forms/floating-labels',
      // },
      // {
      //   name: 'Layout',
      //   url: '/forms/layout',
      // },
      // {
      //   name: 'Validation',
      //   url: '/forms/validation',
      // },
    ],
  },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' },
  // },

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
    name: "Propositions d'idée",
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Proposer une idée',
        url: '/notifications/alerts',
      },
      {
        name: 'Valider un commentaire',
        url: '/notifications/badges',
      },
      {
        name: 'Liste des idées',
        url: '/notifications/modal',
      },
      {
        name: 'liste des idées signalées',
        url: '/notifications/toasts',
      },
    ],
  },

  {
    title: true,
    name: 'Gestions des problèmes',
  },
  {
    name: 'Problèmes',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Liste des problèmes',
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
    name: 'Légalisations ',
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
    name: 'Actes de décès ',
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
