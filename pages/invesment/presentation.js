import Layout from "../../components/Layout";

function Presentation() {

  function elPreview(n) {
    const preview1 = document.getElementById("preview1")
    const preview2 = document.getElementById("preview2")
    preview1.classList.add('hidden');
    preview2.classList.add('hidden');
    if (n === 1) {
      preview1.classList.remove('hidden');
    } else {
      preview2.classList.remove('hidden');
    }
  }

  function btnPreview1() {
    elPreview(1);
  }
  function btnPreview2() {
    elPreview(2)
  }
  
  return (
    <Layout title="Presentation">
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative h-72">
        <img src="/image/inves/Header_Kemitraan.jpg" alt="Fitnesswork Presentation" className="object-cover object-center h-full sm:min-w-full"/>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center h-24 bg-white bg-opacity-80">
          <h1 className="font-judul text-5xl text-center text-blue-primary">Presentation</h1>
        </div>
      </div>

      <div className="container my-8 grid lg:grid-cols-2 text-blue-primary">
        <div className="space-y-4">
          <h2 className="font-judul text-4xl pl-4 mx-4">DOCUMENT</h2>
          <div className="flex justify-start relative">
            <button onClick={btnPreview1}>
              <div className="pl-4 py-1 flex text-left">
                <div className="mx-4">
                  <img className="w-24" src="/image/inves/Fitnesswork_Presentation1.png" alt="Fitness Works"/>
                </div>
                <div>
                  <h3 className="font-judul text-lg tracking-wide">URBAN ATHLETES INVESTOR</h3>
                  <span className="text-xs">18 August 2022</span>
                </div>
              </div>
            </button>
          </div>
          <div className="flex justify-start relative">
            <button onClick={btnPreview2}>
              <div className="pl-4 py-1 flex text-left">
                <div className="mx-4">
                  <img className="w-24" src="/image/inves/Fitnesswork_Presentation2.png" alt="Fitness Works"/>
                </div>
                <div>
                  <h3 className="font-judul text-lg tracking-wide">FITNESS WORKS INVESTOR</h3>
                  <span className="text-xs">7 August 2022</span>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="my-6 lg:my-0">
          <h3 className="font-judul text-4xl pl-4 mx-4">PREVIEW</h3>
          <div className="" id="preview1">
            <div className="max-w-2xl mx-auto my-4">
              {/* <iframe src="https://drive.google.com/file/d/1vsDKzQlTPbo5zUYGdmUJXNWGxVpc9RTk/preview" width="100%" height="340" allow="autoplay"></iframe> */}
              <iframe title='1' src="https://drive.google.com/file/d/1vsDKzQlTPbo5zUYGdmUJXNWGxVpc9RTk/preview" width="100%" height="340" />
            </div>
          </div>
          <div className="hidden" id="preview2">
            <div className="max-w-2xl mx-auto my-4">
              <iframe title='2' src="https://drive.google.com/file/d/1jq9Tyozt1P5xnOT3IHVw9ZxjkI4SoBGd/preview" width="100%" height="340" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Presentation