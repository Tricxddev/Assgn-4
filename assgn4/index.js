// Function to fetch data from the JSON Placeholder API
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) 
        .then(data => {
            const postContainer = document.getElementById('postContainer');

            postContainer.innerHTML = '';

            let postsHTML = '';

            data.forEach(post => {
                postsHTML += `
                    <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                        
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
            });

            postContainer.innerHTML = postsHTML;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

const fetchButton = document.getElementById('fetchButton');
fetchButton.onclick = fetchData;
