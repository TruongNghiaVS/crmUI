const TableHeadItem = ({ item }) => {
    return (
        <th title={item}>{item}</th>
    );
};

// select COUNT(d.calldate), d.disposition  from cdr d where d.src = '9005' and d.lastapp = 'Dial'
// group by d.disposition
const percentFix3 = (number) => {
    if(!isNaN(parseFloat(number)) && isFinite(number))
    {
            return number.toFixed(2) +"%";
    }
    return "";
}
const toHHMMSS = (secs) => {
    if(!isNaN(parseFloat(secs)) && isFinite(secs))
    {
          
    }
    else 
    {
        return  "";
    }
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

const TableRow = ({ data }) => {
    return (
        <tr>
            <td><input type="checkbox" defaultChecked={false} /></td>
            <td>{data.lineCode}</td>
            <td>{data.sumCall}</td>
            <td></td>
            <td>{percentFix3(data.perPercent)}</td>
            <td>{data.sumAn}</td>
            <td>{toHHMMSS(data.timCall)}</td>
            <td>{toHHMMSS(data.timeWaiting)}</td>
            <td>{toHHMMSS(data.timeTalking)}</td>
            <td>{data.sumNOAswer}</td>
            <td>{data.sumNoFail}</td>
            <td>{data.sumNoBussy}</td>
            <td>{data.sumCallChanelError}</td>
            <td>{data.sumNotCall}</td>
            <td>{data.sumCallErrorServer}</td>
        </tr>
    );
};

const Table = ({ theadData, tbodyData, tblClass }) => {

    console.log(tbodyData);
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