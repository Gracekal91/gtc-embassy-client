import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export const PrintableForm = () => {
    // @ts-ignore

    return(
        <div style={{
            marginLeft: '17px',
            color: '#ccc'
        }}>
            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '20%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '60%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '20%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <thead>
                <tr>
                    <th>
                        <img src="" alt=""/>
                        AMBA RDC / PRETORIA
                    </th>
                    <th>
                        <h1>REPUBLIQUE DEMOCRATIC DU CONGO</h1>
                        <h3>Ministere des Affaires Etrangeres et Des Cooperation Internationale</h3>
                        <h2 className='print_header_2'>FORMULAIRE DE DEMANDE DU VISA</h2>
                        <h2 className='print_header_2'>AMBASSADE DE KA RDC A PRETORIA</h2>
                    </th>
                    <th>Flag</th>
                </tr>
                </thead>
            </table>

            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '15%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '35%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '15%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '35%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <thead>
                <tr>
                    <th colSpan={4}>A. JOINDRE AU PRESENT FORMULAIRE</th>
                </tr>
                <tr>
                    <th style={{ textAlign: 'left' }} colSpan={4}>
                        <span> 1. Passport en cours de validiter plus de 6 Mois [valid passport - traveling document, atleast 6 Month]</span><br />
                        <span> 2. Photo d'identite [Photograph]</span>
                    </th>
                </tr>
                <tr>
                    <th colSpan={4} style={{ textAlign: 'left' }}>B. RENSEIGNEMENTS A COMMUNIQUER</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Nom [Name]</td>
                    <td> JOHN </td>
                    <td>Maiden name</td>
                    <td> JEAN LOUIS</td>
                </tr>
                <tr>
                    <td>Nom [Name]</td>
                    <td colSpan={3}> JOHN </td>
                </tr>
                <tr>
                    <td>place of birth</td>
                    <td> Paris </td>
                    <td>Pays [Country of birth]</td>
                    <td> France</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td colSpan={3}> 30 - Nov - 1996 </td>
                </tr>
                </tbody>
            </table>


            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '15%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '35%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '15%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '35%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <tbody>
                <tr>
                    <td>Sex</td>
                    <td colSpan={3}>
                        <span>Feminin</span>
                        <span className="cage">
                            {/*display based on condition pass children on the one that matches*/}
                            <CheckRoundedIcon className='icon_checked'/>
                        </span>
                        <span>Masculin</span>
                        <span className="cage"></span>
                    </td>
                </tr>
                <tr>
                    <td>Marital status</td>
                    <td colSpan={3}>
                        <span>Single</span>
                        <span className="cage">
                            {/*display based on condition pass children on the one that matches*/}
                            <CheckRoundedIcon className='icon_checked'/>
                        </span>
                        <span>Married</span>
                        <span className="cage"></span>
                        <span>Divorced</span>
                        <span className="cage">
                        </span>
                        <span>Widow</span>
                        <span className="cage"></span>
                        <span>Other</span>
                        <span className="cage"></span>
                    </td>
                </tr>
                <tr>
                    <td>Spouse's name</td>
                    <td colSpan={3}>
                        Jane
                    </td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>

            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '15%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '35%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '15%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '35%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <tbody>
                <tr>
                    <td>Profession</td>
                    <td colSpan={3}>
                        AI Engineer
                    </td>
                </tr>
                <tr>
                    <td>Residence</td>
                    <td colSpan={3}>
                        23 avenue de la fourue, Paris
                    </td>
                </tr>
                <tr>
                    <td>Destination residence</td>
                    <td colSpan={3}>
                        23 avenue de la fourue, Paris
                    </td>
                </tr>
                <tr>
                    <td>Spouse's name</td>
                    <td colSpan={3}>
                        Jane
                    </td>
                </tr>
                <tr>
                    <td>Personal Cellphone</td>
                    <td> JOHN </td>
                    <td>Email Address</td>
                    <td> jean@gmail.com</td>
                </tr>
                <tr>
                    <td>Father's Name</td>
                    <td> Andre </td>
                    <td>Citizenship</td>
                    <td> French</td>
                </tr>
                <tr>
                    <td>Mother's Name</td>
                    <td> Liliane </td>
                    <td>Citizenship</td>
                    <td>French</td>
                </tr>
                <tr>
                    <td>Passport's type</td>
                    <td colSpan={3}>
                        <span>Ordinary</span>
                        <span className="cage">
                            {/*display based on condition pass children on the one that matches*/}
                            <CheckRoundedIcon className='icon_checked'/>
                        </span>
                        <span>Service</span>
                        <span className="cage"></span>
                        <span>Diplomatic</span>
                        <span className="cage">
                        </span>
                        <span>Other</span>
                        <span className="cage"></span>
                    </td>
                </tr>
                <tr>
                    <td>Travel's document number</td>
                    <td colSpan={3}>
                        TPIRY35
                    </td>
                </tr>
                <tr>
                    <td>Valid from</td>
                    <td></td>
                    <td>Valid until</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Issued by</td>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td>Residence permit's number</td>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td>Valid until</td>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td>Purpose of travel</td>
                    <td colSpan={3}>
                        <span>Family visit</span>
                        <span className="cage">
                            {/*display based on condition pass children on the one that matches*/}
                            <CheckRoundedIcon className='icon_checked'/>
                        </span>
                        <span>Service Mission</span>
                        <span className="cage"></span>
                        <span>Official Mission</span>
                        <span className="cage">
                        </span>
                        <span>Tourism</span>
                        <span className="cage"></span>
                        <span>Business</span>
                        <span className="cage"></span>
                        <span>Studies</span>
                        <span className="cage"></span>
                        <span>Journalist</span>
                        <span className="cage"></span> <br />
                        <span>Scientific /Cultural/ Sport</span>
                        <span className="cage"></span>
                        <span>NGO Member</span>
                        <span className="cage"></span>
                        <span>Religious Conference Member</span>
                        <span className="cage"></span>
                    </td>
                </tr>
                <tr>
                    <td>Ticket's Number</td>
                    <td colSpan={3}>RY76RIS8</td>
                </tr>
                <tr>
                    <td>Ticket Issued By</td>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td>Destination In DRC</td>
                    <td colSpan={3}></td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>

            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '10%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '15%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '15%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '30%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '10%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '20%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <thead>
                <th colSpan={6}>FIRST POINT OF ENTRY IN  DRC</th>
                </thead>
                <tbody>
                <tr>
                    <td>Transit</td>
                    <td>Aller</td>
                    <td>Du[From]</td>
                    <td>Johannesburg</td>
                    <td>Au [To]</td>
                    <td>Kinshasa</td>
                </tr>
                <tr>
                    <td>Transit</td>
                    <td>Return</td>
                    <td>Du[From]</td>
                    <td>Johannesburg</td>
                    <td>Au [To]</td>
                    <td>Kinshasa</td>
                </tr>
                <tr>
                    <td>Transit</td>
                    <td>Visa Number</td>
                    <td colSpan={4}></td>
                </tr>
                </tbody>
            </table>
            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '30%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <tbody>
                <tr>
                    <td>One Entry</td>
                    <td>Du[fRom]</td>
                    <td>Johannesburg</td>
                    <td>Au [To]</td>
                    <td>Kinshasa</td>
                </tr>
                </tbody>
            </table>

            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '30%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <tbody>
                <tr>
                    <td>Two Entries</td>
                    <td>Du[fRom]</td>
                    <td>Johannesburg</td>
                    <td>Au [To]</td>
                    <td>Kinshasa</td>
                </tr>
                <tr>
                    <td>Two Entries</td>
                    <td>Du[fRom]</td>
                    <td>Johannesburg</td>
                    <td>Au [To]</td>
                    <td>Kinshasa</td>
                </tr>
                </tbody>
            </table>

            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '30%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '17.50%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <tbody>
                <tr>
                    <td>Multiple Entries</td>
                    <td>Du[fRom]</td>
                    <td>Johannesburg</td>
                    <td>Au [To]</td>
                    <td>Kinshasa</td>
                </tr>
                <tr>
                    <td>Multiple Entries</td>
                    <td>Du[fRom]</td>
                    <td>Johannesburg</td>
                    <td>Au [To]</td>
                    <td>Kinshasa</td>
                </tr>
                </tbody>
            </table>

            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '10%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '20%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '10%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '20%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '10%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '20%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <thead>
                <th colSpan={6}>LAST DRC VISA OBTAINED</th>
                </thead>
                <tbody>
                <tr>
                    <td>Visa No</td>
                    <td></td>
                    <td>Issued date</td>
                    <td></td>
                    <td>Duration</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '15%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '35%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '10%' }} /> {/* Adjust the width as needed */}
                    <col style={{ width: '40%' }} /> {/* Adjust the width as needed */}
                </colgroup>
                <thead>
                <th colSpan={6}>HOST or SPONSOR's DETAILS</th>
                </thead>
                <tbody>
                <tr>
                    <td>Names</td>
                    <td></td>
                    <td>Address</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Telephone</td>
                    <td colSpan={3}></td>
                </tr>
                <tr>
                    <td><b>GUARANTEE SUPPORT</b></td>
                    <td colSpan={3}></td>
                </tr>
                </tbody>
            </table>
            <table className='printable_table'>
                <colgroup>
                    <col style={{ width: '75%' }} />
                    <col style={{ width: '25%' }} />
                    {/* Adjust the width as needed */}
                </colgroup>
                <tbody>
                <tr>
                    <td>
                        <p>Preuves des moyens de substances pour la duree du sejour en RD pour les touristes, operateurs economiques, les eleves et etudiants. Ceux qui ne sont pas pris en charge par une personne morale ou physique: </p><br />
                        <p>La duree d'attente du visa est de : </p><br />
                        <p><b> Je reconnais que les renseignements communiques ci-dessous sont exact et veridiques. Et que j'accepte qu'en cas de refus de Visa pour une raison quelcoque, les frais payes ne sont pas remboursables. </b></p>
                    </td>
                    <td></td>
                </tr>
                <p>Fait a ...................................................., le ....................... / .................... Signature</p> <br />
                </tbody>
            </table>

            <table className='printable_table' style={{marginBottom: '2rem'}}>
                <colgroup>
                    <col style={{ width: '35%' }} />
                    <col style={{ width: '65%' }} />
                    {/* Adjust the width as needed */}
                </colgroup>
                <thead>
                <tr>
                    <th style={{textAlign: 'left'}}>FOR OFFICIAL USE</th>
                    <th style={{textAlign: 'left'}}>Annotation de l'agent de la Chancellerie :</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colSpan={2}>
                        No de la demande de visa <br/><br/><br/><br/><br/><br/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}