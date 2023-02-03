import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const Toast = ({ message, setShowToast }) => {
    var count = 1;
    useEffect(() => {
        notify()
    }, [])
    const notify = () => {
        if (count === 1) {
            toast.error(message)
            setTimeout(() => {
                setShowToast(false)
            }, 2000)
            count++;
        }

    };
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    duration: 2000
                }}
            />
        </div>
    );
};

export default Toast;