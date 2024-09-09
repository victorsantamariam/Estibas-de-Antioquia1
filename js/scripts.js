function showBanner(imageSrc, description) {
    var banner = document.getElementById('banner');
    var bannerImg = document.getElementById('banner-img');
    var bannerDesc = document.getElementById('banner-desc');

    bannerImg.src = imageSrc;
    bannerDesc.innerText = description;

    banner.style.display = 'block';
}

function closeBanner() {
    var banner = document.getElementById('banner');
    banner.style.display = 'none';
}