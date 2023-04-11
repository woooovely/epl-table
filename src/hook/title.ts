import { useEffect, useState } from 'react';

const useTitle = (initialTitle: string) => {
    const [title, setTitle] = useState(initialTitle);

    const titleUpdate = () => {
        const htmlTitle = document.querySelector('title');

        if (htmlTitle !== null) {
            htmlTitle.innerText = title;
        }
    }

    useEffect(titleUpdate, [title])

    return setTitle;
}

export default useTitle;