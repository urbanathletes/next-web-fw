import Link from "next/link"

function ArticleLatest() {
  return (
    <div>
      <div className="py-8 border-t-2 border-neutral-600">
          <div className="text-blue-primary">
            <h2 className="uppercase text-4xl font-judul text-center">LATEST BLOG POSTS</h2>
          </div>
          <div className="flex flex-nowrap justify-start md:justify-center space-x-8 overflow-auto no-scrollbar my-12 mb-8">
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <Link href="/article">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="/image/article/news5.png" alt="News Urban Athletes"/>
                </div>
                <div className="p-2">
                  <p className="font-black">5 hal yang perlu kamu siapkan sebelum pertama kali pergi ke gym?</p>
                  <p className="text-sm text-neutral-700 py-1">
                    Terkadang untuk menurunkan berat badan, olahraga saja tidak cukup. Beberapa orang, mungkin ... 
                  </p>
                </div>
              </Link>
            </div>
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <Link href="/article">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="/image/article/news1.png" alt="News Urban Athletes"/>
                </div>
                <div className="p-2">
                  <p className="font-black">Apa penyebab lemak perut</p>
                  <p className="text-sm text-neutral-700 py-1">
                    Lemak perut memang menjengkelkan. Apalagi kalau sudah merusak penampilan dan jadi membatasi ruang ... 
                  </p>
                </div>
              </Link>
            </div>
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <Link href="/article">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="/image/article/news3.png" alt="News Urban Athletes"/>
                </div>
                <div className="p-2">
                  <p className="font-black">Program diet untuk turunkan berat badan</p>
                  <p className="text-sm text-neutral-700 py-1">
                  Terkadang untuk menurunkan berat badan, olahraga saja tidak cukup. Beberapa orang, mungkin membutuhkan program ...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ArticleLatest