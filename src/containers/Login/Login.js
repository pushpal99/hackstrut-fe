import React, { useEffect } from 'react';

function Login() {
    console.log('Login component');
    useEffect(() => {
        redirect()
    }, [])
    return (
    <div>
        Hey there
    </div>
    )
};

export default Login;