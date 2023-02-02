import React from 'react';
import './Navigation.css'

const Navigation = ({onClick, route}) => {
    return(
        <><ul class="vertical menu">
            { route !== 'login' ?
                <li><p className='nav-button' onClick={() => onClick('login') }>Logout</p></li>
                :
                <>
                    {/* <li><p className='nav-button' onClick={() => onClick('login') }>Register</p></li>
                    <li><p className='nav-button' onClick={() => onClick('login') }>Login</p></li> */}
                </>
            }
            </ul>
        </>
    );
}

export default Navigation;