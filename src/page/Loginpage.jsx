import React from 'react';
import LoginComponent from "../component/common/LoginComponent";
import LoaderSpin from '../component/common/LoaderSpin';


function Loginpage(  ) {
    return (
        <div>

            <LoginComponent/>
            <LoaderSpin/>
        </div>
    );
}

export default Loginpage;