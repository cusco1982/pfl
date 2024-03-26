'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';







export default async function contactPage() {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')
    const { pending } = useFormStatus();



    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);


        
        console.log(pending)

        console.log({
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message'),
        });

        console.log('end',pending)
    };




    return (
        <Container component="main" maxWidth="xs" style={{ backgroundColor: "orange" }}>

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >


                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>



                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                autoFocus
                                // autoComplete="given-name"
                                id="name"
                                name="name"
                                label="Full Name"
                                required

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email Address"
                                // autoComplete="email"
                                required

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                name='message'
                            // defaultValue="I like your portfolio!"

                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I'm not a robot/Recaptcha"
                                required

                            />
                        </Grid>



                    </Grid>

                    <Button
                        sx={{ mt: 3, mb: 2, justifyContent: "center" }}
                        fullWidth
                        type="submit"
                        variant="contained"
                        disabled={pending}
                    >


                        <Typography mx={2} >
                            {pending ? 'Sending...' : 'Send Message'}
                        </Typography>

                        {pending ? <HourglassBottomIcon /> : <SendIcon />}


                    </Button>

                </Box>
            </Box>



        </Container>
    )
};