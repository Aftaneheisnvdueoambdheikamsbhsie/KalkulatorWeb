function showKategori() {
    const kategori = document.getElementById("kategoriRuang").value;
    const pilihanBangunRuang = document.getElementById("pilihanBangunRuang");
    const bangunRuang = document.getElementById("bangunRuang");
    const inputFields = document.getElementById("inputFields");
    const hitungButton = document.getElementById("hitungButton");

    // Reset tampilan
    inputFields.innerHTML = "";
    bangunRuang.innerHTML = '<option value="">-- Pilih Bangun Ruang --</option>';
    hitungButton.style.display = "none";

    if (kategori === "sisiDatar") {
        pilihanBangunRuang.style.display = "block";
        bangunRuang.innerHTML += `
            <option value="balok">Balok</option>
            <option value="kubus">Kubus</option>
            <option value="prismaSegitiga">Prisma Segitiga</option>
            <option value="limas">Limas</option>
        `;
    } else if (kategori === "sisiLengkung") {
        pilihanBangunRuang.style.display = "block";
        bangunRuang.innerHTML += `
            <option value="tabung">Tabung</option>
            <option value="bola">Bola</option>
            <option value="kerucut">Kerucut</option>
        `;
    } else {
        pilihanBangunRuang.style.display = "none";
    }
}

function showInputs() {
    const bangunRuang = document.getElementById("bangunRuang").value;
    const inputFields = document.getElementById("inputFields");
    const hitungButton = document.getElementById("hitungButton");

    inputFields.innerHTML = ""; // Hapus input sebelumnya
    hitungButton.style.display = "block";

    if (bangunRuang === "balok" || bangunRuang === "kubus") {
        inputFields.innerHTML = `
            <label>Panjang (m): <input type="number" id="panjang" step="0.01"></label><br>
            <label>Lebar (m): <input type="number" id="lebar" step="0.01"></label><br>
            <label>Tinggi (m): <input type="number" id="tinggi" step="0.01"></label>
        `;
    } else if (bangunRuang === "prismaSegitiga") {
        inputFields.innerHTML = `
            <label>Alas Segitiga (m): <input type="number" id="alas" step="0.01"></label><br>
            <label>Tinggi Segitiga (m): <input type="number" id="tinggiSegitiga" step="0.01"></label><br>
            <label>Tinggi Prisma (m): <input type="number" id="tinggiPrisma" step="0.01"></label>
        `;
    } else if (bangunRuang === "tabung" || bangunRuang === "kerucut" || bangunRuang === "bola") {
        inputFields.innerHTML = `
            <label>Jari-jari (m): <input type="number" id="radius" step="0.01"></label><br>
            ${bangunRuang !== "bola" ? '<label>Tinggi (m): <input type="number" id="tinggi" step="0.01"></label>' : ''}
        `;
    }
}

function calculateVolume() {
    const bangunRuang = document.getElementById("bangunRuang").value;
    const result = document.getElementById("result");
    let volume = 0;

    if (bangunRuang === "balok" || bangunRuang === "kubus") {
        const panjang = parseFloat(document.getElementById("panjang").value);
        const lebar = parseFloat(document.getElementById("lebar").value);
        const tinggi = parseFloat(document.getElementById("tinggi").value);
        volume = panjang * lebar * tinggi;
    } else if (bangunRuang === "prismaSegitiga") {
        const alas = parseFloat(document.getElementById("alas").value);
        const tinggiSegitiga = parseFloat(document.getElementById("tinggiSegitiga").value);
        const tinggiPrisma = parseFloat(document.getElementById("tinggiPrisma").value);
        volume = (0.5 * alas * tinggiSegitiga) * tinggiPrisma;
    } else if (bangunRuang === "tabung") {
        const radius = parseFloat(document.getElementById("radius").value);
        const tinggi = parseFloat(document.getElementById("tinggi").value);
        volume = Math.PI * radius * radius * tinggi;
    } else if (bangunRuang === "kerucut") {
        const radius = parseFloat(document.getElementById("radius").value);
        const tinggi = parseFloat(document.getElementById("tinggi").value);
        volume = (1 / 3) * Math.PI * radius * radius * tinggi;
    } else if (bangunRuang === "bola") {
        const radius = parseFloat(document.getElementById("radius").value);
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    }

    result.textContent = `Volume ${bangunRuang} adalah ${volume.toFixed(2)} m³.`;
}
