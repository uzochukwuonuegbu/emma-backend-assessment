exports.seed = function(knex: any, Promise: any) {
    // Deletes ALL existing entries
    return knex('merchants').del()
    .then(function () {
      // Inserts seed entries
      return knex('merchants').insert([
        {
          id: 'd134df81-f696-484e-8ce4-04d004dffa55',
          display_name: 'uzo',
          icon_url: 'google.com',
          funny_gif_url: 'google.com'
        },
        {
          id: 'baa79e1c-18ce-43ec-bb4b-4d0bdb168440',
          display_name: 'uzo1',
          icon_url: 'google.com',
          funny_gif_url: 'google.com'
        },
        {
          id: '138c128c-9ce9-4dfa-939e-49bc4bccc164',
          display_name: 'uzo2',
          icon_url: 'google.com',
          funny_gif_url: 'google.com'
        },
        {
            id: 'c4fb5a52-c688-4838-9b65-9739231f5813',
            display_name: 'uzo3',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: '0cf360ae-5698-4053-a788-4c19bcf36241',
            display_name: 'uzo3',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: '8a38df73-8990-4c29-b6f9-f100790d8097',
            display_name: 'uzo4',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: '41c1a8b4-e22a-4d69-9c7f-0ba59d102a0f',
            display_name: 'uzo5',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: 'd22d3681-2a63-4432-b892-e06a6d7d2c75',
            display_name: 'uzo6',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: '0c106495-052f-4869-953f-a26a86218d7d',
            display_name: 'uzo7',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: '1a7eb2bf-f82f-4ec0-bf59-41ea203b55d4',
            display_name: 'uzo8',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: '24a47370-eaaf-4c74-a27d-117cfa444db0',
            display_name: 'uzo9',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: '98bb3a08-3507-439f-a14d-349ad4f3a5d5',
            display_name: 'uzo10',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: 'e9e3ebf5-064b-408f-9ba6-29eb2d44f01d',
            display_name: 'uzo11',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: '8cd99907-a223-462b-a925-e4213cfb19a8',
            display_name: 'uzo12',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          },
          {
            id: '4e6c21e0-ad7a-4d0d-aab5-e61d592b0783',
            display_name: 'uzo13',
            icon_url: 'google.com',
            funny_gif_url: 'google.com'
          }
      ]);
    });
  };