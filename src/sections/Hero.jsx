const Hero = () => {
  return (
    <section
      id="home"
      className="border border-pink-100 h-dvh relative text-white-50 px-5 md:p-0 "
    >
      <div className="flex-center w-full h-full">
        <div className="container relative w-full h-full">
          <div className="md:mt-40 mt-20">
            <p className="font-medium md:text-2xl text-base">
              👋 Hey, I'm Here
            </p>
            <h1 className="text-5xl font-bold md:text-9xl">Raj</h1>
            <h1 className="text-5xl font-bold md:text-9xl">Kiran</h1>
            <h1 className="text-5xl font-bold md:text-9xl">CREATIVE</h1>
          </div>
          <div className="">
            <div>
              <div>
                <p>Explore</p>
                <img src="images/arrowdown.svg" alt="arrow_down"></img>
              </div>
              <div>
                <img src="images/shape.svg" alt="shape"></img>
                <h1 className="text-5xl font-bold md:text-9xl">DEVELOPER</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
