
exports.seed = function(knex, Promise) {
  return knex('books').del()
    .then(function () {
      return knex('books').insert([
        {
          id: 1, 
          title: 'Tiny Beautiful Things',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41UBsnLmVyL._SX326_BO1,204,203,200_.jpg',
          author: 'Cherl Strayed',
          genre: 'Self Help',
          year: 2015
        },
        {
          id: 2, 
          title: 'The Bell Jar',
          imageUrl: 'https://bi.hcpdts.com/page/450/EwIaWqDxBJPJUu7rJh2VzZSbIwulrxpCp74SlYuVRcrl+pDL14wdGFL3HP9J!2Y45UPGTzggKw7n60FUa3bBPnGtwGbdc8jt!Mz6EIfEf0UQ2xNPQdv!pNO70mz9JNdh/qr3A2XC96+P9J0MyL6pfC1CbjcVDom1Ej8ik8VSXfmfcFaPfaCQ9Ap3n2+8AlMO5xerxOblTvefcl3RN+Cfs2vpJju3ExHXoTjkWWmkPRsKKwc8UWbVG8cJ8QrmmTlhj',
          author: 'Sylvia Plath',
          genre: 'Memoir',
          year: 1971
        },
        {
          id: 3, 
          title: 'The Way I Used To Be',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51EEgojvqcL._SX324_BO1,204,203,200_.jpg',
          author: 'Amber Smith',
          genre: 'Fiction',
          year: 2016
        },
        {
          id: 4, 
          title: 'The Fault in Our Stars',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/514nzFeTWmL._SX324_BO1,204,203,200_.jpg',
          author: 'John Green',
          genre: 'Fiction',
          year: 2012        
        }

      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE books_id_seq RESTART with 4')
    })
}
