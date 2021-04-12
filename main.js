const testing = document.querySelector(".testing-js");
//declare an empty array to fill with story id's

//the following will
fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    // Now process the raw response into an object
    .then((res) => res.json())
    // Now process the above JSON, we will first console log a message
    .then((data) => {
        console.log('Data is: ');
        console.log(data);
        return data;
    })
    .then((storyIDs) => {
        for(let i = 0; i < 100; i ++){
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIDs[i]}.json?print=pretty`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("New data is: ");
                    console.log("story title is: " + data.title);
                    console.log("story url is: " + data.url);
                    const newLink = document.createElement("a");
                    newLink.target = "_blank";
                    newLink.href = data.url;
                    newLink.innerText = data.title;
                    testing.appendChild(newLink);
                })
        }
       
    })