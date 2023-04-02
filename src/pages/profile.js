import Layouts from "../../components/Layouts";
import Link from "next/link";

export default function Profile() {
  return (
    <Layouts>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>about Eury Sosa</h1>
            <p>
              I am a software developer with an interest in web development and
              knowledge in Javascript, Typescript, Nextjs, and React. I am
              currently expanding my knowledge by learning more about the
              languages I already know, and I hope to secure a job in the web
              development world and showcase my skills in this wonderful field.
              If you would like to see some of my projects, whether they are in
              production or in development, I invite you to take a look at my
              portfolio. Thank you very much.
            </p>
            <h3>Click the button to see more...</h3>
            <Link href="https://github.com/watercubz-dev" legacyBehavior>
              <a className="btn btn-outline-dark" target="_blank">
                know More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
