import ArticleLatest from '../../components/ArticleLatest'
import Layout from '../../components/Layout'

function News4() {
  return (
    <Layout>
      <div className="overflow-hidden mb-4 pb-8">
        <div className="pb-8 flex justify-center max-h-[30vh] lg:max-h-[80vh] relative">
          <img className="object-cover object-top w-full mx-auto" src="/image/article/news1.png" alt="News"/>
        </div>
        
        <div className="container flex flex-col md:flex-row-reverse justify-center pb-8">
          <div className="my-2">
            <h2 className="my-2 text-xl sm:text-3xl font-black">Apa penyebab lemak perut</h2>
            <div className="space-y-2 pt-2">
              <p className="text-sm sm:text-base">
              Lemak perut memang menjengkelkan. Apalagi kalau sudah merusak penampilan dan jadi membatasi ruang gerak. Dikutip dari medicalnewstoday ada beberapa penyebab lemak perut, sebagai berikut:
              </p>
              <ul className="list-decimal">
                <li className="space-y-2 py-2">
                  Pola makan yang jelek
                  <p className="text-sm sm:text-base">
                  Istilah “dirimu adalah apa yang kamu makan” bisa jadi benar untuk perihal lemak perut ini. Terlalu banyak mengonsumsi makanan bergula tinggi misalnya, bisa jadi salah satu penyebab lemak perutmu. Secara tidak sadar sehari-harinya kita terlalu banyak mengonsumsi makanan bergula tinggi, seperti kue-kuean, dan minuman ringan. Per 100 ml Coca-cola terdapat 10,6 g gula (coca-cola.co.uk), jika kita biasa meminum Coca-cola botol ukuran 390 ml, maka kita sudah mengonsumsi sekitar 40 g gula. Padahal jumlah gula harian yang direkomendasikan oleh WHO hanya sebesar 50 g saja. Contoh lainnya, dalam segelas es the manis misalnya bisa berisi 2-3 sendok makan gula ini berarti kamu sudah meminum 20-50 g gula dalam es teh tersebut. Konsumsi gula yang berlebih bisa menjadi penumpukan energi, yang akhirnya dikonversi oleh tubuh menjadi lemak.
                  </p>
                  <p className="text-sm sm:text-base">
                  Selain gula, trans-fat juga bisa menjadi penyebabnya. Sebagai orang Indonesia, nyemil gorengan dan kue-kuean sudah jadi hal yang lumrah. Namun sadarkah kalian kalau dalam gorengan dan kue-kue itu mengandung lemak trans yang berbahaya dan bisa jadi penyebab penumpukan lemak di perut juga? Beralih ke cemilan yang lebih sehat seperti agar-agar rendah gula misalnya, bisa menjadi solusi.
                  </p>
                  <p className="text-sm sm:text-base">
                  Kebiasaan makan nasi banyak dengan lauk sedikit juga bisa jadi penyebab perutmu membuncit. Mengonsumsi makanan tinggi karbohidrat dan rendah protein dapat menyebabkan penumpukan lemak. Karbohidrat cenderung lebih cepat dicerna dan dirubah menjadi energi oleh tubuh, dibanding dengan protein. Jika kebutuhan energi kita tidak sebanyak yang kita konsumsi maka kelebihan energi akan disimpan sebagai lemak. Protein di sisi lain lebih lama dicerna oleh tubuh sehingga kita bisa merasa kenyang lebih lama dan energi yang dihasilkan tidak menumpuk menjadi lemak. Namun, bukan berarti kita harus menghilangkan konsumsi karbohidrat sama sekali. Cukup mengurangi porsi nasi (atau karbohidrat lain) dan menambah porsi protein dan nutrisi lainnya seperti sayur.
                  </p>
                </li>
                <li className="space-y-2 py-2">
                  Kurang olahraga
                  <p className="text-sm sm:text-base">
                  Kurang berolahraga dapat menimbulkan berbagai masalah, salah satunya adalah menumpuknya lemak di perut kamu. Olahraga dibutuhkan untuk membakar kalori yang kamu dapatkan dari makanan dan minuman. Jika kamu makan banyak dan tidak berolahraga maka kemungkinan besar, kalori yang tidak terbakar kemudian akan disimpan dalam tubuh sebagai lemak. Untuk membakar lemak tersebut maka kamu harus beraktivitas lebih intens dari biasanya yang kamu lakukan, salah satunya dengan berolahraga.
                  </p>
                </li>
                <li className="space-y-2 py-2">
                  Mengalami stress
                  <p className="text-sm sm:text-base">
                  Jika kamu sudah melakukan diet dan olahraga tapi lemak tubuhmu tidak berkurang, bisa jadi kamu mengalami setress. Kondisi mental yang tertekan akibat stress akan membuat tubuhmu mengeluarkan kortisol. Kortisol inilah yang bertanggung jawab menjadikan dirimu menginginkan makanan lebih saat sedang stress dan memperlambat pembakaran kalori (OrlandoHealth.com).
                  </p>
                </li>
                <li className="space-y-2 py-2">
                  Kualitas tidur yang kurang baik
                  <p className="text-sm sm:text-base">
                  Dikutip dari webmd.com kurang tidur merujuk pada konsumsi kalori yang lebih banyak. Penelitian yang dilakukan di Mayo Clinic pada 12 orang sehat menunjukkan bahwa orang-orang yang dibatasi tidurnya mengalami peningkatan hingga 9% lemak perut. Selain itu mereka juga mengalami peningkatan 11% terhadap Visceral Fat.
                  </p>
                </li>
                <li className="space-y-2 py-2">
                  Genetik
                  <p className="text-sm sm:text-base">
                  Apa kamu ada teman yang hobi makan tetapi tidak gemuk? Sementara kamu yang makan normal malah berat badannya gampang naik. Menurut penelitian (hsph.harvard.edu) gen memang berpengaruh terhadap kemungkinan orang untuk menjadi obesitas. Beberapa orang memang membawa “gen obesitas” di dalam dirinya. Dikutip dari laman hsph.harvard.edu terdapat sebuah farian gen yang bernama “fat mass and obesity-associated” (FTO), farian gen ini cukup umum ditemukan dalam tubuh manusia. Studi membuktikan orang dengan farian gen ini memiliki kemungkinan mengalami obesitas 20% sampai 30%, dibandingkan dengan orang yang tidak memilikinya.
                  </p>
                </li>
              </ul>
              <p className="text-sm sm:text-base">
              Jika kamu mengalami lima masalah di atas mungkin bisa jadi salah satunya adalah penyebab lemak perutmu menumpuk. Namun bukan berarti tidak bisa di atasi. Dengan berada di lingkungan yang mendukung dan dengan gaya hidup yang baik akan membantumu mengatasi penumpukan lemak. Lalu bagaimana caranya?
              </p>
              <p className="text-sm sm:text-base">
              Salah satu caranya adalah dengan pergi ke gym. Pergi ke gym bukan hanya soal berolahraga, namun juga tentang menemukan lingkungan yang tepat untukmu berprogress.
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

export default News4