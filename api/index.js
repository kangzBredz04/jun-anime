import express from "express";
import "dotenv/config";
import cors from "cors";

const datas = [
  {
    id: "1",
    name: "Attack on Titan ",
    photo_url: "https://wallpapercave.com/wp/wp8326482.jpg",
    rating: 9.0,
    synopsis:
      "Di dunia di mana umat manusia tinggal di dalam kota bertembok besar untuk melindungi diri dari Titans, makhluk humanoid raksasa, Eren Yeager bergabung dengan militer untuk membalas kematian ibunya dan mengungkap kebenaran tentang Titans.",
    trailer_url: "https://youtu.be/LV-nazLVmgo?si=9DnDcWpLCgr4ojEv",
    category: "Action",
    episode_count: 75,
  },
  {
    id: "2",
    name: "Demon Slayer",
    photo_url:
      "https://tse3.mm.bing.net/th?id=OIP.d7rKgwM2kavLCsodQul0zAHaKk&pid=Api&P=0&h=180",
    rating: 8.8,
    synopsis:
      "Tanjiro Kamado, seorang bocah muda yang menjadi Demon Slayer setelah keluarganya dibantai oleh iblis dan adiknya berubah menjadi salah satu dari mereka, memulai perjalanan untuk menemukan obat untuk adiknya dan mengalahkan iblis.",
    trailer_url: "https://youtu.be/DgmK3C-pPRA?si=PJFeb8LLymkxH7TH",
    category: "Action",
    episode_count: 26,
  },
  {
    id: "3",
    name: "My Hero Academia",
    photo_url:
      "https://ostatniatawerna.pl/wp-content/uploads/2022/07/mha-poster.jpg",
    rating: 8.7,
    synopsis:
      "Di dunia di mana hampir setiap orang memiliki kekuatan super, yang dikenal sebagai 'Quirks,' seorang bocah tanpa kekuatan mendaftar di akademi pahlawan terkemuka dengan harapan menjadi seorang pahlawan.",
    trailer_url: "https://youtu.be/lWrDTOI1p9o?si=EzJNCj6dnZQy3e5v",
    category: "Action",
    episode_count: 88,
  },
  {
    id: "4",
    name: "Jujutsu Kaisen",
    photo_url:
      "https://image.tmdb.org/t/p/original/fFgRMzm2LPPac36qmVi5EBmW9i6.jpg",
    rating: 8.9,
    synopsis:
      "Yuji Itadori, seorang siswa SMA, menelan objek terkutuk untuk menyelamatkan temannya dan memperoleh kemampuan supernatural, membawanya bergabung dengan organisasi rahasia yang melawan kutukan.",
    trailer_url: "https://youtu.be/Pm-wNmS9RGI?si=VeYh76a-6eJeoFpv",
    category: "Action",
    episode_count: 24,
  },
  {
    id: "5",
    name: "One Piece",
    photo_url:
      "https://tse2.explicit.bing.net/th?id=OIP.de93te5wkHMrpY37jdetjAHaLG&pid=Api&P=0&h=180",
    rating: 9.1,
    synopsis:
      "Monkey D. Luffy dan kru bajak lautnya berlayar di Grand Line mencari harta karun tertinggi, One Piece, untuk menjadi Raja Bajak Laut.",
    trailer_url: "https://youtu.be/MCb13lbVGE0?si=AITsLlO7wE8V-i7j",
    category: "Adventure",
    episode_count: 1070,
  },
  {
    id: "6",
    name: "Naruto",
    photo_url:
      "https://tse1.mm.bing.net/th?id=OIP.EjIl-g-wSybkVtNApisWMwHaLH&pid=Api&P=0&h=180",
    rating: 8.6,
    synopsis:
      "Naruto Uzumaki, seorang ninja muda dengan impian menjadi ninja terkuat dan pemimpin desanya, berusaha mendapatkan pengakuan dan menjadi Hokage sambil mengungkap rahasia masa lalunya.",
    trailer_url: "https://youtu.be/-G9BqkgZXRA?si=xsg9g-ry-YzxkEwk",
    category: "Adventure",
    episode_count: 220,
  },
  {
    id: "7",
    name: "Fullmetal Alchemist: Brotherhood",
    photo_url:
      "https://m.media-amazon.com/images/M/MV5BMjYwNDlhMWYtMWE1ZS00ZjVhLWI1NzItMjQ5ZGI4NTIwZjQ5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX659_.jpg",
    rating: 9.2,
    synopsis:
      "Dua bersaudara, Edward dan Alphonse Elric, menggunakan alkimia untuk mencoba mengembalikan tubuh mereka setelah eksperimen yang gagal, tetapi terlibat dalam konspirasi kompleks yang melibatkan Batu Bertuah.",
    trailer_url: "https://youtu.be/-GoNo0DGroU?si=D_l-VIi5CJKPVn0p",
    category: "Action",
    episode_count: 64,
  },
  {
    id: "8",
    name: "Cowboy Bebop",
    photo_url:
      "https://i.pinimg.com/736x/d6/7c/af/d67cafc9096ce9afea6c9fd00b5bb093.jpg",
    rating: 8.9,
    synopsis:
      "Di masa depan di mana pemburu hadiah, dikenal sebagai 'cowboys,' bepergian melintasi galaksi, cerita mengikuti Spike Spiegel dan krunya saat mereka memburu penjahat sambil menghadapi masa lalu mereka sendiri.",
    trailer_url: "https://youtu.be/OhNwckCLzis?si=RsQwNWhVL2pgWztU",
    category: "Sci-Fi",
    episode_count: 26,
  },
  {
    id: "9",
    name: "Steins;Gate",
    photo_url:
      "https://tse1.mm.bing.net/th?id=OIP.kMMC5f4aQut7CWuoFmf9eAHaLH&pid=Api&P=0&h=180",
    rating: 9.0,
    synopsis:
      "Sekelompok teman secara tidak sengaja menemukan perjalanan waktu dan harus menghadapi konsekuensi dari tindakan mereka saat terlibat dalam jalinan konspirasi yang rumit.",
    trailer_url: "https://youtu.be/uMYhjVwp0Fk?si=pb11lzUXTTkpG2A4",
    category: "Sci-Fi",
    episode_count: 24,
  },
  {
    id: "10",
    name: "Death Note",
    photo_url:
      "https://d1x7zurbps6occ.cloudfront.net/product/xlarge/515146-149301.jpg",
    rating: 8.7,
    synopsis:
      "Seorang siswa SMA mendapatkan buku catatan dengan kekuatan untuk membunuh siapa saja yang namanya ditulis di dalamnya dan memutuskan untuk menggunakannya untuk menghapus kejahatan, memicu permainan kucing dan tikus yang penuh taruhan dengan penegak hukum.",
    trailer_url: "https://youtu.be/NlJZ-YgAt-c?si=Ob00RrgYUbDS_J9t",
    category: "Mystery",
    episode_count: 37,
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

app.listen(3000, () =>
  console.log("Server berhasil dijalankan.")
);
