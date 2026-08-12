document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // REMOVE BEFORE DEPLOY
    // FLAG PART X: ZmFrZWVlZWVlZWVlZWVlZWU=

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    // Tab Switching for Explore page
    const discoveryTab = document.getElementById('discovery-tab');
    const missionTab = document.getElementById('mission-tab');
    const discoveryContent = document.getElementById('discovery-content');
    const missionContent = document.getElementById('mission-content');

    if (discoveryTab && missionTab) {
        const switchTab = (activeTab, inactiveTab, activeContent, inactiveContent) => {
            activeTab.classList.add('border-b-2', 'border-cyan-400', 'text-cyan-400');
            activeTab.classList.remove('text-gray-400');
            inactiveTab.classList.remove('border-b-2', 'border-cyan-400', 'text-cyan-400');
            inactiveTab.classList.add('text-gray-400');

            // FLAG PART ?: _@1l_alOnG}
            
            activeContent.classList.remove('hidden');
            inactiveContent.classList.add('hidden');
        };

        discoveryTab.addEventListener('click', () => switchTab(discoveryTab, missionTab, discoveryContent, missionContent));
        missionTab.addEventListener('click', () => switchTab(missionTab, discoveryTab, missionContent, discoveryContent));
    }
});