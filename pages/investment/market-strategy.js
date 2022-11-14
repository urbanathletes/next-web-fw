import Layout from "../../components/Layout"

function MarketStrategy() {
  return (
    <Layout title="Market Strategy">
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative h-72">
        <img src="/image/inves/MarketStrategy.jpg" alt="Fitnesswork Market Strategy" className="object-cover object-center h-full sm:min-w-full"/>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center h-24 bg-white bg-opacity-80">
          <h1 className="font-judul text-5xl text-center text-blue-primary">Market Strategy</h1>
        </div>
      </div>

      <div className="container text-sm flex flex-wrap justify-center py-8">
        <div className="max-w-[15rem] text-blue-primary py-4 my-4 mx-6 text-center">
          <img src="/image/inves/icon/Franchise_system.png" alt="Icon Market Strategy" className="w-36 mx-auto"/>
          <h2 className="font-judul tracking-wide text-xl my-4">Franchise System</h2>
          <p>Create landing pages, then promote using IG Ads using FB professional suites, influencer endorsements</p>
        </div>
        <div className="max-w-[15rem] text-blue-primary py-4 my-4 mx-6 text-center">
          <img src="/image/inves/icon/Direct_selling.png" alt="Icon Market Strategy" className="w-36 mx-auto"/>
          <h2 className="font-judul tracking-wide text-xl my-4">Direct Selling</h2>
          <p>By sales department By affiliate system</p>
        </div>
        <div className="max-w-[15rem] text-blue-primary py-4 my-4 mx-6 text-center">
          <img src="/image/inves/icon/Use_technology.png" alt="Icon Market Strategy" className="w-36 mx-auto"/>
          <h2 className="font-judul tracking-wide text-xl my-4">Use of Technology for Service Excellent</h2>
          <p>WA blast: birthday greeting, loyalty program, educative contents, targeted promotion.</p>
        </div>
        <div className="max-w-[15rem] text-blue-primary py-4 my-4 mx-6 text-center">
          <img src="/image/inves/icon/Business.png" alt="Icon Market Strategy" className="w-36 mx-auto"/>
          <h2 className="font-judul tracking-wide text-xl my-4">Business to Business Corporate Program</h2>
          <p>Webinar, talk show, cross promotion</p>
        </div>
        <div className="max-w-[15rem] text-blue-primary py-4 my-4 mx-6 text-center">
          <img src="/image/inves/icon/Community.png" alt="Icon Market Strategy" className="w-36 mx-auto"/>
          <h2 className="font-judul tracking-wide text-xl my-4">Use of Community</h2>
          <p>Creating internal & external events, online and offline</p>
        </div>
        <div className="max-w-[15rem] text-blue-primary py-4 my-4 mx-6 text-center">
          <img src="/image/inves/icon/Online_leads.png" alt="Icon Market Strategy" className="w-36 mx-auto"/>
          <h2 className="font-judul tracking-wide text-xl my-4">Online Leads Generation using Digital Platform</h2>
          <p>Create landing pages, then promote using IG ads using FB professional suites, influencer endorsements</p>
        </div>
      </div>

    </Layout>
  )
}

export default MarketStrategy