export default function CookieStandRow({ info, deleteStand, index }) {
  function clickHandler() {
    deleteStand(info.id);
  }

  if (info.hourly_sales.length == 0) {
    // bunk data
    info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  return (
    <tr className={`border border-rose-700/75 text-right ${index % 2 === 0 ? 'bg-rose-300/50' : 'bg-rose-400'}`}>
      <td>
        {info.location}{' '}
        <button onClick={clickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            class="bi bi-x-square"
            viewBox="0 0 16 16"
            color="red"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </td>
      {info.hourly_sales.map((slot, index) => (
        <td key={index}>{slot}</td>
      ))}
      <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
    </tr>
  );

}