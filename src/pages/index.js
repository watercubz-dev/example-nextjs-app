import Link from "next/link";
import Layouts from "../../components/Layouts";
import { Skills, experience } from "../../profile";

export default function Home() {
  return (
    <Layouts>
      {/* Header card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-3">
                <img src="profile.jpeg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Eury Sosa Garcia</h1>
                <h3>A passionate front-end developer</h3>
                <p>
                  Hello, my name is Eury Sosa. I am currently a front-end
                  developer from the Dominican Republic and I am 16 years old. I
                  am a self-taught individual and have learned everything on my
                  own. I hope to successfully enter the web development industry
                  and showcase my skills.
                </p>
                <Link href="/profile" legacyBehavior>
                  <a className="btn btn-outline-light m-2">know More</a>
                </Link>
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
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

