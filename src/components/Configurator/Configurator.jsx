import React from 'react';
import { MobileStepper, Button } from '@material-ui/core';

class Configurator extends React.Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  render() {
    return (
      <MobileStepper
        variant="progress"
        steps={20}
        position="static"
        activeStep={this.state.activeStep}
        nextButton={
          <Button
            size="small"
            onClick={this.handleNext}
            disabled={this.state.activeStep === 19}
          >
            Next
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={this.handleBack}
            disabled={this.state.activeStep === 0}
          >
            Back
          </Button>
        }
      />
    );
  }
}

export default Configurator;
