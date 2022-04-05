const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

const TableRow = ({ data }) => {
    return (
        <tr>
            <td><input type="checkbox" defaultChecked={false} /></td>
            <td>{data.call_by}</td>
            <td>{data.total}</td>
            <td>{data.no_contract}</td>
            <td>{data.connect}</td>
            <td>{data.anwser}</td>
            <td>{data.time_call}</td>
            <td>{data.time_wait}</td>
            <td>{data.conversation}</td>
            <td>{data.no_anwser}</td>
            <td>{data.cancel}</td>
            <td>{data.busy}</td>
            <td>{data.error_channel}</td>
            <td>{data.no_call}</td>
            <td>{data.error_server}</td>
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