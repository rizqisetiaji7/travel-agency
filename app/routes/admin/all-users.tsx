import { Header } from "components";
import { usePageTitle } from "~/lib/utils";

const AllUsers = () => {
    usePageTitle("All Users - Travel Agency");
    return (
        <main className="dashboard wrapper">
            <Header
                title={`Trips Page`}
                description="Check out our current users in real time"
            />
            All Users Page Contents
        </main>
    );
};

export default AllUsers;
