import { useContext } from "react";
import { useParams,Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const PostPage=() => {
  const{posts,handleDelete}=useContext(DataContext)
  const{id} = useParams();
  const post =posts.find(post => (post.id).toString()===id);

  return(
    <main classname="PostPage">
       <article classname ="Post">
            {post && 
              <main>
                 <h2>{post.title}</h2>
                 <p className ="postDate">{post.datetime}</p>
                 <p className ="postBody">{post.body}</p>
                 <Link to = {`/edit/${post.id}`}>
                 <button 
                 className="editbutton">Edit Post
                 </button>
                 </Link>
                 <button 
                 className="deletebutton" onClick ={()=>
                handleDelete(post.id)}>
                   Delete Post
                </button>
              </main>
            }
            {!post &&
              <main>
                  <h2>post not found</h2>
                  <p>well,that's disappointing</p>

                  <p>
                     <Link to ='/'>visit our homepage</Link>
                  </p>
              
              </main>

            }
       </article>
    
    </main>
  )
}

export default PostPage