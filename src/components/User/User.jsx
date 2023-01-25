import React from 'react'
import s from './style.module.css'

export default function User({id,name,lastname,age,photo,delCard}) {
  return (
    <div className={s.card}>
        <div className={s.img}>
            <img src={photo} alt="" />
        </div>
       <div className={s.info}>
            <div>
                name: {name}
            </div>
            <div>
                last name: {lastname}
            </div>
            <div>
                age: {age}
            </div>
       </div>
       <button onClick={()=>delCard(id)} className={s.del}>Delete</button>
    </div>
  )
}
