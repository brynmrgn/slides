/*
 * variants.js — apply theme-driven backgrounds to .dark and .feature slides.
 *
 * Reveal.js builds its slide backgrounds in a separate DOM layer during init.
 * Setting data-background-color after init doesn't work (Reveal won't re-read it).
 * Instead, we find each slide's matching .slide-background element and set the
 * background colour directly on it.
 *
 * Usage in markdown:
 *   <!-- .slide: class="dark" -->       ← uses --variant-dark-bg from theme
 *   <!-- .slide: class="feature" -->    ← uses --variant-feature-bg from theme
 *
 * If a slide already has data-background-color or data-background-image,
 * we leave it alone (explicit values take priority).
 */

document.addEventListener('DOMContentLoaded', function () {
  Reveal.on('ready', function () {
    var styles = getComputedStyle(document.documentElement);
    var darkBg = styles.getPropertyValue('--variant-dark-bg').trim();
    var featureBg = styles.getPropertyValue('--variant-feature-bg').trim();

    // Reveal's sections and backgrounds are in matching order
    var sections = document.querySelectorAll('.reveal .slides section');
    var backgrounds = document.querySelectorAll('.reveal .backgrounds .slide-background');

    sections.forEach(function (section, i) {
      // Skip if there's already an explicit background set
      if (section.getAttribute('data-background-color') ||
          section.getAttribute('data-background-image')) {
        return;
      }

      var bg = backgrounds[i];
      if (!bg) return;

      if (section.classList.contains('dark') && darkBg) {
        bg.style.backgroundColor = darkBg;
      } else if (section.classList.contains('feature') && featureBg) {
        bg.style.backgroundColor = featureBg;
      }
    });
  });
});
