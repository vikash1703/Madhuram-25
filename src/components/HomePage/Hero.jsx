import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 200); }, []);

  return (
    <section className="relative text-center min-h-screen overflow-hidden">
      <div className="relative z-10 w-full h-screen">

        {/* Sant Longowal Address - Ekdam White aur Upar */}
        <div style={{
          position: 'absolute', top: '4%', left: '50%', transform: 'translateX(-50%)',
          opacity: visible ? 1 : 0, transition: 'all 1s ease',
          color: '#ffffff', 
          textAlign: 'center', whiteSpace: 'nowrap',
          textShadow: '0 0 15px rgba(255,255,255,1), 0 2px 5px rgba(0,0,0,1)'
        }}>
          <p style={{fontWeight: 'bold', fontSize: '1rem', opacity: 1}}>Sant Longowal Institute of Engineering & Technology</p>
          <p style={{fontSize: '0.8rem', opacity: 1}}>(Deemed-to-be-University, under Ministry of Education, Govt. of India)</p>
          <p style={{fontSize: '0.8rem', opacity: 1}}>Longowal, Distt. Sangrur, Punjab-148106</p>
        </div>

        {/* MADHURAM Text */}
        <div style={{
          position: 'absolute', top: '22%', left: '50%', transform: 'translateX(-50%)',
          opacity: visible ? 1 : 0,
          transition: 'all 1.5s ease 0.2s',
          textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          whiteSpace: 'nowrap'
        }}>
          <p style={{
            fontSize: 'clamp(4rem, 11vw, 9rem)',
            fontWeight: '900',
            color: 'rgba(245,200,66,0.85)',
            textShadow: '0 0 30px rgba(253,200,14,0.9), 0 0 60px rgba(253,200,14,0.6), 2px 2px 8px rgba(0,0,0,0.8)',
            letterSpacing: '0.05em',
            fontFamily: 'Impact, sans-serif',
            lineHeight: 1,
          }}>MADHURAM</p>

          <p style={{color: '#ffffff', fontSize: '1rem', fontWeight: '600', letterSpacing: '0.15em', marginTop: '0.3rem', textShadow: '0 2px 8px rgba(0,0,0,0.9)'}}>
            SLIET's Annual National Level Socio Cultural Fest
          </p>
          <p style={{color: '#ffffff', fontSize: '1.2rem', fontWeight: '700', marginTop: '0.8rem', textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>
            10<sup>th</sup> - 11<sup>th</sup> April 2026
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero;
