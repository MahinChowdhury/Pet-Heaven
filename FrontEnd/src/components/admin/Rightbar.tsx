import Review from "./Review";
import Updates from "./Updates/Update";

const RightBar = () => {
  return (
    <>
      <div className="RightSide flex-col justify-evenly pl-4">
        <div className="mb-20 mt-20">
          <h3 className="text-xl font-bold mb-8">Updates</h3>
          <Updates />
        </div>
        <div className="mt-16 pr-4">
          <h3>Customer Review</h3>
          <Review />
        </div>
      </div>
    </>
  );
};

export default RightBar;
