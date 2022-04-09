import assets from './assets';

const ArtData = [
  {
    id: 'ART-01',
    name: 'Paris Evening - Deja Vu',
    creator: 'Evgeny Lushpin',
    price: 80.95,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum natus id ad corrupti commodi porro ea distinctio assumenda! Porro eveniet ducimus accusantium voluptates hic, voluptatem incidunt temporibus aspernatur.',
    image: assets.art01,
    bids: [
      {
        id: 'BID-11',
        name: 'Mike Jackson',
        price: 85.95,
        image: assets.person02,
        date: 'March 19, 2022 at 11:50 PM',
      },
      {
        id: 'BID-12',
        name: 'Homer Simpson',
        price: 82.88,
        image: assets.person03,
        date: 'March 16, 2022 at 19:44 PM',
      },
      {
        id: 'BID-13',
        name: 'Severus Snape',
        price: 81,
        image: assets.person04,
        date: 'March 17, 2022 at 3:50 PM',
      },
    ],
  },
  {
    id: 'ART-02',
    name: 'Starry Night',
    creator: 'Van Gogh',
    price: 200,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos vitae beatae veniam optio dolorum, tempore nulla, architecto rerum delectus nobis magnam temporibus nihil nam sed. Accusamus incidunt aperiam dolor voluptatibus, dolores vitae mollitia pariatur modi enim, corrupti aliquid possimus recusandae aspernatur hic, consequuntur commodi magni optio quos excepturi. Blanditiis, totam.',
    image: assets.art02,
    bids: [
      {
        id: 'BID-21',
        name: 'Rick Sanches',
        price: 209,
        image: assets.person04,
        date: 'December 12, 2019 at 12:10 PM',
      },
    ],
  },
  {
    id: 'ART-03',
    name: 'On the Road',
    creator: 'Jack Kerouac',
    price: 300,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta facilis voluptatum explicabo beatae veritatis eligendi voluptate at deleniti eum, quia, nisi corporis libero non minima. Quam, vero laborum veritatis corporis voluptate sequi mollitia accusamus iste voluptatem repudiandae nulla quis tempora ut a, quaerat recusandae, molestias ex assumenda illo. Deserunt architecto, quod nostrum repudiandae blanditiis amet laudantium consectetur, ea aperiam sint sapiente perferendis nam minus aut cupiditate. Corporis, saepe sunt. In illo quidem iure odio amet, blanditiis aperiam ad atque aliquam minus obcaecati distinctio rem molestias quae nesciunt consequuntur, fugit accusantium, doloribus non consectetur iste enim. Accusamus saepe illum at culpa.',
    image: assets.art03,
    bids: [
      {
        id: 'BID-31',
        name: 'Marcus Audrea',
        price: 305,
        image: assets.person02,
        date: 'December 12, 2019 at 12:10 PM',
      },
      {
        id: 'BID-32',
        name: 'Meryl Mark',
        price: 303,
        image: assets.person03,
        date: 'December 27, 2019 at 1:50 PM',
      },
    ],
  },
  {
    id: 'ART-04',
    name: 'Silver',
    creator: 'Anna Miklashevich',
    price: 80,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nam. Eaque natus velit tempore minus, saepe minima dolorum assumenda eligendi voluptates perferendis quia aperiam blanditiis culpa, reprehenderit accusamus. Adipisci sapiente officia at magni nisi, quae qui hic, laboriosam corrupti accusantium illum. Autem eius fugit eaque quis nihil, architecto blanditiis esse vel officia delectus molestias rerum, ullam dolorum quia modi totam iure eum ipsum veniam necessitatibus suscipit, qui placeat laborum sequi! Obcaecati officia incidunt saepe, repellendus dignissimos explicabo alias accusantium nisi!',
    image: assets.art04,
    bids: [
      {
        id: 'BID-41',
        name: 'Rube Gareth',
        price: 90,
        image: assets.person02,
        date: 'December 12, 2019 at 12:10 PM',
      },
      {
        id: 'BID-42',
        name: 'Ashtyn TIm',
        price: 89,
        image: assets.person03,
        date: 'December 27, 2019 at 1:50 PM',
      },
      {
        id: 'BID-43',
        name: 'Sinclair Cornell',
        price: 85,
        image: assets.person04,
        date: 'December 31, 2019 at 3:50 PM',
      },
      {
        id: 'BID-44',
        name: 'Rusty Darion',
        price: 82,
        image: assets.person02,
        date: 'December 31, 2019 at 3:50 PM',
      },
    ],
  },
  {
    id: 'ART-05',
    name: 'The Night Watch',
    creator: 'Rembrandt Van Rijn',
    price: 100,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptates, nihil veniam numquam earum, consequatur recusandae mollitia ducimus temporibus similique iusto facere tenetur ratione laborum porro tempore enim sequi amet ad suscipit inventore quaerat, magnam atque! Obcaecati distinctio sunt voluptate consequatur! Ducimus assumenda illum sequi quo animi quaerat aut porro quia ea. Nobis, eius autem odit fuga soluta mollitia officia.',
    image: assets.art05,
    bids: [
      {
        id: 'BID-51',
        name: 'Jessica Tan',
        price: 130,
        image: assets.person02,
        date: 'December 12, 2019 at 12:10 PM',
      },
    ],
  },
  {
    id: 'ART-06',
    name: 'Girl with the Pearl Earring ',
    creator: 'Johannes Ver Meer',
    price: 120,
    description:
      'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.',
    image: assets.art06,
    bids: [
      {
        id: 'BID-61',
        name: 'Jeffry Adelyn',
        price: 119,
        image: assets.person02,
        date: 'December 12, 2019 at 12:10 PM',
      },
      {
        id: 'BID-62',
        name: 'Bonnie Marion',
        price: 115,
        image: assets.person03,
        date: 'December 27, 2019 at 1:50 PM',
      },
      {
        id: 'BID-63',
        name: 'Sinjin Brittany',
        price: 110,
        image: assets.person04,
        date: 'December 31, 2019 at 3:50 PM',
      },
      {
        id: 'BID-64',
        name: 'Peggy Lorne',
        price: 109,
        image: assets.person02,
        date: 'December 31, 2019 at 3:50 PM',
      },
      {
        id: 'BID-65',
        name: 'Jaylee Karter',
        price: 108,
        image: assets.person02,
        date: 'December 31, 2019 at 3:50 PM',
      },
    ],
  },
  {
    id: 'ART-07',
    name: 'The Persistence of Memory',
    creator: 'Salvador Dali',
    price: 500,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam officia deleniti a similique nisi obcaecati. Dicta nulla non explicabo quidem enim perferendis necessitatibus eaque dolorum laudantium in illo temporibus, ea itaque ratione neque voluptas illum rerum rem perspiciatis qui aliquam soluta? Accusantium eligendi ipsum veniam laborum nihil dolores vel, nisi temporibus velit incidunt qui tenetur officiis dolorum delectus quo. Qui nam tempore ab est magni similique iure, labore iusto? Officiis amet laboriosam inventore non dolorum minima labore animi perspiciatis voluptates atque perferendis ex, ducimus quidem facere deserunt eligendi, adipisci aliquid. Dolorum eveniet odit dolorem veniam magni quasi sequi officiis quas neque temporibus accusantium sapiente nesciunt reiciendis fugit vero, quia fuga esse quae repellat atque assumenda obcaecati! Fugiat, commodi totam!',
    image: assets.art07,
    bids: [],
  },
];

export { ArtData };
