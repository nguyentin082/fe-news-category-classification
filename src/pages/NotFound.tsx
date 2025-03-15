import background from '../assets/background.png';

function NotFound() {
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="text-center  backdrop-blur-md bg-opacity-50 p-10 rounded-lg bg-white/50 mx-5 sm:mx-10 lg:p-20">
                <h1 className="text-5xl text-black font-semibold tracking-tight md:text-7xl">
                    404 !
                </h1>
                <p className="mt-8 text-lg text-black font-medium">
                    Oops, this page not found.
                </p>
            </div>
        </div>
    );
}

export default NotFound;
