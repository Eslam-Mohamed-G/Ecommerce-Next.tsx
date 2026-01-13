"use client"
import React, { useState } from 'react';

export default function FavoriteButton() {
    const [loading, setLoading] = useState(false);
    return (
        <button type='button' aria-label="Add to favorites" className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>
            <svg aria-hidden="true" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
        </button>
    )
};