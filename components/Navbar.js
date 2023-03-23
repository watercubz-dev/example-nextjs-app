import Link from "next/link"


export default function Navbar () {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
       <Link href="/" legacyBehavior>
       <a className="navbar-brand">example-portfolio</a>
       </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse ml-auto" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link href="/github" legacyBehavior>
          <a className="nav-link">Github</a>
        </Link>
      </li>
      <li className="nav-item">
         <Link href="/blog" legacyBehavior>
           <a className="nav-link">Blog</a>
         </Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
  } 