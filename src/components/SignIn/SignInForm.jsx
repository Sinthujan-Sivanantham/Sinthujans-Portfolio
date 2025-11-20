import { useState } from 'react';

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function submitHandler(e) {
        e.preventDefault();

        const correctEmail = "nick.podratz@syntax-institut.de"
        const correctPassword = "12345678"

        if (email === correctEmail && password === correctPassword) {
            console.log("Login erfolgreich!")
            setEmail("")
            setPassword("")
            setIsLoggedIn(true)
        } else {
            console.log("Login fehlgeschlagen.")
        }        
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
        validatePassword()
    }

    function validatePassword() {
        const is6CharsLong = password.length >= 6
        const containsNum3 = password.includes('3')
        setIsPasswordValid(is6CharsLong && containsNum3)
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input type='email' placeholder='email' value={email} onChange={handleEmailChange}></input>
            <input type='password' placeholder='password' value={password} onChange={handlePasswordChange}></input>
            <button type='submit'>Submit</button>
            { isPasswordValid ? "valid" : "invalid" }
            { isLoggedIn && <p>The user is now logged in.</p> }
        </form>
    )
}