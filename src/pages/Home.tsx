import background from '../assets/background.png';
import { FaGooglePlay } from 'react-icons/fa';

function Home() {
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="text-center  backdrop-blur-md bg-opacity-50 p-10 rounded-lg bg-white/50 mx-5 sm:mx-10 lg:p-20">
                <h1 className="text-5xl text-black font-semibold tracking-tight md:text-7xl">
                    News Categorization with AI ?
                </h1>
                <p className="mt-8 text-lg text-black font-medium">
                    Our AI-powered model goes beyond news content
                    classification. Try it now in Playground !
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/playground"
                        className="flex items-center gap-2 rounded-md bg-green-700 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-green-600"
                    >
                        <FaGooglePlay className="text-lg" />
                        Playground
                    </a>
                    <a
                        href="https://colab.research.google.com/drive/1ch2u8wuOrBlNQ9Vgb_ZeGp3ioPaPCSl-"
                        className="text-md text-black font-semibold"
                    >
                        View Colab Notebook <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
