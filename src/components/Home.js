import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <section class="hero">
        <div class="hero-text">
          <h5>Fast, safe, convenient payments!</h5>
          <p>Pay. Get paid. You set your own terms. Ready to make a Pledge?</p>
          <Link to="" class="button auth-btn">
            Get Started
          </Link>
        </div>

        <div class="hero-img">
          <img src="./images/pledgePhone.png" alt="" />
        </div>
      </section>
    </div>
  );
};
