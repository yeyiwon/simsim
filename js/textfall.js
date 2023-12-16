document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".texttt span, .texttt2 span").forEach((element, index) => {
        // 각 글자에 애니메이션 지연 시간 설정
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add("drop");
    });
});
