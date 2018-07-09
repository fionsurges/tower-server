
exports.seed = function(knex, Promise) {
  return knex('recommendations').del()
    .then(function () {
      return knex('recommendations').insert([
        {
          id: 1, 
          bookTitle: 'Tiny Beautiful Things',
          recommendedBy: 'Meghan',
          rating: 10,
          comments: 'This is a compilation of advice columns written by Cheryl Strayed. It helped me SO much and everyone should read it.'
        },
        {
          id: 2, 
          bookTitle: 'The Bell Jar',
          recommendedBy: 'Jess',
          rating: 10,
          comments: 'My emo high school self loved Sylvia Plath. This is a great representation of a spiral into depression and how differently mental health was viewed back then.'
        },
        {
          id: 3, 
          bookTitle: 'The Way I Used To Be',
          recommendedBy: 'Fion',
          rating: 10,
          comments: 'Definitely a little heavy because it is about a girl who is raped by her brother\'s bff before middle school. However, it sheds a lot of light into the stages of grief and how the trauma impacts the rest of her life. Also goes through the healing process.'
        },
        {
          id: 4, 
          bookTitle: 'The Fault in Our Stars',
          recommendedBy: 'Fion',
          rating: 10,
          comments: 'Amazing!'
        },
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE recommendations_id_seq RESTART with 5')
    })
}
