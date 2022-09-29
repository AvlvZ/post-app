export default {
    mounted(el, binging) {
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                binging.value();
            }
        }
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el)
    },
    name: "intersection"
}