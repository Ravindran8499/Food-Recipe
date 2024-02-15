const NothingToShow = ({ text }) => {
  return (
    <div className="container mx-auto col-span-4">
      <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
        {text}
      </p>
    </div>
  );
};

export default NothingToShow;
