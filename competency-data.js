/* ── Framework Kompetensi Sales Hunter & Farmer v0.1 ──────────────────────────
   Source: Framework_Kompetensi_Sales_Hunter_Farmer.xlsx
   Rubrik: seluruh Key Behavior per level (L1–L5) — aspect.levels[i] = array KB.
   Status: BELUM TERVALIDASI SME — jangan pakai untuk keputusan personalia.
   ─────────────────────────────────────────────────────────────────────────── */

const FRAMEWORK = {

  levelLabels: ['Sadar', 'Dasar', 'Cakap', 'Mahir', 'Ahli'],

  /* ── 20 aspek, tiap aspect.levels[i] = array Key Behavior untuk level i+1 ── */
  aspects: {
    PS: {
      name: 'Persuasi', category: 'soft', onet: '2.B.1.c',
      levels: [
        ['Menyampaikan fitur produk sesuai naskah yang disediakan', 'Menggunakan materi presentasi standar untuk semua prospek', 'Meminta pendampingan senior ketika prospek mengajukan keberatan'],
        ['Menyesuaikan urutan penyampaian berdasarkan industri prospek', 'Mengaitkan minimal satu fitur dengan kebutuhan yang disebut prospek', 'Menangani keberatan umum dengan jawaban yang sudah disiapkan tim'],
        ['Membangun argumen dari masalah bisnis prospek, bukan dari fitur produk', 'Mengubah keberatan menjadi pertanyaan diagnostik untuk menggali kebutuhan', 'Menyesuaikan gaya komunikasi dengan peran pendengar, teknis atau finansial'],
        ['Merancang narasi berbeda untuk tiap anggota komite pembelian secara konsisten', 'Mengantisipasi keberatan struktural seperti anggaran atau politik internal', 'Memenangkan dukungan champion internal untuk mengadvokasi di forum tertutup'],
        ['Membentuk kriteria evaluasi prospek sejak awal sehingga selaras dengan kekuatan produk', 'Menjadi rujukan tim dalam menyusun narasi untuk kesepakatan lintas divisi', 'Menggeser persepsi pasar terhadap kategori produk, bukan sekadar produknya']
      ]
    },
    PR: {
      name: 'Kegigihan', category: 'soft', onet: '1.D.1.b',
      levels: [
        ['Melakukan tindak lanjut sesuai jadwal yang ditetapkan', 'Menyelesaikan jumlah aktivitas prospeksi minimum yang ditargetkan', 'Melaporkan hambatan tanpa menunda pekerjaan berikutnya'],
        ['Melanjutkan tindak lanjut setelah penolakan pertama', 'Mencoba kanal komunikasi alternatif ketika satu kanal tidak direspons', 'Menjaga ritme aktivitas harian meski hasil belum terlihat'],
        ['Memelihara kontak jangka panjang dengan prospek yang belum siap membeli', 'Menyesuaikan pendekatan setelah beberapa kali tidak berhasil', 'Mengelola daftar prospek dorman secara terstruktur'],
        ['Membuka kembali kesepakatan yang sebelumnya dinyatakan kalah', 'Bertahan pada siklus penjualan panjang lebih dari satu tahun tanpa kehilangan momentum', 'Menjaga semangat rekan kerja saat periode konversi rendah'],
        ['Membangun sistem pemeliharaan prospek jangka panjang yang diadopsi tim', 'Mengubah pola kekalahan berulang menjadi perbaikan proses', 'Menjadi contoh ketahanan yang dirujuk dalam budaya tim']
      ]
    },
    IN: {
      name: 'Inisiatif', category: 'soft', onet: '1.D.1.c',
      levels: [
        ['Mengerjakan daftar prospek yang diberikan hingga tuntas', 'Melaporkan peluang yang ditemukan secara tidak sengaja', 'Meminta pekerjaan tambahan ketika target harian selesai'],
        ['Mencari prospek tambahan dari sumber yang sudah tersedia', 'Mengusulkan perbaikan kecil pada materi atau proses penjualan', 'Menindaklanjuti peluang lintas produk tanpa diminta'],
        ['Menyusun daftar target sendiri berdasarkan riset segmen', 'Menguji pendekatan baru dan mengukur hasilnya secara mandiri', 'Mengambil alih akun bermasalah sebelum menjadi eskalasi'],
        ['Membuka kanal atau segmen baru atas inisiatif sendiri', 'Membangun kemitraan eksternal yang menghasilkan aliran prospek', 'Menginisiasi proyek lintas fungsi untuk mengatasi hambatan penjualan'],
        ['Menciptakan peluang pasar baru yang berkembang menjadi lini bisnis', 'Mendorong perubahan strategi komersial berdasarkan temuan lapangan', 'Membangun budaya proaktif yang direplikasi tim lain']
      ]
    },
    NG: {
      name: 'Negosiasi', category: 'soft', onet: '2.B.1.d',
      levels: [
        ['Menyampaikan harga dan syarat standar tanpa penyesuaian', 'Mengeskalasi setiap permintaan konsesi ke atasan', 'Mendokumentasikan permintaan klien secara akurat'],
        ['Menawarkan diskon dalam batas kewenangan yang diberikan', 'Menjelaskan alasan di balik struktur harga saat ditanya', 'Mengenali kapan negosiasi perlu dihentikan sementara'],
        ['Menukar konsesi dengan komitmen seperti durasi kontrak atau volume', 'Menyiapkan batas bawah dan alternatif terbaik sebelum masuk perundingan', 'Menjaga hubungan tetap baik meski permintaan klien ditolak'],
        ['Menyusun paket bernilai tinggi bagi klien tanpa mengorbankan margin', 'Menegosiasikan secara paralel dengan beberapa pihak berkepentingan', 'Membaca titik tekan lawan dan mengatur waktu konsesi secara strategis'],
        ['Merancang kerangka kesepakatan yang menjadi preseden bagi tim', 'Memimpin negosiasi kontrak strategis dengan implikasi jangka panjang', 'Melatih tim mengenali dan menghindari jebakan negosiasi umum']
      ]
    },
    AL: {
      name: 'Mendengar Aktif', category: 'soft', onet: '2.A.1.b',
      levels: [
        ['Mencatat hal yang disampaikan klien tanpa memotong pembicaraan', 'Mengulang kembali informasi faktual dengan benar', 'Menahan diri untuk tidak langsung menawarkan produk'],
        ['Mengonfirmasi pemahaman atas poin utama sebelum melanjutkan', 'Mengajukan pertanyaan klarifikasi saat ada informasi yang kabur', 'Menyesuaikan kecepatan bicara dengan gaya lawan bicara'],
        ['Menggali pernyataan implisit dengan pertanyaan lanjutan yang relevan', 'Membedakan keluhan permukaan dari masalah yang sebenarnya', 'Merangkum kebutuhan klien dengan bahasa klien, bukan bahasa produk'],
        ['Menangkap kebutuhan yang tidak terucap dari nada, jeda, dan keraguan', 'Mengelola percakapan multi-pihak dan memastikan setiap suara terdengar', 'Mengenali ketika jawaban klien menghindari isu yang sesungguhnya'],
        ['Melatih rekan kerja membaca sinyal halus dalam percakapan komersial', 'Merancang panduan diskusi diagnostik yang dipakai tim', 'Menggunakan wawasan dari lapangan sebagai masukan strategi produk']
      ]
    },
    OA: {
      name: 'Analisis Kebutuhan Klien', category: 'technical', onet: '2.B.3.a',
      levels: [
        ['Mengumpulkan daftar kebutuhan yang disebutkan langsung oleh prospek', 'Mencatat kendala operasional yang diungkapkan tanpa menafsirkan', 'Menyampaikan kebutuhan tersebut ke tim solusi secara utuh'],
        ['Menerjemahkan kebutuhan yang dinyatakan menjadi daftar fitur relevan', 'Mengidentifikasi kebutuhan mana yang di luar cakupan produk', 'Menyusun ringkasan kebutuhan yang bisa dipakai tim teknis'],
        ['Menjalankan diskusi diagnostik untuk menemukan akar masalah bisnis', 'Memisahkan kebutuhan yang wajib dari yang sekadar diinginkan', 'Menyusun peta kondisi saat ini versus kondisi yang diharapkan klien'],
        ['Merancang solusi gabungan lintas produk untuk kebutuhan yang kompleks', 'Mengidentifikasi kebutuhan yang belum disadari klien dan membuktikannya', 'Menilai kelayakan implementasi terhadap kapasitas nyata organisasi klien'],
        ['Merumuskan pola kebutuhan pasar yang berulang menjadi masukan roadmap produk', 'Menetapkan metodologi discovery yang menjadi standar tim', 'Mendefinisikan kategori masalah baru yang belum dilayani pasar']
      ]
    },
    SM: {
      name: 'Penguasaan Produk & Pasar', category: 'technical', onet: '2.C.1.d',
      levels: [
        ['Menjelaskan fitur utama produk sendiri secara akurat', 'Menghafal struktur harga dan paket yang berlaku', 'Menyampaikan value proposition standar tanpa penyesuaian'],
        ['Membandingkan produk sendiri dengan satu hingga dua kompetitor utama', 'Mengidentifikasi segmen pasar yang menjadi target perusahaan', 'Menerapkan teknik penjualan dasar yang diajarkan tim'],
        ['Memilih teknik penjualan yang sesuai dengan tipe dan kematangan prospek', 'Memetakan posisi kompetitor pada kategori produk tertentu', 'Menyusun proposal komersial mandiri tanpa template kaku'],
        ['Merancang pendekatan penetrasi untuk segmen pasar yang belum digarap', 'Membaca tren industri dan menyesuaikan narasi penjualan', 'Mengevaluasi efektivitas kanal penjualan berdasarkan data konversi'],
        ['Membentuk strategi penjualan tingkat perusahaan lintas segmen', 'Mengantisipasi pergeseran pasar sebelum tercermin di angka penjualan', 'Menjadi rujukan internal dan eksternal untuk kategori produk ini']
      ]
    },
    PT: {
      name: 'Kemitraan Strategis', category: 'soft', onet: null,
      levels: [
        ['Menyampaikan informasi produk secara jujur termasuk keterbatasannya', 'Menanyakan sasaran bisnis klien, bukan hanya kebutuhan fitur', 'Mencatat konteks bisnis klien di luar cakupan transaksi berjalan'],
        ['Mengaitkan pembahasan produk dengan sasaran bisnis yang disebut klien', 'Menyampaikan risiko atau keterbatasan solusi tanpa diminta', 'Membagikan informasi yang berguna bagi klien meski tidak menghasilkan penjualan'],
        ['Menyarankan klien menunda pembelian ketika kondisinya belum siap', 'Membawa perspektif industri yang tidak bisa diperoleh klien dari internal', 'Menyampaikan ketidaksetujuan atas rencana klien secara konstruktif'],
        ['Diajak berdiskusi oleh klien sebelum kebutuhan resmi dirumuskan', 'Menantang asumsi strategis klien dengan data pembanding yang kredibel', 'Menjaga hubungan tetap terbuka meski sedang tidak ada transaksi berjalan'],
        ['Dilibatkan klien dalam perencanaan tahunan atau penyusunan prioritas strategis', 'Mempertemukan klien dengan pihak yang bermanfaat tanpa kepentingan komersial langsung', 'Menjadi rujukan tim dalam membangun posisi penasihat pada akun strategis']
      ]
    },
    ST: {
      name: 'Ketahanan Tekanan', category: 'soft', onet: '1.D.3.b',
      levels: [
        ['Tetap menjalankan tugas rutin ketika target belum tercapai', 'Menerima umpan balik korektif tanpa sikap defensif', 'Meminta bantuan ketika beban terasa berlebihan'],
        ['Menjaga kualitas kerja saat menghadapi penolakan berulang', 'Memisahkan penolakan atas produk dari penilaian pribadi', 'Menjaga profesionalisme saat berhadapan dengan klien yang keras'],
        ['Tetap tenang dan terstruktur ketika kesepakatan besar batal mendadak', 'Mengelola beban akhir kuartal tanpa penurunan kualitas', 'Memulihkan diri dengan cepat setelah kemunduran signifikan'],
        ['Menjaga performa dan kejernihan berpikir saat tekanan target tinggi', 'Menstabilkan rekan kerja yang sedang mengalami tekanan berat', 'Mengambil keputusan sulit di bawah ketidakpastian informasi'],
        ['Menjadi penstabil tim saat krisis komersial atau perubahan besar', 'Merancang mekanisme kerja yang mengurangi tekanan struktural tim', 'Menjaga arah jangka panjang ketika tekanan jangka pendek memuncak']
      ]
    },
    SO: {
      name: 'Orientasi Melayani', category: 'soft', onet: '2.B.1.f',
      levels: [
        ['Merespons permintaan klien dalam tenggat yang dijanjikan', 'Bersikap sopan dan membantu dalam setiap interaksi', 'Menyampaikan informasi yang diminta secara lengkap'],
        ['Mencari solusi di luar jawaban standar ketika prosedur tidak memadai', 'Menawarkan bantuan sebelum diminta pada isu yang terlihat', 'Menindaklanjuti hingga klien mengonfirmasi masalahnya selesai'],
        ['Memperjuangkan kepentingan klien di forum internal perusahaan', 'Mengorbankan kenyamanan pribadi untuk kebutuhan klien yang mendesak', 'Menjaga transparansi termasuk saat menyampaikan kabar buruk'],
        ['Menyeimbangkan kepentingan klien dan perusahaan pada keputusan sulit', 'Menolak permintaan klien dengan cara yang justru memperkuat kepercayaan', 'Mengubah klien yang kecewa menjadi pendukung aktif'],
        ['Menanamkan orientasi melayani sebagai budaya kerja tim', 'Merancang ulang proses internal berdasarkan kebutuhan klien', 'Menjadi tolok ukur hubungan klien yang dirujuk organisasi']
      ]
    },
    DP: {
      name: 'Keandalan', category: 'soft', onet: '1.D.4.a',
      levels: [
        ['Hadir dan merespons sesuai komitmen waktu yang disepakati', 'Menyelesaikan tugas administratif tepat waktu', 'Memberi tahu lebih awal jika ada keterlambatan'],
        ['Menepati janji kecil secara konsisten dari waktu ke waktu', 'Menyelesaikan tindak lanjut tanpa perlu diingatkan', 'Menjaga akurasi informasi yang disampaikan kepada klien'],
        ['Menjadi titik kontak yang bisa diandalkan tanpa pengawasan', 'Mengambil tanggung jawab atas kesalahan dan memperbaikinya', 'Menjaga konsistensi mutu layanan lintas seluruh akun yang dipegang'],
        ['Menepati komitmen meski kondisi berubah atau menjadi sulit', 'Menjadi penjamin kualitas bagi pekerjaan rekan pada akun bersama', 'Menjaga kepercayaan klien melalui masa transisi organisasi'],
        ['Reputasi keandalannya menjadi alasan klien memperpanjang kontrak', 'Menetapkan standar akuntabilitas yang diikuti tim', 'Dipercaya menangani akun paling sensitif bagi perusahaan']
      ]
    },
    CS: {
      name: 'Manajemen Layanan Klien', category: 'technical', onet: '2.C.1.e',
      levels: [
        ['Menjawab pertanyaan klien sesuai prosedur yang berlaku', 'Meneruskan permintaan ke saluran yang tepat', 'Mendokumentasikan interaksi klien secara lengkap'],
        ['Menyelesaikan keluhan rutin dalam batas waktu layanan', 'Menjelaskan status penanganan secara proaktif kepada klien', 'Mengenali kapan sebuah isu perlu dieskalasi'],
        ['Mengantisipasi kebutuhan klien sebelum berubah menjadi keluhan', 'Menyusun rencana layanan berkala untuk akun yang dipegang', 'Mengukur kepuasan klien dan menindaklanjuti temuannya'],
        ['Merancang program layanan khusus untuk akun strategis', 'Menyeimbangkan tuntutan layanan dengan kapasitas tim internal', 'Memulihkan hubungan pada akun yang sempat bermasalah serius'],
        ['Menetapkan standar layanan yang menjadi diferensiasi perusahaan', 'Membangun model keberhasilan pelanggan yang terukur', 'Mengintegrasikan wawasan layanan ke dalam strategi produk']
      ]
    },
    SP: {
      name: 'Kepekaan Sosial', category: 'soft', onet: '2.B.1.a',
      levels: [
        ['Mengenali kepuasan atau ketidakpuasan yang dinyatakan secara terbuka', 'Menyesuaikan sikap ketika lawan bicara terlihat tidak nyaman', 'Menanyakan kabar dan kondisi klien secara wajar'],
        ['Menangkap perubahan sikap klien dari satu interaksi ke interaksi berikutnya', 'Mengenali kapan bukan waktu yang tepat untuk membahas komersial', 'Membedakan keberatan yang serius dari basa-basi'],
        ['Membaca dinamika hubungan antar pihak di dalam organisasi klien', 'Mengenali motivasi personal di balik posisi yang diambil seseorang', 'Menyesuaikan pendekatan berdasarkan tekanan yang sedang dihadapi kontak'],
        ['Mengenali pergeseran kekuasaan internal klien sebelum berdampak pada akun', 'Mendeteksi ketidakpuasan yang tidak pernah diucapkan secara langsung', 'Mengelola hubungan dengan pihak yang berseberangan tanpa kehilangan salah satunya'],
        ['Memandu tim membaca peta politik pada akun strategis', 'Merancang strategi hubungan multi-pihak untuk akun besar', 'Menjadi rujukan dalam menangani situasi antarpribadi yang sensitif']
      ]
    },
    MO: {
      name: 'Pemantauan Kinerja Akun', category: 'soft', onet: '2.A.2.d',
      levels: [
        ['Mencatat status akun secara berkala sesuai format yang ditentukan', 'Melaporkan perkembangan tanpa diminta atasan', 'Mengenali ketika sebuah komitmen belum terpenuhi'],
        ['Meninjau pemakaian dan pencapaian klien pada setiap periode', 'Membandingkan realisasi dengan target yang disepakati', 'Menandai penyimpangan yang perlu perhatian lebih lanjut'],
        ['Mengevaluasi kesenjangan antara yang dijanjikan dan yang terealisasi', 'Menelusuri penyebab penyimpangan hingga ke akarnya', 'Menyesuaikan rencana kerja akun berdasarkan hasil evaluasi'],
        ['Memimpin tinjauan kinerja berkala bersama klien secara terstruktur', 'Mengevaluasi efektivitas tindakan koreksi yang sudah dijalankan', 'Mengidentifikasi pola lintas akun yang menandakan masalah sistemik'],
        ['Menetapkan kerangka evaluasi untuk seluruh portofolio akun', 'Menghubungkan hasil pemantauan dengan keputusan alokasi sumber daya', 'Membangun disiplin evaluasi berbasis bukti di dalam tim']
      ]
    },
    SE: {
      name: 'Evaluasi Kesehatan Akun', category: 'technical', onet: '2.B.4.h',
      levels: [
        ['Mencatat metrik penggunaan produk oleh klien', 'Melaporkan angka adopsi apa adanya secara berkala', 'Mengenali indikator dasar seperti aktivitas login atau volume transaksi'],
        ['Menyusun laporan tren penggunaan per akun tiap periode', 'Membandingkan realisasi terhadap komitmen awal kontrak', 'Menandai akun dengan penurunan aktivitas yang mencolok'],
        ['Mengidentifikasi indikator risiko pemutusan kontrak dari pola penggunaan', 'Menghubungkan data penggunaan dengan nilai bisnis yang dirasakan klien', 'Mengusulkan tindakan koreksi yang spesifik berdasarkan data'],
        ['Merancang kerangka indikator kesehatan akun beserta ambang batasnya', 'Menilai efektivitas intervensi retensi secara kuantitatif', 'Memprediksi risiko perpanjangan kontrak enam bulan sebelum jatuh tempo'],
        ['Membangun sistem peringatan dini retensi tingkat perusahaan', 'Menetapkan definisi kesehatan akun yang berlaku lintas tim', 'Menghubungkan indikator akun dengan proyeksi pendapatan berulang']
      ]
    },
    CO: {
      name: 'Koordinasi Lintas Fungsi', category: 'soft', onet: '2.B.1.b',
      levels: [
        ['Meneruskan permintaan klien ke tim terkait dengan informasi lengkap', 'Menghadiri koordinasi internal sesuai jadwal', 'Memberi kabar kepada klien setelah menerima jawaban internal'],
        ['Memastikan tindak lanjut internal berjalan tanpa perlu diingatkan klien', 'Menyelaraskan ekspektasi waktu antara klien dan tim pelaksana', 'Mendokumentasikan kesepakatan lintas tim secara tertulis'],
        ['Mengoordinasikan beberapa tim sekaligus untuk menyelesaikan isu klien', 'Menengahi perbedaan prioritas antara klien dan tim internal', 'Menjaga satu sumber kebenaran informasi untuk akun yang dipegang'],
        ['Menyelaraskan rencana pengembangan internal dengan rencana bisnis klien', 'Mengelola ketergantungan antar tim pada implementasi berskala besar', 'Mengangkat hambatan struktural ke tingkat yang bisa memutuskan'],
        ['Membangun mekanisme kolaborasi lintas fungsi untuk akun besar', 'Menetapkan model tata kelola akun yang dipakai seluruh tim', 'Menyelaraskan tujuan komersial dan operasional di tingkat organisasi']
      ]
    },
    AM: {
      name: 'Pemahaman Organisasi Klien', category: 'technical', onet: '2.C.1.a',
      levels: [
        ['Menyebutkan bidang usaha dan skala organisasi klien', 'Mengenali nama jabatan kontak utama di akun', 'Memahami perbedaan dasar antara fungsi bisnis klien'],
        ['Membedakan pengambil keputusan dari pemberi pengaruh di akun', 'Mengidentifikasi divisi mana yang memiliki anggaran relevan', 'Memahami siklus perencanaan anggaran tahunan klien'],
        ['Memetakan alur persetujuan dan wewenang belanja di organisasi klien', 'Menyesuaikan pendekatan dengan model operasi klien (terpusat atau tersebar)', 'Mengidentifikasi inisiatif strategis klien yang bisa dikaitkan dengan solusi'],
        ['Menavigasi kepentingan yang saling bertentangan antar divisi klien', 'Memprediksi dampak perubahan struktur organisasi klien pada peluang', 'Membangun akses ke level pengambil keputusan di luar kontak awal'],
        ['Membangun hubungan setingkat direksi dan memengaruhi prioritas strategis klien', 'Menjadi penasihat yang diajak bicara sebelum anggaran disusun', 'Merancang model engagement organisasi untuk akun enterprise']
      ]
    },
    CE: {
      name: 'Penguasaan Sales Technology', category: 'technical', onet: '2.C.3.a',
      levels: [
        ['Memasukkan catatan aktivitas ke CRM sesuai instruksi', 'Mengoperasikan perangkat presentasi dan konferensi daring', 'Menemukan dokumen dan materi penjualan di repositori tim'],
        ['Menjaga status pipeline di CRM tetap mutakhir tanpa diingatkan', 'Menggunakan template dan sekuens komunikasi yang tersedia', 'Menghasilkan laporan aktivitas standar dari sistem'],
        ['Memanfaatkan laporan CRM untuk menentukan prioritas kerja mingguan', 'Menggabungkan data dari beberapa sumber untuk menyiapkan pertemuan', 'Menjaga kualitas dan konsistensi data akun yang menjadi tanggung jawabnya'],
        ['Mengoptimalkan alur kerja dan otomasi di CRM untuk timnya', 'Mengevaluasi kelayakan tools penjualan baru berdasarkan kasus nyata', 'Membangun dashboard yang dipakai rekan kerja untuk pengambilan keputusan'],
        ['Merancang arsitektur sales tech stack dan standar tata kelola data', 'Menetapkan definisi metrik yang berlaku untuk seluruh organisasi penjualan', 'Memimpin adopsi teknologi penjualan baru lintas tim']
      ]
    },
    EA: {
      name: 'Ketajaman Komersial', category: 'technical', onet: '2.C.1.c',
      levels: [
        ['Memahami struktur harga, diskon, dan syarat pembayaran produk sendiri', 'Menghitung nilai kontrak dasar dengan benar', 'Mengenali istilah finansial umum dalam percakapan bisnis'],
        ['Menghitung dampak diskon terhadap margin sebelum menawarkan', 'Menjelaskan struktur biaya solusi kepada prospek secara jelas', 'Membedakan belanja modal dan belanja operasional pada proposal'],
        ['Menyusun kalkulasi imbal hasil sederhana yang bisa diverifikasi prospek', 'Mengaitkan solusi dengan pos anggaran yang sudah ada di klien', 'Menjelaskan konsekuensi finansial dari tidak mengambil tindakan'],
        ['Membangun business case lengkap dengan periode balik modal dan biaya kepemilikan', 'Merancang struktur komersial yang menyesuaikan siklus kas klien', 'Menantang asumsi finansial klien dengan data pembanding industri'],
        ['Menegosiasikan skema komersial kompleks seperti kontrak multi-tahun atau bagi hasil', 'Menetapkan kerangka penetapan harga yang dipakai tim penjualan', 'Menghubungkan strategi penjualan dengan target profitabilitas perusahaan']
      ]
    },
    IS: {
      name: 'Enablement Klien', category: 'soft', onet: '2.B.1.e',
      levels: [
        ['Menunjukkan fungsi dasar produk kepada pengguna klien', 'Menjawab pertanyaan cara pakai dengan merujuk dokumentasi', 'Menyiapkan materi pelatihan yang sudah tersedia'],
        ['Menjalankan sesi pelatihan standar untuk kelompok kecil', 'Menyesuaikan kecepatan penyampaian dengan tingkat pemahaman peserta', 'Mengumpulkan pertanyaan berulang untuk diteruskan ke tim produk'],
        ['Menyesuaikan materi dan contoh kasus dengan konteks bisnis klien', 'Mengidentifikasi hambatan adopsi dan merancang cara mengatasinya', 'Mengukur pemahaman peserta dan menindaklanjuti yang tertinggal'],
        ['Merancang program adopsi bertahap untuk organisasi klien berskala besar', 'Melatih pengguna kunci di klien agar bisa mengajar rekannya sendiri', 'Menyesuaikan pendekatan pembelajaran untuk peran yang berbeda'],
        ['Membangun kurikulum enablement yang direplikasi lintas akun', 'Menetapkan standar dan sertifikasi adopsi produk', 'Menjadikan enablement sebagai pendorong perpanjangan kontrak']
      ]
    }
  },

  /* ── Profil per role (aspek yang diases dalam trial v1 = Kritis + Tinggi) ── */
  roles: {
    hunter: {
      label: 'Sales Hunter',
      aspects: ['PS','PR','IN'],
      targets: { PS:5, PR:5, IN:5 },
      weights: { PS:'Kritis', PR:'Kritis', IN:'Kritis' }
    },
    farmer: {
      label: 'Sales Farmer',
      aspects: ['SO','DP','PT'],
      targets: { SO:5, DP:5, PT:5 },
      weights: { SO:'Kritis', DP:'Kritis', PT:'Kritis' }
    }
  },

  /* ── Pertanyaan behavioral (3 per role, aspek Kritis) ── */
  questions: {
    hunter: [
      { aspect: 'PS', text: 'Ceritakan situasi di mana Anda berhasil membentuk cara prospek mengevaluasi solusi sejak awal — sehingga kriteria mereka selaras dengan kekuatan produk Anda. Apa yang Anda lakukan dan bagaimana hasilnya?' },
      { aspect: 'PR', text: 'Ceritakan proses penjualan terpanjang yang pernah Anda jalani. Bagaimana Anda menjaga momentum selama lebih dari satu tahun, dan apa hasilnya?' },
      { aspect: 'IN', text: 'Ceritakan satu inisiatif yang Anda ambil sendiri tanpa diminta — misalnya membuka kanal atau segmen baru. Apa yang mendorong Anda melakukannya dan apa yang terjadi?' }
    ],
    farmer: [
      { aspect: 'SO', text: 'Ceritakan saat Anda memperjuangkan kepentingan klien di internal perusahaan — bahkan ketika itu tidak nyaman atau tidak populer. Apa yang terjadi?' },
      { aspect: 'DP', text: 'Ceritakan komitmen kepada klien yang tetap Anda tepati meski kondisi berubah drastis atau menjadi sangat sulit. Bagaimana Anda melakukannya?' },
      { aspect: 'PT', text: 'Pernahkah klien secara aktif melibatkan Anda dalam perencanaan tahunan atau penyusunan prioritas strategis mereka? Ceritakan bagaimana kepercayaan itu terbangun.' }
    ]
  }
};

/* ── Claude API evaluation client ─────────────────────────────────────────── */

async function evaluateAnswer(aspectCode, questionText, transcript, roleKey) {
  const role     = FRAMEWORK.roles[roleKey];
  const aspect   = FRAMEWORK.aspects[aspectCode];
  const target   = role.targets[aspectCode];
  const isLocal  = ['localhost', '127.0.0.1'].includes(window.location.hostname);

  const prompt = `Kamu evaluator kompetensi untuk posisi ${role.label}.

Aspek yang dinilai: ${aspect.name} (${aspectCode})
Key behavior per level (bukti perilaku yang diharapkan):
${aspect.levels.map((kbs, i) =>
  `L${i+1} ${FRAMEWORK.levelLabels[i]}:\n` +
  (Array.isArray(kbs) ? kbs : [kbs]).map(kb => `  • ${kb}`).join('\n')
).join('\n')}

Target level untuk role ini: L${target} ${FRAMEWORK.levelLabels[target-1]}

Pertanyaan: "${questionText}"
Jawaban kandidat (transkrip lisan, mungkin tidak rapi):
"${transcript}"

Tentukan level (1–5) berdasarkan bukti perilaku KONKRET dalam jawaban.
Aturan penting:
- Jangan beri level tanpa bukti dari jawaban
- Klaim tanpa contoh nyata maksimal L2
- Jawaban kosong, sangat singkat, atau tidak relevan = L1
- Jangan menilai kefasihan berbicara, nilai ISI perilaku yang dilaporkan

Balas HANYA dalam JSON (tanpa markdown fence):
{"level": <angka 1-5>, "rationale": "<2-3 kalimat bahasa Indonesia yang menyebut bukti spesifik dari jawaban>"}`;

  // API key lives only in Vercel env var (OPENAI_API_KEY) — never in the browser.
  // Localhost calls the deployed proxy; production uses the relative path.
  const endpoint = isLocal
    ? 'https://ai-interview-lake-one.vercel.app/api/evaluate'
    : '/api/evaluate';

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      max_tokens: 300,
      temperature: 0,
      messages: [{ role: 'user', content: prompt }]
    }),
    signal: AbortSignal.timeout(30000)
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    // Proxy returns {error: "string"}; OpenAI returns {error: {message: "..."}}
    const msg = typeof err?.error === 'string' ? err.error : err?.error?.message;
    throw new Error(msg || `HTTP ${res.status}`);
  }

  const data = await res.json();
  let text = (data.choices?.[0]?.message?.content || '').replace(/```json?\s*|```\s*/g, '').trim();
  const start = text.indexOf('{');
  const end   = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('Model tidak mengembalikan JSON valid');
  const parsed = JSON.parse(text.slice(start, end + 1));
  const level = Math.min(5, Math.max(1, parseInt(parsed.level, 10) || 1));
  return {
    level,
    label: FRAMEWORK.levelLabels[level - 1],
    rationale: parsed.rationale || ''
  };
}
