import FaqLayouts from '../../components/FaqLayouts'

function ClubAndFasility() {
  return (
    <FaqLayouts>
      <div className="font-judul text-4xl border-b-2 border-blue-primary py-2">
        <h2>CLUB AND FACILITY</h2>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">Can I leave my stuff in lockers overnight?</h2>
        <div className="text-sm my-2">
          <p>
          For your safety, we recommend that you check your luggage before leaving the gym. Items left in the locker overnight will be secured, and you can ask our customer service at club to get the items.
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">Are classes included in my membership?</h2>
        <div className="text-sm my-2">
          <p>
          If you subscribe to our regular membership plan then you have access to all of our facilities, including classes. you can book a class session through the fitnessworks app, make sure you book 24 hours before the class starts.
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">How do I book a class?</h2>
        <div className="text-sm my-2">
          <p>
          you can book classes through the fitness works application. make sure you book the class 24 hours before the class starts and arrive on time at least 10 minutes before the class starts.
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">What happens if I miss a class?</h2>
        <div className="text-sm my-2">
          <p>
          For the convenience of other members, we will impose sanctions on members who do not attend class, or arrive late. the penalty for not attending class is not being able to book a class for 24 hours.
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">Is Personal Training available?</h2>
        <div className="text-sm my-2">
          <p>
          You can always use the services of our professional personal trainer. You can purchase our personal trainer package through the
          <span className="font-black"> Fitnessworks app</span> 
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">Are there ladies only areas in my gym?</h2>
        <div className="text-sm my-2">
          <p>
          we provide a special room for ladies in some clubs. make sure you check the club facilities you want first by
          <span className="font-black"> clicking this link.</span>
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">Is there free Wi-Fi in the gym?</h2>
        <div className="text-sm my-2">
          <p>
          As a technology-driven gym, we always make it easy for you to stay connected. All of our gyms are equipped with Wi-Fi access which you can enjoy for free.
          </p>
        </div>
      </div>
    </FaqLayouts>
  )
}

export default ClubAndFasility