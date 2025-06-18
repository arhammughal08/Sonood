// 'use client';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useFormState, useFormStatus } from 'react-dom';
import { Box, ButtonStyled, LabelStyled } from '../../UI/Elements';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

async function handleForm(prevState, formData) {
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    return { message: 'Submitted successfully' };
}

const SubmitButton = () => {
    const { t } = useTranslation();
    const { pending } = useFormStatus();
    return (
        <ButtonStyled className="btn btn-secondary w-auto mt-3 px-5 py-2" type="submit" disabled={pending}>
            {pending ? t("Sending...") : t("Send")}
        </ButtonStyled>
    );
};

const Form = () => {
    const [state, formAction] = useFormState(handleForm, {});
    const [role, setRole] = useState('');

    return (
        <FormWrap action={formAction} className="form">
            <Row>
                <Col lg={6}>
                    <Box className='form__group'>
                        <LabelStyled>{t("name")}</LabelStyled>
                        <input className='form__group--control' type="text" name="name" placeholder={t('namePlaceholder')} required />
                    </Box>
                </Col>
                <Col lg={6}>
                    <Box className='form__group'>
                        <LabelStyled> {t('email')} </LabelStyled>
                        <input className='form__group--control' type="email" name="email" placeholder={t('emailPlaceholder')} required />
                    </Box>
                </Col>
                <Col lg={6}>
                    <Box className='form__group'>
                        <LabelStyled>{t("contactPhone")}</LabelStyled>
                        <input className='form__group--control' type="text" name="phone" placeholder={t("phonePlaceholder")} required />
                    </Box>
                </Col>
                <Col lg={6}>
                    <Box className='form__group'>
                        <LabelStyled>{t('Role')}</LabelStyled>
                        <select
                            className='form__group--control'
                            name="role"
                            required
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="" visible hidden>{t("choose")}</option>
                            <option value="partner">{t("partner")}</option>
                            <option value="student">{t("student")}</option>
                        </select>
                        <IoIosArrowDown />
                    </Box>
                </Col>

                {role === 'student' && (
                    <>
                        <Col lg={6}>
                            <Box className='form__group'>
                                <LabelStyled>{t("selectCountry")}</LabelStyled>
                                <select className='form__group--control' name="interest">
                                    <option value="" visible hidden >{t("selectCountry")}</option>
                                </select>
                                <IoIosArrowDown />
                            </Box>
                        </Col>
                        <Col lg={6}>
                            <Box className='form__group'>
                                <LabelStyled>{t("educationalLevel")}</LabelStyled>
                                <select className='form__group--control' name="interest">
                                    <option value="" visible hidden>{t("educationalLevel")}</option>
                                    <option value="bachelor">Bachelor’s</option>
                                    <option value="master">Master’s</option>
                                    <option value="phd">PhD</option>
                                    <option value="other">Other</option>
                                </select>
                                <IoIosArrowDown />
                            </Box>
                        </Col>
                    </>
                )}
                <Col lg={12}>
                    <Box className='form__group'>
                        <LabelStyled>{t('yourMessage')}</LabelStyled>
                        <textarea className='form__group--control' name="message" placeholder={t("messagePlaceholder")} rows="4"></textarea>
                    </Box>
                </Col>
                <Col lg={12} className='d-flex justify-content-end'>
                    <SubmitButton />
                </Col>
            </Row>
        </FormWrap>
    );
};



export default Form;

const FormWrap = styled.form`

.form__group{
    position:relative;
    display:flex;
    flex-direction:column;
    gap:8px;
    margin-bottom:12px;

    &--control{ 
        border-radius:12px;
        border:1px solid var(--theme-color);
        padding:10px 15px;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        &:focus,
        &:visible-focus,{
            border:2px solid var(--theme-color);
            outline:2px solid var(--theme-color);
        }

        &:invalid {
            color: var(--light-blue);
        }

        option{
            background: var(--theme-color);
            color: var(--white);

            &:hover{
                background: var(--white) !important;
                color: var(--theme-color);
            }
        }
        option[value=""],
        &::placeholder {
            color: var(--light-blue);
            font-weight:regular;
        }
    } 

    & > svg{
        position: absolute;
        top: 35px;
        bottom: 0;
        margin: auto;
        right: 15px;
        color:var(--gray);
    }
}

`
