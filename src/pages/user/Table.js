import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";

const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const TableRow = ({ data }) => {
    return (
        <tr>
            <td><input type="checkbox" defaultChecked={false} /></td>
            <td>{data.user_name}</td>
            <td>{data.user_login}</td>
            <td>{data.code}</td>
            <td>{data.position}</td>
            <td>{data.department}</td>
            <td>{data.company}</td>
            <td>{data.start_day}</td>
            <td>{data.status}</td>
            <td>{data.creater}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>
                <FaEye className='icon-tbl' />
                <FaPen className='icon-tbl' />
                <FaTrashAlt className='icon-tbl' />
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