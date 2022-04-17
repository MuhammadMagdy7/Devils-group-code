// alert('hello world')


let posts = [
    {title: "this is title1", body: "this is body of post1"},
    {title: "this is title2", body: "this is body of post2"},
    {title: "this is title3", body: "this is body of post3"},
]

// console.log(posts)



let createPost = (newpost, callback)=>{
    
    setTimeout(()=>{
        posts.push(newpost);
        callback()
    }, 2000);
}


let getPosts = ()=>{
    let outputs = '';
    let ulz = document.querySelector('.ulz');
    setTimeout(()=>{
        posts.forEach((post)=>{
        
            outputs += `<li>${post.title}${post.body}</li>`
        })
        ulz.innerHTML = outputs;
    }, 1000)
}


createPost({title: "this is  ~> title4", body: "this is body of ~>  post4"}, getPosts)

