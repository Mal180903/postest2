form()
function form(){
    const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const alamat = JSON.parse(sessionStorage.getItem("alamat")) || [];
    const gender = JSON.parse(sessionStorage.getItem("gender")) || [];
    const indexAcc = localStorage.getItem("indexAcc");
    
    const inputNama = document.getElementById('bio_nama');
    const inputEmail = document.getElementById('bio_email');
    const inputAlamat = document.getElementById('bio_alamat');
    const inputGender = document.getElementById('bio_gender');

    inputNama.innerHTML   ="Name    : " + nama[indexAcc];
    inputEmail.innerHTML  ="Email   : " + email[indexAcc];
    inputAlamat.innerHTML ="Address : " + alamat[indexAcc];
    inputGender.innerHTML ="Gender  : " + gender[indexAcc];
}