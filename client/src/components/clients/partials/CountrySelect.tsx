import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useState} from "react";

interface Country{
    handleChange: any
    values: any
}

export const CountrySelect: React.FC<Country> = ({handleChange, values}) => {
    console.log('CITY VALUES', values.place_of_birth)
    const [selectedCountry, setSelectedCountry] = useState()

    const handleSelectedCountry = (e: any, v: any) =>{
        setSelectedCountry(v?.label)
        handleChange(selectedCountry)
    }

    return (
        <Autocomplete
            id="country-select-demo"
            onChange={(event, value) => handleSelectedCountry(event, value)}
            value={selectedCountry}
            sx={{ width: '100%' }}
            size="small"
            options={countries}
            autoHighlight
            getOptionLabel={(option: any) => option.label}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    name='place_of_birth'
                    value={values.place_of_birth}
                    onChange={handleChange('place_of_birth')}
                />
            )}
        />
    );
}


interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
    cities: any[];
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly CountryType[] = [
    { code: 'AD', label: 'Andorra', phone: '376', cities: [] },
    {
        code: 'AE',
        label: 'United Arab Emirates',
        phone: '971',
        cities: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain']
    },
    { code: 'AF', label: 'Afghanistan', phone: '93', cities: ['Kabul', 'Kandahar', 'Herat', 'Mazar-i-Sharif', 'Jalalabad'] },
    {
        code: 'AG',
        label: 'Antigua and Barbuda',
        phone: '1-268',
        cities: ["Saint John's", 'All Saints', 'Liberta', "Potter's Village", 'Bolans']
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264', cities: ['The Valley', 'Stoney Ground', 'Island Harbour', 'Sandy Ground', 'Blowing Point'] },
    { code: 'AL', label: 'Albania', phone: '355', cities: ['Tirana', 'Durrës', 'Vlorë', 'Shkodër', 'Elbasan'] },
    { code: 'AM', label: 'Armenia', phone: '374', cities: ['Yerevan', 'Gyumri', 'Vanadzor', 'Ejmiatsin', 'Hrazdan'] },
    { code: 'AO', label: 'Angola', phone: '244', cities: ['Luanda', 'Lobito', 'Huambo', 'Benguela', 'Kuito'] },
    { code: 'AQ', label: 'Antarctica', phone: '672', cities: [] },
    { code: 'AR', label: 'Argentina', phone: '54', cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'San Juan'] },
    { code: 'AS', label: 'American Samoa', phone: '1-684', cities: ['Pago Pago', 'Tafuna', 'Leone', 'Faleniu', 'Aūa'] },
    { code: 'AT', label: 'Austria', phone: '43', cities: ['Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck'] },
    {
        code: 'AU',
        label: 'Australia',
        phone: '61',
        suggested: true,
        cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Hobart']
    },
    { code: 'AW', label: 'Aruba', phone: '297', cities: ['Oranjestad', 'San Nicolaas', 'Noord', 'Santa Cruz', 'Paradera'] },
    { code: 'AX', label: 'Alland Islands', phone: '358', cities: [] },
    { code: 'AZ', label: 'Azerbaijan', phone: '994', cities: ['Baku', 'Ganja', 'Sumqayit', 'Lankaran', 'Mingachevir'] },
    {
        code: 'BA',
        label: 'Bosnia and Herzegovina',
        phone: '387',
        cities: ['Sarajevo', 'Banja Luka', 'Tuzla', 'Mostar', 'Zenica']
    },
    { code: 'BB', label: 'Barbados', phone: '1-246', cities: ['Bridgetown', 'Speightstown', 'Oistins', 'Holetown', 'Crane'] },
    { code: 'BD', label: 'Bangladesh', phone: '880', cities: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Barisal'] },
    { code: 'BE', label: 'Belgium', phone: '32', cities: ['Brussels', 'Antwerp', 'Ghent', 'Charleroi', 'Liège'] },
    { code: 'BF', label: 'Burkina Faso', phone: '226', cities: ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou', 'Ouahigouya'] },
    { code: 'BG', label: 'Bulgaria', phone: '359', cities: ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse'] },
    { code: 'BH', label: 'Bahrain', phone: '973', cities: ['Manama', 'Riffa', 'Muharraq', 'Hamad Town', "A'ali"] },
            { code: 'BI', label: 'Burundi', phone: '257', cities: ['Bujumbura', 'Muyinga', 'Ruyigi', 'Gitega', 'Ngozi'] },
            { code: 'BJ', label: 'Benin', phone: '229', cities: ['Cotonou', 'Porto-Novo', 'Parakou', 'Djougou', 'Bohicon'] },
            { code: 'BL', label: 'Saint Barthelemy', phone: '590', cities: ['Gustavia', 'Lorient', 'Anse des Cayes', 'Corossol', 'Flamands'] },
            { code: 'BM', label: 'Bermuda', phone: '1-441', cities: ['Hamilton', 'Saint George', 'Somerset Village', 'St. David’s', 'Harrington Sound'] },
            { code: 'BN', label: 'Brunei Darussalam', phone: '673', cities: ['Bandar Seri Begawan', 'Kuala Belait', 'Seria', 'Tutong', 'Bangar'] },
            { code: 'BO', label: 'Bolivia', phone: '591', cities: ['La Paz', 'Sucre', 'Cochabamba', 'Santa Cruz', 'Oruro'] },
            { code: 'BR', label: 'Brazil', phone: '55', cities: ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília', 'Fortaleza'] },
            { code: 'BS', label: 'Bahamas', phone: '1-242', cities: ['Nassau', 'Freeport', 'Lucaya', 'Nassau Village', 'Andros Town'] },
            { code: 'BT', label: 'Bhutan', phone: '975', cities: ['Thimphu', 'Phuntsholing', 'Paro', 'Punakha', 'Wangdue Phodrang'] },
            { code: 'BV', label: 'Bouvet Island', phone: '47', cities: [] },
            { code: 'BW', label: 'Botswana', phone: '267', cities: ['Gaborone', 'Francistown', 'Molepolole', 'Serowe', 'Maun'] },
            { code: 'BY', label: 'Belarus', phone: '375', cities: ['Minsk', 'Hrodna', 'Mahilyow', 'Vitebsk', 'Brest'] },
            { code: 'BZ', label: 'Belize', phone: '501', cities: ['Belize City', 'San Ignacio', 'Orange Walk', 'Belmopan', 'Dangriga'] },
            { code: 'CA', label: 'Canada', phone: '1', cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton'] },
            { code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61', cities: ['West Island', 'Bantam', 'Home Island', 'Direction Island', 'North Keeling Island'] },
            { code: 'CD', label: 'Democratic Republic of the Congo', phone: '243', cities: ['Kinshasa', 'Lubumbashi', 'Mbuji-Mayi', 'Kananga', 'Kisangani'] },
            { code: 'CF', label: 'Central African Republic', phone: '236', cities: ['Bangui', 'Bimbo', 'Mbaïki', 'Berbérati', 'Kaga-Bandoro'] },
            { code: 'CG', label: 'Congo', phone: '242', cities: ['Brazzaville', 'Pointe-Noire', 'Dolisie', 'Kayes', 'Owando'] },
            { code: 'CH', label: 'Switzerland', phone: '41', cities: ['Zurich', 'Geneva', 'Basel', 'Bern', 'Lausanne'] },
            {
                code: 'CI',
                label: 'Ivory Coast',
                phone: '225',
                cities: ['Abidjan', 'Bouaké', 'San-Pédro', 'Yamoussoukro', 'Daloa']
            },
            { code: 'CK', label: 'Cook Islands', phone: '682', cities: ['Avarua', 'Arutanga', 'Amuri', 'Matavera', 'Papao'] },
            { code: 'CL', label: 'Chile', phone: '56', cities: ['Santiago', 'Valparaíso', 'Concepción', 'Antofagasta', 'Viña del Mar'] },
            { code: 'CM', label: 'Cameroon', phone: '237', cities: ['Douala', 'Yaoundé', 'Garoua', 'Bamenda', 'Maroua'] },
            { code: 'CN', label: 'China', phone: '86', cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Wuhan'] },
            { code: 'CO', label: 'Colombia', phone: '57', cities: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena'] },
            { code: 'CR', label: 'Costa Rica', phone: '506', cities: ['San José', 'Limon', 'San Francisco', 'Alajuela', 'Liberia'] },
            { code: 'CU', label: 'Cuba', phone: '53', cities: ['Havana', 'Santiago de Cuba', 'Camagüey', 'Holguín', 'Guantánamo'] },
            { code: 'CV', label: 'Cape Verde', phone: '238', cities: ['Praia', 'Mindelo', 'Santa Maria', 'Cova Figueira', 'Vila do Maio'] },
            { code: 'CW', label: 'Curaçao', phone: '599', cities: ['Willemstad', 'Sint Michiel Liber', 'Dorp Soto', 'Tera Kora', 'Sint Willebrordus'] },
            { code: 'CX', label: 'Christmas Island', phone: '61', cities: ['Flying Fish Cove'] },
            { code: 'CY', label: 'Cyprus', phone: '357', cities: ['Nicosia', 'Limassol', 'Larnaca', 'Famagusta', 'Paphos'] },
            { code: 'CZ', label: 'Czech Republic', phone: '420', cities: ['Prague', 'Brno', 'Ostrava', 'Plzeň', 'Liberec'] },
            { code: 'DE', label: 'Germany', phone: '49', cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt'] },
            { code: 'DJ', label: 'Djibouti', phone: '253', cities: ['Djibouti', 'Ali Sabieh', 'Tadjourah', 'Obock', 'Dikhil'] },
            { code: 'DK', label: 'Denmark', phone: '45', cities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg'] },
            {
                code: 'DM',
                label: 'Dominica',
                phone: '1-767',
                cities: ['Roseau', 'Portsmouth', 'Marigot', 'Berekua', 'Mahaut']
            },
            { code: 'DO', label: 'Dominican Republic', phone: '1-809', cities: ['Santo Domingo', 'Santiago', 'Santo Domingo Oeste', 'Santo Domingo Este', 'San Pedro de Macorís'] },
            { code: 'DZ', label: 'Algeria', phone: '213', cities: ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida'] },
            { code: 'EC', label: 'Ecuador', phone: '593', cities: ['Quito', 'Guayaquil', 'Cuenca', 'Santo Domingo', 'Machala'] },
            { code: 'EE', label: 'Estonia', phone: '372', cities: ['Tallinn', 'Tartu', 'Narva', 'Kohtla-Järve', 'Pärnu'] },
            { code: 'EG', label: 'Egypt', phone: '20', cities: ['Cairo', 'Alexandria', 'Giza', 'Shubra El-Kheima', 'Port Said'] },
            { code: 'EH', label: 'Western Sahara', phone: '212', cities: ['Laayoune', 'Dakhla', 'Smara', 'Bir Gandus', 'Zag'] },
            { code: 'ER', label: 'Eritrea', phone: '291', cities: ['Asmara', 'Keren', 'Massawa', 'Assab', 'Mendefera'] },
            { code: 'ES', label: 'Spain', phone: '34', cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza'] },
            {
                code: 'ET',
                label: 'Ethiopia',
                phone: '251',
                cities: ['Addis Ababa', 'Dire Dawa', 'Mekelle', 'Gondar', 'Hawassa']
            },
            { code: 'FI', label: 'Finland', phone: '358', cities: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu'] },
            { code: 'FJ', label: 'Fiji', phone: '679', cities: ['Suva', 'Lautoka', 'Nadi', 'Labasa', 'Ba'] },
            { code: 'FK', label: 'Falkland Islands (Malvinas)', phone: '500', cities: ['Stanley'] },
            { code: 'FM', label: 'Federated States of Micronesia', phone: '691', cities: ['Palikir', 'Weno', 'Colonia', 'Tofol', 'Kolonia'] },
            { code: 'FO', label: 'Faroe Islands', phone: '298', cities: ['Tórshavn', 'Klaksvík', 'Runavík', 'Eiði', 'Fuglafjørður'] },
            { code: 'FR', label: 'France', phone: '33', cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'] },
            {
                code: 'GA',
                label: 'Gabon',
                phone: '241',
                cities: ['Libreville', 'Port-Gentil', 'Franceville', 'Oyem', 'Moanda']
            },
            {
                code: 'GB',
                label: 'United Kingdom',
                phone: '44',
                cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool']
            },
            { code: 'GD', label: 'Grenada', phone: '1-473', cities: ["St. George's", 'Gouyave', 'Grenville','Victoria', 'Sauteurs'] },
                    { code: 'GE', label: 'Georgia', phone: '995', cities: ['Tbilisi', 'Kutaisi', 'Batumi', 'Rustavi', 'Zugdidi'] },
                    { code: 'GF', label: 'French Guiana', phone: '594', cities: ['Cayenne', 'Matoury', 'Saint-Laurent-du-Maroni', 'Kourou', 'Rémire-Montjoly'] },
                    { code: 'GG', label: 'Guernsey', phone: '44', cities: ['St. Peter Port'] },
                    { code: 'GH', label: 'Ghana', phone: '233', cities: ['Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Atsiaman'] },
                    { code: 'GI', label: 'Gibraltar', phone: '350', cities: ['Gibraltar'] },
                    { code: 'GL', label: 'Greenland', phone: '299', cities: ['Nuuk', 'Sisimiut', 'Ilulissat', 'Qaqortoq', 'Aasiaat'] },
                    { code: 'GM', label: 'Gambia', phone: '220', cities: ['Banjul', 'Serekunda', 'Brikama', 'Bakau', 'Banjulinding'] },
                    { code: 'GN', label: 'Guinea', phone: '224', cities: ['Conakry', 'Nzérékoré', 'Kindia', 'Kankan', 'Gueckedou'] },
                    { code: 'GP', label: 'Guadeloupe', phone: '590', cities: ['Les Abymes', 'Pointe-à-Pitre', 'Le Gosier', 'Baie-Mahault', 'Le Moule'] },
                    { code: 'GQ', label: 'Equatorial Guinea', phone: '240', cities: ['Malabo', 'Bata', 'Ebebiyin', 'Aconibe', 'Anisoc'] },
                    { code: 'GR', label: 'Greece', phone: '30', cities: ['Athens', 'Thessaloniki', 'Patras', 'Larissa', 'Heraklion'] },
                    { code: 'GS', label: 'South Georgia and the South Sandwich Islands', phone: '500', cities: [] },
                    { code: 'GT', label: 'Guatemala', phone: '502', cities: ['Guatemala City', 'Mixco', 'Villa Nueva', 'Quetzaltenango', 'San Miguel Petapa'] },
                    { code: 'GU', label: 'Guam', phone: '1-671', cities: ['Dededo', 'Tamuning', 'Mangilao', 'Barrigada', 'Yigo'] },
                    { code: 'GW', label: 'Guinea-Bissau', phone: '245', cities: ['Bissau', 'Bafatá', 'Gabú', 'Bissorã', 'Catió'] },
                    { code: 'GY', label: 'Guyana', phone: '592', cities: ['Georgetown', 'Linden', 'New Amsterdam', 'Bartica', 'Skeldon'] },
                    { code: 'HK', label: 'Hong Kong', phone: '852', cities: ['Hong Kong'] },
                    { code: 'HM', label: 'Heard Island and McDonald Islands', phone: '672', cities: [] },
                    { code: 'HN', label: 'Honduras', phone: '504', cities: ['Tegucigalpa', 'San Pedro Sula', 'Choloma', 'La Ceiba', 'El Progreso'] },
                    { code: 'HR', label: 'Croatia', phone: '385', cities: ['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar'] },
                    { code: 'HT', label: 'Haiti', phone: '509', cities: ['Port-au-Prince', 'Carrefour', 'Delmas', 'Pétionville', 'Port-de-Paix'] },
                    { code: 'HU', label: 'Hungary', phone: '36', cities: ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs'] },
                    { code: 'ID', label: 'Indonesia', phone: '62', cities: ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang'] },
                    { code: 'IE', label: 'Ireland', phone: '353', cities: ['Dublin', 'Cork', 'Limerick', 'Galway', 'Waterford'] },
                    { code: 'IL', label: 'Israel', phone: '972', cities: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Rishon LeZion', 'Petah Tikva'] },
                    { code: 'IM', label: 'Isle of Man', phone: '44', cities: ['Douglas'] },
                    {
                        code: 'IN',
                        label: 'India',
                        phone: '91',
                        cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai']
                    },
                    { code: 'IO', label: 'British Indian Ocean Territory', phone: '246', cities: ['Diego Garcia'] },
                    { code: 'IQ', label: 'Iraq', phone: '964', cities: ['Baghdad', 'Basra', 'Mosul', 'Erbil', 'Sulaymaniyah'] },
                    { code: 'IR', label: 'Iran', phone: '98', cities: ['Tehran', 'Mashhad', 'Isfahan', 'Karaj', 'Tabriz'] },
                    { code: 'IS', label: 'Iceland', phone: '354', cities: ['Reykjavik', 'Kópavogur', 'Hafnarfjörður', 'Akureyri', 'Reykjanesbær'] },
                    { code: 'IT', label: 'Italy', phone: '39', cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo'] },
                    { code: 'JE', label: 'Jersey', phone: '44', cities: ['Saint Helier'] },
                    {
                        code: 'JM',
                        label: 'Jamaica',
                        phone: '1-876',
                        cities: ['Kingston', 'New Kingston', 'Spanish Town', 'Portmore', 'Montego Bay']
                    },
                    { code: 'JO', label: 'Jordan', phone: '962', cities: ['Amman', 'Zarqa', 'Irbid', 'Russeifa', 'Al Quwaysimah'] },
                    { code: 'JP', label: 'Japan', phone: '81', cities: ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo'] },
                    { code: 'KE', label: 'Kenya', phone: '254', cities: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'] },
                    { code: 'KG', label: 'Kyrgyzstan', phone: '996', cities: ['Bishkek', 'Osh', 'Jalal-Abad', 'Karakol', 'Talas'] },
                    { code: 'KH', label: 'Cambodia', phone: '855', cities: ['Phnom Penh', 'Sihanoukville', 'Battambang', 'Siem Reap', 'Paoy Pet'] },
                    { code: 'KI', label: 'Kiribati', phone: '686', cities: ['Tarawa', 'Betio Village', 'Bikenibeu Village', 'Teaoraereke', 'Butaritari'] },
                    {
                        code: 'KM',
                        label: 'Comoros',
                        phone: '269',
                        cities: ['Moroni', 'Mutsamudu', 'Fomboni', 'Domoni', 'Tsémbéhou']
                    },
                    { code: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869', cities: ['Basseterre', 'Sandy' +
                        ' Point Town', 'Mansion', "St. Paul's", 'Dieppe Bay Town'] },
                            { code: 'KP', label: 'North Korea', phone: '850', cities: ['Pyongyang', 'Hamhung', 'Nampo', 'Sariwon', 'Wonsan'] },
                            { code: 'KR', label: 'South Korea', phone: '82', cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'] },
                            { code: 'KW', label: 'Kuwait', phone: '965', cities: ['Kuwait City', 'Al Ahmadi', 'Hawalli', 'As Salimiyah', 'Sabah as Salim'] },
                            { code: 'KY', label: 'Cayman Islands', phone: '1-345', cities: ['George Town', 'West Bay', 'Bodden Town', 'East End', 'North Side'] },
                            { code: 'KZ', label: 'Kazakhstan', phone: '7', cities: ['Nur-Sultan', 'Almaty', 'Karaganda', 'Shymkent', 'Taraz'] },
                            {
                                code: 'LA',
                                label: 'Laos',
                                phone: '856',
                                cities: ['Vientiane', 'Pakse', 'Savannakhet', 'Luang Prabang', 'Xam Nua']
                            },
                            { code: 'LB', label: 'Lebanon', phone: '961', cities: ['Beirut', 'Tripoli', 'Sidon', 'Zahle', 'Tyre'] },
                            { code: 'LC', label: 'Saint Lucia', phone: '1-758', cities: ['Castries', 'Vieux Fort', 'Micoud', 'Soufrière', 'Dennery'] },
                            { code: 'LI', label: 'Liechtenstein', phone: '423', cities: ['Vaduz', 'Schaan', 'Triesen', 'Balzers', 'Eschen'] },
                            { code: 'LK', label: 'Sri Lanka', phone: '94', cities: ['Colombo', 'Gampaha', 'Moratuwa', 'Jaffna', 'Negombo'] },
                            { code: 'LR', label: 'Liberia', phone: '231', cities: ['Monrovia', 'Gbarnga', 'Kakata', 'Bensonville', 'Harper'] },
                            { code: 'LS', label: 'Lesotho', phone: '266', cities: ['Maseru', 'Teyateyaneng', 'Mafeteng', 'Hlotse', "Mohale's Hoek"] },
                                    { code: 'LT', label: 'Lithuania', phone: '370', cities: ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys'] },
                                    { code: 'LU', label: 'Luxembourg', phone: '352', cities: ['Luxembourg', 'Esch-sur-Alzette', 'Differdange', 'Dudelange', 'Ettelbruck'] },
                                    { code: 'LV', label: 'Latvia', phone: '371', cities: ['Riga', 'Daugavpils', 'Liepāja', 'Jelgava', 'Jūrmala'] },
                                    { code: 'LY', label: 'Libya', phone: '218', cities: ['Tripoli', 'Benghazi', 'Misratah', 'Tarhuna', 'Al Khums'] },
                                    { code: 'MA', label: 'Morocco', phone: '212', cities: ['Casablanca', 'Rabat', 'Fes', 'Tangier', 'Marrakech'] },
                                    { code: 'MC', label: 'Monaco', phone: '377', cities: ['Monaco'] },
                                    { code: 'MD', label: 'Moldova', phone: '373', cities: ['Chisinau', 'Tiraspol', 'Bălţi', 'Bender', 'Rîbniţa'] },
                                    { code: 'ME', label: 'Montenegro', phone: '382', cities: ['Podgorica', 'Nikšić', 'Herceg Novi', 'Bar', 'Bijelo Polje'] },
                                    { code: 'MF', label: 'Saint Martin', phone: '590', cities: ['Marigot'] },
                                    { code: 'MG', label: 'Madagascar', phone: '261', cities: ['Antananarivo', 'Toamasina', 'Antsirabe', 'Fianarantsoa', 'Mahajanga'] },
                                    { code: 'MH', label: 'Marshall Islands', phone: '692', cities: ['Majuro', 'Ebeye', 'Arno', 'Jaluit', 'Wotje'] },
                                    { code: 'MK', label: 'North Macedonia', phone: '389', cities: ['Skopje', 'Bitola', 'Kumanovo', 'Prilep', 'Tetovo'] },
                                    { code: 'ML', label: 'Mali', phone: '223', cities: ['Bamako', 'Sikasso', 'Mopti', 'Koutiala', 'Kayes'] },
                                    { code: 'MM', label: 'Myanmar', phone: '95', cities: ['Yangon', 'Mandalay', 'Naypyidaw', 'Mawlamyine', 'Bago'] },
                                    { code: 'MN', label: 'Mongolia', phone: '976', cities: ['Ulaanbaatar', 'Erdenet', 'Darhan', 'Choibalsan', 'Khovd'] },
                                    { code: 'MO', label: 'Macao', phone: '853', cities: ['Macao'] },
                                    { code: 'MP', label: 'Northern Mariana Islands', phone: '1-670', cities: ['Saipan', 'San Jose Village', 'Garapan', 'Kagman', 'San Roque'] },
                                    { code: 'MQ', label: 'Martinique', phone: '596', cities: ['Fort-de-France', 'Le Lamentin', 'Le Robert', 'Sainte-Marie', 'Ducos'] },
                                    { code: 'MR', label: 'Mauritania', phone: '222', cities: ['Nouakchott', 'Nouadhibou', 'Barkéwol', 'Kaédi', 'Rosso'] },
                                    { code: 'MS', label: 'Montserrat', phone: '1-664', cities: ['Plymouth', 'Brades', 'Little Bay', 'Lookout', 'Geralds'] },
                                    { code: 'MT', label: 'Malta', phone: '356', cities: ['Valletta', 'Birkirkara', 'Mosta', 'Qormi', 'Żabbar'] },
                                    { code: 'MU', label: 'Mauritius', phone: '230', cities: ['Port Louis', 'Beau Bassin-Rose Hill', 'Vacoas-Phoenix', 'Curepipe', 'Quatre Bornes'] },
                                    { code: 'MV', label: 'Maldives', phone: '960', cities: ['Malé', 'Addu City', 'Fuvahmulah', 'Hithadhoo', 'Kulhudhuffushi'] },
                                    { code: 'MW', label: 'Malawi', phone: '265', cities: ['Lilongwe', 'Blantyre', 'Mzuzu', 'Zomba', 'Kasungu'] },
                                    {
                                        code: 'MX',
                                        label: 'Mexico',
                                        phone: '52',
                                        cities: ['Mexico City', 'Ecatepec', 'Guadalajara', 'Puebla', 'Juarez']
                                    },
                                    { code: 'MY', label: 'Malaysia', phone: '60', cities: ['Kuala Lumpur', 'George Town', 'Ipoh', 'Petaling Jaya', 'Shah Alam'] },
                                    { code: 'MZ', label: 'Mozambique', phone: '258', cities: ['Maputo', 'Matola', 'Beira', 'Nampula', 'Chimoio'] },
                                    { code: 'NA', label: 'Namibia', phone: '264', cities: ['Windhoek', 'Rundu', 'Walvis Bay', 'Oshakati', 'Swakopmund'] },
                                    { code: 'NC', label: 'New Caledonia', phone: '687', cities: ['Nouméa', 'Mont-Dore', 'Dumbéa', 'Païta', 'Wé'] },
                                    { code: 'NE', label: 'Niger', phone: '227', cities: ['Niamey', 'Zinder', 'Maradi', 'Agadez', 'Alaghsas'] },
                                    { code: 'NF', label: 'Norfolk Island', phone: '672', cities: [] },
                                    { code: 'NG', label: 'Nigeria', phone: '234', cities: ['Lagos', 'Kano', 'Ibadan', 'Kaduna', 'Port Harcourt'] },
                                    { code: 'NI', label: 'Nicaragua', phone: '505', cities: ['Managua', 'León', 'Masaya', 'Tipitapa', 'Chinandega'] },
                                    { code: 'NL', label: 'Netherlands', phone: '31', cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven'] },
                                    { code: 'NO', label: 'Norway', phone: '47', cities: ['Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Drammen'] },
                                    { code: 'NP', label: 'Nepal', phone: '977', cities: ['Kathmandu', 'Pokhara', 'Patan', 'Biratnagar', 'Birganj'] },
                                    { code: 'NR', label: 'Nauru', phone: '674', cities: ['Yaren', 'Denigomodu', 'Meneng', 'Buada', 'Anabar'] },
                                    { code: 'NU', label: 'Niue', phone: '683', cities: ['Alofi', 'Hakupu', 'Avatele', 'Mutalau', 'Lakepa'] },
                                    { code: 'NZ', label: 'New Zealand', phone: '64', cities: ['Auckland', 'Wellington', 'Christchurch', 'Manukau City', 'Waitakere'] },
                                    { code: 'OM', label: 'Oman', phone: '968', cities: ['Muscat', 'Seeb', 'Salalah', 'Bawshar', 'Sohar'] },
                                    { code: 'PA', label: 'Panama', phone: '507', cities: ['Panama City', 'San Miguelito', 'Tocumen', 'David', 'Arraiján'] },
                                    { code: 'PE', label: 'Peru', phone: '51', cities: ['Lima', 'Arequipa', 'Callao', 'Trujillo', 'Chiclayo'] },
                                    { code: 'PF', label: 'French Polynesia', phone: '689', cities: ['Papeete', 'Faaa', 'Punaauia', 'Pirae', 'Mahina'] },
                                    { code: 'PG', label: 'Papua New Guinea', phone: '675', cities: ['Port Moresby', 'Lae', 'Arawa', 'Mount Hagen', 'Popondetta'] },
                                    { code: 'PH', label: 'Philippines', phone: '63', cities: ['Quezon City', 'Manila', 'Caloocan', 'Budta', 'Davao City'] },
                                    { code: 'PK', label: 'Pakistan', phone: '92', cities: ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan'] },
                                    { code: 'PL', label: 'Poland', phone: '48', cities: ['Warsaw', 'Kraków', 'Łódź', 'Wrocław', 'Poznań'] },
                                    {
                                        code: 'PM',
                                        label: 'Saint Pierre and Miquelon',
                                        phone: '508',
                                        cities: ['Saint-Pierre']
                                    },
                                    { code: 'PN', label: 'Pitcairn Islands', phone: '870', cities: [] },
                                    { code: 'PR', label: 'Puerto Rico', phone: '1-787, 1-939', cities: ['San Juan', 'Bayamón', 'Carolina', 'Ponce', 'Caguas'] },
                                    { code: 'PS', label: 'Palestine', phone: '970', cities: ['Gaza City', 'Rafah', 'Khan Yunis', 'Jabalia', 'Hebron'] },
                                    { code: 'PT', label: 'Portugal', phone: '351', cities: ['Lisbon', 'Vila Nova de Gaia', 'Porto', 'Amadora', 'Braga'] },
                                    { code: 'PW', label: 'Palau', phone: '680', cities: ['Melekeok', 'Koror', 'Babeldaob', 'Ngerulmud', 'Ngiwal'] },
                                    { code: 'PY', label: 'Paraguay', phone: '595', cities: ['Asunción', 'Ciudad del Este', 'San Lorenzo', 'Capiatá', 'Lambaré'] },
                                    { code: 'QA', label: 'Qatar', phone: '974', cities: ['Doha', 'Al Rayyan', 'Umm Salal Muḩammad', 'Al Wakrah', 'Al Khor'] },
                                    { code: 'RE', label: 'Réunion', phone: '262', cities: ['Saint-Denis', 'Saint-Paul', 'Saint-Pierre', 'Le Tampon', 'Saint-André'] },
                                    { code: 'RO', label: 'Romania', phone: '40', cities: ['Bucharest', 'Cluj-Napoca', 'Timişoara', 'Iaşi', 'Constanţa'] },
                                    { code: 'RS', label: 'Serbia', phone: '381', cities: ['Belgrade', 'Niš', 'Novi Sad', 'Zemun', 'Kragujevac'] },
                                    { code: 'RU', label: 'Russia', phone: '7', cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Nizhny Novgorod'] },
                                    { code: 'RW', label: 'Rwanda', phone: '250', cities: ['Kigali', 'Butare', 'Gitarama', 'Ruhengeri', 'Gisenyi'] },
                                    { code: 'SA', label: 'Saudi Arabia', phone: '966', cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Sulţānah'] },
                                    { code: 'SB', label: 'Solomon Islands', phone: '677', cities: ['Honiara', 'Tulagi', 'Gizo', 'Auki', 'Buala'] },
                                    { code: 'SC', label: 'Seychelles', phone: '248', cities: ['Victoria', 'Anse Boileau', 'Beau Vallon', 'Cascade', 'Saint Louis'] },
                                    { code: 'SD', label: 'Sudan', phone: '249', cities: ['Khartoum', 'Omdurman', 'Nyala', 'Port Sudan', 'Kassala'] },
                                    { code: 'SE', label: 'Sweden', phone: '46', cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås'] },
                                    { code: 'SG', label: 'Singapore', phone: '65', cities: ['Singapore'] },
                                    { code: 'SH', label: 'Saint Helena', phone: '290', cities: ['Edinburgh of the Seven Seas'] },
                                    { code: 'SI', label: 'Slovenia', phone: '386', cities: ['Ljubljana', 'Maribor', 'Celje', 'Kranj', 'Velenje'] },
                                    { code: 'SJ', label: 'Svalbard and Jan Mayen', phone: '47', cities: [] },
                                    { code: 'SK', label: 'Slovakia', phone: '421', cities: ['Bratislava', 'Košice', 'Preš', 'n', 'Nitra'] },
                                    { code: 'SL', label: 'Sierra Leone', phone: '232', cities: ['Freetown', 'Kenema', 'Bo', 'Koidu', 'Makeni'] },
                                    { code: 'SM', label: 'San Marino', phone: '378', cities: ['San Marino', 'Borgo Maggiore', 'Serravalle', 'Domagnano', 'Poggio di Chiesanuova'] },
                                    { code: 'SN', label: 'Senegal', phone: '221', cities: ['Dakar', 'Grand Dakar', 'Gorée', 'Touba', 'Thiès'] },
                                    { code: 'SO', label: 'Somalia', phone: '252', cities: ['Mogadishu', 'Hargeisa', 'Berbera', 'Kismayo', 'Jawhar'] },
                                    { code: 'SR', label: 'Suriname', phone: '597', cities: ['Paramaribo', 'Lelydorp', 'Nieuw Nickerie', 'Moengo', 'Nieuw Amsterdam'] },
                                    { code: 'SS', label: 'South Sudan', phone: '211', cities: ['Juba', 'Wau', 'Malakal', 'Yei', 'Aweil'] },
                                    { code: 'ST', label: 'São Tomé and Príncipe', phone: '239', cities: ['São Tomé', 'Neves', 'Santo António', 'Trindade', 'Guadalupe'] },
                                    { code: 'SV', label: 'El Salvador', phone: '503', cities: ['San Salvador', 'Santa Ana', 'San Miguel', 'Mejicanos', 'Soyapango'] },
                                    { code: 'SX', label: 'Sint Maarten', phone: '1-721', cities: [] },
                                    { code: 'SY', label: 'Syria', phone: '963', cities: ['Damascus', 'Aleppo', 'Homs', 'Latakia', 'Deir ez-Zor'] },
                                    { code: 'SZ', label: 'Eswatini', phone: '268', cities: ['Mbabane', 'Manzini', 'Big Bend', 'Malkerns', 'Mhlume'] },
                                    { code: 'TC', label: 'Turks and Caicos Islands', phone: '1-649', cities: ['Cockburn Town'] },
                                    { code: 'TD', label: 'Chad', phone: '235', cities: ["N'Djamena", 'Moundou',"Sarh", 'Abeche', 'Kelo'] },
                                            { code: 'TF', label: 'French Southern Territories', phone: '262', cities: [] },
                                            { code: 'TG', label: 'Togo', phone: '228', cities: ['Lome', 'Sokode', 'Kara', 'Atakpame', 'Bassar'] },
                                            { code: 'TH', label: 'Thailand', phone: '66', cities: ['Bangkok', 'Nonthaburi', 'Pak Kret', 'Chiang Mai', 'Hat Yai'] },
                                            { code: 'TJ', label: 'Tajikistan', phone: '992', cities: ['Dushanbe', 'Khujand', 'Kulob', 'Qurghonteppa', 'Istaravshan'] },
                                            { code: 'TK', label: 'Tokelau', phone: '690', cities: [] },
                                            { code: 'TL', label: 'East Timor', phone: '670', cities: ['Dili', 'Cova Lima', 'Ermera', 'Aileu', 'Liquiçá'] },
                                            { code: 'TM', label: 'Turkmenistan', phone: '993', cities: ['Ashgabat', 'Turkmenabat', 'Dasoguz', 'Mary', 'Balkanabat'] },
                                            { code: 'TN', label: 'Tunisia', phone: '216', cities: ['Tunis', 'Sfax', 'Sousse', 'Ettadhamen', 'Kairouan'] },
                                            { code: 'TO', label: 'Tonga', phone: '676', cities: ["Nuku'alofa", 'Neiafu', 'Haveluloto', 'Pangai', '‘Ohonua'] },
{ code: 'TR', label: 'Turkey', phone: '90', cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Adana'] },
{ code: 'TT', label: 'Trinidad and Tobago', phone: '1-868', cities: ['Port of Spain', 'San Fernando', 'Chaguanas', 'Arima', 'Marabella'] },
{ code: 'TV', label: 'Tuvalu', phone: '688', cities: ['Funafuti', 'Asau', 'Tanrake Village', 'Tonga', 'Vaiaku'] },
{ code: 'TW', label: 'Taiwan', phone: '886', cities: ['Taipei', 'Kaohsiung', 'Taichung', 'Tainan', 'Banqiao'] },
{ code: 'TZ', label: 'Tanzania', phone: '255', cities: ['Dar es Salaam', 'Mwanza', 'Zanzibar', 'Arusha', 'Mbeya'] },
{ code: 'UA', label: 'Ukraine', phone: '380', cities: ['Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Donetsk'] },
{ code: 'UG', label: 'Uganda', phone: '256', cities: ['Kampala', 'Gulu', 'Lira', 'Mbarara', 'Jinja'] },
{ code: 'US', label: 'United States', phone: '1', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'] },
{ code: 'UY', label: 'Uruguay', phone: '598', cities: ['Montevideo', 'Salto', 'Ciudad de la Costa', 'Paysandú', 'Las Piedras'] },
{ code: 'UZ', label: 'Uzbekistan', phone: '998', cities: ['Tashkent', 'Namangan', 'Samarkand', 'Andijan', 'Nukus'] },
{ code: 'VA', label: 'Vatican City', phone: '379', cities: ['Vatican City'] },
{ code: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784', cities: ['Kingstown', 'Kingstown Park', 'Dorsetshire Hill', 'Barrouallie', 'Georgetown'] },
{ code: 'VE', label: 'Venezuela', phone: '58', cities: ['Caracas', 'Maracaibo', 'Maracay', 'Valencia', 'Barcelona'] },
{ code: 'VG', label: 'British Virgin Islands', phone: '1-284', cities: ['Road Town', 'Road Town', 'Rumbly'] },
{ code: 'VI', label: 'U.S. Virgin Islands', phone: '1-340', cities: ['Saint Croix', 'Charlotte Amalie', 'Saint John', 'Cruz Bay', "Betsy's Jewel"] },
    { code: 'VN', label: 'Vietnam', phone: '84', cities: ['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Haiphong', 'Biên Hòa'] },
    { code: 'VU', label: 'Vanuatu', phone: '678', cities: ['Port Vila', 'Luganville', 'Norsup', 'Sola', 'Lakatoro'] },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681', cities: ['Mata-Utu', 'Alo', 'Leava', 'Vailala', 'Muli'] },
    { code: 'WS', label: 'Samoa', phone: '685', cities: ['Apia', 'Asau', 'Mulifanua', 'Leulumoega', 'Faleula'] },
    { code: 'XK', label: 'Kosovo', phone: '383', cities: ['Pristina', 'Pec', 'Gjilan', 'Prizren', 'Ferizaj'] },
    { code: 'YE', label: 'Yemen', phone: '967', cities: ['Sanaa', 'Al Hudaydah', 'Taizz', 'Aden', 'Ibb'] },
    { code: 'YT', label: 'Mayotte', phone: '262', cities: ['Mamoudzou', 'Koungou', 'Dzaoudzi', 'Dembeni', 'Sada'] },
    { code: 'ZA', label: 'South Africa', phone: '27', cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'] },
    { code: 'ZM', label: 'Zambia', phone: '260', cities: ['Lusaka', 'Kitwe', 'Ndola', 'Kabwe', 'Chingola'] },
    { code: 'ZW', label: 'Zimbabwe', phone: '263', cities: ['Harare', 'Bulawayo', 'Chitungwiza', 'Mutare', 'Gweru'] },
];

