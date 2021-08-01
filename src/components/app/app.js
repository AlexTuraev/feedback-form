import React, { useState } from 'react';
import LangSwitch from '../lang-switch';
import MessageForm from '../message-form';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import './app.css';

const StyledPaper = styled(Paper)`
    background: #00e676;
    padding: 0 50px;
    height: 100vh;
    & *{
        font-weight: 700;
    }
`;

const MyButton = styled(Button)`
    background: #ff8f00;
    border: 0px;
    borderRadius: 3px;
    box-shadow: 0 7px 3px -4px #9e9e9e;
    color: white;
    height: 48px;
    padding: 0 30px;
    margin-top: 20px;
    font-weight: 700;
    &:hover{
        background: #ef6c00;
    }
`;


// Конструктор объекта
function InputFieldObject({ value = '', error = undefined } = {}) {
    this.value = value;    // содержание поля TextField в компоненте MessageForm
    if (error !== undefined) this.hasError = error; // для валидации заполнения полей
}

const App = () => {
    const [currentLang, setCurrentLang] = useState('RU');
    const [formData, setFormData] = useState({
        firstname: new InputFieldObject(),
        surname: new InputFieldObject(),
        phone: new InputFieldObject({ error: false }),
        email: new InputFieldObject({ error: false }),
        message: new InputFieldObject({ error: false })
    });

    const checkValidation = (name, value) => {
        let error = false;
        if (value === '') return error;

        switch (name) {
            case 'email':
                error = /^\w+@[\w]{1,63}[.]+[a-z, A-Z]{2,5}$/.test(value) ? false : true;
                break;
            case 'phone':
                error = (/^[+][\d]{11}$/.test(value)) || (/^[\d]{10,11}$/.test(value)) ? false : true;
                break;
            case 'message':
                error = (value.length < 7) ? true : false;
                break;
            default:
                break;
        }

        return error;
    }

    const onChangeFormData = (name, value) => {
        const newFormData = { ...formData };
        newFormData[name].value = value;
        newFormData[name].hasError = checkValidation(name, value);

        setFormData(newFormData);
    }

    const onChangeLang = (newLang) => {
        setCurrentLang(newLang);
    }

    const handlerSubmit = () => {
        const resultObject = Object.keys(formData).reduce((acc, item) => {
            if (formData[item].value === '') {
                return { ...acc }
            } else {
                return { ...acc, ...{ [item]: formData[item].value } }
            }
        }, {});

        console.log(resultObject);
    }

    return (
        <div>
            <Container maxWidth="md">
                <StyledPaper elevation={0}>
                    <LangSwitch lang={currentLang} changeLang={onChangeLang} />
                    <MessageForm lang={currentLang} formData={formData} onChangeFormData={onChangeFormData} />
                    <MyButton
                        onClick={handlerSubmit}
                        disabled={formData.phone.hasError || formData.email.hasError || formData.message.hasError}
                    >
                        {currentLang === 'RU' ? 'ОТПРАВИТЬ' : 'SUBMIT'}
                    </MyButton>
                </StyledPaper>
            </Container>
        </div>
    );
}

export default App;