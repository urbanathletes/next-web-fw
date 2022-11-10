import ButtonLink from '../../components/ButtonLink'
import Layout from '../../components/Layout'

function Endurance() {
  return (
    <Layout title="Workouts">
      <div className="w-full h-7 bg-blue-primary"></div>
      
      <div className="container text-blue-primary">
        <h1 className="my-8 font-judul text-5xl text-center">ENDURANCE</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center">
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/WeightLoss/Circuit.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">CIRCUIT</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts/circuit" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/Endurance/Strong_nation.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">STRONG NATION</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts/strong-nation" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/WeightLoss/BodyPump.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">LESMILLS <br/>BODYPUMP</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts/bodypump" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/WeightLoss/Bodycombat.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">LESMILLS <br/>BODYCOMBAT</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts/bodycombat" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/WeightLoss/Yoga_Wheel.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">YOGA WHEEL</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts/yoga-wheel" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4 grid xl:grid-cols-3 2xl:container">
        <div className="text-blue-primary w-full md:flex xl:block">
          <div className="md:w-1/2 xl:w-full">
            <img src="/image/workouts/Tone_Muscle.jpg" alt="Flexibility" className="object-cover object-center w-full h-full"/>
          </div>
          <div className="p-8 space-y-4 md:my-auto md:w-1/2 xl:w-full">
            <h3 className="font-judul text-3xl">TONE MUSCLE</h3>
            <p>did you want to feel more confident with your look? if it so, this program suit you better. Toning your muscle it means reduce your body fat as well as increase your muscle mass. it help your body shaping, which make your fashion suit better.</p>
            <ButtonLink text="VIEW MORE" link="/workouts/tone-muscle" />
          </div>
        </div>
        <div className="text-blue-primary w-full md:flex xl:block">
          <div className="md:w-1/2 xl:w-full">
            <img src="/image/workouts/Weight_loss.jpg" alt="Flexibility" className="object-cover object-center w-full h-full"/>
          </div>
          <div className="p-8 space-y-4 md:my-auto md:w-1/2 xl:w-full">
            <h3 className="font-judul text-3xl">WEIGHT LOSS</h3>
            <p>Feeling tired all the time? why you didn’t try our endurance program? this program helps you train your Endurance. Endurance is the ability of an organism to exert itself and remain active for a long period of time, as well as its ability to resist, withstand, recover from and have immunity to trauma, wounds or fatigue.</p>
            <ButtonLink text="VIEW MORE" link="/workouts/weight-lost" />
          </div>
        </div>
        <div className="text-blue-primary w-full md:flex xl:block">
          <div className="md:w-1/2 xl:w-full">
            <img src="/image/workouts/Flexibility.jpg" alt="Flexibility" className="object-cover object-center w-full h-full"/>
          </div>
          <div className="p-8 space-y-4 md:my-auto md:w-1/2 xl:w-full">
            <h3 className="font-judul text-3xl">FLEXIBILITY & MUSCLE KNOT RELEASE</h3>
            <p>did you feeling tired with your daily activity? want to relax your muscle and mind? if you think so, we recommend you to join this program. This program aim to stretch your muscle and join, which increase your flexibilty and help you resting better.</p>
            <ButtonLink text="VIEW MORE" link="/workouts/flexibility" />
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Endurance