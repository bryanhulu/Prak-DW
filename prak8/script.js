document.getElementById("btnKirim").addEventListener("click", function () {

    // Tampilkan preview
    document.getElementById("previewSection").style.display = "block";

    // Ambil nilai input
    let nama = document.getElementById("inputNama").value;
    let jk = document.getElementById("inputJK").value;
    let pengalaman = document.getElementById("inputPengalaman").value;
    let alasan = document.getElementById("inputAlasan").value;
    let email = document.getElementById("inputEmail").value;

    // Checkbox Kamboja
    let kamboja = "";
    if (document.getElementById("kamboja1").checked) kamboja += "Ya ";
    if (document.getElementById("kamboja2").checked) kamboja += "| Harus Ya";

    // Masukkan ke preview
    document.getElementById("prevNama").textContent = nama;
    document.getElementById("prevJK").textContent = jk;
    document.getElementById("prevPengalaman").textContent = pengalaman;
    document.getElementById("prevAlasan").textContent = alasan;
    document.getElementById("prevEmail").textContent = email;
    document.getElementById("prevKamboja").textContent = kamboja;

    // PREVIEW FOTO
    let file = document.getElementById("inputFoto").files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let img = document.getElementById("imgPreview");
            img.src = e.target.result;
            img.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});
