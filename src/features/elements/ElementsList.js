import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addElement, removeElement } from './elementsSlice';
import { motion, AnimatePresence } from 'framer-motion';

const ElementsList = () => {
    const elements = useSelector(state => state.elements.elements);
    const dispatch = useDispatch();

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
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
            <div className='w-full overflow-x-auto h-[20vw]'>
            <motion.ul className="flex min-w-0 h-full overflow-x-auto" layout>
                <AnimatePresence initial>
                    {elements.map((element) => (
                        <motion.li
                            key={element.id}
                            className="relative min-w-[20vw] h-full"
                            layout
                            style={{
                                backgroundColor: element.color,
                            }}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </AnimatePresence>
            </motion.ul>
            </div>
            
        </div>
    );
};

export default ElementsList;
