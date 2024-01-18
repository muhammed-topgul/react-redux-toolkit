import {Flip, toast} from "react-toastify";

export default class Toast {
    static success(message) {
        toast.success(message, this.config());
    }

    static error(message) {
        toast.error(message, this.config());
    }

    static config() {
        return {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        }
    }
}