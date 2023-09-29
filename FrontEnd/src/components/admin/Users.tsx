import UserTable from "./Table/UserTable";

const Users = () => {
  return (
    <div className="flex flex-col pl-6">
      <h1 className="text-3xl font-bold mt-2">Users</h1>
      <div className="table p-16">
        <UserTable />
      </div>
    </div>
  );
};

export default Users;
