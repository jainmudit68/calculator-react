import React from 'react'
import CalButton from './CalButton'
import './Calculator.css'

export default function Calculator() {
  return (
    <div className='frame'>
        <input type='text' className='dispScreen' readOnly/>
        <div className='buttons'>
            <CalButton symbol="C"/>
            <CalButton symbol="DEL"/>
            <CalButton symbol="9"/>
            <CalButton symbol="8"/>
            <CalButton symbol="7"/>
            <CalButton symbol="/"/>
            <CalButton symbol="*"/>
            <CalButton symbol="6"/>
            <CalButton symbol="5"/>
            <CalButton symbol="4"/>
            <CalButton symbol="-"/>
            <CalButton symbol="+"/>
            <CalButton symbol="3"/>
            <CalButton symbol="2"/>
            <CalButton symbol="1"/>
            <CalButton symbol="="/>
            <CalButton symbol="."/>
            <CalButton symbol="0"/>
            <div className='tag'>MJ</div>
      </div>
      
      
    </div>
  )
}
