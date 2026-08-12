document.addEventListener('DOMContentLoaded', () => {
    const connectBtn = document.getElementById('connectBtn');
    const statusMsg = document.getElementById('statusMsg');

    connectBtn.addEventListener('click', async () => {
        // Initial state
        connectBtn.disabled = true;
        connectBtn.textContent = 'Connecting...';
        statusMsg.classList.remove('visible');

        try {
            const response = await fetch('/flag', {
                method: 'POST'
            });

            if (response.ok) {
                // Success state
                connectBtn.textContent = 'Connection Established';
                statusMsg.textContent = 'Transmission complete.';
                statusMsg.classList.add('visible');
            } else {
                throw new Error('Connection failed');
            }
        } catch (error) {
            // Error state
            connectBtn.disabled = false;
            connectBtn.textContent = 'Establish Connection';
            statusMsg.textContent = 'Connection failed. Retry?';
            statusMsg.classList.add('visible');
            console.error('Signal interrupted:', error);
        }
    });
});