import express from "express";
import "dotenv/config";
import cors from "cors";

const datas = [
  {
    id: "1",
    name: "Attack on Titan",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9bd09f2fc50fc021a5f0e79ac5d3b6b7.jpg",
    rating: 9.0,
    synopsis:
      "Di dunia di mana umat manusia tinggal di dalam kota-kota yang dikelilingi tembok raksasa untuk melindungi diri dari Titan, makhluk humanoid raksasa, Eren Yeager bergabung dengan militer untuk membalas kematian ibunya dan mengungkap kebenaran tentang Titan.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9bd09f2fc50fc021a5f0e79ac5d3b6b7.jpg",
    category: "Action",
    episode_count: 75,
  },
  {
    id: "2",
    name: "Demon Slayer",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a92cf3cbbf476601d14d8df845f743f2.jpg",
    rating: 8.8,
    synopsis:
      "Tanjiro Kamado, seorang anak laki-laki yang menjadi Pembunuh Iblis setelah keluarganya dibunuh oleh iblis dan adiknya berubah menjadi iblis, memulai perjalanan untuk menemukan obat untuk adiknya dan mengalahkan iblis.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a92cf3cbbf476601d14d8df845f743f2.jpg",
    category: "Action",
    episode_count: 26,
  },
  {
    id: "3",
    name: "My Hero Academia",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/428c3d8399634e8b6599273c73d0e012.jpg",
    rating: 8.7,
    synopsis:
      "Di dunia di mana hampir setiap orang memiliki kekuatan super yang dikenal sebagai 'Quirks,' seorang anak laki-laki tanpa kekuatan mendaftar di akademi pahlawan terkemuka dengan harapan menjadi seorang pahlawan.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/428c3d8399634e8b6599273c73d0e012.jpg",
    category: "Action",
    episode_count: 88,
  },
  {
    id: "4",
    name: "Jujutsu Kaisen",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5f62219f415b0e88b7430a5e639d5e0a.jpg",
    rating: 8.9,
    synopsis:
      "Yuji Itadori, seorang siswa SMA, menelan objek terkutuk untuk menyelamatkan teman-temannya dan memperoleh kemampuan supernatural, membawanya bergabung dengan organisasi rahasia yang melawan kutukan.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5f62219f415b0e88b7430a5e639d5e0a.jpg",
    category: "Action",
    episode_count: 24,
  },
  {
    id: "5",
    name: "One Piece",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0b58206732e8b76c6e8fa5e7d5c394a3.jpg",
    rating: 9.1,
    synopsis:
      "Monkey D. Luffy dan kru bajak lautnya berlayar di Grand Line mencari harta karun terakhir, One Piece, untuk menjadi Raja Bajak Laut.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0b58206732e8b76c6e8fa5e7d5c394a3.jpg",
    category: "Adventure",
    episode_count: 1070,
  },
  {
    id: "6",
    name: "Naruto",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6d832fb9a3c1a1b5db9b835f2787f9c8.jpg",
    rating: 8.6,
    synopsis:
      "Naruto Uzumaki, seorang ninja muda dengan impian menjadi ninja terkuat dan pemimpin desanya, berusaha mendapatkan pengakuan dan menjadi Hokage sambil mengungkap rahasia masa lalunya.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6d832fb9a3c1a1b5db9b835f2787f9c8.jpg",
    category: "Adventure",
    episode_count: 220,
  },
  {
    id: "7",
    name: "Fullmetal Alchemist: Brotherhood",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/035c563d82950771aaeb40bfcfefb25b.jpg",
    rating: 9.2,
    synopsis:
      "Dua saudara, Edward dan Alphonse Elric, menggunakan alkimia untuk mencoba mengembalikan tubuh mereka setelah eksperimen yang gagal tetapi terlibat dalam konspirasi kompleks yang melibatkan Batu Filsuf.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/035c563d82950771aaeb40bfcfefb25b.jpg",
    category: "Action",
    episode_count: 64,
  },
  {
    id: "8",
    name: "Cowboy Bebop",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/089cc77c593f62c5e024e0f64642a3f8.jpg",
    rating: 8.9,
    synopsis:
      "Di masa depan, di mana pemburu hadiah, yang dikenal sebagai 'cowboys,' menjelajahi galaksi, cerita mengikuti Spike Spiegel dan krunya saat mereka memburu penjahat sambil menghadapi masa lalu mereka sendiri.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/089cc77c593f62c5e024e0f64642a3f8.jpg",
    category: "Sci-Fi",
    episode_count: 26,
  },
  {
    id: "9",
    name: "Steins;Gate",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/44b26c223afc5a4f64a643c0aef9bc16.jpg",
    rating: 9.0,
    synopsis:
      "Sekelompok teman secara tidak sengaja menemukan perjalanan waktu dan harus menavigasi konsekuensi dari tindakan mereka saat mereka terlibat dalam jaringan konspirasi yang kompleks.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/44b26c223afc5a4f64a643c0aef9bc16.jpg",
    category: "Sci-Fi",
    episode_count: 24,
  },
  {
    id: "10",
    name: "Death Note",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4e7fd76598f20e783d706a4bfcf1d20f.jpg",
    rating: 8.7,
    synopsis:
      "Seorang siswa SMA mendapatkan buku catatan dengan kekuatan untuk membunuh siapa pun yang namanya ditulis di dalamnya dan memutuskan untuk menggunakannya untuk membersihkan dunia dari penjahat, memicu permainan kucing-dan-tikus yang berisiko tinggi dengan penegak hukum.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4e7fd76598f20e783d706a4bfcf1d20f.jpg",
    category: "Thriller",
    episode_count: 37,
  },
  {
    id: "11",
    name: "Sword Art Online",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/df5a756fbaf9067c6631ea0a94c24a55.jpg",
    rating: 8.4,
    synopsis:
      "Setelah terjebak dalam permainan VRMMORPG, pemain harus bertarung untuk bertahan hidup dan melarikan diri dari dunia virtual dengan harga nyawa.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/df5a756fbaf9067c6631ea0a94c24a55.jpg",
    category: "Adventure",
    episode_count: 96,
  },
  {
    id: "12",
    name: "The Rising of the Shield Hero",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/70a167cf749560b9b2a6efc08a7c0d9d.jpg",
    rating: 8.5,
    synopsis:
      "Naofumi Iwatani, salah satu dari empat pahlawan yang dipanggil ke dunia fantasi, menjadi Pahlawan Perisai dan harus berjuang melawan penipuan dan kesulitan sambil membangun kekuatan dan kepercayaan.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/70a167cf749560b9b2a6efc08a7c0d9d.jpg",
    category: "Fantasy",
    episode_count: 25,
  },
  {
    id: "13",
    name: "Tokyo Ghoul",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/06fcdbfc8cda6e44a8d3d2fd33e6a1e4.jpg",
    rating: 8.4,
    synopsis:
      "Ken Kaneki, seorang mahasiswa yang berubah menjadi ghoul setelah kecelakaan, harus beradaptasi dengan hidup sebagai ghoul sambil menghadapi konflik antara manusia dan ghoul.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/06fcdbfc8cda6e44a8d3d2fd33e6a1e4.jpg",
    category: "Horror",
    episode_count: 24,
  },
  {
    id: "14",
    name: "No Game No Life",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/062c64b0181d589fc5e7b3c88b4fa4e4.jpg",
    rating: 8.7,
    synopsis:
      "Sora dan Shiro, dua bersaudara jenius dalam bermain game, dipindahkan ke dunia di mana segala sesuatu diselesaikan melalui permainan, dan mereka berusaha untuk mengalahkan dewa dunia tersebut.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/062c64b0181d589fc5e7b3c88b4fa4e4.jpg",
    category: "Fantasy",
    episode_count: 12,
  },
  {
    id: "15",
    name: "Code Geass",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6ea94b0a31930ea6ff6ec9fbc7404174.jpg",
    rating: 8.8,
    synopsis:
      "Lelouch vi Britannia mendapatkan kekuatan untuk memanipulasi orang dengan mata Geass dan menggunakan kekuatan tersebut untuk melawan kerajaan Britannia dan mencapai tujuan balas dendamnya.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6ea94b0a31930ea6ff6ec9fbc7404174.jpg",
    category: "Mecha",
    episode_count: 26,
  },
  {
    id: "16",
    name: "Re:Zero",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2d0ed3b9bb4d22bb4b5f4e99d6091e4a.jpg",
    rating: 8.5,
    synopsis:
      "Subaru Natsuki, seorang siswa yang tiba-tiba dipindahkan ke dunia fantasi, menemukan bahwa dia memiliki kemampuan untuk kembali ke titik waktu tertentu setiap kali dia mati, memaksanya untuk menghadapi tantangan baru dan bahaya.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2d0ed3b9bb4d22bb4b5f4e99d6091e4a.jpg",
    category: "Fantasy",
    episode_count: 25,
  },
  {
    id: "17",
    name: "Bleach",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cf47e99e5859a30a8b6b179f606d56d7.jpg",
    rating: 8.1,
    synopsis:
      "Ichigo Kurosaki, seorang remaja dengan kemampuan melihat hantu, menjadi Soul Reaper dan harus melindungi dunia dari roh jahat sambil menghadapi tanggung jawab barunya.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cf47e99e5859a30a8b6b179f606d56d7.jpg",
    category: "Action",
    episode_count: 366,
  },
  {
    id: "18",
    name: "Made in Abyss",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f81b6f688d0d32fa722302b00e82f044.jpg",
    rating: 8.8,
    synopsis:
      "Riko, seorang gadis muda, turun ke Abyss yang misterius untuk mencari ibunya, mengungkap kedalaman Abyss yang berbahaya dan belum diketahui bersama teman robotnya, Reg.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f81b6f688d0d32fa722302b00e82f044.jpg",
    category: "Adventure",
    episode_count: 13,
  },
  {
    id: "19",
    name: "The Promised Neverland",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/75ab41b3db20a79a2dcfa1e32ecb64b2.jpg",
    rating: 8.6,
    synopsis:
      "Anak-anak yang tinggal di panti asuhan menemukan rahasia mengerikan tentang nasib mereka dan merancang rencana untuk melarikan diri dari rumah mereka yang tampaknya sempurna namun mematikan.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/75ab41b3db20a79a2dcfa1e32ecb64b2.jpg",
    category: "Thriller",
    episode_count: 12,
  },
  {
    id: "20",
    name: "Kaguya-sama: Love is War",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/58992d690678cd9f882342b7483728f4.jpg",
    rating: 8.4,
    synopsis:
      "Dua anggota dewan siswa terlibat dalam pertarungan kecerdasan dan skema untuk membuat yang lain mengaku cinta terlebih dahulu, meskipun mereka sendiri memiliki perasaan satu sama lain.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/58992d690678cd9f882342b7483728f4.jpg",
    category: "Comedy",
    episode_count: 12,
  },
  {
    id: "21",

    name: "Fate/Zero",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9c1a1d09e2b1f3f1f7e1bb80d8e6eae4.jpg",
    rating: 8.9,
    synopsis:
      "Para penyihir dan pahlawan legendaris mereka terlibat dalam pertempuran brutal untuk mendapatkan Holy Grail, yang diyakini dapat memberikan keinginan apa pun, dalam pertarungan berbahaya untuk kekuasaan dan keberanian.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9c1a1d09e2b1f3f1f7e1bb80d8e6eae4.jpg",
    category: "Action",
    episode_count: 13,
  },
  {
    id: "22",
    name: "Higurashi: When They Cry",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f2c15c28b4c5a5de70e7de423b4a91db.jpg",
    rating: 8.6,
    synopsis:
      "Di sebuah desa kecil, serangkaian peristiwa misterius dan kekerasan muncul seiring dengan munculnya rahasia kelam dan konflik tersembunyi antara penduduknya.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f2c15c28b4c5a5de70e7de423b4a91db.jpg",
    category: "Horror",
    episode_count: 50,
  },
  {
    id: "23",
    name: "Mushoku Tensei: Jobless Reincarnation",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1184189c01e7a35cb92ea8fd6c93b4ab.jpg",
    rating: 8.7,
    synopsis:
      "Seorang pria berusia 34 tahun yang putus asa dan terjebak dalam kehidupan yang tidak memuaskan mendapatkan kesempatan untuk memulai kehidupan baru di dunia fantasi sebagai anak muda dengan kekuatan baru dan kesempatan untuk memperbaiki kesalahan masa lalunya.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1184189c01e7a35cb92ea8fd6c93b4ab.jpg",
    category: "Fantasy",
    episode_count: 23,
  },
  {
    id: "24",
    name: "Beastars",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a6a6b946e7db6582c2a56854b9ab6c89.jpg",
    rating: 8.6,
    synopsis:
      "Di dunia di mana hewan-hewan antropomorfik hidup berdampingan, cerita ini mengikuti Legoshi, seekor serigala, saat ia berusaha menghadapi perasaannya dan tekanan sosial di sekolah sambil menghadapi misteri pembunuhan.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a6a6b946e7db6582c2a56854b9ab6c89.jpg",
    category: "Drama",
    episode_count: 24,
  },
  {
    id: "25",
    name: "Clannad: After Story",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a1a6d5a4e0e9b8bfa618b8ea7db27f6e.jpg",
    rating: 9.0,
    synopsis:
      "Melanjutkan kisah setelah akhir dari Clannad, anime ini mengikuti kehidupan Tomoya Okazaki dan Nagisa Furukawa setelah lulus SMA, menghadapi tantangan dan perubahan besar dalam hidup mereka.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a1a6d5a4e0e9b8bfa618b8ea7db27f6e.jpg",
    category: "Drama",
    episode_count: 24,
  },
  {
    id: "26",
    name: "Mob Psycho 100",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/868b62f0c1e2c0713943c3f6c69b4316.jpg",
    rating: 8.9,
    synopsis:
      "Shigeo Kageyama, seorang remaja dengan kekuatan psikis yang sangat besar, mencoba menjalani kehidupan normal sambil mengatasi masalah sehari-hari dan melawan ancaman supernatural.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/868b62f0c1e2c0713943c3f6c69b4316.jpg",
    category: "Action",
    episode_count: 25,
  },
  {
    id: "27",
    name: "Paranoia Agent",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/00e1eb8f96fc80d7727d5b867e0ea5b6.jpg",
    rating: 8.5,
    synopsis:
      "Serangkaian serangan oleh seorang remaja misterius dengan tongkat besi mengganggu kehidupan orang-orang di Tokyo, membawa kejahatan dan ketidakstabilan ke kota sambil membongkar rahasia gelap di balik setiap korban.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/00e1eb8f96fc80d7727d5b867e0ea5b6.jpg",
    category: "Thriller",
    episode_count: 13,
  },
  {
    id: "28",
    name: "Psycho-Pass",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2c186e8135ac3f69aa34f681a7a6e3d4.jpg",
    rating: 8.8,
    synopsis:
      "Di masa depan, di mana sistem pemerintahan dapat mengukur potensi kejahatan individu, seorang anggota tim penegak hukum harus melawan berbagai kasus kejahatan sambil mempertanyakan moralitas dan efektivitas sistem tersebut.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2c186e8135ac3f69aa34f681a7a6e3d4.jpg",
    category: "Sci-Fi",
    episode_count: 22,
  },
  {
    id: "29",
    name: "Great Teacher Onizuka",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2799db9cfcf79ad6b9a2f04c8b7a5f91.jpg",
    rating: 8.7,
    synopsis:
      "Onizuka Eikichi, seorang mantan anggota geng motor, menjadi guru di sekolah menengah dengan tujuan awal yang tidak biasa, tetapi akhirnya mempengaruhi dan membantu siswa-siswanya dalam cara yang tidak terduga.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2799db9cfcf79ad6b9a2f04c8b7a5f91.jpg",
    category: "Comedy",
    episode_count: 43,
  },
  {
    id: "30",
    name: "Vinland Saga",
    photo_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a01264b0e01b85e9ea5dfd77bdbfbcb5.jpg",
    rating: 8.9,
    synopsis:
      "Thorfin Karlsefni, seorang pejuang Viking, mencari balas dendam terhadap pembunuh ayahnya sambil terlibat dalam berbagai peristiwa sejarah dan pertarungan berdarah di Eropa abad pertengahan.",
    trailer_url:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a01264b0e01b85e9ea5dfd77bdbfbcb5.jpg",
    category: "Action",
    episode_count: 24,
  },
];

const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.get("/animes", (_req, res) => {
  res.json(datas);
});

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
