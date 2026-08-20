/* ── Framework Kompetensi Sales Hunter & Farmer v0.1 ──────────────────────────
   Source: Framework_Kompetensi_Sales_Hunter_Farmer.xlsx
   Rubrik: hanya KB #1 (teratas) per level (L1–L5).
   Status: BELUM TERVALIDASI SME — jangan pakai untuk keputusan personalia.
   ─────────────────────────────────────────────────────────────────────────── */

const FRAMEWORK = {

  levelLabels: ['Sadar', 'Dasar', 'Cakap', 'Mahir', 'Ahli'],

  /* ── 20 aspek, tiap aspect.levels = [KB1_L1, KB1_L2, KB1_L3, KB1_L4, KB1_L5] ── */
  aspects: {
    PS: {
      name: 'Persuasi', category: 'soft', onet: '2.B.1.c',
      levels: [
        'Menyampaikan fitur produk sesuai naskah yang disediakan',
        'Menyesuaikan urutan penyampaian berdasarkan industri prospek',
        'Membangun argumen dari masalah bisnis prospek, bukan dari fitur produk',
        'Merancang narasi berbeda untuk tiap anggota komite pembelian secara konsisten',
        'Membentuk kriteria evaluasi prospek sejak awal sehingga selaras dengan kekuatan produk'
      ]
    },
    PR: {
      name: 'Kegigihan', category: 'soft', onet: '1.D.1.b',
      levels: [
        'Melakukan tindak lanjut sesuai jadwal yang ditetapkan',
        'Melanjutkan tindak lanjut setelah penolakan pertama',
        'Memelihara kontak jangka panjang dengan prospek yang belum siap membeli',
        'Membuka kembali kesepakatan yang sebelumnya dinyatakan kalah',
        'Membangun sistem pemeliharaan prospek jangka panjang yang diadopsi tim'
      ]
    },
    IN: {
      name: 'Inisiatif', category: 'soft', onet: '1.D.1.c',
      levels: [
        'Mengerjakan daftar prospek yang diberikan hingga tuntas',
        'Mencari prospek tambahan dari sumber yang sudah tersedia',
        'Menyusun daftar target sendiri berdasarkan riset segmen',
        'Membuka kanal atau segmen baru atas inisiatif sendiri',
        'Menciptakan peluang pasar baru yang berkembang menjadi lini bisnis'
      ]
    },
    NG: {
      name: 'Negosiasi', category: 'soft', onet: '2.B.1.d',
      levels: [
        'Menyampaikan harga dan syarat standar tanpa penyesuaian',
        'Menawarkan diskon dalam batas kewenangan yang diberikan',
        'Menukar konsesi dengan komitmen seperti durasi kontrak atau volume',
        'Menyusun paket bernilai tinggi bagi klien tanpa mengorbankan margin',
        'Merancang kerangka kesepakatan yang menjadi preseden bagi tim'
      ]
    },
    AL: {
      name: 'Mendengar Aktif', category: 'soft', onet: '2.A.1.b',
      levels: [
        'Mencatat hal yang disampaikan klien tanpa memotong pembicaraan',
        'Mengonfirmasi pemahaman atas poin utama sebelum melanjutkan',
        'Menggali pernyataan implisit dengan pertanyaan lanjutan yang relevan',
        'Menangkap kebutuhan yang tidak terucap dari nada, jeda, dan keraguan',
        'Melatih rekan kerja membaca sinyal halus dalam percakapan komersial'
      ]
    },
    OA: {
      name: 'Analisis Kebutuhan Klien', category: 'technical', onet: '2.B.3.a',
      levels: [
        'Mengumpulkan daftar kebutuhan yang disebutkan langsung oleh prospek',
        'Menerjemahkan kebutuhan yang dinyatakan menjadi daftar fitur relevan',
        'Menjalankan diskusi diagnostik untuk menemukan akar masalah bisnis',
        'Merancang solusi gabungan lintas produk untuk kebutuhan yang kompleks',
        'Merumuskan pola kebutuhan pasar yang berulang menjadi masukan roadmap produk'
      ]
    },
    SM: {
      name: 'Penguasaan Produk & Pasar', category: 'technical', onet: '2.C.1.d',
      levels: [
        'Menjelaskan fitur utama produk sendiri secara akurat',
        'Membandingkan produk sendiri dengan satu hingga dua kompetitor utama',
        'Memilih teknik penjualan yang sesuai dengan tipe dan kematangan prospek',
        'Merancang pendekatan penetrasi untuk segmen pasar yang belum digarap',
        'Membentuk strategi penjualan tingkat perusahaan lintas segmen'
      ]
    },
    PT: {
      name: 'Kemitraan Strategis', category: 'soft', onet: null,
      levels: [
        'Menyampaikan informasi produk secara jujur termasuk keterbatasannya',
        'Mengaitkan pembahasan produk dengan sasaran bisnis yang disebut klien',
        'Menyarankan klien menunda pembelian ketika kondisinya belum siap',
        'Diajak berdiskusi oleh klien sebelum kebutuhan resmi dirumuskan',
        'Dilibatkan klien dalam perencanaan tahunan atau penyusunan prioritas strategis'
      ]
    },
    ST: {
      name: 'Ketahanan Tekanan', category: 'soft', onet: '1.D.3.b',
      levels: [
        'Tetap menjalankan tugas rutin ketika target belum tercapai',
        'Menjaga kualitas kerja saat menghadapi penolakan berulang',
        'Tetap tenang dan terstruktur ketika kesepakatan besar batal mendadak',
        'Menjaga performa dan kejernihan berpikir saat tekanan target tinggi',
        'Menjadi penstabil tim saat krisis komersial atau perubahan besar'
      ]
    },
    SO: {
      name: 'Orientasi Melayani', category: 'soft', onet: '2.B.1.f',
      levels: [
        'Merespons permintaan klien dalam tenggat yang dijanjikan',
        'Mencari solusi di luar jawaban standar ketika prosedur tidak memadai',
        'Memperjuangkan kepentingan klien di forum internal perusahaan',
        'Menyeimbangkan kepentingan klien dan perusahaan pada keputusan sulit',
        'Menanamkan orientasi melayani sebagai budaya kerja tim'
      ]
    },
    DP: {
      name: 'Keandalan', category: 'soft', onet: '1.D.4.a',
      levels: [
        'Hadir dan merespons sesuai komitmen waktu yang disepakati',
        'Menepati janji kecil secara konsisten dari waktu ke waktu',
        'Menjadi titik kontak yang bisa diandalkan tanpa pengawasan',
        'Menepati komitmen meski kondisi berubah atau menjadi sulit',
        'Reputasi keandalannya menjadi alasan klien memperpanjang kontrak'
      ]
    },
    CS: {
      name: 'Manajemen Layanan Klien', category: 'technical', onet: '2.C.1.e',
      levels: [
        'Menjawab pertanyaan klien sesuai prosedur yang berlaku',
        'Menyelesaikan keluhan rutin dalam batas waktu layanan',
        'Mengantisipasi kebutuhan klien sebelum berubah menjadi keluhan',
        'Merancang program layanan khusus untuk akun strategis',
        'Menetapkan standar layanan yang menjadi diferensiasi perusahaan'
      ]
    },
    SP: {
      name: 'Kepekaan Sosial', category: 'soft', onet: '2.B.1.a',
      levels: [
        'Mengenali kepuasan atau ketidakpuasan yang dinyatakan secara terbuka',
        'Menangkap perubahan sikap klien dari satu interaksi ke interaksi berikutnya',
        'Membaca dinamika hubungan antar pihak di dalam organisasi klien',
        'Mengenali pergeseran kekuasaan internal klien sebelum berdampak pada akun',
        'Memandu tim membaca peta politik pada akun strategis'
      ]
    },
    MO: {
      name: 'Pemantauan Kinerja Akun', category: 'soft', onet: '2.A.2.d',
      levels: [
        'Mencatat status akun secara berkala sesuai format yang ditentukan',
        'Meninjau pemakaian dan pencapaian klien pada setiap periode',
        'Mengevaluasi kesenjangan antara yang dijanjikan dan yang terealisasi',
        'Memimpin tinjauan kinerja berkala bersama klien secara terstruktur',
        'Menetapkan kerangka evaluasi untuk seluruh portofolio akun'
      ]
    },
    SE: {
      name: 'Evaluasi Kesehatan Akun', category: 'technical', onet: '2.B.4.h',
      levels: [
        'Mencatat metrik penggunaan produk oleh klien',
        'Menyusun laporan tren penggunaan per akun tiap periode',
        'Mengidentifikasi indikator risiko pemutusan kontrak dari pola penggunaan',
        'Merancang kerangka indikator kesehatan akun beserta ambang batasnya',
        'Membangun sistem peringatan dini retensi tingkat perusahaan'
      ]
    },
    CO: {
      name: 'Koordinasi Lintas Fungsi', category: 'soft', onet: '2.B.1.b',
      levels: [
        'Meneruskan permintaan klien ke tim terkait dengan informasi lengkap',
        'Memastikan tindak lanjut internal berjalan tanpa perlu diingatkan klien',
        'Mengoordinasikan beberapa tim sekaligus untuk menyelesaikan isu klien',
        'Menyelaraskan rencana pengembangan internal dengan rencana bisnis klien',
        'Membangun mekanisme kolaborasi lintas fungsi untuk akun besar'
      ]
    },
    AM: {
      name: 'Pemahaman Organisasi Klien', category: 'technical', onet: '2.C.1.a',
      levels: [
        'Menyebutkan bidang usaha dan skala organisasi klien',
        'Membedakan pengambil keputusan dari pemberi pengaruh di akun',
        'Memetakan alur persetujuan dan wewenang belanja di organisasi klien',
        'Menavigasi kepentingan yang saling bertentangan antar divisi klien',
        'Membangun hubungan setingkat direksi dan memengaruhi prioritas strategis klien'
      ]
    },
    CE: {
      name: 'Penguasaan Sales Technology', category: 'technical', onet: '2.C.3.a',
      levels: [
        'Memasukkan catatan aktivitas ke CRM sesuai instruksi',
        'Menjaga status pipeline di CRM tetap mutakhir tanpa diingatkan',
        'Memanfaatkan laporan CRM untuk menentukan prioritas kerja mingguan',
        'Mengoptimalkan alur kerja dan otomasi di CRM untuk timnya',
        'Merancang arsitektur sales tech stack dan standar tata kelola data'
      ]
    },
    EA: {
      name: 'Ketajaman Komersial', category: 'technical', onet: '2.C.1.c',
      levels: [
        'Memahami struktur harga, diskon, dan syarat pembayaran produk sendiri',
        'Menghitung dampak diskon terhadap margin sebelum menawarkan',
        'Menyusun kalkulasi imbal hasil sederhana yang bisa diverifikasi prospek',
        'Membangun business case lengkap dengan periode balik modal dan biaya kepemilikan',
        'Menegosiasikan skema komersial kompleks seperti kontrak multi-tahun atau bagi hasil'
      ]
    },
    IS: {
      name: 'Enablement Klien', category: 'soft', onet: '2.B.1.e',
      levels: [
        'Menunjukkan fungsi dasar produk kepada pengguna klien',
        'Menjalankan sesi pelatihan standar untuk kelompok kecil',
        'Menyesuaikan materi dan contoh kasus dengan konteks bisnis klien',
        'Merancang program adopsi bertahap untuk organisasi klien berskala besar',
        'Membangun kurikulum enablement yang direplikasi lintas akun'
      ]
    }
  },

  /* ── Profil per role (aspek yang diases dalam trial v1 = Kritis + Tinggi) ── */
  roles: {
    hunter: {
      label: 'Sales Hunter',
      aspects: ['PS','PR','IN','NG','AL','OA','SM','PT','ST'],
      targets: { PS:5, PR:5, IN:5, NG:4, AL:4, OA:4, SM:4, PT:4, ST:4 },
      weights: { PS:'Kritis', PR:'Kritis', IN:'Kritis', NG:'Tinggi', AL:'Tinggi', OA:'Tinggi', SM:'Tinggi', PT:'Tinggi', ST:'Tinggi' }
    },
    farmer: {
      label: 'Sales Farmer',
      aspects: ['SO','DP','PT','CS','AL','SP','MO','SE','CO'],
      targets: { SO:5, DP:5, PT:5, CS:5, AL:4, SP:4, MO:4, SE:4, CO:4 },
      weights: { SO:'Kritis', DP:'Kritis', PT:'Kritis', CS:'Kritis', AL:'Tinggi', SP:'Tinggi', MO:'Tinggi', SE:'Tinggi', CO:'Tinggi' }
    }
  },

  /* ── Pertanyaan behavioral (9 per role, urut bobot Kritis dulu) ── */
  questions: {
    hunter: [
      { aspect: 'PS', text: 'Ceritakan situasi di mana Anda berhasil membentuk cara prospek mengevaluasi solusi sejak awal — sehingga kriteria mereka selaras dengan kekuatan produk Anda. Apa yang Anda lakukan dan bagaimana hasilnya?' },
      { aspect: 'PR', text: 'Ceritakan proses penjualan terpanjang yang pernah Anda jalani. Bagaimana Anda menjaga momentum selama lebih dari satu tahun, dan apa hasilnya?' },
      { aspect: 'IN', text: 'Ceritakan satu inisiatif yang Anda ambil sendiri tanpa diminta — misalnya membuka kanal atau segmen baru. Apa yang mendorong Anda melakukannya dan apa yang terjadi?' },
      { aspect: 'NG', text: 'Ceritakan negosiasi paling menantang yang pernah Anda tangani. Bagaimana Anda menyusun paket akhir yang menguntungkan kedua pihak?' },
      { aspect: 'AL', text: 'Ceritakan percakapan dengan klien di mana Anda menangkap kebutuhan yang tidak pernah mereka ucapkan secara langsung. Apa sinyal yang Anda perhatikan, dan apa yang kemudian berubah?' },
      { aspect: 'OA', text: 'Berikan contoh konkret saat Anda mengidentifikasi kebutuhan klien yang bahkan mereka sendiri belum sadari. Bagaimana Anda menemukannya dan bagaimana Anda membuktikannya kepada mereka?' },
      { aspect: 'SM', text: 'Ceritakan bagaimana Anda merancang pendekatan untuk memasuki segmen pasar yang belum pernah digarap tim Anda. Apa yang Anda pelajari dan apa hasilnya?' },
      { aspect: 'PT', text: 'Pernahkah ada klien yang mengajak Anda berdiskusi sebelum kebutuhan resmi mereka dirumuskan — sebelum ada RFP atau brief formal? Ceritakan konteksnya dan peran Anda.' },
      { aspect: 'ST', text: 'Ceritakan satu momen ketika kesepakatan besar batal mendadak atau target terasa mustahil dicapai. Bagaimana Anda merespons dan apa yang Anda lakukan selanjutnya?' }
    ],
    farmer: [
      { aspect: 'SO', text: 'Ceritakan saat Anda memperjuangkan kepentingan klien di internal perusahaan — bahkan ketika itu tidak nyaman atau tidak populer. Apa yang terjadi?' },
      { aspect: 'DP', text: 'Ceritakan komitmen kepada klien yang tetap Anda tepati meski kondisi berubah drastis atau menjadi sangat sulit. Bagaimana Anda melakukannya?' },
      { aspect: 'PT', text: 'Pernahkah klien secara aktif melibatkan Anda dalam perencanaan tahunan atau penyusunan prioritas strategis mereka? Ceritakan bagaimana kepercayaan itu terbangun.' },
      { aspect: 'CS', text: 'Ceritakan akun yang pernah bermasalah serius — hubungan hampir putus atau kontrak terancam. Bagaimana Anda memulihkannya?' },
      { aspect: 'AL', text: 'Ceritakan saat Anda menyadari bahwa klien sebenarnya menghindari isu yang sesungguhnya dalam percakapan. Bagaimana Anda mengenalinya dan apa yang Anda lakukan?' },
      { aspect: 'SP', text: 'Pernahkah Anda mendeteksi ketidakpuasan atau pergeseran kekuasaan internal di klien yang tidak pernah diucapkan langsung? Apa sinyal yang Anda perhatikan dan bagaimana Anda merespons?' },
      { aspect: 'MO', text: 'Ceritakan bagaimana Anda memantau kinerja akun yang Anda pegang. Berikan contoh konkret temuan yang membuat Anda mengubah rencana kerja.' },
      { aspect: 'SE', text: 'Bagaimana Anda menilai risiko perpanjangan kontrak jauh sebelum jatuh tempo? Sebutkan indikator konkret yang Anda pakai dan berikan contoh kasus.' },
      { aspect: 'CO', text: 'Ceritakan situasi di mana Anda harus mengoordinasikan beberapa tim internal sekaligus untuk menyelesaikan isu klien yang besar. Bagaimana Anda mengelola prosesnya?' }
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
Indikator perilaku per level:
L1 Sadar : ${aspect.levels[0]}
L2 Dasar : ${aspect.levels[1]}
L3 Cakap : ${aspect.levels[2]}
L4 Mahir : ${aspect.levels[3]}
L5 Ahli  : ${aspect.levels[4]}

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
