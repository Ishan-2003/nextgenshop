import React, { useEffect } from 'react'
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import CustomizedStepper from '../Components/CustomizedStepper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Check from '@mui/icons-material/Check';
import { Button } from '@mui/material';
// import StepConnector from '@material-ui/core/StepConnector';
import telvision from './Assets/images/tv.jpg'
import StepperInfo from './StepperInfo';
import StepperShipping from './StepperShipping';
import SteppeerPayment from './SteppeerPayment';
import PaymentGateway from './PaymentGateway';

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});


QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};




const Checkout = () => {

  const [activeStep, setActiveStep] = React.useState(1);
  function getSteps() {
    return ['Check your cart products', 'Check cart products info', 'About shipping', 'About to pay'];
  }
  const steps = getSteps();
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      case 3:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown step';
    }
  }


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  useEffect(() => {
    setActiveStep(0)
    return () => {

    };
  }, []);


  return (
    <>
      <MetaTitle title="Checkout" />
      <Template title="Checkout" />
      {activeStep!==4&&<CustomizedStepper activeStep={activeStep} />}
      <div className='checkout-wrapper'>
        {(activeStep !== 4) ? (<div className='payment-stepper'>
          {activeStep === 0 && <StepperInfo />}
          {activeStep === 1 && <StepperShipping />}
          {activeStep === 2 && <SteppeerPayment />}
          {activeStep === 3 && <PaymentGateway />}
          <div className='payment-navigation'>

            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color='error'
                  onClick={handleNext}
                  className={classes.button}
                  style={{ padding: '0.7rem 1rem', backgroundColor: 'rgba(235, 7, 7, 0.65)' }}
                >
                  {((activeStep === 0) ? 'Cart Info' : ((activeStep === 1) ? 'Shipping Info' : ((activeStep === 2) ? 'Continue to Payment' : ((activeStep === 3) ? 'Pay now' : 'Finish'))))}
                </Button>
              </div>
            </div>

          </div>
        </div>) : (<></>)}

        {activeStep !== 4 && <div className='d-flex flex-column h-100 gap-2 py-5 w-100' style={{ paddingRight: '7rem', paddingLeft: '2rem' }}>
          <div className='product-checkout'>
            <div className='checkout-prod-img'>
              <img src={telvision} alt='' className='img-fluid' />
              <div className='product-quantity-circle'>2</div>
            </div>
            <div className='checkout-product-description'>
              <h5>Samsung H.D LCD 15 inch with Wi-Fi+3G connectivity</h5>
              <p>M / #CBEDE</p>
            </div>
            <div className='checkout-price'>
              <h5><em>$200.00</em></h5>
            </div>
          </div>
          <div className='product-checkout'>
            <div className='checkout-prod-img'>
              <img src={telvision} alt='' className='img-fluid' />
              <div className='product-quantity-circle'>2</div>
            </div>
            <div className='checkout-product-description'>
              <h5>Samsung H.D LCD 15 inch with Wi-Fi+3G connectivity</h5>
              <p>M / #CBEDE</p>
            </div>
            <div className='checkout-price'>
              <h5><em>$200.00</em></h5>
            </div>
          </div>
          <div className='decorator-line'></div>
          <div className='d-grid gap-1'>
            <div className='checkout-subtotal'>
              <div>Subtotal</div>
              <div className='amount'>$200</div>
            </div>
            <div className='checkout-shipping-amount'>
              <div>Shipping</div>
              <div className='amount'>$22.5</div>
            </div>
          </div>
          <div className='decorator-line'></div>
          <div>
            <div className='checkout-subtotal'>
              <div className='fw-bold'>Total</div>
              <div className='amount text-bold'><span className='usd'>USD</span>$222.5</div>
            </div>
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>}
      </div>
      {activeStep === 4 && <div className='d-grid py-5' style={{ placeSelf: 'center' }}>
        <Typography className={classes.instructions}>
          Order Placed !!
          All steps completed - you&apos;re finished
        </Typography>
        <Button onClick={handleReset} className={classes.button}>
          Reset
        </Button>
      </div>}
    </>
  )
}

export default Checkout
