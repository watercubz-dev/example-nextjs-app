import Link from "next/link";
import Layouts from "../../components/Layouts";
import { Skills, experience, proyect } from "../../profile";

export default function Home() {
  return (
    <Layouts>
      {/* Header card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="ryan-ray-profile2.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>name</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  hic quibusdam mollitia repellat iste, porro placeat a
                  perferendis deleniti consequatur. Sapiente quia architecto eum
                  quis officiis mollitia natus maxime impedit.
                </p>
                <a href="/hireme">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second section */}
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>skills</h1>

              {Skills.map(({ skills, pecentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skills}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${pecentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>experience</h1>

              <ul>
                {experience.map(({ title, to, description, from }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <Link legacyBehavior href="/hireme">
                <a className="btn btn-outline-dark">know more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {
                proyect.map(({ name, img, description }, i) => (
                  <div className="col-md-4" key={i}>
                  <div className="card h-100">
                      <div className="overflow">
                      <img src={`/${img}`} className="card-img-top" />
                      </div>
                    <div className="card-body bg-light">
                      <h3>{name}</h3>
                      <p>{description}</p>
                    <a href="#!" className="btn btn-outline-dark">know more</a>
                   </div>
                  </div>
                </div>
                ))
              }
            </div>
            <div className="text-center mt-4">
               <Link legacyBehavior href='/hireme'>
                   <a className="btn btn-outline-light">More projects</a>
               </Link>
             </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
