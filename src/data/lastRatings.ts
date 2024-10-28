import { v4 as uuidv4 } from 'uuid'

const timestamp = Date.now()
const dateObj = new Date(timestamp)

export const lastRatings = [
  {
    id: uuidv4(),
    rate: 5,
    description:
      'No other single syllable means as much to the science fiction genre, a single word that conjures images of sandworms, spice wars, great battles between rival dynastic families and a massively detailed and intricately crafted universe. No wonder this is widely regarded as not just a Science Fiction masterpiece, but a literary achievement as well.',
    book: {
      id: 'c8176d86-896a-4c21-9219-6bb28cccaa5f',
      name: 'Dune',
      author: 'Frank Herbert',
      created_at: dateObj,
      summary:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
      cover_url: '/images/books/dune.jpg',
      total_pages: 720,
      categories: [
        {
          name: 'Science Fiction',
          id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09',
        },
        {
          name: 'Fantasy',
          id: 'q1d50407-0aa7-4245-8a5c-0d0de14e9d6d',
        },
      ],
    },
    user: {
      id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
      name: 'Jaxson Dias',
      email: 'jaxson@gmail.com',
      avatar_url:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      'Not much more needs to be said about The Hobbit than that it is excellent! Great storytelling, fun characters, humor, action – it has it all. Tolkien is rightfully one of the (if not THE) founding fathers of modern Fantasy. If you are already into the Fantasy genre and you haven’t read him, you need to. If you are looking to get into Fantasy, The Hobbit is a great place to start.',
    book: {
      id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      created_at: dateObj,
      summary:
        "The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, the hobbit of the title, who joins the wizard Gandalf and thirteen dwarves that make up Thorin Oakenshield's Company, on a quest to reclaim the dwarves' home and treasure from the dragon Smaug.",
      cover_url: '/images/books/the-hobbit.jpg',
      total_pages: 360,
      categories: [
        {
          name: 'Fiction',
          id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
        },
        {
          name: 'Fantasy',
          id: 'q1d50407-0aa7-4245-8a5c-0d0de14e9d6d',
        },
      ],
    },
    user: {
      id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
      name: 'Jaxson Dias',
      email: 'jaxson@gmail.com',
      avatar_url:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
  },
  {
    id: uuidv4(),
    rate: 5,
    description:
      "In my experience, readers either love Adams' books or quickly put them down. I, for example, quite literally worship the words Adams puts on the page, and have read the Hitchhiker's Trilogy so many times that I have large tracts of it memorized. But both my wife and father couldn't get past book one: the former because she found it too silly, and the latter because he found the writing to be more about the author's personality than plot and character.",
    book: {
      id: '86596503-369b-4614-bacf-11c9bb73e779',
      name: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      created_at: dateObj,
      summary:
        "The novel is an adaptation of the first four parts of Adams's radio series of the same name, centering on the adventures of the only man to survive the destruction of Earth; while roaming outer space, he comes to learn the truth behind Earth's existence. The novel was first published in London on 12 October 1979.",
      cover_url: '/images/books/the-hitchhickers.jpg',
      total_pages: 250,
      categories: [
        {
          name: 'Science Fiction',
          id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09',
        },
        {
          name: 'Fantasy',
          id: 'q1d50407-0aa7-4245-8a5c-0d0de14e9d6d',
        },
      ],
    },
    user: {
      id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
      name: 'Brandon Botosh',
      email: 'brandon@gmail.com',
      avatar_url:
        'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      'Take My Hand is a gem of a read! It reminds us just how important it is for these stories to be told, for them to be heard, to be acknowledged and remembered and to care; that feels crucial right now. This is why I read the books I do!',
    book: {
      id: '67cb0f47-9e50-4492-b640-9c020fcae6f2',
      name: 'Take my Hand',
      author: 'Dolen Perkins-Valdez',
      created_at: dateObj,
      summary:
        'Inspired by true events that rocked the nation, a profoundly moving novel about a Black nurse in post-segregation Alabama who blows the whistle on a terrible wrong done to her patients, from the New York Times bestselling author of Wench. Montgomery, Alabama, 1973.',
      cover_url: '/images/books/take-my-hand.jpg',
      total_pages: 176,
      categories: [
        {
          name: 'History',
          id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2',
        },
        {
          name: 'Fiction',
          id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
        },
      ],
    },
    user: {
      id: '456adeq1-ef32-4f3c-1c7e-39d8c40fa158',
      name: 'Rute Simmons',
      email: 'rute@gmail.com',
      avatar_url:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      'One of my favorite things in the book was the character interaction. There are some really odd characters here along with the stereotypical good and bad guys. I saw many comparisons from other reviewers to Harry Potter and I could definitely see some Harry vs Draco vs Snape type action going on here. Those were probably my favorite parts of the book.',
    book: {
      id: '61cb0f47-9e50-4492-b640-9c020fcae6r2',
      name: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      created_at: dateObj,
      summary:
        'The tale of Kvothe, from his childhood in a troupe of traveling players, to years spent as a near-feral orphan in a crime-riddled city, to his daringly brazen yet successful bid to enter a difficult and dangerous school of magic.',
      cover_url: '/images/books/the-name-of-the-wind.jpg',
      total_pages: 722,
      categories: [
        {
          name: 'Fantasy',
          id: 'q1d50407-0aa7-4245-8a5c-0d0de14e9d6d',
        },
        {
          name: 'Fiction',
          id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
        },
      ],
    },
    user: {
      id: '319vtbq1-ef32-4f3c-1c7e-39d8c40fa158',
      name: 'Petter Daniels',
      email: 'petter@gmail.com',
      avatar_url:
        'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
  },
  {
    id: uuidv4(),
    rate: 3,
    description:
      'Inside me, there are two wolves. (I am saying there are two wolves in order to reference the meme, but what would be more accurate is to say that inside of me there are two boring and nonviolent creatures. Like a pigeon. Or an accountant.)',
    book: {
      id: '21cb0f47-3l40-4492-b640-9c020fcae6r2',
      name: 'Wuthering Heights',
      author: 'Emily Brontë',
      created_at: dateObj,
      summary:
        "Wuthering Heights, Emily Brontë's only novel, is one of the pinnacles of 19th-century English literature. It's the story of Heathcliff, an orphan who falls in love with a girl above his class, loses her, and devotes the rest of his life to wreaking revenge on her family.",
      cover_url: '/images/books/wuthering-heights.jpg',
      total_pages: 416,
      categories: [
        {
          name: 'Classic',
          id: 'd4c23017-4378-4e24-84a1-7e37f343dfc2',
        },
        {
          name: 'Fiction',
          id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
        },
      ],
    },
    user: {
      id: '319vtbq1-ef32-4f3c-1c7e-39d8c40fa158',
      name: 'Petter Daniels',
      email: 'petter@gmail.com',
      avatar_url:
        'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "This is one of those books that can be life-changing. I read this as a teenager and I remember exactly where I was (sitting on my bed, in my grandmother's house, in southern Germany) when I finished it. I must have spent an hour just staring out the window, in awe of the lives I'd just led, the experiences I'd just had.",
    book: {
      id: '55gg5f44-3l40-4492-b640-9c020fcae6r2',
      name: 'War and Peace',
      author: 'Leo Tolstoy',
      created_at: dateObj,
      summary:
        'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.',
      cover_url: '/images/books/war-and-peace.jpg',
      total_pages: 1440,
      categories: [
        {
          name: 'Classic',
          id: 'd4c23017-4378-4e24-84a1-7e37f343dfc2',
        },
        {
          name: 'Fiction',
          id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
        },
      ],
    },
    user: {
      id: '349vrtq1-ef32-4f3c-3o7l-67d8c40fa158',
      name: 'Daniel Stone',
      email: 'daniels@gmail.com',
      avatar_url:
        'https://images.unsplash.com/photo-1562159278-1253a58da141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
  },
  {
    id: uuidv4(),
    rate: 5,
    description:
      "A fantastic novel I would recommend to everyone. As a second generation Vietnamese American living in the United States, I have felt so inspired by Lee's book to think about my family's many sacrifices coming to the United States, as well as the ways I have coped with and adapted to various forms of racism and colonization. I am excited to see what other reads 2018 brings, and I already know Pachinko will stand as one of my favorites.",
    book: {
      id: '90rt0f34-6g5h-4492-b640-9c020fcae6r2',
      name: 'Pachinko',
      author: 'Min Jin Lee',
      created_at: dateObj,
      summary:
        'Pachinko follows one Korean family through the generations, beginning in early 1900s Korea with Sunja, the prized daughter of a poor yet proud family, whose unplanned pregnancy threatens to shame them all. Deserted by her lover, Sunja is saved when a young tubercular minister offers to marry and bring her to Japan.',
      cover_url: '/images/books/pachinko.jpg',
      total_pages: 528,
      categories: [
        {
          name: 'Fiction',
          id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
        },
      ],
    },
    user: {
      id: '456adeq1-ef32-4f3c-1c7e-39d8c40fa158',
      name: 'Rute Simmons',
      email: 'rute@gmail.com',
      avatar_url:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    },
  },
]
