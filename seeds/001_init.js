exports.seed = knex =>
  // Deletes ALL existing entries
  knex('users').del()
    // Inserts seed entries
    .then(() => knex('users').insert([
      { name: 'josh' },
      { name: 'hamid' },
    ]),
    )
;
