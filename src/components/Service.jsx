import React from 'react';
import Card from './Card';
import Mobil1 from '../assets/mobil1.png';
import Mobil2 from '../assets/mobil2.png';

const Service = () => {
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h1 className='text-4xl my-6 text-blue-800 font-bold'>Jasa Yang Kami Sediakan</h1>
                <p className='text-2xl font-extralight text-gray-700'>Layanan penyewaan truk kami adalah yang terbaik dalam industri ini,<br /> memberikan kehandalan, efisiensi, dan kepuasan pelanggan yang tak tertandingi.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-8 my-24'>
                <Card
                    imageSrc={Mobil1}
                    title="CDD"
                    description="Beban Muatan Maksimal: 5000 kg"
                />
                <Card
                    imageSrc={Mobil2}
                    title="FUSO"
                    description="Beban Muatan Maksimal: 8000 kg"
                />
            </div>
        </div>
    );
};

export default Service;
