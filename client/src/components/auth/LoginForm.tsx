import {useNavigate} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import * as Yup from 'yup';
import React,{useState} from "react";
import {useLoginMutation} from "../../queries/authQueries";
import Loader from '../shared/Loader';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
});

const LoginForm: React.FC = () => {

    const loginMutation = useLoginMutation();
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);

    const handleLogin = async (values: any) => {
        try {
            const userData = await loginMutation.mutateAsync(values);
            return userData;
        } catch (error) {
            throw error;
        }
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit:  (values: any): any => {
            handleLogin(values)
                .then(userData => {
                    navigate('/dashboard-em', {state: {data: userData}});
                })
                .catch(error => {
                    setIsError(true);
                    console.log('Login error', error)
                })
        }
    });

    const errorStyle = {
        border: isError ? '1px solid red' : '',
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email" style={{fontSize: '.9rem'}}>Email Address</label>
            <div className='gt_input_group'>
                <EmailOutlinedIcon className='gt_icon' style={{ fontWeight: 100 }}/>
                <input
                    style={errorStyle}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className='error'>{formik.errors.email}</div>
                ) : null}
            </div>
            <label htmlFor="password" style={{fontSize: '.9rem'}}>Password</label>
            <div className='gt_input_group' >
                <KeySharpIcon className='gt_icon'/>
                <input
                    style={errorStyle}
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className='error'>{formik.errors.password}</div>
                ) : null}
            </div>

            <button type="submit" className='gt_submit_btn'>Submit</button>
            { isError && <p className='error'>Your email or password is not correct</p>}
            <p className='info-text'>Forgot password? <a href="#">reset</a></p>
            <p className='text-small'>Your email acts as your unique username for MyEmbassy Online. This enables us to identify and associate your online interactions to ensure one record of all your engagements with us.</p>
        </form>
    )
}

export default LoginForm
