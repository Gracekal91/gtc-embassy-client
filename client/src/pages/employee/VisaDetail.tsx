import Sidebar from "../../components/sections/Sidebar";
import Topbar from "../../components/sections/Topbar";
import DashboardHeader from "../../components/sections/DashboardHeader";
import {theme} from "../../utils/theme";
import {PrintableForm} from "../../components/pdfs/PrintableForm";

export const VisaDetail = () => {
    return (
        <>
            <div className='dashboard_container'>
                <Sidebar/>
                <main className='content'>
                    <Topbar/>
                    <DashboardHeader title="VISA APPLICATIONS" subtitle="Visa detail"/>
                    <div>
                        <select name="" id=""
                                style={{
                                    marginLeft: '17px',
                                    width: '180px',
                                    padding: '.3rem',
                                    background: theme.blue['secondary'],
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '.3rem',
                                    outline: 'none'
                                }}
                        >
                            <option value="">in progress</option>
                            <option value="">received</option>
                            <option value="">Done</option>
                            <option value="">Rejected</option>
                        </select>
                    </div>
                    <h3  style={{
                        marginLeft: '17px',
                        color: '#fff',
                    }}>STATE</h3>

                    <PrintableForm />
                </main>
            </div>
        </>
    )
}