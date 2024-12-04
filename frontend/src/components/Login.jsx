import { useState } from 'react';
import style from '../css/Login.module.css'

function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    console.log(email,password);

    return(
        <div className={style.mainContainer}>
            <h2>Hoş Geldiniz</h2>
            <div className={style.card}>
                <p className={style.cardHeader}>Sisteme Giriş Yap</p>
                <div className={style.emailDetail}>
                    <label htmlFor='email'>Email</label>
                    <input type='text' placeholder='ornek@mail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor='password'>Şifre</label>
                    <input type='text' placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={style.btnContainer}>
                    <button className={style.loginBtn}>Giriş Yap</button>
                </div>
                <div className={style.linkContainer}>
                    <a className={style.bottomLinks} href="forgot-password">Şifremi Unuttum</a>
                    <a className={style.bottomLinks} href='sign-up'>Kayıt Ol</a>
                </div>
            </div>
        </div>
    )
}

export default Login;