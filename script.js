function showKategori() {
    const kategori = document.getElementById("kategoriRuang").value;
    const bangunRuangDropdown = document.getElementById("bangunRuang");
    const inputFields = document.getElementById("inputFields");
    const hitungButton = document.getElementById("hitungButton");

    // Reset tampilan
    bangunRuangDropdown.innerHTML = "";
    inputFields.innerHTML = "";
    hitungButton.style.display = "none";

    if (kategori) {
        document.getElementById("pilihanBangunRuang").style.display = "block";

        // Tambahkan opsi berdasarkan kategori
        const opsiBangun = kategori === "sisiDatar"
            ? ["Balok", "Kubus", "Prisma Segitiga"]
            : ["Tabung", "Bola", "Kerucut"];

        opsiBangun.forEach(bangun => {
            const option = document.createElement("option");
            option.value = bangun.toLowerCase().replace(" ", "");
            option.textContent = bangun;
            bangunRuangDropdown.appendChild(option);
        });
    } else {
        document.getElementById("pilihanBangunRuang").style.display = "none";
    }
}

function showInputs() {
    const bangunRuang = document.getElementById("bangunRuang").value;
    const inputFields = document.getElementById("inputFields");
    const hitungButton = document.getElementById("hitungButton");

    // Reset tampilan input dan hasil
    inputFields.innerHTML = "";
    document.getElementById("resultLabel").textContent = "Hasil akan muncul di sini";

    // Konfigurasi input sesuai bangun ruang
    let inputs = "";
    if (bangunRuang === "balok") {
        inputs = `
            <label for="panjang">Panjang:</label>
            <input type="number" id="panjang" placeholder="Masukkan panjang">
            <label for="lebar">Lebar:</label>
            <input type="number" id="lebar" placeholder="Masukkan lebar">
            <label for="tinggi">Tinggi:</label>
            <input type="number" id="tinggi" placeholder="Masukkan tinggi">
        `;
    } else if (bangunRuang === "kubus") {
        inputs = `
            <label for="sisi">Sisi:</label>
            <input type="number" id="sisi" placeholder="Masukkan panjang sisi">
        `;
    } else if (bangunRuang === "prismasegitiga") {
        inputs = `
            <label for="alas">Alas Segitiga:</label>
            <input type="number" id="alas" placeholder="Masukkan alas segitiga">
            <label for="tinggiSegitiga">Tinggi Segitiga:</label>
            <input type="number" id="tinggiSegitiga" placeholder="Masukkan tinggi segitiga">
            <label for="tinggiPrisma">Tinggi Prisma:</label>
            <input type="number" id="tinggiPrisma" placeholder="Masukkan tinggi prisma">
        `;
    } else if (bangunRuang === "tabung") {
        inputs = `
            <label for="jariJari">Jari-Jari:</label>
            <input type="number" id="jariJari" placeholder="Masukkan jari-jari">
            <label for="tinggiTabung">Tinggi:</label>
            <input type="number" id="tinggiTabung" placeholder="Masukkan tinggi">
        `;
    } else if (bangunRuang === "bola") {
        inputs = `
            <label for="jariJariBola">Jari-Jari:</label>
            <input type="number" id="jariJariBola" placeholder="Masukkan jari-jari">
        `;
    } else if (bangunRuang === "kerucut") {
        inputs = `
            <label for="jariJariKerucut">Jari-Jari:</label>
            <input type="number" id="jariJariKerucut" placeholder="Masukkan jari-jari">
            <label for="tinggiKerucut">Tinggi:</label>
            <input type="number" id="tinggiKerucut" placeholder="Masukkan tinggi">
        `;
    }

    inputFields.innerHTML = inputs;
    hitungButton.style.display = "block";
}

function calculateVolume() {
    const bangunRuang = document.getElementById("bangunRuang").value;
    let hasil = 0;

    // Hitung berdasarkan bangun ruang
    if (bangunRuang === "balok") {
        const p = parseFloat(document.getElementById("panjang").value);
        const l = parseFloat(document.getElementById("lebar").value);
        const t = parseFloat(document.getElementById("tinggi").value);
        hasil = p * l * t;
    } else if (bangunRuang === "kubus") {
        const s = parseFloat(document.getElementById("sisi").value);
        hasil = Math.pow(s, 3);
    } else if (bangunRuang === "prismasegitiga") {
        const a = parseFloat(document.getElementById("alas").value);
        const ts = parseFloat(document.getElementById("tinggiSegitiga").value);
        const tp = parseFloat(document.getElementById("tinggiPrisma").value);
        hasil = 0.5 * a * ts * tp;
    } else if (bangunRuang === "tabung") {
        const r = parseFloat(document.getElementById("jariJari").value);
        const t = parseFloat(document.getElementById("tinggiTabung").value);
        hasil = Math.PI * Math.pow(r, 2) * t;
    } else if (bangunRuang === "bola") {
        const r = parseFloat(document.getElementById("jariJariBola").value);
        hasil = (4 / 3) * Math.PI * Math.pow(r, 3);
    } else if (bangunRuang === "kerucut") {
        const r = parseFloat(document.getElementById("jariJariKerucut").value);
        const t = parseFloat(document.getElementById("tinggiKerucut").value);
        hasil = (1 / 3) * Math.PI * Math.pow(r, 2) * t;
    }

    // Tampilkan hasil
    document.getElementById("resultLabel").textContent = `Hasil: ${hasil.toFixed(2)}`;
}
