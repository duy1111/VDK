import React from 'react';
import { ColorRing } from 'react-loader-spinner';
const Loading = () => {
    return (
        <div className=' fixed w-screen h-screen top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70'>
            <div className=' relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
        </div>
    );
};

export default Loading;