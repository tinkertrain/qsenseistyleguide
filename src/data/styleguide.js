const categories = [
  {
    name: 'Design Elements',
    items: [
      {
        name: 'Colors'
      },
      {
        name: 'Typography'
      }
    ]
  },
  {
    name: 'UI Components',
    items: [
      {
        name: 'Buttons'
      },
      {
        name: 'Form Elements'
      }
    ]
  }
];

const palette = {
  grayscale: [
    {
      name: '$darkgray',
      value: '#131311',
      dark: true
    },
    {
      name: '$charcoal',
      value: '#2e2e2a',
      dark: true
    },
    {
      name: '$mediumgray',
      value: '#716f69'
    },
    {
      name: '$lightgrey',
      value: '#dedbd6'
    }
  ],
  brand: [
    {
      name: '$blue',
      value: '#01ace0'
    },
    {
      name: '$green',
      value: '#13be00'
    },
    {
      name: '$yellow',
      value: '#ffe701'
    },
    {
      name: '$red',
      value: '#eb4843'
    }
  ]
};

export {
  categories,
  palette
};
