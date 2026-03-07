(function () {
  var images = [
    'attachments/20260124_154720.jpg',
    'attachments/20251104_120211.jpg',
    'attachments/20250826_190505.jpg',
    'attachments/20250710_130349.jpg',
    'attachments/20250325_132750.jpg',
    'attachments/20250320_174942.jpg',
    'attachments/20250317_173545.jpg',
    'attachments/20250314_141850.jpg',
    'attachments/20250212_203625.jpg',
    'attachments/20250212_104649.jpg',
    'attachments/20250210_200958.jpg',
    'attachments/20250131_142923.jpg',
    'attachments/20250131_003057.jpg',
    'attachments/20250115_132931.jpg',
    'attachments/20250115_114959.jpg',
    'attachments/20241208_213635.jpg',
    'attachments/20241123_001759.jpg',
    'attachments/20241121_110652.jpg',
    'attachments/20241017_221312.jpg',
    'attachments/20241015_145549.jpg',
    'attachments/20240929_124556.jpg',
    'attachments/20240915_211221.jpg',
    'attachments/20240806_131700.jpg',
    'attachments/20240613_141111.jpg',
    'attachments/20240612_132205.jpg',
    'attachments/20240421_171157.jpg',
    'attachments/20240411_151348.jpg',
    'attachments/20240411_151257.jpg',
    'attachments/20240405_011105.jpg',
    'attachments/20240404_173827.jpg',
    'attachments/20240404_115151.jpg',
    'attachments/-706unb.jpg'
  ];

  if (window.matchMedia('(max-width: 900px)').matches) return;

  var aside = document.createElement('aside');
  aside.className = 'filmstrip';

  var track = document.createElement('div');
  track.className = 'filmstrip-track';

  var html = '';
  for (var i = 0; i < images.length; i++) {
    html += '<img src="' + images[i] + '" alt="" loading="lazy">';
  }
  track.innerHTML = html + html;

  aside.appendChild(track);
  document.body.appendChild(aside);
})();
