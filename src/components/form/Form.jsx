import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from 'react-icons/io';
import { Box, ButtonStyled, LabelStyled, Span } from '../../UI/Elements';
import { getDestinations, getEducationLevels, getRoles, submitContactForm } from '../../api/Api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
    const { t, i18n } = useTranslation();
    const formRef = useRef(null);
    const [validated, setValidated] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        roleName: '',
        destination: '',
        education_level: '',
        message: '',
    });

    const [roles, setRoles] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [educationLevels, setEducationLevels] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRoles(i18n.language).then(setRoles);
        getDestinations(i18n.language).then(setDestinations);
        getEducationLevels(i18n.language).then(setEducationLevels);
    }, [i18n.language]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'role') {
            const selected = roles.find((role) => role.id.toString() === value);
            setFormData((prev) => ({
                ...prev,
                role: value,
                roleName: selected?.name?.toLowerCase() || '',
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;

        if (!form.checkValidity()) {
            setValidated(true);
            return;
        }

        setLoading(true);

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            role: formData.role,
            destination: formData.roleName === 'student' ? formData.destination : '',
            education_level: formData.roleName === 'student' ? formData.education_level : '',
            message: formData.message,
        };

        try {
            await submitContactForm(payload, i18n.language);
            toast.success(t('submission'));
            setFormData({
                name: '',
                email: '',
                phone: '',
                role: '',
                roleName: '',
                destination: '',
                education_level: '',
                message: '',
            });
            setValidated(false);
        } catch (error) {
            console.error('error', error);
            toast.error(t('message_error'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormWrap
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className={validated ? 'was-validated' : ''}
        >
            <Row>
                <Col lg={6}>
                    <Box className="form__group">
                        <LabelStyled>{t('name')}</LabelStyled>
                        <input
                            className="form__group--control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('namePlaceholder')}
                            required
                        />
                        <Span className="invalid-feedback">{t('name_required')}</Span>
                    </Box>
                </Col>
                <Col lg={6}>
                    <Box className="form__group">
                        <LabelStyled>{t('email')}</LabelStyled>
                        <input
                            className="form__group--control"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('emailPlaceholder')}
                            required
                        />
                        <Span className="invalid-feedback">{t('email_required')}</Span>
                    </Box>
                </Col>
                <Col lg={6}>
                    <Box className="form__group">
                        <LabelStyled>{t('contactPhone')}</LabelStyled>
                        <input
                            className="form__group--control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t('phonePlaceholder')}
                            required
                        />
                        <Span className="invalid-feedback">{t('phone_required')}</Span>
                    </Box>
                </Col>
                <Col lg={6}>
                    <Box className="form__group">
                        <LabelStyled>{t('Role')}</LabelStyled>
                        <select
                            className="form__group--control"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="" hidden>{t('choose')}</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {i18n.language === 'ar' ? role.name_ar : role.name}
                                </option>
                            ))}
                        </select>
                        <IoIosArrowDown />
                        <Span className="invalid-feedback">{t('role_required')}</Span>
                    </Box>
                </Col>

                {formData.roleName === 'student' && (
                    <>
                        <Col lg={6}>
                            <Box className="form__group">
                                <LabelStyled>{t('selectCountry')}</LabelStyled>
                                <select
                                    className="form__group--control"
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" hidden>{t('selectCountry')}</option>
                                    {destinations.map((dest) => (
                                        <option key={dest.id} value={dest.id}>
                                            {i18n.language === 'ar' ? dest.name_ar : dest.name}
                                        </option>
                                    ))}
                                </select>
                                <IoIosArrowDown />
                                <Span className="invalid-feedback">{t('destination_required')}</Span>
                            </Box>
                        </Col>
                        <Col lg={6}>
                            <Box className="form__group">
                                <LabelStyled>{t('educationalLevel')}</LabelStyled>
                                <select
                                    className="form__group--control"
                                    name="education_level"
                                    value={formData.education_level}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" hidden>{t('educationalLevel')}</option>
                                    {educationLevels.map((level) => (
                                        <option key={level.id} value={level.id}>
                                            {i18n.language === 'ar' ? level.name_ar : level.name}
                                        </option>
                                    ))}
                                </select>
                                <IoIosArrowDown />
                                <Span className="invalid-feedback">{t('education_required')}</Span>
                            </Box>
                        </Col>
                    </>
                )}

                <Col lg={12}>
                    <Box className="form__group">
                        <LabelStyled>{t('yourMessage')}</LabelStyled>
                        <textarea
                            className="form__group--control"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t('messagePlaceholder')}
                            required
                        ></textarea>
                        <Span className="invalid-feedback">{t('message_required')}</Span>
                    </Box>
                </Col>

                <Col lg={12} className="d-flex justify-content-end">
                    <ButtonStyled
                        className="btn btn-secondary w-auto mt-3 px-5 py-2"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? t('Sending...') : t('Send')}
                    </ButtonStyled>
                </Col>
                <ToastContainer position="bottom-center" />
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
            &:visible-focus{
                border:2px solid var(--theme-color);
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

