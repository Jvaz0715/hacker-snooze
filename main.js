const testing = document.querySelector(".testing-js");
//the following will
fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    // Now process the raw response into an object
    .then((res) => res.json())
    // Now process the above JSON, we will first console log a message
    //but we want to use this space to change the img src
    .then((data) => {
        console.log('success!');
        console.log(data);
        console.log("array length is: " + data.length)
        console.log(data[0]);
    }
    /*.then(data) =>{

    }*/)