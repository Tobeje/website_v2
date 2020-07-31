import axios from 'axios';

const url = 'http://marcel-schmager.com/sendMail';

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
