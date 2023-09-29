import BasicTable from "./Table/Table";

const Adoptions = () => {
  return (
    <div className="flex flex-col pl-6">
      <h1 className="text-3xl font-bold mt-2">Adoptions</h1>
      <div className="table p-16">
        <BasicTable />
      </div>
    </div>
  );
};

export default Adoptions;
