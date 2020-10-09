import React from 'react'


function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <a href="/about"><p>About This Website</p></a>
        </div>
    )
}

export default Footer
