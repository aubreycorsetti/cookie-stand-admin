export const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

export const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]


export default function ReportTable(props) {
  let totalTotals = 0
  let hourlyTotals = 0
  let columnTotals = Array(hours.length).fill(0);

  props.newLocations.forEach((item) => {
    hourly_sales.forEach((hour, idx) => {
      columnTotals[idx] += hour;
      totalTotals += hour;
    });
  });

  hourlyTotals = hourly_sales.reduce((acc, current) => acc + current, 0);

  // console.log(columnTotals)

  return (
    props.setNewLocations.length > 0 ? (
      <table className="w-8 mx-auto my-4" >
        <thead>
          <tr>
            <th className="border border-gray-700 p-3">Location</th>
            {hours.map((hour, idx) => <th className="border border-gray-700 p-3" key={idx}>{hour}</th>)}
            <th className="border border-gray-700 p-3">Totals</th>
          </tr>
        </thead>
        <tbody>

          {props.newLocations.map((item, idx) =>
          (
            <tr key={idx}>
              <td className="pl-2 border border-gray-700">{item.location}</td>
              {hourly_sales.map((hour, idx) => <td className="pl-2 border border-gray-700" key={idx}>{hour}</td>)}
              <td className="pl-2 border border-gray-700">{hourlyTotals}</td>
            </tr>
          )
          )
          }
        </tbody>
        <tfoot>
          <tr>
            <th className="border border-gray-700 p-3">Totals</th>
            {columnTotals.map((total, idx) => (
              <td className="pl-2 border border-gray-700" key={idx}>{total}</td>
            ))}
            <td className="pl-2 border border-gray-700">{totalTotals}</td>
          </tr>

        </tfoot>
      </ table>
    ) :
      <h1 className="text-center text-4xl">No Questions Asked Yet!</h1>
  );

}