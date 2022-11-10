import FaqLayouts from '../../components/FaqLayouts'

function SafetyHealth() {
  return (
    <FaqLayouts>
      <div className="font-judul text-4xl border-b-2 border-blue-primary py-2">
        <h2>Safety & Health Protocols</h2>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">Is Fitnessworks a safe place?</h2>
        <div className="text-sm my-2">
          <p>
          At Fitnessworks we’re committed to providing a safe and welcoming place for everybody.This includes our commitment to gym cleanliness, hygiene & Covid-19 Protocols, a safe space for Everybody to workout and ensuring your safety and security.
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">is fitnessworks equipped with cctv?</h2>
        <div className="text-sm my-2">
          <p>
          We try our best to maintain the security and privacy of our members. we equip some areas with CCTV and keep some areas your private space
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">how about covid-19 protocols?</h2>
        <div className="text-sm my-2">
          <p>
          For the safety and comfort of our members, we require you to check your body temperature and scan the Pedulilindungi application before entering the club.
          </p>
        </div>
      </div>
      {/* <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">Do I get a membership card?</h2>
        <div className="text-sm my-2">
          <p>
          As a gym that carries the concept of technology, we no longer use member cards. Instead, you can download our application to register, check in, book classes, and even consult online from anywhere. by using the fitnessworks application it is possible to reduce physical contact, this is also one of our security solutions for you.
          </p>
        </div>
      </div> */}
    </FaqLayouts>
  )
}

export default SafetyHealth