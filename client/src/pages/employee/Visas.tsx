import Sidebar from "../../components/sections/Sidebar";
import Topbar from "../../components/sections/Topbar";
import DashboardHeader from "../../components/sections/DashboardHeader";
import Table from '../../components/sections/Tables';

export const Visas = () => {
    return(
        <div className='dashboard_container'>
            <Sidebar />
            <main className='content'>
                <Topbar />
                <DashboardHeader title="VISA APPLICATIONS" subtitle="List of applicants" />
                <Table />
            </main>
        </div>
    )
}