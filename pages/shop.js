import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";

function Shop() {

  const currency = new Intl.NumberFormat(['id']);

  const [getDuration] = useState([
    {id: 1, month: "12 Month", rp: 318},
    {id: 2, month: "6 Month", rp: 318},
    {id: 3, month: "3 Month", rp: 318},
    {id: 4, month: "1 Month", rp: 318}
  ])

  const [getPt] = useState([
    {id: 1, session: "60", rp: 600000},
    {id: 2, session: "24", rp: 600000},
    {id: 3, session: "12", rp: 600000},
    {id: 4, session: "6", rp: 600000}
  ])


  return (
    <Layout title="Shop">
      <div className="lg:max-h-screen relative">
        <img src="/image/shop/Header_Store.jpg" alt="Fitnesswork Presentation" className="object-cover object-center max-h-72 w-full"/>
        <div className="text-center h-24 bg-blue-primary flex items-center">
          <h1 className="font-judul text-4xl text-center text-white mx-auto">PRICING PLAN MEMBERSHIP</h1>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="bg-neutral-100 text-yellow-primary hover:bg-yellow-primary hover:text-blue-primary transition-all duration-300">
          <h2 className="font-judul text-4xl text-center py-4">EARLY RiSER</h2>
        </div>
        <div className="bg-neutral-100 text-blue-primary hover:bg-blue-primary hover:text-yellow-primary transition-all duration-300 border-t-4 lg:border-t-0 border-neutral-400 lg:border-l-4">
          <h2 className="font-judul text-4xl text-center py-4">NIGHT OWL</h2>
        </div>
      </div>

      <div className="container grid lg:grid-cols-2 my-4 text-blue-primary">
        <div className="max-w-sm mx-auto my-4 w-full">
          <h2 className="font-judul text-2xl">TIPE MEMBERSHIP</h2>
          <p>Pilih Gym akses membership anda</p>
          <select className="w-full my-2 py-1 px-2">
            <option value="" key="">Akses Gym</option>
            <option value="1" key="1">All Clubs</option>
            <option value="2" key="2">Singel Clubs</option>
          </select>
          <select className="w-full my-2 py-1 px-2">
            <option value="" key="">Clubs</option>
            <option value="1" key="1">Club FW</option>
            <option value="2" key="2">FW Clubs</option>
          </select>
        </div>
        <div></div>
        <div className="max-w-sm mx-auto my-4">
          <h2 className="font-judul text-2xl">KATEGORI MEMBERSHIP</h2>
          <p>Pilih kategori akses gym pada membership anda</p>
          <select className="w-full my-2 py-1 px-2">
            <option value="" key="">Kategory Akses</option>
            <option value="1" key="1">12 Hours / Week</option>
            <option value="2" key="2">24 Hours / Week</option>
            <option value="3" key="3">36 Hours / Week</option>
            <option value="4" key="4">Unlimited</option>
          </select>
        </div>
        <div></div>
      </div>

      <div className="container text-blue-primary">
        <div className="py-2">
          <h2 className="font-judul text-2xl">Durasi Membership</h2>
          <p>Pilih jangka waktu membership anda</p>
          <div className="flex my-4 overflow-x-auto no-scrollbar">
            {
              getDuration.map((duration) => {
                return (
                  <div key={duration.id}>
                    <div className="w-44 mx-2">
                      <div className="bg-blue-primary text-yellow-primary text-center py-1">
                        <h3 className="font-judul text-2xl">{duration.month}</h3>
                      </div>
                      <div className="bg-neutral-100">
                        <div className="flex justify-center py-6">
                          <p>RP</p><p className="text-4xl font-black">{duration.rp}.</p><p className="mt-auto">000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="py-2">
          <h2 className="font-judul text-2xl">PERSONAL TRAINER</h2>
          <p>Dapatkan session personal trainer</p>
          <div className="flex my-4 overflow-x-auto no-scrollbar">
            {
              getPt.map((pt) => {
                return (
                  <div key={pt.id}>
                    <div className="w-44 mx-2">
                      <div className="bg-blue-primary text-yellow-primary text-center py-1">
                        <h3 className="font-judul text-2xl">{pt.session} Session</h3>
                      </div>
                      <div className="bg-neutral-100">
                        <div className="grid grid-cols-2 py-6 text-center">
                          <div>
                            <i className="icofont-wall-clock text-3xl"></i><br/>
                            <span>60<br/> Minutes</span>
                          </div>
                          <div>
                            <i className="icofont-list text-3xl"></i><br/>
                            <span>{pt.session}<br/> Session</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-primary text-white py-1 flex justify-center">
                      <p className="text-xs">Rp</p><h3 className="font-judul text-2xl">{currency.format(pt.rp)}</h3>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex justify-center py-4">
          <Link href="/confirm">
            <button className="border-2 border-blue-primary px-10 py-2 hover:bg-yellow-primary transition-all duration-300">CONTINUE</button>
          </Link>
        </div>
      </div>
      
      <div className="bg-neutral-100">
        <div className="text-center h-24 bg-blue-primary flex items-center">
          <h1 className="font-judul text-4xl text-center text-white mx-auto">PRICING PLAN MEMBERSHIP</h1>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 container mx-auto my-4">
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Gym_bag.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Slaves_yellow.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Gym_bag_2.jpg" alt="Shop" className="max-w-xs mx-auto"/>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <p className="bg-neutral-500 text-white px-3 py-1">NEW</p>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Tshirt.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Mini_towel.jpg" alt="Shop" className="max-w-xs mx-auto"/>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <p className="bg-neutral-500 text-white px-3 py-1">NEW</p>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Yoga_mat.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Gym_bag.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Slaves_yellow.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Gym_bag_2.jpg" alt="Shop" className="max-w-xs mx-auto"/>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <p className="bg-neutral-500 text-white px-3 py-1">NEW</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <h1 className="font-judul text-blue-primary text-4xl text-center">Available Payment</h1>
        <div className="flex flex-wrap justify-around items-center py-4 lg:px-10">
          <img src="/image/shop/logoBank/BNI.png" alt="BUSINESS SUPPORT" className="h-20"/>
          <img src="/image/shop/logoBank/BRI.png" alt="BUSINESS SUPPORT" className="h-20"/>
          <img src="/image/shop/logoBank/Gopay.png" alt="BUSINESS SUPPORT" className="h-20"/>
          <img src="/image/shop/logoBank/Mandiri.png" alt="BUSINESS SUPPORT" className="h-20"/>
          <img src="/image/shop/logoBank/Permata.png" alt="BUSINESS SUPPORT" className="h-20"/>
          <img src="/image/shop/logoBank/ShopeePay.png" alt="BUSINESS SUPPORT" className="h-20"/>
          <img src="/image/shop/logoBank/Visa.png" alt="BUSINESS SUPPORT" className="h-20"/>
        </div>
      </div>

    </Layout>
  )
}

export default Shop