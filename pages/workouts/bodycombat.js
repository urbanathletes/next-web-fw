import ButtonLink from '../../components/ButtonLink'
import Layout from '../../components/Layout'

function BodyCombat() {
  return (
    <Layout title="Workouts">
      <div className="bg-blue-primary text-white py-8">
        <h2 className="font-judul text-4xl text-center tracking-wide">BODYCOMBAT</h2>
        <div className="container grid lg:grid-cols-2">
          <div className="border-b-2 lg:border-b-0 lg:border-r-4 border-yellow-primary lg:text-end py-4 lg:py-0 lg:my-4 lg:px-4">
            <h3 className="font-judul text-yellow-primary text-2xl tracking-wide">Fitness MENU</h3>
            <p className="text-sm">WEIGHT LOSS | ENDURANE | TONE MUSCLE | STRENGTH</p>
          </div>
          <div className="py-4 lg:py-0 lg:my-4 lg:px-4">
            <h3 className="font-judul text-yellow-primary text-2xl tracking-wide">DURATION</h3>
            <p className="text-sm">60 MINUTES / SESSION</p>
          </div>
        </div>
      </div>

      <div className="my-4 text-blue-primary">
        <div className="max-h-fit overflow-hidden">
          <img src="/image/workouts/detail_kelas/Bodycombat.jpg" alt="BodyPump" className="mx-auto h-full w-full max-w-5xl -mb-10 object-cover object-bottom" />
        </div>
        <div className="max-w-3xl mx-auto text-center my-4">
          <h2 className="font-judul text-4xl mb-4">BODYCOMBAT</h2>
          <p>Bodycombat Is high energy martial arts inspired workout, burning up to 740 Calories*</p>
        </div>
      </div>

      <div className="mt-8 mb-12 bg-neutral-100 text-blue-primary text-center place-items-center grid lg:grid-cols-2">
        <div className="max-w-lg">
          <h3 className="my-4 font-judul text-3xl">HOW TO BOOK A CLASS</h3>
          <p>It’s so easy to book classes on Fitnesswork App or on our website by simply selecting your chosen gym and finding a class and time that suits you!</p>
          <h3 className="my-4 font-judul text-3xl">WHAT TO WEAR</h3>
          <p>Wear comfortable, breathable non-restrictive clothing. You will move a lot! Fun and sweaty. So, don’t forget to bring towel & water bottle to keep your body hydrated. We have water fountain to refill your bottle everytime you need.</p>
          <div className="flex justify-center my-6">
            <ButtonLink text="BUY NOW" link="/membership" />
          </div>
        </div>
        <div>
          <img src="/image/workouts/detail_kelas/Bodycombat_2.jpg" alt="Circuit" className="h-full w-full object-cover object-center" />
        </div>
      </div>
    </Layout>
  )
}

export default BodyCombat