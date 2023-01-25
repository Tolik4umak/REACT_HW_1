import React from 'react'
import s from './style.module.css'

export default function Form({addUser}) {

  function onSubmit(e){
    e.preventDefault();
    const [name, lastname, age, link] = e.target

    addUser(name.value,lastname.value,age.value,link.value)
    name.value = ''
    lastname.value = ''
    age.value = ''
    link.value = ''
  }


  return (
    <div>
        <form onSubmit={(e)=>onSubmit(e)}  className={s.form}>
            <div>
                <input type="text" name='name' placeholder='name' />
                <input type="text" name='lastname' placeholder='lastname' />
                <input type="text" name='age' placeholder='age' />
            </div>
            <input type="text" name='link' placeholder='put the link for the photo' />
            <input type="submit" value='add user' />
        </form>
    </div>
  )
}
