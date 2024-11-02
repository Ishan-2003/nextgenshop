import React from 'react'
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const StepperInfo = () => {
   
  const [Country, setCountry] = React.useState('');
  const [Address, setAddress] = React.useState('');
  const [State, setState] = React.useState('');
  const navigate = useNavigate();
  const handleChange1 = (event) => {
    setAddress(event.target.value);
};
const handleChange2 = (event) => {
    setCountry(event.target.value);
};
const handleChange3 = (event) => {
    setState(event.target.value);
};
  const logout = ()=>{
    localStorage.clear();
    navigate('/login')
  }
  return (
    <div>
      <h4 style={{fontSize:'larger',fontWeight:'bold'}}>Contact Information</h4>
                    <div className='payment-contact-info' style={{marginTop:'2rem'}}>
                        <TextField
                        className = "Mui-disabled"
                            disabled
                            id="outlined-required"
                            label="Name (Email)"
                            defaultValue="Ishan Guleria (21bcs022@nith.ac.in)"
                            isBlocked = 'true'
                        />
                        <Button variant="contained" onClick={()=>logout()}>Logout</Button>
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
                
    </div>
  )
}

export default StepperInfo
