import { useState } from "react";
import { ReactComponent as IconStar } from "./images/icon-star.svg";
import { ReactComponent as ImgThankYou } from "./images/illustration-thank-you.svg";

function App() {
  const [submitState, setSubmitState] = useState(false);
  const [rateState, setRateState] = useState(0);

  function setToRate(event) {
    setRateState(event.target.value);
  }

  function submitToRate() {
    if (rateState !== 0) {
      setSubmitState(!submitState);
    }
  }

  return (
    <>
      <div className="bg-sp-charcoal flex-col box-border container m-auto md:w-96 w-88 h-96 p-6 md:p-8 rounded-2xl my-44">
        {submitState === false ? (
          <div>
            <div className="bg-dark-blue w-12 h-12 rounded-full flex justify-center items-center">
              <IconStar />
            </div>
            <div>
              <div className="flex-col text-left">
                <h1 className="font-bold text-2xl py-4">How did we do?</h1>
                <p className="text-medium-grey pb-4 md:text-sm text-sm2">
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
                </p>
              </div>
              <div className="flex justify-between py-4">
                <button
                  className={
                    rateState === "1" ? "active-button" : "rate-button"
                  }
                  value={1}
                  onClick={setToRate}>
                  1
                </button>
                <button
                  className={
                    rateState === "2" ? "active-button" : "rate-button"
                  }
                  value={2}
                  onClick={setToRate}>
                  2
                </button>
                <button
                  className={
                    rateState === "3" ? "active-button" : "rate-button"
                  }
                  value={3}
                  onClick={setToRate}>
                  3
                </button>
                <button
                  className={
                    rateState === "4" ? "active-button" : "rate-button"
                  }
                  value={4}
                  onClick={setToRate}>
                  4
                </button>
                <button
                  className={
                    rateState === "5" ? "active-button" : "rate-button"
                  }
                  value={5}
                  onClick={setToRate}>
                  5
                </button>
              </div>
              <button
                className="bg-sp-orange font-bold w-full py-3 rounded-[4rem] tracking-widest2 uppercase flex justify-center items-center my-4 md:mt-4 md:mb-0 text-sm hover:text-sp-orange hover:bg-white"
                onClick={submitToRate}>
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center mt-4 mb-8">
              <ImgThankYou />
            </div>
            <div className="bg-dark-blue text-sp-orange flex justify-center items-center rounded-[4rem] py-2 md:text-sm text-sm2 text-center">
              You selected {rateState} out of 5
            </div>
            <h1 className="font-bold text-2xl py-4 text-center">Thank you!</h1>
            <p className="text-medium-grey pb-4 md:text-sm text-sm2 text-center">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}
      </div>
      <footer className="text-xs text-center my-8">
        Challenge by{" "}
        <span
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-royal-blue text-xs">
          Frontend Mentor
        </span>
        . Coded by{" "}
        <span
          href="https://github.com/DrunkenNeoguri"
          className="text-royal-blue text-xs">
          develop_neoguri
        </span>
        .
      </footer>
    </>
  );
}

export default App;
