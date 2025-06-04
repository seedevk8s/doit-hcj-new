// 페이지 인터랙션을 담당하는 스크립트

// DOM이 준비되면 실행
document.addEventListener('DOMContentLoaded', function () {
  // "자세히 알아보기" 버튼을 클릭하면 membership 섹션으로 스크롤
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const membershipSection = document.getElementById('membership');
  if (learnMoreBtn && membershipSection) {
    learnMoreBtn.addEventListener('click', function (e) {
      e.preventDefault();
      membershipSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 이메일 구독 폼 제출 시 알림 표시
  const emailForms = document.querySelectorAll('form.add-email');
  emailForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== '') {
        alert('구독 신청이 완료되었습니다!');
        emailInput.value = '';
      } else {
        alert('이메일 주소를 입력하세요.');
      }
    });
  });
});
