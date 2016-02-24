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
      },
      {
        name: 'Code'
      },
      {
        name: 'Layout'
      },
      {
        name: 'Icons'
      }
    ]
  }
];

const palette = {
  grayscale: [
    {
      name: '$black',
      value: '#252521',
      dark: true
    },
    {
      name: '$darkgray',
      value: '#2e2e2a',
      dark: true
    },
    {
      name: '$mediumgray',
      value: '#716f69'
    },
    {
      name: '$lightgrey',
      value: '#dad8d0'
    }
  ],
  primary: [
    {
      name: '$brand-blue',
      value: '#01ace0'
    },
    {
      name: '$brand-green',
      value: '#13be00'
    },
    {
      name: '$brand-yellow',
      value: '#ffe701'
    },
    {
      name: '$brand-red',
      value: '#eb4843'
    }
  ]
};

export {
  categories,
  palette
};
