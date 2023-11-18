const useConfirm = (message = null, action) => {
    if (!action || typeof action !== "function") {
        return;
    }

    const confirmAction = () => {
        if (window.confirm(message)) {
            action();
        } else {

        }
    };

    return confirmAction;
};

export default useConfirm;