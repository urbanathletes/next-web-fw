import AppLayoutTimeTable from "../../components/AppLayoutTimeTable"
import ButtonLink from "../../components/ButtonLink"
import Layout from "../../components/Layout"

function TimeTable() {
  return (
    <Layout title="TimeTable">
      <AppLayoutTimeTable>
        <div className="container">
          <div className="md:grid md:grid-cols-2 mt-4 md:gap-4 text-neutral-100">
            <label className="inline-block px-4 py-2 w-full xl:w-96 md:mr-auto">
              <select className="p-2 w-full border border-gray-200 bg-neutral-700 outline-none focus:ring-0 focus:border-black">
                <option value="" key="0">City</option>
                <option value="City A" key="">City A</option>
                <option value="City B" key="1">City B</option>
              </select>
            </label>
            <label className="inline-block px-4 py-2 w-full xl:w-96 md:mr-auto">
              <select className="p-2 w-full border border-gray-200 bg-neutral-700 outline-none focus:ring-0 focus:border-black">
                <option value="" key="0">select our Club</option>
                <option value="Club A" key="">Club A</option>
                <option value="Club B" key="1">Club B</option>
              </select>
            </label>
          </div>  
        </div>
        <div className="px-4 md:px-0 flex flex-nowrap overflow-visible overflow-x-auto no-scrollbar text-black">
          <table className="table-fixed min-w-max mx-auto text-center">
            <thead>
              <tr className="">
                <th colSpan="7">
                  <div className="m-2 h-1"></div>
                </th>
              </tr>
              <tr className="text-yellow-primary">
                <th className="w-44"><p className="m-1 py-1 bg-neutral-700">MONDAY</p></th>
                <th className="w-44"><p className="m-1 py-1 bg-neutral-700">TUESDAY</p></th>
                <th className="w-44"><p className="m-1 py-1 bg-neutral-700">WEDNESDAY</p></th>
                <th className="w-44"><p className="m-1 py-1 bg-neutral-700">THURSDAY</p></th>
                <th className="w-44"><p className="m-1 py-1 bg-neutral-700">FRIDAY</p></th>
                <th className="w-44"><p className="m-1 py-1 bg-neutral-700">SATURDAY</p></th>
                <th className="w-44"><p className="m-1 py-1 bg-neutral-700">SUNDAY</p></th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-14">
                <td colSpan="7" >
                  <div className="mx-1 border-b-2 border-yellow-primary relative">
                    <div className="m-1 absolute -bottom-6 right-0 left-0 flex justify-center"><p className="py-1 w-36 text-center text-white bg-black">MORNING</p></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="grid grid-cols-7">
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/Zumba_Fitness_logo.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/Bodypumplogo.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/STRONGNation.jpg" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/Bodypumplogo.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/BodyCombat.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/STRONGNation.jpg" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/logoUrbanFight.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/CIRCUIT.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/logoUrbanFight.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1 opacity-0">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/STRONGNation.jpg" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="h-14">
                <td colSpan="7" >
                  <div className="mx-1 border-b-2 border-yellow-primary relative">
                    <div className="m-1 absolute -bottom-6 right-0 left-0 flex justify-center"><p className="py-1 w-36 text-center text-white bg-black">EVENING</p></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="grid grid-cols-7">
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/BodyCombat.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/CIRCUIT.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/logoUrbanFight.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/CIRCUIT.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/STRONGNation.jpg" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/CIRCUIT.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/STRONGNation.jpg" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/STRONGNation.jpg" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/Bodypumplogo.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/BodyCombat.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/Zumba_Fitness_logo.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/Bodypumplogo.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/BodyCombat.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                    <div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/Bodypumplogo.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                      <div className="py-2 bg-neutral-100 m-1">
                        <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                        <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/BodyCombat.png" alt="Class"/>
                        <p>Nama instruktur</p>
                        <p>Nama Club</p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center text-white pt-8">
          <ButtonLink text="Book Now" link="/fitnessworks-apps" />
        </div>
      </AppLayoutTimeTable>
    </Layout>
  )
}

export default TimeTable