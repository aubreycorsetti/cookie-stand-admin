export default function CreateForm({ locationUpdateHandler }) {
  return (
    <form className="flex w-3/4 p-6 mx-auto my-6 bg-gray-200 justify-center" onSubmit={locationUpdateHandler}>
      <fieldset>
        <legend className='content-center text-center w-1/4 mx-auto my-4 bg-gray-200 font-medium text-lg font-serif'>Create Cookie Stand</legend>
        <label className='content-center mx-4 my-2'>Location:
          <input className='content-center mx-2 my-2 w-10/12' type="text" name="location" placeholder=" ex: Rome" required />
        </label>
        <label className='inline-grid content-center text-center p-3 my-6'>Min Customers per Hour
          <input className='w-56 inline-block mx-2 my-2' type="number" name="min" required />
        </label>
        <label className='inline-grid text-center p-3 my-9'>Max Customers per Hour
          <input className='w-56 mx-2 my-2' type="number" name="max" required />
        </label>
        <label className='inline-grid text-center p-3 my-6'>Avg Cookies per Customer
          <input className='w-56 mx-2 my-2' type="number" name="avg" required />
        </label>
        <button className="inline-grid text-center w-48 mx-2 my-2 px-6 py-4 bg-rose-300 text-gray-50">Create</button>
      </fieldset>
    </form>
  )
}