import UserForms from "./UserForms.jsx";
import UserTable from "./UserTable.jsx";

const Users = () => {
    return (
      
<div className="border flex flex-col w-full items-center justify-center ">
    <UserForms/>
    <UserTable/>
</div>
    );
};

export default Users;