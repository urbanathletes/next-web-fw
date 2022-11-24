import React from 'react'

function InputText(props) {

  function inputLoad(el) {
    let input = el.target;
    let label = el.target.labels[0].firstChild;
    if (!input.value) {
      label.classList.add('is-input')
    } 
  }

  function inputForm(el) {
    let label = el.target.labels[0].firstChild;
    label.classList.add('is-input')
  }

  function outInput(el) {
    let input = el.target;
    let label = el.target.labels[0].firstChild;
    if (!input.value) {
      label.classList.remove('is-input')
    } 
  }

  return (
    <div className="pt-4">
      <label className="relative">
        <span className="absolute mx-2 top-0 left-0 opacity-70 transition-all duration-300">{props.label}</span>
        <input type={props.type} value={props.value} name={props.name} onChange={props.onChange} id={props.id} className="w-full bg-white outline-none border border-blue-primary h-10 px-2 group-focus:bg-black" onLoad={inputLoad} onFocus={inputForm} onBlur={outInput}/>
      </label> 
    </div>
  )
}

export default InputText