// Card.jsx
import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

function Card({ data, reference, onDescChange }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
      className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
    >
      <FaRegFileAlt />
      <textarea
        className='text-sm leading-tight mt-5 font-semibold resize-none w-full bg-transparent border-none outline-none focus:outline-none'
        value={data.desc}
        onChange={(e) => onDescChange(e.target.value)} // Add the onChange handler here
        placeholder='Type anything...'
      />
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-5 py-3 m-2'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <MdOutlineFileDownload size='0.9em' color='#fff' />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'
            } flex items-center justify-center`}
          >
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
