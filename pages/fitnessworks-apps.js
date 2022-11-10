import Link from "next/link"
import Layout from "../components/Layout"


function FitnessworksApps() {
  return (
    <Layout title="Fitnessworks Apps">
      <div className="font-judul text-4xl tracking-wide h-20 bg-blue-primary text-white flex justify-center items-center">
        <h1>Fitnessworks Apps</h1>
      </div>

      <div className="container lg:flex lg:justify-center lg:items-center my-4">
        <div>
          <img src="/image/home/FitnessWork_apps.png" alt="Mobile App Fitness Works" className="md:max-w-md lg:max-w-lg mx-auto" />
        </div>
        <div className="text-blue-primary py-8 md:max-w-3xl">
          <h2 className="font-BebasNeue font-black text-4xl mb-4">SUPPORTING YOU EVERY STEP OF THE WAY</h2>
          <p>Our great new features ensure you’re able to manage your membership from the palm of your hand</p>
          <ul className="list-disc px-5 my-4">
            <li>Contactless entry to the gym through the app</li>
            <li>Book Into your favourite classes</li>
            <li>Manage your membership from changing your gym to updating payment details</li>
          </ul>
          <div className="py-4 flex space-x-3">
            <Link href="/">
              <img src="/image/mobile_apps/App_store.png" alt="App Store Fitnessworks" className="h-14" />
            </Link>
            <Link href="/">
              <img src="/image/mobile_apps/Google_play.png" alt="Google Play Fitnessworks" className="h-14" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container bg-neutral-100 text-blue-primary py-8">
        <h2 className="font-judul text-4xl text-center">EXPLORE THE APP’S FEATURES</h2>
        <div className="mt-8 mb-4 grid gap-4 xl:gap-8 lg:grid-cols-3">
          <div className="my-4">
            <img src="/image/mobile_apps/Mob_app_1.png" alt="Mob_app_1" className="w-52 mx-auto" />
            <div className="mt-8 text-center">
              <h3 className="mb-6 font-judul text-3xl">Contactless entry to the gym through the app</h3>
              <p>Gain quick, contactless access to the gym by using the entry scanner on the app.</p>
            </div>
          </div>
          <div className="my-4">
            <img src="/image/mobile_apps/Mob_app_2.png" alt="Mob_app_2" className="w-52 mx-auto" />
            <div className="mt-8 text-center">
              <h3 className="mb-6 font-judul text-3xl">Book Into your favourite classes</h3>
              <p>choose and book your favorite class in one tap on the fitnesswork app</p>
            </div>
          </div>
          <div className="my-4">
            <img src="/image/mobile_apps/Mob_app_3.png" alt="Mob_app_3" className="w-52 mx-auto" />
            <div className="mt-8 text-center">
              <h3 className="mb-6 font-judul text-3xl">Manage your membership from changing your gym to updating payment details</h3>
              <p>Managing your membership in the Fitnessworks app is easy. From changing your gym to updating your payment details – this can all be managed at your fingertips.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FitnessworksApps