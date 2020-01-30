let db={
    users: [
        {
          userId: '8vdyRJziAfS5rxdzBERQSWYVldy2',
          email: 'user2@email.com',
          handle: 'user2',
          createdAt: '2020-01-20T10:42:44.419Z',
          imageUrl: 'gs://socialapp-df4f3.appspot.com/user.jpg',
          bio: 'Hello, my name is user, nice to meet you',
          website: 'https://user.com',
          location: 'Lonodn, UK'
        }
      ],
    screams:[
        {
            userHandle:'user',
            body:'this is the scream body',
            createdAt:'2020-01-11T15:59:19.541Z',
            likeCount:5,
            commentCount:2

        }
    ],
    comments: [
        {
          userHandle: 'user',
          screamId: 'kdjsfgdksuufhgkdsufky',
          body: 'nice one mate!',
          createdAt: '2019-03-15T10:59:52.798Z'
        }
      ],
      notifications: [
        {
          recipient: 'user',
          sender: 'john',
          read: 'true | false',
          screamId: 'k4bcfEErz5ZXOludH16n',
          type: 'like | comment',
          createdAt: '2020-01-20T10:42:44.419Z'
        }
      ]
} ;
const userDetails = {
    // Redux data
    credentials: {
        userId: '8vdyRJziAfS5rxdzBERQSWYVldy2',
        email: 'user2@email.com',
        handle: 'user2',
        createdAt: '2020-01-20T10:42:44.419Z',
        imageUrl: 'gs://socialapp-df4f3.appspot.com/user.jpg',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Lonodn, UK'
    },
    likes: [
      {
        userHandle: 'user',
        screamId: 'hh7O5oWfWucVzGbHH2pa'
      },
      {
        userHandle: 'user',
        screamId: 'k4bcfEErz5ZXOludH16n'
      }
    ]
  };