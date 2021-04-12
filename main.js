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
                    //console.log("New data is: ");
                    //console.log("story title is: " + data.title);
                    //console.log("story url is: " + data.url);
                    const newLink = document.createElement("a");
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
                    storiesContainer.appendChild(newLink);
                })
        }
       
    })