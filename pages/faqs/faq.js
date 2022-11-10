import FaqLayouts from "../../components/FaqLayouts"

function Faq() {
  return (
    <FaqLayouts>
      <div className="font-judul text-4xl border-b-2 border-blue-primary py-2">
        <h2>FAQ</h2>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">How do I Join?</h2>
        <div className="text-sm my-2">
          <p>
          According to our tagline, “Fitness for everyone”, we make it easy for you to join as a member and start your fitness journey. You can join through our website by clicking this link. You can also join through our application which can be downloaded here. If you have plans to visit in advance, and want to join on the spot, you can contact our consultants via 
          <span className="font-black"> Whatsapp here.</span>
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">How old do I need to be to join?</h2>
        <div className="text-sm my-2">
          <p>
          To maintain your safety and comfort, we limit the age of our members to a minimum of 18 years, as evidenced by an ID card. So, make sure you bring your ID card at first visit.
          </p>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">Can I check out the gym before joining?</h2>
        <div className="text-sm my-2">
          <p>
          Of course, you can visit in advance by making an appointment with our
          </p>
          <span className="font-black">Consultant here</span>
        </div>
      </div>
      <div className="my-2 py-2 border-b-2">
        <h2 className="font-judul text-2xl">Do I get a membership card?</h2>
        <div className="text-sm my-2">
          <p>
          As a gym that carries the concept of technology, we no longer use member cards. Instead, you can download our application to register, check in, book classes, and even consult online from anywhere.
          </p>
          <span className="font-black">Download the Fitnessworks app here.</span>
        </div>
      </div>
    </FaqLayouts>
  )
}

export default Faq