import axios from 'axios';

const url = 'http://api.marcel-schmager.com/api/sendMail';
const posts = [
  {
    id: 1,
    post_title: 'Project One',
    post_shortext:
      '<p>Lorem ipsum dolor sit amet,</p> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    post_heroimage: '/static/media/its_me.8113bbd2.jpg',
    post_github: 'https://github.com/Tobeje',
    post_tags: ['React', 'PHP', 'CSS'],
  },
  {
    id: 2,
    post_title: 'Project two',
    post_shortext:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    post_heroimage: '/static/media/its_me.8113bbd2.jpg',
    post_github: 'https://github.com/Tobeje',
    post_tags: ['React', 'PHP', 'CSS'],
  },
  {
    id: 3,
    post_title: 'Project three',
    post_shortext:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    post_heroimage: '/static/media/its_me.8113bbd2.jpg',
    post_github: 'https://github.com/Tobeje',
    post_tags: ['React', 'PHP', 'CSS'],
  },
  {
    id: 4,
    post_title: 'Project four',
    post_shortext:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    post_heroimage: '/static/media/its_me.8113bbd2.jpg',
    post_github: 'https://github.com/Tobeje',
    post_tags: ['React', 'PHP', 'CSS'],
  },
  {
    id: 5,
    post_title: 'Project five',
    post_shortext:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    post_heroimage: '/static/media/its_me.8113bbd2.jpg',
    post_github: 'https://github.com/Tobeje',
    post_tags: ['React', 'PHP', 'CSS'],
  },
];

export const sendMail = (data) => {
  axios({
    method: 'post',
    body: JSON.stringify(data),
    url: `${url}`,
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data,
  })
    .then((result) => {
      console.log(result.data.sent);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getPosts = async () => {
  return posts;
};
