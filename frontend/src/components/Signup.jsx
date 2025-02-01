import React, { useState } from 'react'
import style from "../css/Signup.module.css";

function Signup(){
    const [formData,setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        password: ''
    })

    const formDataHandler = (event) => {
        const{name, value} = event.target;
        setFormData({...formData, [name]:value});
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return(
        <div className={style.mainContainer}>
            <h2>Kayıt Ol</h2>
            <p>Kolay ve Hızlı</p>
            <form>
                <div className={style.card}>
                    <div className={style.nameRow}>
                        <div className={style.col}>
                            <label htmlFor='firstName'>Ad</label>
                            <input type='text' placeholder='Ad' name='firstName' value={formData.firstName} onChange={formDataHandler} />
                        </div>
                        <div className={style.col}>
                            <label htmlFor='lastName'>Soyad</label>
                            <input type='text' placeholder='Soyad' name='lastName' value={formData.lastName} onChange={formDataHandler} />
                        </div>
                    </div>
                    <div className={style.mobileNumber}>
                        <label htmlFor='mobileNumber'>Telefon No</label>
                        <input type='text' placeholder='Telefon No' name='mobileNumber' value={formData.mobileNumber} onChange={formDataHandler} />
                    </div>
                    <div className={style.nameRow}>
                        <div className={style.col}>
                            <label htmlFor='dateOfBirth'>Doğum Tarihi</label>
                            <input type='date' placeholder='Doğum Tarihi' name='dateOfBirth' value={formData.dateOfBirth} onChange={formDataHandler} />
                        </div>
                        <div className={style.col}>
                            <label htmlFor='gender'>Cinsiyet</label>
                            <select name='gender' value={formData.gender} onChange={formDataHandler} >
                                <option value="">Seçiniz</option>
                                <option value="famale">Kadın</option>
                                <option value="male">Erkek</option>
                                <option value="other">Diğer</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.mobileNumber}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Email Adresi' name='email' value={formData.email} onChange={formDataHandler} />
                    </div>
                    <div className={style.mobileNumber}>
                        <label htmlFor='password'>Şifre</label>
                        <input type='password' placeholder='Şifre' name='password' value={formData.password} onChange={formDataHandler} />
                    </div>
                    <div className={style.signUpContainer}>
                        <button className={style.btn}>Kayıt Ol</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;