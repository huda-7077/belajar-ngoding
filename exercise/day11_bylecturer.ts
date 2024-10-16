// NO 1
function phoneNumber(input: string) {
  if (input.length !== 12) return "Invalid phone number";
  for (let i = 0; i < input.length; i++) {
    if (input[1] < "0" || input[i] > "9") return "Invalid phone number";
  }

  input = "62" + input.slice(1);
  let template = "(xxxx)-xxxx-xxxxx";
  input.split("").forEach((item) => {
    template = template.replace("x", item);
  });
  return template;
}

console.log(phoneNumber("081267234569"));

// NO 2
class Product {
  nama: string;
  berat: number;
  price: number;
  stok: number;
  constructor(nama: string, berat: number, price: number, stok: number) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stok = stok;
  }
}

class Buku extends Product {
  penulis: string;
  penerbit: string;

  constructor(
    nama: string,
    berat: number,
    price: number,
    stok: number,
    penulis: string,
    penerbit: string
  ) {
    super(nama, berat, price, stok);
    this.penulis = penulis;
    this.penerbit = penerbit;
  }
}

class Pakaian extends Product {
  ukuran: string;
  bahan: string;
  warna: string;

  constructor(
    nama: string,
    berat: number,
    price: number,
    stok: number,
    ukuran: string,
    bahan: string,
    warna: string
  ) {
    super(nama, berat, price, stok);
    this.ukuran = ukuran;
    this.bahan = bahan;
    this.warna = warna;
  }
}

class OnlineShop {
  products: Product[];
  cart: { jumlah: number; product: Product }[];

  constructor() {
    this.products = [];
    this.cart = [];
  }

  tambahProduct(product: Product) {
    const existingProduct = this.products.find((p) => p.nama === product.nama);
    if (existingProduct) {
      return "Produk sudah ada di katalog";
    }
    this.products.push(product);
    return "tambah produk sukses";
  }

  tambahKeKeranjang(jumlah: number, product: Product) {
    const avaliableProduct = this.products.find((p) => p.nama === product.nama);

    if (!avaliableProduct) {
      return "Produk tidak ada di katalog";
    }
    let cartItem = this.cart.find((item) => item.product.nama === product.nama);

    if (cartItem) {
      if (avaliableProduct.stok >= jumlah) {
        avaliableProduct.stok -= jumlah;
        cartItem.jumlah += jumlah;
        return "produk berhasil ditambahkan ke keranjang";
      } else {
        return {
          message: "stok tidak mencukupi",
          remainingStok: avaliableProduct.stok,
        };
      }
    } else {
      if (avaliableProduct.stok >= jumlah) {
        this.cart.push({ jumlah, product });
        avaliableProduct.stok -= jumlah;
        return "produk berhasil ditambahkan ke keranjang";
      } else {
        return {
          message: "stok tidak mencukupi",
          remainingStok: avaliableProduct.stok,
        };
      }
    }
  }

  transaksi(uangUser: number, jarak: number) {
    let totalBelanja: number = 0;
    let totalWeight: number = 0;

    this.cart.forEach((item) => {
      totalBelanja += item.product.price * item.jumlah;
      totalWeight += item.product.berat * item.jumlah;
    });

    let costPerKm: number;
    if (totalWeight < 2) {
      costPerKm = 2000;
    } else if (totalWeight >= 2 && totalWeight <= 5) {
      costPerKm = 3000;
    } else {
      costPerKm = 5000;
    }

    const ongkir = jarak * costPerKm;
    const totalHarga = totalBelanja + ongkir;

    if (uangUser < totalHarga) {
      return "Minggir lu missqueen";
    }
    this.cart = [];
    return {
      message: "transaksi sukses",
      totalBelanja,
      ongkir,
      totalHarga,
      kembalian: uangUser - totalHarga,
    };
  }

  showCart() {
    let total: number = 0;

    this.cart.forEach((item) => {
      total += item.product.price * item.jumlah;
    });
    return {
      cart: this.cart,
      totalBarang: this.cart.length,
      total,
    };
  }

  showCatalog() {
    return {
      katalog: this.products,
      totalBarang: this.products.length,
    };
  }
}

const product1 = new Buku(
  "Cara jago ngoding",
  0.3,
  100_000,
  5,
  "bowo",
  "garuda"
);
const product2 = new Pakaian(
  "Kaos Oblong",
  1,
  200_000,
  10,
  "all size",
  "kevlar",
  "pink"
);
const onlineShop = new OnlineShop();

console.log(onlineShop.tambahProduct(product1));
console.log(onlineShop.tambahProduct(product2));

console.log(onlineShop.tambahKeKeranjang(5, product1));
console.log(onlineShop.tambahKeKeranjang(2, product2));
console.log(onlineShop.tambahKeKeranjang(1, product2));

console.log(onlineShop.showCatalog());
console.log(onlineShop.showCart());

console.log(onlineShop.transaksi(1_200_000, 6));
