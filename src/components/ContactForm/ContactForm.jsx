import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  styled,
  Button,
  TextField,
} from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { sendMail } from '../../api';
import styles from './ContactForm.module.css';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '30px 0',
});

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      lastName: '',
      firstName: '',
      mail: '',
      phone: '',
      text: '',
      mailSent: false,
      error: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ mail: event.target.value });
  }

  handleSubmit() {
    sendMail(this.state);
  }

  render() {
    return (
      <div className={styles.items}>
        <div className={styles.container}>
          <ValidatorForm
            onSubmit={this.handleSubmit}
            onError={(errors) => console.log(errors)}
          >
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={12}>
                <Paper className={styles.paper}>
                  <Typography variant="h2" align="center">
                    Contact
                  </Typography>
                  <Typography varian="body1" paragraph align="center">
                    If you have any qustions or find one of my projects
                    intersting, feel free to ask a question.
                  </Typography>

                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        required
                        id="outlined-basic"
                        label="Lastname"
                        variant="outlined"
                        type="text"
                        value={this.state.lastName}
                        onChange={(e) => {
                          this.setState({ lastName: e.target.value });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        required
                        id="outlined-basic"
                        label="Firstname"
                        variant="outlined"
                        type="text"
                        value={this.state.firstName}
                        onChange={(e) => {
                          this.setState({ firstName: e.target.value });
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} md={4}>
                      <TextValidator
                        fullWidth
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        type="tel"
                        validators={[
                          'matchRegexp:^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$',
                        ]}
                        value={this.state.phone}
                        onChange={(e) => {
                          this.setState({ phone: e.target.value });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextValidator
                        label="E-Mail"
                        required
                        fullWidth
                        onChange={(e) => {
                          this.setState({ mail: e.target.value });
                        }}
                        name="mail"
                        value={this.state.mail}
                        validators={['required', 'isEmail']}
                        errorMessages={[
                          'Please fill in this field.',
                          'E-Mail is not correct.',
                        ]}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} md={8}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Your Message"
                        required
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        value={this.state.text}
                        onChange={(e) => {
                          this.setState({ text: e.target.value });
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  />

                  <Grid
                    container
                    spacing={3}
                    direction="row-reverse"
                    justify="center"
                    alignItems="flex-end"
                  >
                    <Grid item xs={12} md={8}>
                      <MyButton type="submit">Send</MyButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </div>
    );
  }
}

export default ContactForm;
