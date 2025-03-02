//preventing the website from automatically refreshing
document.getElementById('meme-form').addEventListener('submit', function(e) {
    e.preventDefault();


//creating variables for all 3 inputs
const imgUrl = document.getElementById('image-url').value;
const topText = document.getElementById('top-text').value;
const bottomText = document.getElementById('bottom-text').value;


//Creating the meme div container
const memeDiv = document.createElement('div');
memeDiv.id = 'meme-container';

//Creating the top text, adding topText Div to meme div container
const topTextDiv = document.createElement('div');
topTextDiv.id = 't-text';
    topTextDiv.innerText = topText;
    topTextDiv.classList.add("meme-text-top");
memeDiv.appendChild(topTextDiv);

//Creating the bottom text, adding the bottomText div to memeDiv  
const bottomTextDiv = document.createElement('div');
bottomTextDiv.id = 'b-text';
    bottomTextDiv.innerText = bottomText;
    bottomTextDiv.classList.add("meme-text-bottom");
memeDiv.appendChild(bottomTextDiv);

//Creating the image element, adding the image div to the meme div      
const memeImage = document.createElement('img');
memeImage.id = 'meme-image';
    memeImage.src = imgUrl;
    memeImage.width = 500;
memeDiv.appendChild(memeImage);

//Creating my delete button
const deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Delete';
deleteBtn.id = 'delete-btn';
memeDiv.appendChild(deleteBtn);

deleteBtn.addEventListener('click', function() {
    memeDiv.remove();
});


//Adding the meme to the container
document.getElementById('meme-results').appendChild(memeDiv);

//clear the form fields 
document.getElementById('meme-form').reset();


});

