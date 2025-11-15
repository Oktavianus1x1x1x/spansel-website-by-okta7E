let pengumuman = JSON.parse(localStorage.getItem('pengumuman')) || [];
let jadwal = JSON.parse(localStorage.getItem('jadwal')) || [];

function updateDashboard() {
  document.getElementById('countPengumuman').innerText = pengumuman.length;
  document.getElementById('countJadwal').innerText = jadwal.length;
}

function tampilkanData(listId, data, tipe) {
  const container = document.getElementById(listId);
  container.innerHTML = '';
  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = `card ${tipe}`;
    div.innerHTML = `${item} <button onclick="hapusItem('${tipe}',${index})">Hapus</button>`;
    container.appendChild(div);
    setTimeout(() => div.classList.add('show'), 10);
  });
  updateDashboard();
}

// Tambah Pengumuman dengan password
function tambahPengumuman() {
  const password = prompt("Masukkan password untuk menambah pengumuman:");
  if(password !== "1234"){
    showToast("Password salah! Tidak bisa menambah pengumuman.");
    return;
  }
  const text = document.getElementById('newPengumuman').value.trim();
  if(text) {
    pengumuman.push(text);
    localStorage.setItem('pengumuman', JSON.stringify(pengumuman));
    tampilkanData('pengumumanList', pengumuman, 'pengumuman');
    document.getElementById('newPengumuman').value = '';
    showToast('Pengumuman berhasil ditambahkan!');
  }
}

// Tambah Jadwal dengan password
function tambahJadwal() {
  const password = prompt("Masukkan password untuk menambah jadwal:");
  if(password !== "1321"){
    showToast("Password salah! Tidak bisa menambah jadwal.");
    return;
  }
  const text = document.getElementById('newJadwal').value.trim();
  if(text) {
    jadwal.push(text);
    localStorage.setItem('jadwal', JSON.stringify(jadwal));
    tampilkanData('jadwalList', jadwal, 'jadwal');
    document.getElementById('newJadwal').value = '';
    showToast('Jadwal berhasil ditambahkan!');
  }
}

// Hapus item dengan password
function hapusItem(tipe, index) {
  const password = prompt("Masukkan password untuk menghapus item:");
  if(password !== "1321"){
    showToast("Password salah! Anda tidak bisa menghapus.");
    return;
  }
  if(tipe === 'pengumuman') pengumuman.splice(index,1);
  else if(tipe === 'jadwal') jadwal.splice(index,1);

  localStorage.setItem('pengumuman', JSON.stringify(pengumuman));
  localStorage.setItem('jadwal', JSON.stringify(jadwal));

  tampilkanData('pengumumanList', pengumuman, 'pengumuman');
  tampilkanData('jadwalList', jadwal, 'jadwal');

  showToast('Item berhasil dihapus!');
}

// Tampilkan data awal
tampilkanData('pengumumanList', pengumuman, 'pengumuman');
tampilkanData('jadwalList', jadwal, 'jadwal');
