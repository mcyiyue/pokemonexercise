import React from 'react';
import Section from './Section.js';

const login = ({onClick}) => {
    return(
        <Section>
            <div className='cell card large-3'>
                <div className='grid-x grid-margin-x align-center'>
                    <div className='card-divider grid-x grid-margin-x align-center'>
                        <h4 class="text-center large-12">Logging in with your Username & Password</h4>   
                    </div>
                    <div className='card-section large-12'>
                        <form class="log-in-form"> 
                            <label>Username
                                <input type="text" placeholder="Username" />
                            </label>
                            <label>Password
                                <input type="password" placeholder="Password" />
                            </label>
                                <input id="show-password" type="checkbox" /><label for="show-password">Show password</label>
                                <p><input type="submit" class="button expanded" value="Log in" onClick={() => onClick('home')}/></p>
                                <p class="text-center">Forgot your password?</p>
                    </form>
                    </div>
                </div>
            </div>
        </Section>

    )
}

export default login