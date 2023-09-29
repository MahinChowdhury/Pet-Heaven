import PetTable from "./Table/PetTable";

const AddPets = () => {
  return (
    <div className="flex flex-col pl-6">
      <h1 className="text-3xl font-bold mt-2">All Pets</h1>
      <div className="table p-16">
        <PetTable />
      </div>
    </div>
  );
};

export default AddPets;
