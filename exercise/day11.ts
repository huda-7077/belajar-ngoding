/*
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555"

    ========================================================
    
    buat parent class Product
    constructor = nama, berat, price, stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/

// NO 1 ======================================================================

function phoneNumber(nums: string) {
  if (typeof nums !== "string") return "Invalid phone number.";
  if (nums.length !== 12) return "Invalid phone number.";
  let result: string[] = nums.slice(1).split("");
  // console.log(result);
  result.splice(0, 0, "(62") &&
    result.splice(3, 0, ")-") &&
    result.splice(8, 0, "-");
  //   console.log(result);

  return result.join("");
}
console.log(phoneNumber("085291155255"));

// NO 2 ======================================================================

class Product {
  nama: string;
  berat: number;
  price: number;
  stok: number;
  constructor(name: string, weight: number, price: number, stok: number) {
    this.nama = name;
    this.price = price;
    this.berat = weight;
    this.stok = stok;
  }
}

class Buku extends Product {
  penerbit: string;
  penulis: string;
  constructor(
    name: string,
    weight: number,
    price: number,
    stok: number,
    author: string,
    publisher: string
  ) {
    super(name, weight, price, stok);
    this.penerbit = publisher;
    this.penulis = author;
  }
}

class Pakaian extends Product {
  warna: string;
  bahan: string;
  constructor(
    name: string,
    weight: number,
    price: number,
    stok: number,
    color: string,
    bahan: string
  ) {
    super(name, weight, price, stok);
    this.warna = color;
    this.bahan = bahan;
  }
}

class OnlineShop {
  #cart: { produk: Product; jumlah: number }[] = [];
  #produk: Product[] = [];
  #total: number;
  #totalBerat: number;
  constructor() {
    this.#cart;
    this.#produk;
    this.#total = 0;
    this.#totalBerat = 0;
  }

  tambahProduk(product: Product) {
    if (this.#produk.some((item) => item.nama === product.nama))
      return "produk sudah ada";
    return this.#produk.push(product);
  }
  tambahKeKeranjang(product: string, jumlah: number) {
    const produk = this.#produk.find((item) => item.nama === product);
    if (!produk) return "Produk tidak tersedia";
    if (jumlah > produk.stok)
      return `Jumlah produk melebihi stok. Tersedia ${produk.stok}`;
    const cartItem = this.#cart.find((item) => item.produk.nama === product);
    if (cartItem) {
      cartItem.jumlah += jumlah;
    } else {
      this.#cart.push({ produk, jumlah });
    }
    produk.stok -= jumlah;
    this.#totalBerat += jumlah * produk.berat;
    this.#total += jumlah * produk.price;
    return "produk berhasil ditambahkan ke dalam keranjang";
  }
  transaksi(uangUser: number, jarak: number) {
    let berat: number = 0;
    if (this.#totalBerat <= 1) {
      berat = 2000; // berat dibawah 1kg
    } else if (this.#totalBerat > 1 && this.#totalBerat <= 5) {
      berat = 3000; // berat lebih dari 1kg sampai 5kg
    } else {
      berat = 6000; // berat lebih dari 5kg
    }
    const ongkir: number = jarak * berat;
    this.#total += ongkir;
    if (uangUser < this.#total) return "Minggir Lu Missqueen!!!";
    const kembalian: number = uangUser - this.#total;
    this.#cart = [];
    return {
      pesan: "Transaksi Berhasil",
      totalOngkir: "Rp " + ongkir.toLocaleString("id-ID"),
      totalBiaya: "Rp " + this.#total.toLocaleString("id-ID"),
      uangUser: "Rp " + uangUser.toLocaleString("id-ID"),
      kembalian: "Rp " + kembalian.toLocaleString("id-ID"),

    };
  }
  showCatalog() {
    return this.#produk;
  }
  showCart() {
    return { cart: this.#cart, total: this.#total };
  }
}
const buku = new Buku("Ilmu Hitam", 0.3, 200_000, 10, "Mulyo", "Joqo Corp");
const baju = new Pakaian("Kaos JKT48", 0.5, 100_000, 10, "Merah", "Cotton");
const celana = new Pakaian("Celana Levis", 1, 600_000, 10, "Hitam", "Levis");
console.log(buku);
console.log(baju);

const belanja = new OnlineShop();
belanja.tambahProduk(buku);
belanja.tambahProduk(celana);
console.log(belanja.tambahProduk(buku));
belanja.tambahProduk(baju);
console.log(belanja.tambahKeKeranjang("Kaos JKT48", 2));
console.log(belanja.tambahKeKeranjang("Ilmu Hitam", 2));
console.log(belanja.tambahKeKeranjang("Celana Levis", 2));
console.log(belanja.showCart());
console.log(belanja.transaksi(2000000, 7));

console.log(belanja.showCatalog());
