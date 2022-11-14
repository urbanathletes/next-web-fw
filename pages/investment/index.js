import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/Layout";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

function Investment() {
  const MySwal = withReactContent(Swal);
  
  const [inputs, setInputs] = useState({'kode_inves': 2});
  const handleinputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  // console.log(inputs);
  async function FormSubmit (e) {
    e.preventDefault();
    // dispatch(LoginUser(inputs));
    const url = "https://apiweb.urbanathletes.co.id/investment";
    const JSONdata = JSON.stringify(inputs);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    });
    if (response.status !== 201) {
      return MySwal.fire({
        icon: 'error',
        title: "email or phone number already exists",
      });
    }
    const result = await response.json()
    MySwal.fire({
      icon: 'success',
      title: result.msg,
    });
  }
  
  function menuStudio() {
    let menuStudio = document.querySelector('#menuStudio')
    let btnMenu = menuStudio.querySelectorAll('button')
    btnMenu.forEach(btn => {
      btn.classList.remove('btn-active')
    });
  }

  function imgStudio(e) {
    let listStudio = document.querySelector('#listStudio');
    let imgStudio = listStudio.querySelectorAll('#imgStudio')
    imgStudio.forEach(img => {
      img.classList.remove('img-active')
      if (img.getAttribute('value') === e) {
        img.classList.add('img-active');
      };
    });
  }

  function btnStudio(e) {
    menuStudio();
    imgStudio(e.target.value);
    e.target.classList.add('btn-active');
  }
  const polygonCard = {
    clipPath: "polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%)"
  }
  const bgInves1 = {
    backgroundImage: "url(/image/inves/Header_Kemitraan_overlay.jpg)"
  }

  return (
    <Layout title="invesment">
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <video className="object-cover object-right min-w-min lg:min-w-full" loop autoPlay muted>
          <source src="/video/VideoBannerUA.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 min-h-max relative">
        <div className="flex justify-center md:justify-end md:max-w-[100%] h-72 md:h-[430px]">
          <img className="object-cover object-center h-full w-full" src="/image/home/Hero_Slide.jpg" alt="Franchise Fitnessworks"/>
        </div>
        <div className="grid content-center bg-black text-white px-4 py-4 z-10 font-Futura" 
          // style={polygon}
        >
          <div className="">
            <form onSubmit={FormSubmit}>
              <div className="flex justify-between">
                <h2 className="mx-2 text-3xl font-FuturaBold">INVESTMENT TODAY.</h2>
                {/* <label className="border border-black py-2 px-4 font-FuturaBold hidden">
                  <p>SELECT INVESTMENT</p>
                  <select id="kode_inves" name="kode_inves" className="text-black ml-6 form-select inline max-w-max text-right outline-0 outline-none appearance-none w-full px-3 bg-clip-padding bg-no-repeatrounded transition ease-in-out m-0
                    focus:outline-none" aria-label="Default select example" value={'1'} required>
                      <option value="">Select</option>
                      <option value="1">Urban Athletes</option>
                      <option value="2">Fitness Works</option>
                  </select>
                </label> */}
              </div>
              <div className="flex">
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">FIRST NAME</span>
                  <input name="first_name" type="text"
                  value={inputs.first_name || ''} onChange={handleinputs}
                  placeholder="FIRST NAME"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">LAST NAME</span>
                  <input name="last_name" type="text"
                  value={inputs.last_name || ''} onChange={handleinputs}
                  placeholder="LAST NAME"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
              </div>
              <div className="flex">
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">EMAIL</span>
                  <input name="email" type="text"
                  value={inputs.email || ''} onChange={handleinputs}
                  placeholder="EMAIL"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">MOBILE NUMBER</span>
                  <input name="phone" type="text"
                  value={inputs.phone || ''} onChange={handleinputs}
                  placeholder="MOBILE NUMBER"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
              </div>
              <div className="flex">
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">COUNTRY/REGION</span>
                  <input name="country" type="text"
                  value={inputs.country || ''} onChange={handleinputs}
                  placeholder="COUNTRY/REGION"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">CITY</span>
                  <input name="city" type="text"
                  value={inputs.city || ''} onChange={handleinputs}
                  placeholder="CITY"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
              </div>
              <div className="flex">
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">COMPANY NAME</span>
                  <input name="company" type="text"
                  value={inputs.company || ''} onChange={handleinputs}
                  placeholder="COMPANY NAME"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">JOB TITLE</span>
                  <input name="job" type="text"
                  value={inputs.job || ''} onChange={handleinputs}
                  placeholder="JOB TITLE"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
                <label className="block mx-2 my-2 border-b w-full">
                  <span className="">INDUSTRY</span>
                  <input name="industry" type="text"
                  value={inputs.industry || ''} onChange={handleinputs}
                  placeholder="INDUSTRY"
                  className="text-black mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
                </label>
              </div>
              <div className="mx-2 my-2">
                <button className="py-2 px-4 bg-yellow-primary text-black hover:bg-yellow-600 font-FuturaBold transition-all duration-300" type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="container">
          <h2 className="font-judul text-2xl border-l-[8px] border-yellow-primary px-4">
            Key Areas of Sustainable Competitive Advantage
          </h2>
        </div>
        <div className="lg:container">
          <div className=" text-sm
            text-white font-Futura font-bold py-8 tracking-widest leading-5
            flex flex-wrap justify-center
          ">

            <div className="relative max-w-max my-4 px-2 font-extralight">
              <div className="pt-7 pb-10 w-44 min-h-[180px] pl-10 pr-4 bg-gradient-to-tr from-black to-neutral-500 overflow-visible border-2 border-black outline-4 outline-offset-4 outline-blue-500" 
              style={polygonCard}>
                <div className="text-xl font-FuturaBold absolute top-1 right-4">
                  <p>01</p>
                </div>
                <p>Excellent product offering delivered across a broad range of site sizes</p>
              </div>
            </div>
            <div className="relative max-w-max my-4 px-2 font-extralight">
              <div className="pt-7 pb-10 w-44 min-h-[180px] pl-10 pr-4 bg-gradient-to-tr from-black to-neutral-500 overflow-visible border-2 border-black outline-4 outline-offset-4 outline-blue-500" 
              style={polygonCard}>
                <div className="text-xl font-FuturaBold absolute top-1 right-4">
                  <p>02</p>
                </div>
                <p>Great consumer value proposition : no contract and low price</p>
              </div>
            </div>
            <div className="relative max-w-max my-4 px-2 font-extralight">
              <div className="pt-7 pb-10 w-44 min-h-[180px] pl-10 pr-4 bg-gradient-to-tr from-black to-neutral-500 overflow-visible border-2 border-black outline-4 outline-offset-4 outline-blue-500" 
              style={polygonCard}>
                <div className="text-xl font-FuturaBold absolute top-1 right-4">
                  <p>03</p>
                </div>
                <p>Operating model combines strong revenue management and low labour costs</p>
              </div>
            </div>
            <div className="relative max-w-max my-4 px-2 font-extralight">
              <div className="pt-7 pb-10 w-44 min-h-[180px] pl-10 pr-4 bg-gradient-to-tr from-black to-neutral-500 overflow-visible border-2 border-black outline-4 outline-offset-4 outline-blue-500" 
              style={polygonCard}>
                <div className="text-xl font-FuturaBold absolute top-1 right-4">
                  <p>04</p>
                </div>
                <p>Superior technology and digital capabilities</p>
              </div>
            </div>
            <div className="relative max-w-max my-4 px-2 font-extralight">
              <div className="pt-7 pb-10 w-44 min-h-[180px] pl-10 pr-4 bg-gradient-to-tr from-black to-neutral-500 overflow-visible border-2 border-black outline-4 outline-offset-4 outline-blue-500" 
              style={polygonCard}>
                <div className="text-xl font-FuturaBold absolute top-1 right-4">
                  <p>05</p>
                </div>
                <p>Proven in delivering and deploying successful site selection and development</p>
              </div>
            </div>
            <div className="relative max-w-max my-4 px-2 font-extralight">
              <div className="pt-7 pb-10 w-44 min-h-[180px] pl-10 pr-4 bg-gradient-to-tr from-black to-neutral-500 overflow-visible border-2 border-black outline-4 outline-offset-4 outline-blue-500" 
              style={polygonCard}>
                <div className="text-xl font-FuturaBold absolute top-1 right-4">
                  <p>06</p>
                </div>
                <p>Excellent performance management and continuous improvement</p>
              </div>
            </div>

          </div>
          <div className="container">
            <p className="py-2">
              As Franchisor, Urban Athletes has a full eco-system to set you up for success including a Technology Smart Suite, with localised: 
            </p>
            <ul className="list-disc pl-4">
              <li>
                Website
              </li>
              <li>
                App
              </li>
              <li>
                Member Management System (MMS)
              </li>
            </ul>
            <p className="py-2">
              With the knowledge and support from an experienced franchise team, the Urban Athletes operating model can be deployed to help you bring an industry leading gym to your market.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 py-6">
        <div className=" container text-center max-w-2xl">
          <h2 className="font-judul text-lg">VARIETY OF</h2>
          <h1 className="font-judul text-blue-primary text-4xl mb-4">LICENSING OPTIONS</h1>
          <p>Amp it up with our larger studio spaces. Designed with the same minimalist approach, these larger studio spaces make the most of every inch.</p>
        </div>
        <div className="container my-4 overflow-hidden">
          <div className="max-w-2xl mx-auto font-judul text-xl flex justify-center items-start mt-4 mb-8 min-h-[30px]" id="menuStudio">
            <button onClick={btnStudio} value="mini" className="btn-active px-2 py1 mx-4 lg:mx-6 hover:border-b-2 border-yellow-primary hover:text-blue-primary transition-all duration-300">MINI STUDIO</button>
            <button onClick={btnStudio} value="midi" className="px-2 py1 mx-4 lg:mx-6 hover:border-b-2 border-yellow-primary hover:text-blue-primary transition-all duration-300">MIDI STUDIO</button>
            <button onClick={btnStudio} value="maxi" className="px-2 py1 mx-4 lg:mx-6 hover:border-b-2 border-yellow-primary hover:text-blue-primary transition-all duration-300">MAXI STUDIO</button>
          </div>
          <div id="listStudio" className="min-h-[220px] sm:min-h-[340px] md:min-h-[480px] lg:min-h-[580px] xl:min-h-[750px] overflow-hidden">
            <div className="container absolute opacity-0 img-active transition-all duration-300" id='imgStudio' value="mini">
              <img src="/image/inves/Mini_Studio.jpg" alt="Mini Studio" />
            </div>
            <div className="container absolute opacity-0 transition-all duration-300" id='imgStudio' value="midi">
              <img src="/image/inves/Midi_Studio.jpg" alt="Midi Studio" />
            </div>
            <div className="container absolute opacity-0 transition-all duration-300" id='imgStudio' value="maxi">
              <img src="/image/inves/Maxi_Studio.jpg" alt="Maxi Studio" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <h1 className="font-judul text-blue-primary text-5xl text-center">How to Join Partnership</h1>
        <div className="lg:flex lg:my-12 lg:justify-start">
          <div className="flex justify-center lg:block pt-8">
            <div className="relative hidden lg:block py-4 border border-b-0 border-black">
              <p className="absolute -top-10 right-0 left-0 text-center whitespace-nowrap font-FuturaBold">1 MONTH</p>
            </div>
            <div className="grid grid-cols-1 text-center
              lg:flex lg:justify-center
            ">
              <img src="/image/inves/partnership/Partnership1.png" alt="partnership" className="w-52 mx-4 my-4 lg:my-0"/>
              <img src="/image/inves/partnership/Partnership2.png" alt="partnership" className="w-52 mx-4 my-4 lg:my-0"/>
              <img src="/image/inves/partnership/Partnership3.png" alt="partnership" className="w-52 mx-4 my-4 lg:my-0"/>
              <img src="/image/inves/partnership/Partnership4.png" alt="partnership" className="w-52 mx-4 my-4 lg:my-0"/>
            </div>
            <div className="lg:hidden relative pl-4 ml-4 border-y-2 border-r-2 border-black w-4 min-h-max flex justify-center items-center">
              <p className="absolute -left-0 rotate-90 whitespace-nowrap font-FuturaBold">1 MONTH</p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:my-12 lg:justify-end">
          <div className="flex justify-center lg:block pt-8">
            <div className="relative hidden lg:block py-4 border border-b-0 border-black">
              <p className="absolute -top-10 right-0 left-0 text-center whitespace-nowrap font-FuturaBold">2 -3 MONTH</p>
            </div>
            <div className="grid grid-cols-1 text-center
              lg:flex lg:justify-center
            ">
              <img src="/image/inves/partnership/Partnership5.png" alt="partnership" className="w-52 mx-4 my-4 lg:my-0"/>
              <img src="/image/inves/partnership/Partnership6.png" alt="partnership" className="w-52 mx-4 my-4 lg:my-0"/>
              <img src="/image/inves/partnership/Partnership7.png" alt="partnership" className="w-52 mx-4 my-4 lg:my-0"/>
              <img src="/image/inves/partnership/Partnership8.png" alt="partnership" className="w-52 mx-4 my-4 lg:my-0"/>
            </div>
            <div className="lg:hidden relative pl-4 ml-4 border-y-2 border-r-2 border-black w-4 min-h-max flex justify-center items-center">
              <p className="absolute -left-0 rotate-90 whitespace-nowrap font-FuturaBold">2 -3 MONTH</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center object-cover object-center relative my-6" style={bgInves1}>
        {/* <div className="bg-blue-primary absolute top-0 bottom-0 right-0 left-0 bg-opacity-50 -z-10"></div> */}
        <div className="text-center text-white max-w-2xl mx-auto py-6">
          <img src="/image/LogoFitnessworkPutih.png" alt="Fitnessworks" className="h-12 md:h-20 my-6 mx-auto z-20" />
          <p>Due to relatively high capex & opex in professionally managed gym, resulting high membership price, currently in Indonesia there are no professional fitness centre that can accommodate the gap of middle income society market in Indonesia. Fitnessworks business models can solve this problem by bringing low capex and low operational cost, and more affordable fitness center to the market.</p>
          <div className="mx-2 my-6">
            <Link href="/invesment">
              <button className="py-2 px-4 bg-yellow-primary text-black hover:bg-yellow-600 font-FuturaBold transition-all duration-300" type="submit">INVEST NOW</button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center">
          <p className="font-judul text-2xl">UNPARALLELED</p>
          <h2 className='font-judul text-6xl text-blue-primary'>BUSINESS SUPPORT</h2>
        </div>
        <div className="flex flex-wrap justify-around items-center py-4 lg:px-10">
          <img src="/image/logo/LOGO_UA_HITAM_TM.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/URBAN-LOGO_JR_HIRES.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/URBAN-FALCON FINAL-TM.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/Valor_TM.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/LogoFitnessworkPanjang.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/CIRCUIT.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
        </div>
      </div>
    </Layout>
  )
}

export default Investment