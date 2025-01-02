'use client' //временно

import './styles.css';
import React from 'react'
import TranslurentBorder from '@->/component/TranslurentBorder';
import Authorization from '@->/component/Authorization/Authorization';
import Page from '@->/component/Base/Page';

export default function StartPage() {
const [logInRequest, setLogInRequest] = React.useState(false);

  return (
    <Page> 
    <div className="container mx-auto p-4 text-center" style={{ position: 'relative' }}>
      {logInRequest && <div className='background'></div>}
      <h1 className='name' translate="no">KOT</h1>
      
      {!logInRequest && <Authorization state={setLogInRequest} />}

      {logInRequest && (
        <>
      <div style={{borderBottom: '5px solid black', width: '80%', margin: '1rem auto'}}></div>
      <p className='faq'>About us</p>
        <TranslurentBorder> 
          It is just Artem Kot site,
          because his enjoying in holidays
        </TranslurentBorder>
        </>
      )}
      </div>
    </Page>
  );
};

//npm run dev

