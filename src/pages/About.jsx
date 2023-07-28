export default function About() {
  return (
    <div className="px-10 bg-gray-100  ">
      <div className="py-10 pb-10">
        <h1 className="text-4xl text-center font-medium ">Tentang Saya</h1>
        <p className="text-2xl text-center py-6">
          Di sini Anda akan menemukan informasi lebih lanjut tentang saya, apa
          yang saya lakukan, dan keterampilan saya saat ini terutama dalam hal
          pemrograman dan teknologi.
        </p>
      </div>
      <div className="flex gap-10">
        <div>
          <h2 className="text-3xl  font-semibold pb-6">
            Kenali saya lebih jauh!
          </h2>
          <p className="text-2xl text-justify">
            Saya seorang Frontend Web Developer yang membangun bagian Front-end
            dari Website dan Aplikasi Web yang mengarah pada kesuksesan produk
            secara keseluruhan. Lihat beberapa hasil kerja saya di bagian
            Proyek.
          </p>
          <p className="text-2xl text-justify  ">
            Saya juga suka berbagi konten terkait hal-hal yang telah saya
            pelajari selama bertahun-tahun dalam pengembangan Web sehingga dapat
            membantu anggota komunitas pengembang lainnya. Silakan terhubung
            atau mengikuti saya di <a href="/">LinkedIn</a> di mana saya
            memposting konten berguna terkait pengembangan Web dan pemrograman.
          </p>
          <p className="text-2xl text-justify  pb-10">
            Saya terbuka untuk kesempatan kerja di mana saya dapat
            berkontribusi, belajar, dan berkembang. Jika Anda memiliki
            kesempatan yang baik yang sesuai dengan keterampilan dan pengalaman
            saya, jangan ragu untuk menghubungi saya.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold ">Keahlian</h2>
          <div className="text-2xl flex gap-2 flex-wrap py-8">
            <div className="bg-gray-300 rounded-xl px-6 py-3 ">Javascript</div>
            <div className="bg-gray-300 rounded-xl px-6 py-3">GIT</div>
            <div className="bg-gray-300 rounded-xl px-6 py-3">GitHub</div>
            <div className="bg-gray-300 rounded-xl px-6 py-3">HTML</div>
            <div className="bg-gray-300 rounded-xl px-6 py-3">CSS</div>
            <div className="bg-gray-300 rounded-xl px-6 py-3">MySQL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
