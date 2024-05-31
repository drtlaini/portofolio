document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        {
            name: 'Nasi Goreng',
            image: 'https://asset.kompas.com/crops/MrdYDsxogO0J3wGkWCaGLn2RHVc=/84x60:882x592/750x500/data/photo/2021/11/17/61949959e07d3.jpg', // URL gambar untuk Nasi Goreng
            description: 'Nasi goreng dengan bumbu khas Indonesia.'
        },
        {
            name: 'Sate Ayam',
            image: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/14053934/Mudah-Dibuat-di-Rumah-Ini-Resep-Sate-Ayam-Bumbu-Kacang-yang-Lezat-.jpg', // URL gambar untuk Sate Ayam
            description: 'Sate ayam dengan saus kacang yang lezat.'
        },
        {
            name: 'Gado-gado',
            image: 'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/08/29/1093597743.jpg', // URL gambar untuk Gado-gado
            description: 'Salad sayuran dengan bumbu kacang.'
        },
        {
            name: 'Bakso',
            image: 'https://img-global.cpcdn.com/recipes/62bc0149e02866d8/1200x630cq70/photo.jpg', // URL gambar untuk Gado-gado
            description: 'Bakso sapi dengan kuah kaldu yang khas.'
        },
        {
            name: 'Es Teh',
            image: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/15093247/Ketahui-Fakta-Es-Teh-Manis.jpg.webp', // URL gambar untuk Es Teh
            description: 'Minuman teh manis dengan es batu.'
        },
        {
            name: 'Es Campur',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEXbK5cum9eSIkP4z89I3aULL0T1kDb6TXA&s', // URL gambar untuk Es Campur
            description: 'Campuran es serut dengan aneka buah dan cincau.'
        },
        {
            name: 'Es Jeruk Peras',
            image: 'https://api.mahaputra.id/storage/upload/images/products/img_6349526c6acf71665749612.png', // URL gambar untuk Gado-gado
            description: 'Sari buah jeruk peras yang segar.'
        },
        {
            name: 'Es Cendol',
            image: 'https://www.sasa.co.id/medias/page_medias/es_cendol_nangka.jpg', // URL gambar untuk Gado-gado
            description: 'minuman yang terbuat dari tepung beras dicampur dengan air gula dan santan.'
        },
        // Tambahkan lebih banyak item menu sesuai kebutuhan
    ];

    const menuList = document.getElementById('menu-list');
    const searchInput = document.getElementById('search-input');

    function displayMenu(menuItems) {
        menuList.innerHTML = '';
        menuItems.forEach(menuItem => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.className = 'menu-item';
            menuItemDiv.innerHTML = `
                <img src="${menuItem.image}" alt="${menuItem.name}">
                <h3>${menuItem.name}</h3>
                <p>${menuItem.description}</p>
            `;
            menuList.appendChild(menuItemDiv);
        });
    }

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMenu = menuItems.filter(menuItem => 
            menuItem.name.toLowerCase().includes(searchTerm)
        );
        displayMenu(filteredMenu);
    });

    displayMenu(menuItems);
});
