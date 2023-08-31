import Cards from "../utilities/Cards/Cards";
import BasicTable from "./Table/Table";

const MainDash = () => {
  return (
    <>
      <div className="MainDash flex flex-col justify-center pl-6">
        <h1 className="text-3xl font-bold pb-24">Dashboard</h1>
        <div className="cards">
          <Cards />
        </div>
        <div className="table p-10">
          <BasicTable />
        </div>
      </div>
    </>
  );
};

export default MainDash;
