console.log("Halo, Script.js berhasil terhubung.");

// Ambil elemen
const form = document.querySelector('form');
const inputNamaResep = document.querySelector('#recipe-name');
const judulPratinjau = document.querySelector('#preview-title');

// Event submit form
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("🍲 Form resep telah dikirim!");

  alert(`Resep "${inputNamaResep.value}" telah dikirim!`);
});

// Event input (ubah judul saat mengetik)
inputNamaResep.addEventListener('input', function() {
  console.log(inputNamaResep.value);
  if (judulPratinjau) {
    judulPratinjau.textContent = inputNamaResep.value;
  }
});

inputNamaResep.addEventListener('input', function() {
    // 1. Ambil nilai yang ada di input
    const teksInputan = inputNamaResep.value;
    
    // 2. Setel teks pratinjau = teks inputan
    judulPratinjau.textContent = teksInputan;
});

inputNamaResep.addEventListener('input', function() {
    const teksInputan = inputNamaResep.value;
    
    if (teksInputan === "") {
        // Jika kosong, tampilkan teks placeholder
        judulPratinjau.textContent = "Judul Resep Akan Muncul Di Sini";
    } else {
        // Jika ada isi, tampilkan isinya
        judulPratinjau.textContent = teksInputan;
    }
});

// Tugas 1
const timePrev = document.getElementById("prev-time");
const input = document.getElementById("prep-time");

if (timePrev && input) {
  input.addEventListener('input', () => {
    const timeInput = input.value;

    if (!timeInput) {
      timePrev.textContent = "0 menit";
      timePrev.setAttribute("datetime", "PT0M");
    } else {
      timePrev.textContent = `${timeInput} menit`;
      timePrev.setAttribute("datetime", `PT${timeInput}M`);
    }
  });
}

// Tugas 2
const descRecipe = document.getElementById("desc-new")
const prevDesc = document.getElementById("preview-desc")
descRecipe.addEventListener('input', () => {
    const descValue = descRecipe.value;
    
    if (descValue === "") {
        prevDesc.textContent = "Deskripsi resep Anda akan muncul di sini...";
    } else {
        prevDesc.textContent = descValue;
}
});

const inputDifficult = document.getElementById("difficulty")
const textDifficult = document.getElementById("preview-difficulty")
const textDifficultFooter = document.getElementById("preview-difficulty-footer")

inputDifficult.addEventListener('input', () => {
    let textKesulitan = '';
    const diffValue = inputDifficult.value;
    
    inputDifficult.setAttribute('value', diffValue);

    switch(diffValue) {
        case "1":
            textKesulitan = "Sangat Mudah";
            warnaKesulitan = "green";
            break;
        case "2":
            textKesulitan = "Mudah";
            warnaKesulitan = "lightgreen"
            break;
        case "3":
            textKesulitan = "Sedang";
            warnaKesulitan = "Yellow"
            break;
        case "4":
            textKesulitan = "Sulit";
            warnaKesulitan = "Orange"
            break;
        case "5":
            textKesulitan = "Sangat Sulit";
            warnaKesulitan = "Red"
            break;
    }

    textDifficult.textContent = textKesulitan;
    textDifficult.style.color = warnaKesulitan;

    textDifficultFooter.textContent = textKesulitan;
    textDifficultFooter.style.color = warnaKesulitan;
})