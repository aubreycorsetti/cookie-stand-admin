import Header from "./Header";
import Footer from "./Footer";

export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <fieldset className="place-content-center border border-gray-700 bg-rose-300/50 p-3" autoComplete='off'>
                    <legend className='flex p-4 bg-rose-200 text-gray-800 font-medium text-2xl font-serif mb-32'>Log In</legend>
                    <label className="p-1" htmlFor="username">Username: </label>
                    <input name="username" />
                    <label className="p-1" htmlFor="password">Password: </label>
                    <input type="password" name="password" />
                    <button className='text-center w-48 mx-2 my-2 px-6 py-4 border-gray-700 bg-rose-900 text-gray-50'>Log In</button>
                </fieldset>
            </form>
            <Footer />
        </>
    );
}