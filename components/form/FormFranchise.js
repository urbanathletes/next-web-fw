import Image from 'next/image'
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { InputModel1 } from './input/InputModel1';

export const FormFranchise = () => {
  const MySwal = withReactContent(Swal);
  const [isLoading, setIsLoading] = useState( false );
  const [inputs, setInputs] = useState({'kode_inves': 2});
  const url = "https://apiweb.urbanathletes.co.id/investment";
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const danaInvest = [
    {id:1, value:1700000000},
    {id:2, value:2000000000},
    {id:3, value:2500000000},
    {id:4, value:4000000000},
    {id:5, value:5000000000},
  ];

  const rupiah = (number)=>{
    return new Intl.NumberFormat().format(number);
  }

  const saveData = async () => {
    const JSONdata = JSON.stringify(inputs);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    });

    const result = await response.json();
    if (response.status !== 201) {
      setIsLoading(false);
      return MySwal.fire({
        icon: 'error',
        title: result.msg
      });
    }

    MySwal.fire({
      icon: 'success',
      title: result.msg
    });
    setInputs({'kode_inves': 2})
    setIsLoading(false);
  }

  const hendelSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(inputs);
    saveData();
  }

  return (
    <div 
      className="rounded-2xl bg-white p-4 h-full overflow-y-auto no-scrollbar mx-auto
        md:flex md:items-center md:max-w-6xl md:max-h-[35rem]
    ">
      <div className="relative h-1/2 md:h-full md:w-full md:min-w-[50%]">
        <Image 
          src="/image/imgFormFanchise.png"
          alt="Franchise"
          fill
          style={{className:"w-full"}}
          objectFit="contain" // change to suit your needs
        />
      </div>
      <div className="my-4 md:px-4 text-sm md:w-md">
        <h2 className="text-2xl lg:text-3xl font-black my-2">Be Our Partner!</h2>
        <p>
          Fitnessworks is the first Fitness Center with a Time Based Management membership. Has 20 years of professional fitness experience in Indonesia with a Fast Return on Investment in 15 months, Gym Low Budget Low Investment and High Value.
        </p>
        <form onSubmit={hendelSubmit}>
          <div className="pt-4 my-2">
            <label className="relative">
              <span className={`mx-2`}>Nominal dana yang akan diinvestasikan</span>
              <select className="w-full bg-transparent border-2 focus:border-black dark:focus:border-white h-10 px-2 group-focus:bg-black" name="nominal" value={inputs.nominal || ''} onChange={handleChange} required={true}>
                <option value="" key="">Select</option>
                {
                  danaInvest.map((dana) => {
                    return (
                      <option value={dana.value} key={dana.id}>
                        {
                          dana.id == 4 ?
                          "Rp " + rupiah(dana.value) + " - " + rupiah(5000000000)
                          : dana.id == 5 ?
                          "> Rp " + rupiah(dana.value) 
                          : "Rp " + rupiah(dana.value)
                        }
                      </option>
                    )
                  })
                }
              </select>
            </label> 
          </div>
          <InputModel1 label="Nama lengkap" type="text" name="name" id="name" value={inputs.name || ''} onChange={handleChange} required={true}/>
          <InputModel1 label="Nomor Handphone" type="text" name="phone" id="phone" value={inputs.phone || ''} onChange={handleChange} required={true}/>
          <InputModel1 label="Email" type="text" name="email" id="email" value={inputs.email || ''} onChange={handleChange} required={true}/>
          <div className="mt-4 py-2">
            <button type="submit" className={`py-1.5 w-full text-center text-white font-bold rounded-lg ${isLoading ? 'bg-blue-700' : 'bg-blue-primary'} hover:bg-blue-800`} disabled={isLoading}>
              {isLoading ? 'Loading...' : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
