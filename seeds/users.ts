exports.seed = function(knex: any, Promise: any) {
    // Deletes ALL existing entries
    return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '30ef3db0-fded-4a32-ae1c-cd493efcdaf1',
          first_name: 'uzo',
          last_name: 'onuegbu'
        },
        {
          id: '70636fb4-a6e8-4bfc-b34c-d9b27037ddaa',
          first_name: 'uzo1',
          last_name: 'onuegbu1'
        },
        {
          id: 'b5bbbe0b-8b17-4729-9449-839e9949421e',
          first_name: 'uzo2',
          last_name: 'onuegbu2'
        },
        {
            id: 'c6dd0bb9-e629-45bc-b646-04174fb90cb1',
            first_name: 'uzo3',
            last_name: 'onuegbu3'
          },
          {
            id: '5434348b-3c21-42d5-9381-b41031587d68',
            first_name: 'uzo3',
            last_name: 'onuegbu3'
          },
          {
            id: '0bbad917-0f19-4d20-9ba4-eee37086f23e',
            first_name: 'uzo4',
            last_name: 'onuegbu4'
          },
          {
            id: '08db78af-86d8-46fd-9585-c18125b82c02',
            first_name: 'uzo5',
            last_name: 'onuegbu5'
          },
          {
            id: '5caa076d-ebf1-42d1-99de-81816d476f90',
            first_name: 'uzo6',
            last_name: 'onuegbu6'
          },
          {
            id: '5d935f37-3631-45c2-9653-b756e2855f62',
            first_name: 'uzo7',
            last_name: 'onuegbu7'
          },
      ]);
    });
  };