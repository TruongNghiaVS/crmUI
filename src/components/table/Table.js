import './Table.scss';
import { 
    FaFileAlt, FaFileImport, FaPaperPlane, FaEye, 
    FaPen, FaExclamation, FaTrashAlt 
} from "react-icons/fa";

const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const TableRow = ({ data }) => {
    return (
        <tr>
            <td><input type="checkbox" defaultChecked={false} /></td>
            <td>{data.campaign}</td>
            <td>{data.status}</td>
            <td>{data.total}</td>
            <td>{data.handle}</td>
            <td>{data.close}</td>
            <td>{data.start_day}</td>
            <td>{data.end_day}</td>
            <td>{data.updater}</td>
            <td>{data.date_update}</td>
            <td>{data.company}</td>
            <td>{data.vip}</td>
            <td>
                <FaFileAlt className='icon-tbl' />
                <span>|</span>
                <FaFileImport className='icon-tbl' />
                <span>|</span>
                <FaPaperPlane className='icon-tbl' />
                <span>|</span>
                <FaEye className='icon-tbl' />
                <span>|</span>
                <FaPen className='icon-tbl' />
                <span>|</span>
                <FaExclamation className='icon-tbl icon-exclamation' />
                <span>|</span>
                <FaTrashAlt className='icon-tbl icon-trash' />
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