import React, { useEffect } from 'react'
import Template from '../Components/Template';
import MetaTitle from '../Components/MetaTitle';
import CustomizedStepper from '../Components/CustomizedStepper';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Check from '@mui/icons-material/Check';
// import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@mui/material/Typography';
import telvision from './Assets/images/tv.jpg'

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
  
  function getSteps() {
    return ['Check your cart products', 'Check cart products info', 'About shipping','About to pay'];
  }

  
const Checkout = () => {
    const [Country, setCountry] = React.useState('');
    const [Address, setAddress] = React.useState('');
    const [State, setState] = React.useState('');
    const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();
    const handleChange1 = (event) => {
        setAddress(event.target.value);
    };
    const handleChange2 = (event) => {
        setCountry(event.target.value);
    };
    const handleChange3 = (event) => {
        setState(event.target.value);
    };
    function getStepContent(step) {
        switch (step) {
          case 0:
            return 'Select campaign settings...';
          case 1:
            return 'What is an ad group anyways?';
          case 2:
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
            <CustomizedStepper activeStep={activeStep}/>
            <div className='checkout-wrapper'>
                <div className='payment-stepper'>
                    <h4>Contact Information</h4>
                    <div className='payment-contact-info'>
                        <TextField
                        className = "Mui-disabled"
                            disabled
                            id="outlined-required"
                            label="Name (Email)"
                            defaultValue="Ishan Guleria (21bcs022@nith.ac.in)"
                            isBlocked = 'true'
                        />
                        <Button variant="contained">Logout</Button>
                        {/* <ColorCheckbox Label='Email me with sales and offers' /> */}
                    </div>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Saved Addresses</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={Address}
                                label="Select Address"
                                onChange={handleChange1}
                            >
                                <MenuItem value="">
                                    <em>Address</em>
                                </MenuItem>
                                <MenuItem value={10}>Kangra,Street no. 2</MenuItem>
                                <MenuItem value={20}>Mandi,Street no. 3</MenuItem>
                            </Select>
                            {/* <FormHelperText>With label + helper text</FormHelperText> */}
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Country Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={Country}
                                label="Select Country Name"
                                onChange={handleChange2}
                            >
                                <MenuItem value="">
                                    <em>Country</em>
                                </MenuItem>
                                <MenuItem value={10}>India(IN)</MenuItem>
                                <MenuItem value={20}>USA(US)</MenuItem>
                                <MenuItem value={30}>England(UK)</MenuItem>
                            </Select>
                            {/* <FormHelperText>With label + helper text</FormHelperText> */}
                        </FormControl>
                        <div className='contact-info-name'>
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                defaultValue="John"
                            />
                            <TextField
                                required
                                id="outlined-disabled"
                                label="Last Name"
                                defaultValue="Doe"
                            />

                        </div>
                        <div className='buyer-address d-grid gap-2'>
                            <TextField
                                required
                                id="outlined-multiline-flexible"
                                label="Address"
                                multiline
                                maxRows={4}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Address Line"
                                multiline
                                maxRows={4}
                            />
                        </div>
                        <div className='location-info'>
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                defaultValue="John"
                            />
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={State}
                                    label="Select State"
                                    onChange={handleChange3}
                                >
                                    <MenuItem value="">
                                        <em>State</em>
                                    </MenuItem>
                                    <MenuItem value={100}>H.P</MenuItem>
                                    <MenuItem value={200}>J&K</MenuItem>
                                    <MenuItem value={300}>Punjab</MenuItem>
                                </Select>
                                {/* <FormHelperText>With label + helper text</FormHelperText> */}
                            </FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="PIN Code"
                                defaultValue=""
                            />
                        </div>
                    </Box>
                    <FormControlLabel control={<Checkbox sx={{
                        color: 'rgba(169, 107, 35, 0.925)',
                        '&.Mui-checked': {
                            color: 'rgba(169, 107, 35, 0.925)',
                        },
                    }} />} label='Email me with sales and offers' />
                <div className='payment-navigation'>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
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
                style={{padding:'0.7rem 1rem',backgroundColor:'rgba(235, 7, 7, 0.65)'}}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Continue Shipping'}
              </Button>
            </div>
          </div>
        )}
                  </div>
                </div>

                <div className='d-flex flex-column h-100 p-5 gap-2'>
                <div className='product-checkout'>
                  <div className='checkout-prod-img'>
                    <img src={telvision} alt='' className='img-fluid'/>
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
                    <img src={telvision} alt='' className='img-fluid'/>
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
                </div>
            </div>
        </>
    )
}

export default Checkout
