import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const MyPaper = styled(Paper)`
    margin-top: 100px;
    padding: 30px;
    border-radius: 16px;
    border: 1px solid #bdbdbd;
`;

const MyTypography = styled(Typography)`
    margin-bottom: 20px;
`;

const MessageForm = ({ lang, formData, onChangeFormData }) => {
    const handlerChange = (event)=>{
        onChangeFormData( event.target.name, event.target.value );
    }

    return (
        <MyPaper elevation={3} onChange={handlerChange}>
            <MyTypography variant='h4'>
                {lang === 'RU' ? 'Форма отправки сообщений' : 'Send message form'}
            </MyTypography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="firstname"
                        name='firstname'
                        value={formData.firstname.value}
                        error={false}
                        label={lang === 'RU' ? 'Имя' : 'Name'}
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="surname"
                        name='surname'
                        value={formData.surname.value}
                        error={false}
                        label={lang === 'RU' ? 'Фамилия' : 'Surname'}
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="phone"
                        name='phone'
                        value={formData.phone.value}
                        error={formData.phone.hasError}
                        label={lang === 'RU' ? 'Телефон' : 'Phone'}
                        defaultValue=""
                        helperText={formData.phone.hasError && 
                            (lang==='RU' ? 'введите корректно номер телефона' : 'phone must be a valid phone')}
                        variant="outlined"
                        fullWidth
                        autoComplete="tel"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="email"
                        name="email"
                        value={formData.email.value}
                        error={formData.email.hasError}
                        label={lang === 'RU' ? 'Email адрес' : 'Email address'}
                        defaultValue=""
                        helperText={formData.email.hasError && 
                            (lang==='RU' ? 'введите правильный email' : 'email must be a valid email')}
                        variant="outlined"
                        fullWidth
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="message"
                        name="message"
                        value={formData.message.value}
                        error={formData.message.hasError}
                        label={lang === 'RU' ? 'Сообщение' : 'Message'}
                        multiline
                        minRows={4}
                        maxRows={4}
                        defaultValue=""
                        helperText={formData.message.hasError && 
                            (lang==='RU' ? 'сообщение слишком короткое' : 'message is too short')}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </MyPaper>
    );
}

export default MessageForm;