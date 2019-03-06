import React, {useState, useEffect} from 'react';

const Test = () => {
    const [name, setName] = useState('walker');

    useEffect(() => {
        setName('hahaha11spppppppppp');
    }, [name]);

    useEffect(() => {
        setName(1111);
    }, [name]);

    return (
        <section>
            <h1>{name}</h1>
            <button onClick={() => setName('wangjie')}>更换</button>
        </section>
    );
};

export default Test;