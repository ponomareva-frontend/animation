import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addElement, removeElement } from './elementsSlice';
import { motion, AnimatePresence } from 'framer-motion';

const ElementsList = () => {
    const elements = useSelector(state => state.elements.elements);
    const dispatch = useDispatch();

    const itemVariants = {
        hidden: { opacity: 0, x: '-100%' },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '100%' },
    };


    return (
        <div className="container py-10 h-full flex flex-col items-center w-full min-w-full">
            <div className="flex justify-center items-center gap-4 mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded w-24"
                    onClick={() => dispatch(addElement())}>
                    Add
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded w-24"
                    onClick={() => dispatch(removeElement())}>
                    Remove
                </button>
            </div>
            <motion.ul className="grid grid-cols-5 w-full" layout='size'>
                <AnimatePresence>
                    {elements.map((element, index) => (
                        <motion.li
                            key={index}
                            className="relative w-full pt-[100%]"
                            layout
                            style={{
                                backgroundColor: element.color,
                            }}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                        />
                    ))}
                </AnimatePresence>
            </motion.ul>
        </div>
    );
};

export default ElementsList;
