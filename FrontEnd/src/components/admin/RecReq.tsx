import RequestTable from "./Table/RequestTable";

const RecReq = () => {
  return (
    <div className="flex flex-col pl-6">
      <h1 className="text-3xl font-bold mt-2">Recent Requests</h1>
      <div className="table p-16">
        <RequestTable />
      </div>
    </div>
  );
};

export default RecReq;
