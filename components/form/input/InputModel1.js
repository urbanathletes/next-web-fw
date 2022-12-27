import React, { useEffect, useState } from 'react'

export const InputModel1 = (props) => {

  return (
    <div className="pt-4 my-2">
      <label className="relative">
        <span className={`mx-2`}>{props.label}</span>
        {/* <input type={props.type} name={props.name} id={props.id} onChange={props.onChange} value={props.value} className="w-full bg-white outline-none border border-blue-primary h-10 px-2 group-focus:bg-black" onLoad={inputLoad} onFocus={inputForm} onBlur={outInput}/> */}
        <input type={props.type} name={props.name} id={props.id} value={props.value ? props.value : ''} onChange={props.onChange} className={`w-full bg-transparent border-2 focus:border-black dark:focus:border-white h-10 px-2 group-focus:bg-black`} required={props.required ? true : false}/>
      </label> 
    </div>
  )
}