import Layouts from "../../components/Layouts"
import { posts } from "../../profile"
import Link from "next/link"

export default function Blog () {
    return (
      <Layouts>
        <h1 className="text-center py-3">My Blog</h1>
       <div className="row">
         {
           posts.map(posts => (
              <div className="col-md-4">
                <div className="card">
                  <div className="overflow">
                     <img src={posts.image_url} className="card-img-top" />
                  </div>
                  <div className="card-body">
                     <h3>{posts.title}</h3>
                     <p>{posts.content}</p>
                     <Link legacyBehavior href={`posts?title=${posts.title}`}>
                        <a className="btn btn-outline-dark">know More</a>
                     </Link>
                  </div>
                </div>
              </div>
           ))
         }
       </div>
      </Layouts>
    )
  }