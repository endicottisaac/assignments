import React from "react";
import BlogPost from "./BlogPost"
import data from "./data"
export default function BlogList() {
    const posts = data.map(item => {
        return (
            <BlogPost
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="blog-post">
        <section>
            {posts}
        </section>
        <a className="older-posts">Older Posts →</a>
        </div>
    )
}