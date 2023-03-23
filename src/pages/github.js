import Layouts from "../../components/Layouts"
import Link from "next/link"

export default function Github ({user}) {
    return (
      <Layouts>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="card card-body text-center">
              <h1>{user.name}</h1>
              <img src={user.avatar_url} alt=""/>
              <p>{user.bio}</p>
              <Link legacyBehavior href={user.html_url}>
               <a className="btn btn-outline-secondary">Go to Github</a>
               </Link>
              </div>
            </div>
          </div>
      </Layouts>
    )
  }

  export async function getServerSideProps() {

       const res = await fetch('https://api.github.com/users/watercubz-dev')  
       const data = await res.json()

       console.log(data);

      return {
        props: {
           user: data
        }
      }
  }