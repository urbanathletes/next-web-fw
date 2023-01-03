import ButtonLink from '../../components/ButtonLink'
import Layout from '../../components/Layout'
import { EXCLUSIVE_WORKOUT } from '../../constant/workouts'

function Workouts() {
  return (
    <Layout title="Workouts">
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img src="/image/workouts/Header_workout.jpg" alt="Fitnesswork Hero Page" className="object-cover object-center min-w-min lg:min-w-full max-h-[80vh]"/>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-md mx-auto text-white text-center">
          <h1 className="font-judul text-4xl sm:text-7xl">MAKE FITNESS FUN</h1>
          <ButtonLink text="VIEW MORE" link="workouts/weight-lost" />
        </div>
      </div>

      <div className="xl:container mx-auto text-blue-primary text-center py-8 text-base">
        <h1 className="font-judul text-7xl mb-8">EXCLUSIVE WORKOUT</h1>
        
        {EXCLUSIVE_WORKOUT.map((row, idx) => (
          <div className={`lg:flex lg:justify-between lg:items-center hover:bg-blue-primary hover:text-yellow-primary transition-all duration-300 ${idx % 2 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="px-4 py-4 grid items-center">
              <div className="max-w-xl mx-auto">
                <h2 className="text-4xl font-judul">{row.title}</h2>
                <div className="my-4">
                  <p>{row.description}</p>
                </div>
                <div className="flex justify-center">
                  <ButtonLink text="VIEW MORE" link={row.btnLink} />
                </div>
              </div>
            </div>
            <div className="lg:max-w-[50%]">
              <img src={row.img} alt={`Fitnesswork ${row.title}`} className="w-full object-cover object-center"/>
            </div>
          </div>
        ))}

      </div>

    </Layout>
  )
}

export default Workouts