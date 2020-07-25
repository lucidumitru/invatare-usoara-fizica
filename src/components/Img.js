import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import cn from 'classnames';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const Img = ({className, src, alt = '', ...attrs}) => {
    const [isOpen, setOpen] = useState(false);
    const url = useBaseUrl(src);

    return (
        <>
            <img src={url} alt={alt} {...attrs} className={cn(className, 'img-responsive', 'gallery')}
                 onClick={() => setOpen(true)}/>
            {isOpen && (
                <Lightbox
                    mainSrc={url}
                    onCloseRequest={() => setOpen(false)}
                />
            )}
        </>
    )
};

export default Img;