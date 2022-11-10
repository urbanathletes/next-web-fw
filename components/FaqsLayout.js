import Layout from "./Layout"

function FaqsLayout(props) {
  return (
    <Layout title="FAQ">
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative h-72">
        <img src="/image/inves/OurFounder.jpg" alt="Fitnesswork Presentation" className="object-cover object-center h-full sm:min-w-full"/>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center bg-blue-primary bg-opacity-80">
          <h1 className="font-judul text-5xl text-center text-white">FITNESSWORK HELP CENTRE</h1>
          <div className="flex justify-center text-blue-primary my-4 px-4 w-full">
            <input type="text" className="w-full md:w-96 px-2 py-1" placeholder='ASK a Question….'/>
            <button className="bg-white mx-1 px-6">SARTCH</button>
          </div>
        </div>
      </div>
      
      { props.children }
    </Layout>
  )
}

export default FaqsLayout