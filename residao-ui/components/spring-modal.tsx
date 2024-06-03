import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const SpringModal = ({
    isOpen,
    setIsOpen,
    children,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className=" bg-slate-900/20 backdrop-blur py-8 px-3 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer "
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white text-white p-4 rounded-lg w-full  shadow-xl cursor-default  overflow-hidden "
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SpringModal;