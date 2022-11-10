import Link from "next/link";
import Layout from "../../components/Layout";

function Article() {

  const bgArticle = {
    width: "100%",
    backgroundImage: "url(/image/article/BGArticle.jpg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <Layout>
      <div className="bg-cover bg-center object-cover object-center relative" style={bgArticle}>
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-blue-primary opacity-90"></div>
        <div className="container grid grid-cols-2 lg:grid-cols-3 py-12">
          <div className="col-span-2 row-span-2 relative group overflow-hidden">
            <Link href="/article/news5">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/news5.png" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="text-lg text-white mb-2">Program diet untuk turunkan berat badan</p>
                  {/* <p className="text-yellow-primary text-sm">centroone.com</p> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="relative group overflow-hidden">
            <Link href="/article/news1">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/news1.png" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="text-lg text-white mb-2">Kapan waktu terbaik untuk berolahraga / pergi ke gym?</p>
                  {/* <p className="text-yellow-primary text-sm">centroone.com</p> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="relative group overflow-hidden">
            <Link href="/article/news2">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/news2.png" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="text-lg text-white mb-2">Mengatasi mental health issue dengan berolahraga</p>
                  {/* <p className="text-yellow-primary text-sm">centroone.com</p> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="relative group overflow-hidden">
            <Link href="/article/news3">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/news3.png" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="text-lg text-white mb-2">5 hal yang perlu kamu siapkan sebelum pertama kali pergi ke gym?</p>
                  {/* <p className="text-yellow-primary text-sm">centroone.com</p> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="relative group overflow-hidden">
            <Link href="/article/news4">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/news1.png" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="text-lg text-white mb-2">Apa penyebab lemak perut</p>
                  {/* <p className="text-yellow-primary text-sm">centroone.com</p> */}
                </div>
              </div>
            </Link>
          </div>
          <div className="relative group overflow-hidden opacity-0">
            <button href="">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/ekonomi3.jpg" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="text-white mb-2">Verawaty Budiyanto, Pendiri Urban Athletes: Membuat Orang Ketagihan Hidup Sehat</p>
                  <p className="text-yellow-primary text-xs">memorandum.id</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article