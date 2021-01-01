import React from 'react'
import Navigation from './Navigation'

function Header() {
    return (
        <div>
            <header className="header">
                <span style={{fontWeight:"bold"}}>
                    App Name
                </span>
                <Navigation />
            </header>
        </div>
    )
}

export default Header
