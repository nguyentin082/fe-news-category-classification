import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiErrorWarningLine } from 'react-icons/ri';

interface AlertErrorProps {
    title?: string;
    content: string | null;
}

const AlertError = ({
    title = 'Something went wrong',
    content,
}: AlertErrorProps) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    role="alert"
                    className="fixed top-4 right-4 rounded-sm border-s-4 border-red-500 bg-red-50 p-4 shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <strong className="block font-medium text-red-800 flex flex-row items-center">
                        <RiErrorWarningLine className="mr-2" />
                        {title}
                    </strong>
                    <p className="mt-2 text-sm text-red-700">{content}</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AlertError;
