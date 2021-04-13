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
        for(let i = 0; i < 5; i ++){
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIDs[i]}.json?print=pretty`)
                .then((res) => res.json())
                .then((data) => {
                    /*<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>*/
                    // creates the div that will hold the information
                    const storyDiv = document.createElement("div");
                    //now add the bootstrap classes necessary to the story div
                    storyDiv.classList.add("card");
                    //now sets the width of the story card
                    storyDiv.style.width = "18rem";
                    //now create img within storyDiv
                    const storyIMG = document.createElement("img");
                    storyIMG.src = "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80";
                    storyIMG.classList.add("card-img-top")
                    //now append the img to the storyDiv
                    storyDiv.appendChild(storyIMG);

                    //now create the div that will hold the cardbody
                    const cardBody = document.createElement("div");
                    // add the card-img-top class to the cardBody
                    cardBody.classList.add("card-body");

                    //for testing, append the storyDIV to the container
                    storiesContainer.appendChild(storyDiv)
                    //for testing, append the cardBody to the container
                    storyDiv.appendChild(cardBody);


                    /*const newLink = document.createElement("a");
                    const storyDate = document.createElement("p");
                    

                    const unixTimestamp = data.time;

                    const milliseconds = data.time * 1000 // 1575909015000

                    const dateObject = new Date(milliseconds)

                    const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
                    storyDate.innerText = humanDateFormat;

                    newLink.target = "_blank";
                    newLink.href = data.url;
                    newLink.innerText = data.title;
                    newLink.appendChild(storyDate);
                    storiesContainer.appendChild(newLink);*/
                })
        }
       
    })