// export default function CreateForm({ locationUpdateHandler }) {
//   return (
//     <form className="flex w-3/4 p-6 mx-auto my-6 bg-gray-200 justify-center" onSubmit={locationUpdateHandler}>
//       <fieldset>
//         <legend className='content-center text-center w-1/4 mx-auto my-4 bg-gray-200 font-medium text-lg font-serif'>Create Cookie Stand</legend>
//         <label className='content-center mx-4 my-2'>Location:
//           <input className='content-center mx-2 my-2 w-10/12' type="text" name="location" placeholder=" ex: Rome" required />
//         </label>
//         <label className='inline-grid content-center text-center p-3 my-6'>Min Customers per Hour
//           <input className='w-56 inline-block mx-2 my-2' type="number" name="min" required />
//         </label>
//         <label className='inline-grid text-center p-3 my-9'>Max Customers per Hour
//           <input className='w-56 mx-2 my-2' type="number" name="max" required />
//         </label>
//         <label className='inline-grid text-center p-3 my-6'>Avg Cookies per Customer
//           <input className='w-56 mx-2 my-2' type="number" name="avg" required />
//         </label>
//         <button className="inline-grid text-center w-48 mx-2 my-2 px-6 py-4 bg-rose-300 text-gray-50">Create</button>
//       </fieldset>
//     </form>
//   )
// }

import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function CookieStandForm() {

    const { user } = useAuth();
    const { createResource } = useResource();

    function handleSubmit(event) {
        event.preventDefault();
        const info = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.minimum.value),
            maximum_customers_per_hour: parseInt(event.target.maximum.value),
            average_cookies_per_sale: parseFloat(event.target.average.value),
            owner: user.id,
        };
        createResource(info);

    }

    return (
        <form className="flex w-3/4 p-6 mx-auto my-6 bg-rose-900/50 border border-rose-900 justify-center" onSubmit={handleSubmit}>
            <fieldset className='w-11/12'>
                <legend className='inline-grid content-center mx-4 my-2'>Add Location</legend>
                <input className='content-center mx-2 my-2 w-6/12' placeholder='ex: Seatte' name='location' />
                <button className='inline-grid text-center w-72 mx-2 my-2 px-6 py-4 bg-rose-300 text-gray-50'>Create Stand</button>
                <legend className='inline-block p-3 '>Minimun Customers Per Hour</legend>
                <input className='relative left-0.5 mx-2 my-2 w-3/12' placeholder='minimum' name='minimum' defaultValue={0} />
                <legend className='inline-grid content-center p-3'>Maximum Customers Per Hour</legend>
                <input className='content-center inline-block mx-2 my-2 w-3/12' placeholder='maximum' name='maximum' defaultValue={0} />
                <legend className='inline-grid content-center p-3'>Average Cookies Per Sale</legend>
                <input className='relative right-0.5 mx-2 my-2 w-3/12' placeholder='average' name='average' defaultValue={0} />
            </fieldset>
        </form>
    );
}