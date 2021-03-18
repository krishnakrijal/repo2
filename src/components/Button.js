import React, { useState } from 'react';
import Icon from './Icon';

function Button({ images, icons }) {

    const [imgNo, setImgNo] = useState(0);

    const clickHandle = () => {

        if (imgNo <= 2 ) {
            setImgNo(imgNo + 1);
        } else {
            setImgNo(0);
        }

    }

    return (
        <div>
            <button className="btn-2" style={{ backgroundImage: `url('${images[imgNo]}')` }}
                onClick={clickHandle}>
                <Icon icons={icons} imgNo={imgNo} />
            </button>

        </div>
    )
}

export default Button
