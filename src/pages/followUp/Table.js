import { FaEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const TableRow = ({ data }) => {
    return (
        <tr>
            <td><input type="checkbox" defaultChecked={false} /></td>
            <td>{data.name}</td>
            <td>{data.no_contract}</td>
            <td>{data.phone}</td>
            <td>{data.office}</td>
            <td>{data.num_apartment}</td>
            <td>{data.other}</td>
            <td>{data.state}</td>
            <td>{data.status}</td>
            <td>{data.create_by}</td>
            <td>{data.create_date}</td>
            <td>
                <NavLink to="/follow-up/ticket-view" target="_blank" onClick={() => localStorage.setItem("ticketData", JSON.stringify(data))}>
                    <FaEdit className="icon-edit" />
                </NavLink>
            </td>
        </tr>
    );
};

const Table = ({ theadData, tbodyData, tblClass }) => {
    return (
        <table className={tblClass}>
            <thead>
                <tr className='headRow'>
                    <th><input type="checkbox" defaultChecked={false} /></th>
                    {theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item} />;
                })}
            </tbody>
        </table>
    );
};

export default Table;