import { ReactComponent as IconStar } from "./images/icon-star.svg";

function App() {
  return (
    <div className="App bg-dark-blue flex-col box-border container m-auto md:max-w-md max-w-xs p-6 md:p-8 rounded-2xl">
      <div className="bg-medium-grey w-12 h-12 rounded-full flex justify-center items-center">
        <IconStar />
      </div>
      <div>
        <div className="flex-col text-left">
          <h1 className="font-bold text-2xl py-4">How did we do?</h1>
          <p className="text-medium-grey pb-4">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="flex justify-between py-4">
          <button className="bg-medium-grey w-12 h-12 rounded-3xl flex justify-center items-center">
            1
          </button>
          <button className="bg-medium-grey w-12 h-12 rounded-3xl flex justify-center items-center">
            2
          </button>
          <button className="bg-medium-grey w-12 h-12 rounded-3xl flex justify-center items-center">
            3
          </button>
          <button className="bg-medium-grey w-12 h-12 rounded-3xl flex justify-center items-center">
            4
          </button>
          <button className="bg-medium-grey w-12 h-12 rounded-3xl flex justify-center items-center">
            5
          </button>
        </div>
        <button className="bg-sp-orange font-bold w-full py-2 rounded-[4rem] tracking-widest uppercase flex justify-center items-center my-4">
          Submit
        </button>
      </div>
      <br />
      You selected 1 out of 5 Thank you! We appreciate you taking the time to
      give a rating. If you ever need more support, don’t hesitate to get in
      touch!
      <footer className="text-xs text-center">
        Challenge by{" "}
        <span
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-royal-blue text-xs">
          Frontend Mentor
        </span>
        . Coded by{" "}
        <span href="#" className="text-royal-blue text-xs">
          Your Name Here
        </span>
        .
      </footer>
    </div>
  );
}

export default App;
