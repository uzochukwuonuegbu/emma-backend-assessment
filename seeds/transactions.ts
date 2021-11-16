
exports.seed = function(knex: any, Promise: any) {
    // Deletes ALL existing entries
    return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        {
          id: '83859498-69e9-45de-b02a-a3120b6e283e',
          user_id: '30ef3db0-fded-4a32-ae1c-cd493efcdaf1',
          date: 1636718400,
          amount: 10000,
          description: 'random description',
          merchant_id: 'd134df81-f696-484e-8ce4-04d004dffa55'
        },
        {
            id: '7b024b4f-76de-4451-bf39-dcf231978d5c',
            user_id: '70636fb4-a6e8-4bfc-b34c-d9b27037ddaa',
            date: 1636718500,
            amount: 8000,
            description: 'random description',
            merchant_id: 'd134df81-f696-484e-8ce4-04d004dffa55'
          },
          {
            id: '3473ea45-43e1-4f7e-82eb-88d1ea11f84a',
            user_id: 'b5bbbe0b-8b17-4729-9449-839e9949421e',
            date: 1636718600,
            amount: 2000,
            description: 'random description',
            merchant_id: 'baa79e1c-18ce-43ec-bb4b-4d0bdb168440'
          },
          {
            id: 'cd3043c3-a718-4415-9f85-63268c4435bb',
            user_id: '30ef3db0-fded-4a32-ae1c-cd493efcdaf1',
            date: 1636718700,
            amount: 10000,
            description: 'random description',
            merchant_id: '41c1a8b4-e22a-4d69-9c7f-0ba59d102a0f'
          },
          {
            id: '66dc03d3-5271-4f40-9678-ffabfe94b020',
            user_id: 'b5bbbe0b-8b17-4729-9449-839e9949421e',
            date: 1636718800,
            amount: 10000,
            description: 'random description',
            merchant_id: 'd22d3681-2a63-4432-b892-e06a6d7d2c75'
          },
          {
            id: '823fef42-8257-4e47-9511-cc9cc8bd4fe4',
            user_id: 'c6dd0bb9-e629-45bc-b646-04174fb90cb1',
            date: 1636718900,
            amount: 10000,
            description: 'random description',
            merchant_id: 'baa79e1c-18ce-43ec-bb4b-4d0bdb168440'
          },
          {
            id: '3b17f0ac-b7ec-4c1b-83cd-5182dc07027e',
            user_id: '30ef3db0-fded-4a32-ae1c-cd493efcdaf1',
            date: 1636719000,
            amount: 100000,
            description: 'random description',
            merchant_id: '0c106495-052f-4869-953f-a26a86218d7d'
          },
          {
            id: 'cbeb4a40-cabf-4c6e-9d68-3a575134ab44',
            user_id: '70636fb4-a6e8-4bfc-b34c-d9b27037ddaa',
            date: 1636719100,
            amount: 10000,
            description: 'random description',
            merchant_id: '0c106495-052f-4869-953f-a26a86218d7d'
          },
          {
            id: '3adeb41b-8d04-4491-9350-b4b661acb2cd',
            user_id: '30ef3db0-fded-4a32-ae1c-cd493efcdaf1',
            date: 1636719200,
            amount: 4300,
            description: 'random description',
            merchant_id: 'baa79e1c-18ce-43ec-bb4b-4d0bdb168440'
          },
          {
            id: 'd299483f-aaf7-4ade-b768-f491d6f7073b',
            user_id: '70636fb4-a6e8-4bfc-b34c-d9b27037ddaa',
            date: 1636719300,
            amount: 3900,
            description: 'random description',
            merchant_id: '1a7eb2bf-f82f-4ec0-bf59-41ea203b55d4'
          },
          {
            id: '023cf8b1-b2a3-463c-aa86-5663b16431f0',
            user_id: 'b5bbbe0b-8b17-4729-9449-839e9949421e',
            date: 1636719400,
            amount: 50000,
            description: 'random description',
            merchant_id: '4e6c21e0-ad7a-4d0d-aab5-e61d592b0783'
          },
          {
            id: '7fbd529a-65f1-4635-8b0e-a46e1c89e225',
            user_id: 'b5bbbe0b-8b17-4729-9449-839e9949421e',
            date: 1636719500,
            amount: 37990,
            description: 'random description',
            merchant_id: '4e6c21e0-ad7a-4d0d-aab5-e61d592b0783'
          },
          {
            id: '18aee21e-03c0-4222-b0b0-3136ceffae8f',
            user_id: '70636fb4-a6e8-4bfc-b34c-d9b27037ddaa',
            date: 1636719600,
            amount: 45440,
            description: 'random description',
            merchant_id: '1a7eb2bf-f82f-4ec0-bf59-41ea203b55d4'
          },
          {
            id: '451c3b05-d922-4c65-9f5a-b7ddd33c1af9',
            user_id: 'c6dd0bb9-e629-45bc-b646-04174fb90cb1',
            date: 1636719700,
            amount: 567710,
            description: 'random description',
            merchant_id: '138c128c-9ce9-4dfa-939e-49bc4bccc164'
          },
          {
            id: '0579cdc5-5fe1-4f12-97da-748b128b7cf1',
            user_id: 'b5bbbe0b-8b17-4729-9449-839e9949421e',
            date: 1636719800,
            amount: 58880,
            description: 'random description',
            merchant_id: '4e6c21e0-ad7a-4d0d-aab5-e61d592b0783'
          },
          {
            id: '54eeeb8d-a470-4623-9432-d3ebb6ae34a8',
            user_id: '5434348b-3c21-42d5-9381-b41031587d68',
            date: 1636719900,
            amount: 1000,
            description: 'random description',
            merchant_id: '1a7eb2bf-f82f-4ec0-bf59-41ea203b55d4'
          },
          {
            id: '0d25513b-7502-4799-b3fe-d69d4dde53e6',
            user_id: 'b5bbbe0b-8b17-4729-9449-839e9949421e',
            date: 1636720000,
            amount: 37000,
            description: 'random description',
            merchant_id: '138c128c-9ce9-4dfa-939e-49bc4bccc164'
          },
          {
            id: 'd146da3f-0a55-486a-b758-fbc3a53eb634',
            user_id: 'c6dd0bb9-e629-45bc-b646-04174fb90cb1',
            date: 1636720100,
            amount: 43000,
            description: 'random description',
            merchant_id: '24a47370-eaaf-4c74-a27d-117cfa444db0'
          },
          {
            id: '5a71e0bd-c078-4101-b86c-cc0aacc357db',
            user_id: '0bbad917-0f19-4d20-9ba4-eee37086f23e',
            date: 1636720200,
            amount: 12000,
            description: 'random description',
            merchant_id: '138c128c-9ce9-4dfa-939e-49bc4bccc164'
          },
          {
            id: '2d88252d-587e-4e47-9b42-cc5251c438ad',
            user_id: '5434348b-3c21-42d5-9381-b41031587d68',
            date: 1636720300,
            amount: 15000,
            description: 'random description',
            merchant_id: '98bb3a08-3507-439f-a14d-349ad4f3a5d5'
          },
          {
            id: '87e64647-01e4-4b50-8ad7-e0cf57815eb7',
            user_id: 'b5bbbe0b-8b17-4729-9449-839e9949421e',
            date: 1636720400,
            amount: 10000,
            description: 'random description',
            merchant_id: 'c4fb5a52-c688-4838-9b65-9739231f5813'
          },
          {
            id: '265a2fed-271a-4101-98b5-b165d8dba082',
            user_id: '0bbad917-0f19-4d20-9ba4-eee37086f23e',
            date: 1636720500,
            amount: 2100,
            description: 'random description',
            merchant_id: '98bb3a08-3507-439f-a14d-349ad4f3a5d5'
          },
          {
            id: '208db375-0dc4-4d7c-8c99-df910b49ea90',
            user_id: '5d935f37-3631-45c2-9653-b756e2855f62',
            date: 1636720600,
            amount: 23000,
            description: 'random description',
            merchant_id: '0cf360ae-5698-4053-a788-4c19bcf36241'
          },
          {
            id: '437f2fc0-d334-4292-bbe7-9c16edbc4a2e',
            user_id: '5d935f37-3631-45c2-9653-b756e2855f62',
            date: 1636720700,
            amount: 48090,
            description: 'random description',
            merchant_id: 'e9e3ebf5-064b-408f-9ba6-29eb2d44f01d'
          },
          {
            id: '22069389-cbe9-44cc-9130-9dc6d27ba58f',
            user_id: '0bbad917-0f19-4d20-9ba4-eee37086f23e',
            date: 1636720800,
            amount: 58000,
            description: 'random description',
            merchant_id: '4e6c21e0-ad7a-4d0d-aab5-e61d592b0783'
          },
          {
            id: 'fc4d3bd7-6715-41d1-85cd-98211fcb2dc4',
            user_id: '5d935f37-3631-45c2-9653-b756e2855f62',
            date: 1636720900,
            amount: 10000,
            description: 'random description',
            merchant_id: '0cf360ae-5698-4053-a788-4c19bcf36241'
          },
          {
            id: '7f537102-e243-4fc3-91fc-f5e504847b30',
            user_id: '5d935f37-3631-45c2-9653-b756e2855f62',
            date: 1636721000,
            amount: 43100,
            description: 'random description',
            merchant_id: 'e9e3ebf5-064b-408f-9ba6-29eb2d44f01d'
          },
          {
            id: '3faf38d9-aeb6-427c-b75c-e8fb9d52226b',
            user_id: '5d935f37-3631-45c2-9653-b756e2855f62',
            date: 1636721100,
            amount: 32000,
            description: 'random description',
            merchant_id: '8cd99907-a223-462b-a925-e4213cfb19a8'
          },
          {
            id: 'd07eda3d-fb9f-467f-844d-ff2605d6425c',
            user_id: '08db78af-86d8-46fd-9585-c18125b82c02',
            date: 1636721200,
            amount: 8900,
            description: 'random description',
            merchant_id: '8cd99907-a223-462b-a925-e4213cfb19a8'
          },
          {
            id: 'fa087883-4854-420c-8164-58ef37e69da3',
            user_id: '0bbad917-0f19-4d20-9ba4-eee37086f23e',
            date: 1636721300,
            amount: 9000,
            description: 'random description',
            merchant_id: '8cd99907-a223-462b-a925-e4213cfb19a8'
          },
          {
            id: '5245dff0-bd30-4c8c-85a6-2df25a46c507',
            user_id: '5caa076d-ebf1-42d1-99de-81816d476f90',
            date: 1636721400,
            amount: 67100,
            description: 'random description',
            merchant_id: '8cd99907-a223-462b-a925-e4213cfb19a8'
          },
          {
            id: '6020ec37-7b99-4629-aaa5-35d5654af92c',
            user_id: '08db78af-86d8-46fd-9585-c18125b82c02',
            date: 1636721500,
            amount: 34000,
            description: 'random description',
            merchant_id: '0cf360ae-5698-4053-a788-4c19bcf36241'
          },
          {
            id: 'be441eb0-e806-4502-98df-3c793b6f4c44',
            user_id: '5d935f37-3631-45c2-9653-b756e2855f62',
            date: 1636721600,
            amount: 4730,
            description: 'random description',
            merchant_id: '0cf360ae-5698-4053-a788-4c19bcf36241'
          },
          {
            id: '2b3932e1-351e-46ea-8b46-15bf775daa67',
            user_id: '08db78af-86d8-46fd-9585-c18125b82c02',
            date: 1636721700,
            amount: 30000,
            description: 'random description',
            merchant_id: '8a38df73-8990-4c29-b6f9-f100790d8097'
          },
          {
            id: 'a23f4611-d29d-4385-a0cc-c5fc966e7aad',
            user_id: '5caa076d-ebf1-42d1-99de-81816d476f90',
            date: 1636721800,
            amount: 10500,
            description: 'random description',
            merchant_id: '8a38df73-8990-4c29-b6f9-f100790d8097'
          }
      ]);
    });
  };