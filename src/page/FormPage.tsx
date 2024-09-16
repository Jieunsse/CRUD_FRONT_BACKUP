import { useState } from 'react';

export const FormPage = () => {

    const [newPost, setNewPost] = useState({title : '', content : ''});
    const [posts, setPosts] = useState([]);

    return (
        <>
            <div className="black-nav">
                <h1>게시판</h1>
            </div>

            {/*<div>*/}
            {/*    <h2>게시글 목록</h2>*/}
            {/*    <ul>*/}
            {/*        {*/}
            {/*            posts.map((post) => {*/}
            {/*                return <li className="list" key={post.id}>*/}
            {/*                    <h3>{post.title}</h3>*/}
            {/*                    <p>{post.content}</p>*/}
            {/*                </li>*/}
            {/*            })*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*</div>*/}

            <div>
                <h2>게시글 작성</h2>
                <input type="text"
                       placeholder="제목"
                       onChange= {(e) => {
                           setNewPost({...newPost, title : e.target.value})
                       }}
                /><p></p>
                <textarea placeholder="내용"
                          onChange={(e) => {
                              setNewPost({...newPost, content : e.target.value})
                          }}
                /><p></p>

                <button onClick={() => {
                    const updatePosts = [...posts, {...newPost, id: Date.now()}];
                    setPosts(updatePosts);
                    setNewPost({title : '', content : ''});
                }}>게시</button>
            </div>
        </>
    );
}


