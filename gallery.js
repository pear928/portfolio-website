// gallery.js — click a .gallery-thumb to expand it
document.addEventListener('DOMContentLoaded', function () {

  // Create lightbox elements
  var overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.style.cssText = [
    'display:none',
    'position:fixed',
    'inset:0',
    'z-index:9999',
    'align-items:center',
    'justify-content:center',
    'background:rgba(0,0,0,0.15)',
    'backdrop-filter:blur(4px)',
    '-webkit-backdrop-filter:blur(4px)',
    'cursor:zoom-out'
  ].join(';');

  var img = document.createElement('img');
  img.style.cssText = [
    'max-width:82vw',
    'max-height:85vh',
    'object-fit:contain',
    'border-radius:8px',
    'box-shadow:0 8px 40px rgba(0,0,0,0.35)',
    'cursor:default',
    'position:relative'
  ].join(';');

  var closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = [
    'position:absolute',
    'top:1rem',
    'right:1.2rem',
    'background:rgba(255,255,255,0.9)',
    'border:none',
    'border-radius:50%',
    'width:36px',
    'height:36px',
    'font-size:1rem',
    'cursor:pointer',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'color:#333',
    'box-shadow:0 2px 8px rgba(0,0,0,0.2)',
    'line-height:1'
  ].join(';');

  var counter = document.createElement('div');
  counter.style.cssText = [
    'position:absolute',
    'bottom:1rem',
    'left:50%',
    'transform:translateX(-50%)',
    'background:rgba(255,255,255,0.85)',
    'padding:0.2rem 0.7rem',
    'border-radius:20px',
    'font-size:0.75rem',
    'color:#333'
  ].join(';');

  var prevBtn = document.createElement('button');
  prevBtn.innerHTML = '&#8249;';
  prevBtn.style.cssText = [
    'position:absolute',
    'left:1rem',
    'top:50%',
    'transform:translateY(-50%)',
    'background:rgba(255,255,255,0.9)',
    'border:none',
    'border-radius:50%',
    'width:42px',
    'height:42px',
    'font-size:1.6rem',
    'cursor:pointer',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'color:#333',
    'box-shadow:0 2px 8px rgba(0,0,0,0.2)'
  ].join(';');

  var nextBtn = document.createElement('button');
  nextBtn.innerHTML = '&#8250;';
  nextBtn.style.cssText = prevBtn.style.cssText;
  nextBtn.style.left = 'auto';
  nextBtn.style.right = '1rem';

  overlay.appendChild(closeBtn);
  overlay.appendChild(prevBtn);
  overlay.appendChild(img);
  overlay.appendChild(nextBtn);
  overlay.appendChild(counter);
  document.body.appendChild(overlay);

  var currentGallery = [];
  var currentIndex = 0;

  function open(thumbs, index) {
    currentGallery = thumbs;
    currentIndex = index;
    update();
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    var show = currentGallery.length > 1;
    prevBtn.style.display = show ? 'flex' : 'none';
    nextBtn.style.display = show ? 'flex' : 'none';
  }

  function update() {
    img.src = currentGallery[currentIndex].src;
    img.alt = currentGallery[currentIndex].alt || '';
    counter.textContent = (currentIndex + 1) + ' / ' + currentGallery.length;
    counter.style.display = currentGallery.length > 1 ? 'block' : 'none';
  }

  function close() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', function (e) { e.stopPropagation(); close(); });
  overlay.addEventListener('click', close);
  img.addEventListener('click', function (e) { e.stopPropagation(); });

  prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    update();
  });

  nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentGallery.length;
    update();
  });

  document.addEventListener('keydown', function (e) {
    if (overlay.style.display === 'none') return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length; update(); }
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % currentGallery.length; update(); }
  });

  // Attach to all gallery thumbs
  document.querySelectorAll('.gallery').forEach(function (gallery) {
    var thumbs = Array.from(gallery.querySelectorAll('.gallery-thumb'));
    thumbs.forEach(function (thumb, i) {
      thumb.addEventListener('click', function () { open(thumbs, i); });
    });
  });

});
