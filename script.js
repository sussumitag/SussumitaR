<script>
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(el => observer.observe(el));
</script>

<script>
const refImg = document.querySelector('.reference-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

refImg.onclick = function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
}

modal.onclick = function() {
    modal.style.display = "none";
}
</script>