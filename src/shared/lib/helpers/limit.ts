import Cookies from 'js-cookie';

export const checkLimit = (): boolean => {
    const limit = Cookies.get('limit');

    if (!limit) {
        Cookies.set('limit', '1', { expires: 1 });
        return true;
    }

    if (parseInt(limit) < 100) {
        Cookies.set('limit', `${parseInt(limit) + 1}`, { expires: 1 });
    }

    return !(limit && parseInt(limit) >= 100);
};
