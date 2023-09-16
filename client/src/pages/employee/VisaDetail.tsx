import Sidebar from "../../components/sections/Sidebar";
import Topbar from "../../components/sections/Topbar";
import DashboardHeader from "../../components/sections/DashboardHeader";
import {theme} from "../../utils/theme";
import {PrintableForm} from "../../components/pdfs/PrintableForm";
import {UpdateStatus} from "../../services/api";
import {useParams} from "react-router-dom";
import {useState} from "react";

export const VisaDetail = () => {
    const {id} = useParams();
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelection = async (e: any) => {
        const newValue = e.target.value;
        try {
            setSelectedValue(newValue);
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

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
                              value={selectedValue} onChange={handleSelection}
                        >
                            <option value="in-progress">in progress</option>
                            <option value="submitted">Submitted</option>
                            <option value="done">Done</option>
                            <option value="payment">Payment</option>
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