import Review from "./Review";
import Updates from "./Updates/Update";

const RightBar = () => {
  return (
    <>
      <div className="RightSide flex-col justify-evenly pl-4">
        <div className="mt-16 pr-4">
          <h3>Customer Review</h3>
          <Review />
        </div>
      </div>
    </>
  );
};

export default RightBar;
