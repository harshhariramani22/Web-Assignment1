import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, TextField, Typography, Grid, Button, Link, FormControlLabel, Checkbox, FormControl, FormLabel, RadioGroup, Radio, Snackbar, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function MyForm() {
    const [name, setName] = useState("");

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <form classname>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width:'100%'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Vehicle requirements form
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '50%' }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="brand"
                        label="Vehicle Brand"
                        name="brand"
                        autoComplete="brand"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="model"
                        label="Preferred model"
                        type="model"
                        id="model"
                        autoComplete="car-model"
                    />

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Select the fuel variant</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Petrol" />
                            <FormControlLabel value="male" control={<Radio />} label="Diesel" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />

                        </RadioGroup>
                    </FormControl>


                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="date"

                        type="date"
                        id="date"
                        autoComplete="expected-date"
                    />
                    <FormLabel
                        id="Expected delivery date"
                    > Enter the Expected delivery date </FormLabel>


                    <TextField
                        margin="normal"
                        fullWidth
                        name="model"
                        label="Enter the dealer name(if any)"
                        type="model"
                        id="model"
                        autoComplete="car-model"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleClick}
                    >
                        Submit
                    </Button>

                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '150%' }}>
                            Your requirements have been submitted
                        </Alert>
                    </Snackbar>

                    {/* <Button variant="outlined" onClick={handleClick} >
                        Open success snackbar
                    </Button>
                    
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Your requirements have been submitted
                        </Alert>
                    </Snackbar> */}

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Return to homepage
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"View Car catalog"}
                            </Link>
                        </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
                    <br></br>

                </Box>
            </Box>




        </form>
    )
}




export default MyForm;