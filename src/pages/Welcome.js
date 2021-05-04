import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import './Welcome.css'

class Welcome extends Component {

    navigateToHome(){

    }

    render() {
        return <div className="Welcome">
            <Typewriter
                options={{
                    strings: ['Hello, This is an application which helps you search for forks on github please press on the Lets start button to navigate through the App'],
                    autoStart: true,
                    loop: true,
                }}
            />
            <a className="welcomeBtn" href="/home" >Let's Start</a>
        </div>
    }
}

export default Welcome
