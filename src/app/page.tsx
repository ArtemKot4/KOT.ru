'use client'

import './styles.css';
import TranslurentBorder from '@->/component/TranslurentBorder';
import NavigationBar from '@->/component/NavigationBar/NavigationBar';

export default function StartPage() {

  return (
    <>
    <NavigationBar />
    <div className="container mx-auto p-4 text-center" style={{ position: 'relative' }}>
      

    <div className='background'></div>
    <h1 className='name' translate="no">KOT<span style={{fontSize: '1.2rem'}}>.ru</span></h1>
    <div style={{borderBottom: '5px solid black', width: '80%', margin: '1rem auto'}}></div>
    
    <p className='faq'>About us</p>
    <TranslurentBorder> 
      It is just Artem Kot site,
      because his try enjoying in holidays
      </TranslurentBorder>
      
    </div>
    </>
  );
};

//npm run dev

