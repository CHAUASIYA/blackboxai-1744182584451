document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('promptInput');
    const generateBtn = document.getElementById('generateBtn');
    const styleSelect = document.getElementById('styleSelect');
    const loading = document.getElementById('loading');
    const resultContainer = document.getElementById('resultContainer');
    const imageResult = document.getElementById('imageResult');
    const placeholder = document.getElementById('placeholder');
    const downloadBtn = document.getElementById('downloadBtn');

    generateBtn.addEventListener('click', generateImage);
    promptInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateImage();
    });

    async function generateImage() {
        const prompt = promptInput.value.trim();
        if (!prompt) {
            alert('Please enter a prompt');
            return;
        }

        // Show loading state
        loading.classList.remove('hidden');
        placeholder.classList.add('hidden');
        resultContainer.classList.add('hidden');

        try {
            // In a real implementation, you would call an AI image API here
            // For now, we'll simulate the API call with a timeout
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Simulate getting an image URL from the API
            // In a real app, you would use the actual API response
            const mockImageUrl = `https://source.unsplash.com/random/800x600/?${encodeURIComponent(prompt)}`;
            
            // Display the result
            imageResult.innerHTML = `<img src="${mockImageUrl}" alt="${prompt}">`;
            resultContainer.classList.remove('hidden');
            
            // Set up download button
            downloadBtn.onclick = () => {
                const link = document.createElement('a');
                link.href = mockImageUrl;
                link.download = `ai-image-${Date.now()}.jpg`;
                link.click();
            };
        } catch (error) {
            console.error('Error generating image:', error);
            alert('Failed to generate image. Please try again.');
        } finally {
            loading.classList.add('hidden');
        }
    }
});
