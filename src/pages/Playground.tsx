import { useState } from 'react';
import background from '../assets/background.png';
import TextArea from '../components/TextArea';
import MyChart from '../components/MyChart';
import { FaGooglePlay } from 'react-icons/fa';
import classifyApi from '../services/classifyApi';
import AlertError from '../components/AlertError';

export interface ClassificationResult {
    prediction: string;
    probability: number[][];
    classes: string[];
}

function Playground() {
    const [text, setText] = useState<string>('');
    const [result, setResult] = useState<ClassificationResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleClassify = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await classifyApi.predict(text);
            setResult(response.data);
        } catch (err) {
            setError('Have an error');
            console.error('Error:', err);
        }

        setLoading(false);
    };

    return (
        <div
            className="fixed inset-0 bg-cover bg-center flex items-center justify-center overflow-y-auto py-10"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="text-center backdrop-blur-md bg-opacity-50 p-10 rounded-lg bg-white/50 mx-5 sm:mx-10 lg:p-20 max-h-[90%] max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] overflow-y-auto">
                <h1 className="text-5xl text-black font-semibold md:text-7xl flex items-center gap-2 justify-center">
                    <FaGooglePlay className="text-6xl mr-3" />
                    Playground
                </h1>
                <p className="mt-8 italic text-lg text-black font-medium">
                    Type or Paste your news content (at least 5 words) and AI
                    will classify the categories for you!
                </p>
                {/* TEXT AREA */}
                <TextArea
                    text={text}
                    setText={setText}
                    handleClassify={handleClassify}
                    loading={loading}
                    setResult={setResult}
                />
                {/* Result */}
                {result && (
                    <div>
                        <div className="grid grid-cols-3 items-baseline justify-items-start mt-10">
                            <h1 className="text-4xl text-black font-semibold tracking-tight md:text-5xl">
                                Result:
                            </h1>
                            <h2 className="text-4xl text-black tracking-tight md:text-5xl">
                                {result.prediction.replace(/\b\w/g, (char) =>
                                    char.toUpperCase()
                                )}
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-3 items-center justify-items-start mt-10">
                            <h1 className="text-4xl text-black font-semibold tracking-tight md:text-5xl">
                                Probability Chart:
                            </h1>
                            <MyChart
                                classes={result.classes}
                                probability={result.probability}
                            />
                        </div>
                    </div>
                )}
            </div>
            {error && <AlertError title="ERROR" content={error} />}
        </div>
    );
}

export default Playground;
