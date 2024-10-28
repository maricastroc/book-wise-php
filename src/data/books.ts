import { v4 as uuidv4 } from 'uuid'

const timestamp = Date.now()
const dateObj = new Date(timestamp)

export const books = [
  {
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
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          'No other single syllable means as much to the science fiction genre, a single word that conjures images of sandworms, spice wars, great battles between rival dynastic families and a massively detailed and intricately crafted universe. No wonder this is widely regarded as not just a Science Fiction masterpiece, but a literary achievement as well.',
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
          'This is classic sci-fi that really deserves the label. What Frank Herbert accomplished in one novel is stunning because he built a fascinatingly detailed universe in which the politics, religion, economics, espionage, and military strategy are all equally important. He then blended these more grounded concepts with bigger sci-fi ideas like being able to use spice to see through space-time, and the scope of that encompasses trying to pick the proper path through various potential timelines as well as free will vs. fate.',
        user: {
          id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
          name: 'Brandon Botosh',
          email: 'brandon@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        },
      },
    ],
  },
  {
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
    ratings: [
      {
        id: uuidv4(),
        rate: 4,
        description:
          "I was surprised, sad and scared and excited in all the right places. I could picture so clearly all of the places like Bag End, Rivendell and Gollum's lake in my mind's eye and even found myself chuckling at Tolkien's little jokes in the writing. The stunning illustrations by Alan Lee in my edition made my journey there and back again that bit more magical! For someone who often struggles to enjoy fantasy, I absolutely adored this beautiful tale. I can genuinely say that I’m looking forward to continuing with the series!",
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
          'To call this the epitome in which all high fantasy should be judged does not quite suffice; this is simply one of the best books that has ever been written or will ever be written. The Hobbit defines the high fantasy genre along with its sequel, of course, and has been an inspiration to countless authors and readers alike. Tolkien, quite literally, kick started a genre that would eventually capture the hearts of thousands of people. He changed the literary world. He made fantasy real.',
        user: {
          id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
          name: 'Lindsey Philips',
          email: 'lindsey@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
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
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          "In my experience, readers either love Adams' books or quickly put them down. I, for example, quite literally worship the words Adams puts on the page, and have read the Hitchhiker's Trilogy so many times that I have large tracts of it memorized. But both my wife and father couldn't get past book one: the former because she found it too silly, and the latter because he found the writing to be more about the author's personality than plot and character.",
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
          'Even before I was shown the meaning of life in a dream at 17 (then promptly forgot it because I thought I smelled pancakes), I knew this to be true--and yet, I have always felt a need to search for the truth, that nebulous, ill-treated creature. Adams has always been, to me, to be a welcome companion in that journey.',
        user: {
          id: 'vadsdeq1-ef47-4f3c-1c7e-39d8c40fa158',
          name: 'Jack Mirror',
          email: 'jmirror@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: 'd0d70b05-d48f-4d83-b1e8-0b4dd984c97d',
    name: '1984',
    author: 'George Orwell',
    created_at: dateObj,
    summary:
      '1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of ‘the Party’, who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother.',
    cover_url: '/images/books/1984.jpg',
    total_pages: 416,
    categories: [
      {
        name: 'Science Fiction',
        id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 4,
        description:
          "This was the book that started my love affair with the dystopian genre. And maybe indirectly influenced my decision to do a politics degree. I was only 12 years old when I first read it but I suddenly saw how politics could be taken and manipulated to tell one hell of a scary and convincing story. I'm a lot more well-read now but, back then, this was a game-changer. I started to think about things differently. I started to think about 2 + 2 = 5 and I wanted to read more books that explored the idea of control.",
        user: {
          id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
          name: 'Lindsey Philips',
          email: 'lindsey@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: '48b86ac2-014e-401d-bcbb-331ce5f4a457',
    name: 'Siddartha',
    author: 'Hermann Hesse',
    created_at: dateObj,
    summary:
      'Siddhartha presents the self-discovery expedition of a man during the time of the Buddha who, unsure of what life really means to him, takes an exploratory journey to pursue the highs and lows of life, which ultimately leads him to discover the equilibrium in all things and a higher wisdom within.',
    cover_url: '/images/books/siddartha.jpg',
    total_pages: 165,
    categories: [
      {
        name: 'Spirituality',
        id: 'vf2a4a4d-cbc4-4d2c-bb46-e95b0a536e09',
      },
      {
        name: 'Fiction',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
      },
      {
        name: 'Classic',
        id: 'd4c23017-4378-4e24-84a1-7e37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
        user: {
          id: 'vadsdeq1-ef47-4f3c-1c7e-39d8c40fa158',
          name: 'Jack Mirror',
          email: 'jmirror@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
      {
        id: uuidv4(),
        rate: 3,
        description:
          "If you want to understand Buddhism, start somewhere else, because you'd just have to unlearn all of Hesse's incorrect arguments and definitions. Happily, we have come a long way since Hesse's time, with experts and commentaries in many different languages available to the avid student. But, if you'd like to see someone try to explain the principles of Lutheranism using only misused Hindu terms, this may be the book for you.",
        user: {
          id: '7823dc61-e947-4f3c-1c7e-39d8c40fa158',
          name: 'Lilly Audren',
          email: 'lilly@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: 'e688c24f-d14d-4607-a12e-90e6e367398d',
    name: 'The Catcher in the Rye',
    author: 'Aditya Y. Bhargava',
    created_at: dateObj,
    summary:
      'The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable.',
    cover_url: '/images/books/the-catcher-in-the-rye.jpg',
    total_pages: 240,
    categories: [
      {
        name: 'Fiction',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
      },
      {
        name: 'Classic',
        id: 'd4c23017-4378-4e24-84a1-7e37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 2,
        description:
          "Sometimes truth isn't just stranger than fiction, it's also more interesting and better plotted. Salinger helped to pioneer a genre where fiction was deliberately less remarkable than reality. His protagonist says little, does little, and thinks little, and yet Salinger doesn't string Holden up as a satire of deluded self-obsessives, he is rather the epic archetype of the boring, yet self-important depressive.",
        user: {
          id: '7823dc61-e947-4f3c-1c7e-39d8c40fa158',
          name: 'Lilly Audren',
          email: 'lilly@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
      {
        id: uuidv4(),
        rate: 5,
        description:
          "Holden Caulfield takes us to bourgeois America in the 1950s, from his college, where he just has been dismissed, to New York Central Station. Scrolling through friends, families, and acquaintances, and delivering us, by freeing ourselves, his wounds and joys, his loves and dislikes of people and things, of life, of his teenage life. But enough talk - 'Digression'!! (you will understand by reading it) - read on.",
        user: {},
      },
      {
        id: uuidv4(),
        rate: 4,
        description:
          'There are some areas in this book that we might question the actions of Holden, especially if we reread this book after we have grown up. But still, I think that this is one of the best coming of age novels I was lucky enough to read in my life.',
        user: {
          id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
          name: 'Lindsey Philips',
          email: 'lindsey@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: '0440ad7d-230e-4573-b455-84ca38b5d339',
    name: 'Journey to the Center of the Earth',
    author: 'Julio Verne',
    created_at: dateObj,
    summary:
      'Originally published in French in 1864, Journey to the Center of the Earth tells the story of Professor Lidenbrock, his nephew, and a hired guide who, following the instructions of a medieval alchemist claiming to have found a passage to the center of the earth, travel deep into an Icelandic volcano. Deep in the earth, the dangers are beyond imaginable. They traverse subterranean oceans, have encounters with dinosaurs and other prehistoric beasts, and do so all in the spirit of adventure and discovery. Considered a classic in the science-fiction and fantasy genre, Jules Verne’s epic novel is an enduring tale of man’s desire to uncover the great unknowns of life and nature.',
    cover_url: '/images/books/journey-to-the-center-of-the-earth.jpg',
    total_pages: 365,
    categories: [
      {
        name: 'Fantasy',
        id: 'q1d50407-0aa7-4245-8a5c-0d0de14e9d6d',
      },
      {
        name: 'Classic',
        id: 'd4c23017-4378-4e24-84a1-7e37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 3,
        description:
          'This short novel is an opportunity to take stock of the knowledge of the time about space and the moon. Of course, from our point of view, some issues seem very naive: the presence of selenites, gravity "reversing" on the way between the two stars, and an astronaut opening the cabin window to throw garbage … But we must, however, keep in mind the utterly novel idea of 1869 of the very idea of such an expedition, not to mention its disturbing similarity with specific Apollo missions that took place a century after exactly.',
        user: {
          id: '7823dc61-e947-4f3c-1c7e-39d8c40fa158',
          name: 'Lilly Audren',
          email: 'lilly@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: '14f410df-b28a-4e72-b1b4-363e26e160dd',
    name: 'It: A Novel',
    author: 'Stephen King',
    created_at: dateObj,
    summary:
      'The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. "It" primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.',
    cover_url: '/images/books/it.jpg',
    total_pages: 1168,
    categories: [
      {
        name: 'Thriller',
        id: 'h1n54207-0aa7-4245-8a5c-0d0de14e9d6d',
      },
      {
        name: 'Horror',
        id: 'l7o22067-4978-4a24-84a1-7d37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 4,
        description:
          "I'm not easily scared these days. As a grown woman, the only thing that brings the feeling of dread into my heart is the constant pinging of new work emails requiring my attention when I'm at home, but there was a time when I was a shy, delicate, sweet little girl who was scared of my own shadow.",
        user: {
          id: '7823dc61-e947-4f3c-1c7e-39d8c40fa158',
          name: 'Lilly Audren',
          email: 'lilly@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
      {
        id: uuidv4(),
        rate: 5,
        description:
          'This is a huge book, but if you consider to read it, it is definitely worth your time. Of course, it is very well written with a lot of description, which was sometimes hard to go through, but it didn’t ruin the experience. The story itself is layered and complex and everything happens for a reason and that is very important for a book like this to have that. It is definitely an interesting and captivating story.',
        user: {
          id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
          name: 'Lindsey Philips',
          email: 'lindsey@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: 'd2870ad0-3312-4ac2-af9f-76af6565587d',
    name: "Harry Potter and the Philosopher's Stone",
    author: 'J. K. Rowling',
    created_at: dateObj,
    summary:
      "It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he's a wizard.",
    cover_url: '/images/books/harry-potter.jpg',
    total_pages: 352,
    categories: [
      {
        name: 'Fantasy',
        id: 'q1d50407-0aa7-4245-8a5c-0d0de14e9d6d',
      },
      {
        name: 'Young adult',
        id: 'w5f22067-4978-4f24-84a1-7d37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          "My original review was a comparison of sorts between Harry Potter and Twilight. However, this is stupid as the two are incomparable. Honestly, its not even worth discussing. Its not just that Twilight doesn't come close, it is the fact that Harry Potter transcends other similar works. Its peerless.",
        user: {
          id: '7823dc61-e947-4f3c-1c7e-39d8c40fa158',
          name: 'Lilly Audren',
          email: 'lilly@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
      {
        id: uuidv4(),
        rate: 5,
        description:
          'So I read the newest editions of the books that I’m going to collect. I have so many different collections I’ll probably add later. In these new books I actually love the art on all the pages instead of the interactive stuff. I put together a collage of a couple pages.',
        user: {
          id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
          name: 'Lindsey Philips',
          email: 'lindsey@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        },
      },
      {
        id: uuidv4(),
        rate: 5,
        description:
          "As wonderful and magical as promised. Because I didn't remember the movie, the third act of the book was a delightful surprise to me. I wish I'd had this book when I was a kid, because the idea that someone could be special without knowing it, and then get to visit a special world where the things that made him different were the same things that made him awesome would have been really inspiring to me.",
        user: {
          id: 'vadsdeq1-ef47-4f3c-1c7e-39d8c40fa158',
          name: 'Jack Mirror',
          email: 'jmirror@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: '4fd2b389-b211-40b5-9797-f78cbb985645',
    name: 'Christine',
    author: 'Stephen King',
    created_at: dateObj,
    summary:
      "Christine tells the story of a car apparently possessed by malevolent supernatural forces. A love triangle involving 17-year-old misfit Arnie Cunningham, his new girlfriend and a haunted 1958 Plymouth Fury. Dubbed Christine by her previous owner, Arnie's first car is jealous, possessive and deadly.",
    cover_url: '/images/books/christine.jpg',
    total_pages: 616,
    categories: [
      {
        name: 'Horror',
        id: 'l7o22067-4978-4a24-84a1-7d37f343dfc2',
      },
      {
        name: 'Thriller',
        id: 'h1n54207-0aa7-4245-8a5c-0d0de14e9d6d',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 4,
        description:
          "One of the many cornerstones of King's early career was, is, love of the American automobile, and Christine brings together a lot of his early themes - youth, coming of age, cars, friendship and horror! Even after re-reading this classic possessed car story, it is still one of my least favourite King novels. It's still a great tale, but not one that I'll revisit much, if ever again, unlike a lot of his better works. In getting a 7 out of 12 from me, it is far from being my lowest rated King - I just don't care about anyone in this book!",
        user: {
          id: 'vadsdeq1-ef47-4f3c-1c7e-39d8c40fa158',
          name: 'Jack Mirror',
          email: 'jmirror@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: '6de9f6b8-5ff4-4e06-b9f4-843eca462803',
    name: 'Educated: A Memoir',
    author: 'Tara Westover',
    created_at: dateObj,
    summary:
      'This is the story of Tara Westover, a woman born in Idaho to survivalist parents who viewed hospitals, schools, and the government as evil. She did not enter a classroom until the age of 17 and went on to study at Cambridge and Harvard. Education liberated her mind, but she lost her family in the process.',
    cover_url: '/images/books/educated.jpg',
    total_pages: 352,
    categories: [
      {
        name: 'Autobiography',
        id: 'm7fn22067-4978-4a24-84a1-7d37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          'Tara’s process of self-discovery is beautifully captured in Educated. It’s the kind of book that I think everyone will enjoy, no matter what genre you usually pick up. She’s a talented writer, and I suspect this book isn’t the last we’ll hear from her. I can’t wait to see what she does next.',
        user: {
          id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
          name: 'Brandon Botosh',
          email: 'brandon@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        },
      },
    ],
  },
  {
    id: 'd0590f9a-dd89-42fd-9bbb-bf26c2e4dcf9',
    name: 'Atomic Habits',
    author: 'James Clear',
    created_at: dateObj,
    summary:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    cover_url: '/images/books/atomic-habits.jpg',
    total_pages: 320,
    categories: [
      {
        name: 'Self-help',
        id: 'po922067-4978-4a24-84a1-7d37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 4,
        description:
          'This book does a great job of laying down the framework of how habits are formed, and shares insightful strategies for building good habits and breaking bad ones. Even though I was already familiar with research behind habit formation, reading through this book helped me approach habits I’m trying to adopt or break in my own life from different angles.',
        user: {
          id: '319vtbq1-ef32-4f3c-1c7e-39d8c40fa158',
          name: 'Petter Daniels',
          email: 'petter@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: '1d5cdbdc-b90f-40d5-8fe9-d4923ae12dbd',
    name: 'The Outsiders',
    author: 'S. E. Hinton',
    created_at: dateObj,
    summary:
      'It tells the story of 14-year-old Ponyboy Curtis and his two older brothers, Soda and Darry. The boys are orphans and struggle to stick together in their lower-class neighborhood, known as the East Side. They and their friends are part of a gang of working class tough street boys called the Greasers.',
    total_pages: 224,
    cover_url: '/images/books/the-outsiders.jpg',
    categories: [
      {
        name: 'Fiction',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
      },
      {
        name: 'Classic',
        id: 'd4c23017-4378-4e24-84a1-7e37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          "I'm a little horrified at myself for not having this book up before now. We had a discussion about it in class today, and I had to write this as soon it was over. I wish there were more stars to give The Outsiders, but five will have to do. I love this book, and have loved it faithfully since I read it in sixth grade - I must have read it a dozen times, and possibly more. I can quote long sections of the book. I was obsessed, and to some degree still am.",
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
          'One thing that you can believe is, when your elders say that you don’t stay the same, they are correct. They mean that you change the way you think, the way you do things, the way that you look upon the world. I’ve heard this said so many times that I can dream about it. In other words, I used to adore this book. And I thought Ponyboy was adorable. Of course, I was twelve-years old and had different standards for adoration (maybe). I have to confess, though, I wasn’t confused like him. I thought that he should snitch.',
        user: {
          id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
          name: 'Brandon Botosh',
          email: 'brandon@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        },
      },
    ],
  },
  {
    id: '404e47f8-da53-44fd-ab53-37ed171c3a9f',
    name: 'A Game of Thrones',
    author: 'George R. R. Martin',
    created_at: dateObj,
    summary:
      'A Game of Thrones takes place over the course of one year on or near the fictional continent of Westeros. The story begins when King Robert visits the northern castle Winterfell to ask Ned Stark to be his right-hand assistant, or Hand of the King. The previous Hand, Jon Arryn, died under suspicious circumstances.',
    cover_url: '/images/books/a-game-of-thrones.jpg',
    total_pages: 864,
    categories: [
      {
        name: 'Fantasy',
        id: 'q1d50407-0aa7-4245-8a5c-0d0de14e9d6d',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 4,
        description:
          "First off, I'm a heavy duty fan of GRRM. I've read over a 100 different fantasy authors in my time. Took about 5 years off from the genre b/c I felt it was all getting too formulaic and cliched. So, when I came back to fantasy I read the usual: Goodkind, Jordan, etc. and then someone told me about GRRM and man, that was the kicker!",
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
          'So glad I reread this! I loved it even more this time and it just reaffirmed that this is my favorite series!',
        user: {},
      },
    ],
  },
  {
    id: '66cb0f47-7e20-4492-b640-9c020fcae6f2',
    name: 'Psycho: A Novel',
    author: 'Robert Bloch',
    created_at: dateObj,
    summary:
      'Norman Bates loved his mother, though she has been dead for the past twenty years. Or is she dead?  Norman knows better. He has lived with Mother ever since leaving the hospital in the old house up on the hill above the rundown Bates Motel. One night Norman welcomes a beautiful woman who checks into the motel, and spies on her as she undresses. Norman can’t help himself. Mother is there, though. She is there to protect Norman from his filthy thoughts. She is there to protect him with her butcher knife!',
    cover_url: '/images/books/psycho.jpg',
    total_pages: 176,
    categories: [
      {
        name: 'Horror',
        id: 'l7o22067-4978-4a24-84a1-7d37f343dfc2',
      },
      {
        name: 'Thriller',
        id: 'h1n54207-0aa7-4245-8a5c-0d0de14e9d6d',
      },
      {
        name: 'Classic',
        id: 'd4c23017-4378-4e24-84a1-7e37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          'Nowadays, it seems like every horror movie is either a remake, a sequel or the kind of vile torture porn that makes you want to puke in your bag of popcorn. Filming one of these flicks requires tens of millions of dollars for a platoon of pretty actors, gallons of fake blood, special effects and a marketing campaign. Oddly, they don’t seem to spend any money on scripts for these things.',
        user: {
          id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
          name: 'Jaxson Dias',
          email: 'jaxson@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
      },
    ],
  },
  {
    id: '43de0g44-1e50-7891-e640-9v340fwdr6f2',
    name: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky',
    created_at: dateObj,
    summary:
      'The story follows Charlie, an introverted teenage boy as he starts high school, falls in love, and faces his traumatic past. Through it all, Charlie struggles to learn who he is and how he fits into the world, and to understand the nature of love in all its forms.',
    cover_url: '/images/books/the-perks.jpg',
    total_pages: 213,
    categories: [
      {
        name: 'Young adult',
        id: 'w5f22067-4978-4f24-84a1-7d37f343dfc2',
      },
      {
        name: 'Fiction',
        id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          "I would give this book to every teenage boy and girl I knew. While Charlie isn't exactly a excellent role model, he does show that being different is O.K. and that friends come in all kinds of packages...to stay true to yourself. These things matter.",
        user: {
          id: '6624df61-5947-4f8c-9c7e-39c8c40fa158',
          name: 'Jaylon Franci',
          email: 'jaylon@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
      },
      {
        id: uuidv4(),
        rate: 4,
        description:
          "I don't even think I can truly convey how much I loved this book other than to say it was entirely life changing and I'm so upset it took me this long to read it.",
        user: {
          id: '319vtbq1-ef32-4f3c-1c7e-39d8c40fa158',
          name: 'Petter Daniels',
          email: 'petter@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
    id: '88fb0f27-6w20-4592-b640-9d020fvgh6f2',
    name: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari ',
    created_at: dateObj,
    summary:
      "Yuval Noah Harari's book, 'Sapiens,' traces the origins, mechanisms, and effects of what we think of as “human progress” from small bands of hunter-gatherers 100,000 years ago to the present-day global network through which our species has come to dominate the entire Earth.",
    cover_url: '/images/books/sapiens.jpg',
    total_pages: 464,
    categories: [
      {
        name: 'History',
        id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2',
      },
    ],
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          "What a fantastic book. I can see why everyone from Bill Gates to Barack Obama was raving about it. It's an extremely compelling, accessible history - almost like a novelization - of humankind.",
        user: {
          id: '6624df61-5947-4f8c-9c7e-39c8c40fa158',
          name: 'Jaylon Franci',
          email: 'jaylon@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
      },
    ],
  },
  {
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
    ratings: [
      {
        id: uuidv4(),
        rate: 4,
        description:
          'Take My Hand is a gem of a read! It reminds us just how important it is for these stories to be told, for them to be heard, to be acknowledged and remembered and to care; that feels crucial right now. This is why I read the books I do!',
        user: {
          id: '456adeq1-ef32-4f3c-1c7e-39d8c40fa158',
          name: 'Rute Simmons',
          email: 'rute@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
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
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          "I'll give this 5* with no begrudging. I'm pretty easy with my 5*, they're not reserved for the best book I've ever read, just very good books. I thought The Name of the Wind was very good. I read it in what for me was a very short span of time - it had that 'more-ish' quality that best sellers need.",
        user: {
          id: '6624df61-5947-4f8c-9c7e-39c8c40fa158',
          name: 'Jaylon Franci',
          email: 'jaylon@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
      },
      {
        id: uuidv4(),
        rate: 5,
        description:
          'When I began reading this, I did so with a yawn. It initially appeared quite basic and completely uninspiring. I almost stopped reading after twenty five pages, shocking I know. If I did that it would have been a massive mistake because this is one of the best fantasy novels published in the last twenty years. Those first few pages did nothing to encourage me, but as soon as I realised that this is, essentially, a story about a story, I was hooked of Rothfuss’ magic.',
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
        user: {
          id: '319vtbq1-ef32-4f3c-1c7e-39d8c40fa158',
          name: 'Petter Daniels',
          email: 'petter@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
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
    ratings: [
      {
        id: uuidv4(),
        rate: 4,
        description:
          "I understand why many people hate this book. Catherine and Heathcliff are monstrous. Monstrous. You won't like them because they are unlikable. They are irrational, self-absorbed, malicious and pretty much any negative quality you can think a person is capable of possessing without imploding. They seek and destroy and act with no thought to consequence. And I find it fascinating that Emily Bronte chose them to be her central protagonists.",
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
        rate: 3,
        description:
          'Inside me, there are two wolves. (I am saying there are two wolves in order to reference the meme, but what would be more accurate is to say that inside of me there are two boring and nonviolent creatures. Like a pigeon. Or an accountant.)',
        user: {
          id: '319vtbq1-ef32-4f3c-1c7e-39d8c40fa158',
          name: 'Petter Daniels',
          email: 'petter@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
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
    ratings: [
      {
        id: uuidv4(),
        rate: 5,
        description:
          "A fantastic novel I would recommend to everyone. As a second generation Vietnamese American living in the United States, I have felt so inspired by Lee's book to think about my family's many sacrifices coming to the United States, as well as the ways I have coped with and adapted to various forms of racism and colonization. I am excited to see what other reads 2018 brings, and I already know Pachinko will stand as one of my favorites.",
        user: {
          id: '456adeq1-ef32-4f3c-1c7e-39d8c40fa158',
          name: 'Rute Simmons',
          email: 'rute@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
  {
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
    ratings: [
      {
        id: uuidv4(),
        rate: 4,
        description:
          "This is one of those books that can be life-changing. I read this as a teenager and I remember exactly where I was (sitting on my bed, in my grandmother's house, in southern Germany) when I finished it. I must have spent an hour just staring out the window, in awe of the lives I'd just led, the experiences I'd just had.",
        user: {
          id: '349vrtq1-ef32-4f3c-3o7l-67d8c40fa158',
          name: 'Daniel Stone',
          email: 'daniels@gmail.com',
          avatar_url:
            'https://images.unsplash.com/photo-1562159278-1253a58da141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
      },
    ],
  },
]
