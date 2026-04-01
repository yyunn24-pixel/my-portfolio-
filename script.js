document.addEventListener('DOMContentLoaded', () => {
  // スムーズスクロール
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    });
  });

  // フェードイン演出
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section, .work-item, .skill-item').forEach(el => {
    el.classList.add('fade-in-base');
    observer.observe(el);
  });
});

const backToTop = document.getElementById('js-back-to-top');

// 最初は非表示にしておく（CSSで opacity: 0; にしておくのがおすすめ）
backToTop.style.opacity = '0';
backToTop.style.visibility = 'hidden';

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // 300px以上スクロールしたら表示
    backToTop.style.opacity = '1';
    backToTop.style.visibility = 'visible';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.visibility = 'hidden';
  }
});


// ページが表示されたら（戻ってきた時も含む）動画を再生させる
window.addEventListener('pageshow', function() {
  const video = document.querySelector('video');
  if (video) {
      video.play().catch(error => {
          console.log("オートプレイがブロックされました。ユーザー操作が必要です。");
      });
  }
});



<script>
    // スクロール量に合わせてボタンを表示
    window.onscroll = function() {
        const btn = document.getElementById("back-to-top");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    // スムーズに上に戻る
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
</script>


document.addEventListener('DOMContentLoaded', () => {
  const gifTriggers = document.querySelectorAll('.gif-trigger');

  gifTriggers.forEach(img => {
    // 静止画のパスを保存
    const staticSrc = img.src;
    // GIFのパスを取得
    const gifSrc = img.getAttribute('data-gif');

    // 画像をクリックした時の処理
    img.addEventListener('click', function() {
      if (this.src.includes('.gif')) {
        this.src = staticSrc; // GIFなら静止画に戻す
      } else {
        this.src = gifSrc;    // 静止画ならGIFに変える
      }
    });

    // パソコン用のホバー処理（お好みで残す）
    img.addEventListener('mouseenter', function() {
      this.src = gifSrc;
    });
    img.addEventListener('mouseleave', function() {
      this.src = staticSrc;
    });
  });
});