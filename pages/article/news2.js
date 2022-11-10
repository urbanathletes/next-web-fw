import ArticleLatest from '../../components/ArticleLatest'
import Layout from '../../components/Layout'

function News2() {
  return (
    <Layout>
      <div className="overflow-hidden mb-4 pb-8">
        <div className="pb-8 flex justify-center max-h-[30vh] lg:max-h-[80vh] relative">
          <img className="object-cover object-top w-full mx-auto" src="/image/article/news2.png" alt="News"/>
        </div>
        
        <div className="container flex flex-col md:flex-row-reverse justify-center pb-8">
          <div className="my-2">
            <h2 className="my-2 text-xl sm:text-3xl font-black">Mengatasi mental health issue dengan berolahraga</h2>
            <div className="space-y-2 pt-2">
              <p className="text-sm sm:text-base">
              Sejak pandemi awal 2020 lalu, isu mental health mulai diperbincangkan netizen Indonesia. Mulai dari apa itu mental health sampai bagaimana cara mengatasi mental health. Semua informasi sliweran di dunia maya, bahkan banyak juga yang memberikan tips mengatasi mental health.
              </p>
              <p className="text-sm sm:text-base">
              Dikutip dari website kemkes RI, di tahun 2018 saja ada lebih dari 19 juta penduduk Indonesia berusia lebih dari 15 tahun memiliki mental health issue. Bahkan, lebih dari 12 juta penduduk berusia lebih dari 15 tahun mengalami depresi. Apa kamu salah satunya? Coba deh cek ke psikolog atau psikiatris terdekat.
              </p>
              <p className="text-sm sm:text-base">
              Lalu apa yang bisa kamu lakukan jika ternyata kamu (amit-amit) mengidap mental health issue? Atau hanya sekedar ingin mencegah dan menghindari stress saja?
              </p>
              <p className="text-sm sm:text-base">
              Menurut WHO (Wrold Health Organization), setidaknya ada 6 cara yang bisa kamu lakukan untuk mengatasi mental health issue, diantaranya:
              </p>
              <ul className="list-decimal">
                <li className="space-y-2 py-2">
                Berbicaralah dengan orang yang kamu percaya
                </li>
                <li className="space-y-2 py-2">
                Berbicaralah dengan orang yang kamu percaya
                </li>
                <li className="space-y-2 py-2">
                Jangan gunakan zat-zat berbahaya untuk mengatasi mental health mu
                </li>
                <li className="space-y-2 py-2">
                Merenunglah setidaknya 2 menit
                </li>
                <li className="space-y-2 py-2">
                Jaga kesehatan fisikmu
                </li>
              </ul>
              <p className="text-sm sm:text-base">
              Ya, ternyata kesehatan fisik juga dapat mempengaruhi kesehatan mental juga. Kamu sudah familiar dengan pepatah “Mens sana in corpore sano”? ternyata pepatah “di dalam tubuh yang sehat terdapat jiwa yang kuat” bukanlah karangan guru SD kita saja. Kenapa bisa demikian?
              </p>
              <p className="text-sm sm:text-base">
              Dikutip dari healthdirect.gov.au, berolahraga dapat melepaskan enzim seperti endorfin dan serotonin, enzim ini berperan penting dalam menjaga mood kamu agar tetap baik. Berolahraga dan pergi ke gym juga bisa membuatmu bertemu orang lain. Hal ini akan mengurngi perasaan kesendirian dan isolasi. Jika kamu rutin berolahraga dapat mengurangi stress dan gejala mental health lain seperti, depresi dan anxiety, dan dapat membantumu sembuh dari mental health issue.
              </p>
              <p className="text-sm sm:text-base">
              Menurut penelitian yang dilakukan ke 1,2 juta penduduk USA, telah ditemukan bahwa orang yang sering berolahraga mengalami 1,5x hari lebih sedikit dengan mental health issue dalam sebulan, dibandingkan dengan orang yang jarang berolahraga (dikutip dari sciencedaily.com). Penelitian menunjukkan bahwa olahraga beregu, bersepeda, aerobik, dan ngegym memegang peranan paling penting.
              </p>
              <p className="text-sm sm:text-base">
              Jadi jika kamu merasa mengalami gejala mental health, maka pergi ngegym adalah bukan sesuatu yang buruk. Bahkan jika kamu belum pernah pergi ngegym sama sekali banyak orang-orang baik yang akan membantumu. Personal trainer kami akan selalu siap dan sabar melatihmu hingga mencapai versi terbaik, bukan hanya secara fisikal, tapi juga mentalmu. Selain itu, ada berbagai macam kegiatan menarik lain yang bisa kamu lakukan seperti Zumba yang menyenangkan, dan Yoga yang dapat membuatmu lebih rileks dan tenang.
              </p>
            </div>
          </div>
          <div className="flex flex-row md:flex-col mt-2 mr-4">
            <button className="w-10 sm:w-12 my-4 mx-2 flex justify-center rounded-full border border-black">
              <img className="w-5 sm:w-7 m-2" src="/image/icon/like.png" alt="icon"/>
            </button>
            <button className="w-10 sm:w-12 my-4 mx-2 flex justify-center rounded-full border border-black">
              <img className="w-5 sm:w-7 m-2" src="/image/icon/share.png" alt="icon"/>
            </button>
            <button className="w-10 sm:w-12 my-4 mx-2 flex justify-center rounded-full border border-black">
              <img className="w-5 sm:w-7 m-2" src="/image/icon/comment.png" alt="icon"/>
            </button>
          </div>
        </div>

        <ArticleLatest />

      </div>
    </Layout>
  )
}

export default News2