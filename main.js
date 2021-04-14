const storiesContainer = document.querySelector(".news-stories-container");
//declare an empty array to fill with story id's

//the following will
fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    // Now process the raw response into an object
    .then((res) => res.json())
    // Now process the above JSON, we will first console log a message
    .then((data) => {
        //console.log('Data is: ');
        //console.log(data);
        return data;
    })
    .then((storyIDs) => {
        for(let i = 0; i < 100; i ++){
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIDs[i]}.json?print=pretty`)
                .then((res) => res.json())
                .then((data) => {
                    /*<div class="card" style="width: 12rem;">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <a>click here</a>
                        
                    </div>*/
                    // creates the div that will hold the whole story card
                    const storyDiv = document.createElement("div");
                    // now add the bootstrap classes necessary to the story div
                    storyDiv.classList.add("card");
                    // now sets the width of the story card
                    storyDiv.style.width = "18rem";
                    // for testing, append the storyDIV to the container
                    storiesContainer.appendChild(storyDiv);
                    
                    
                    // now create img within storyDiv
                    const storyIMG = document.createElement("img");
                    // now add the img src to the storyIMG
                    //for now we are using a placeholder
                    //TODO: add code that will upload photo to story using 1.png-100png
                    storyIMG.src = "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80";
                    // add the card-img-top class to the img
                    storyIMG.classList.add("card-img-top");
                    //now append the img to the storyDiv
                    storyDiv.appendChild(storyIMG);

                    //now create the div that will hold the cardbody
                    const cardBody = document.createElement("div");
                    // add the card-body class to the cardBody
                    cardBody.classList.add("card-body");
                    //now append the cardBody to the storyDiv
                    storyDiv.appendChild(cardBody);

                    //now creat paragraph that will be the story title
                    const storyTitle = document.createElement("p");
                    // add card-text class to title
                    storyTitle.classList.add("card-text");
                    // make the storyTitle inner text the data title information
                    storyTitle.innerText = data.title;
                    //for testing. append the storyTitle to the cardBody
                    cardBody.appendChild(storyTitle);
                    
                    //now creat attribute that will be the story title
                    const storyLink = document.createElement("a");
                    // add card-text class to title
                    storyLink.classList.add("link-to-story");
                    // make the storyLink inner text the data title information
                    storyLink.href = data.url;
                    storyLink.target = "_blank";
                    storyLink.innerText = "Read Here";
                    storyLink.style.textDecoration= "none";
                    storyLink.style.color= "white";
                    //for testing. append the storyLink to the cardBody
                    storyDiv.appendChild(storyLink);
            
                })
        } 
    })

    /*
                    
                    const storyDate = document.createElement("p");
                    

                    const unixTimestamp = data.time;

                    const milliseconds = data.time * 1000 // 1575909015000

                    const dateObject = new Date(milliseconds)

                    const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
                    storyDate.innerText = humanDateFormat;

                    newLink.target = "_blank";
                    newLink.href = data.url;
                    newLink.innerText = data.title;
                    newLink.appendChild(storyDate);*/