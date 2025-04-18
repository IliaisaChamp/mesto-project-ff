const TOKEN = "0cae0678-f04e-42ca-a4ea-32c3f3fab8f0";
const GROUP = "cohort-mag-4";

const apiConfig = {
    baseUrl: `https://nomoreparties.co/v1/${GROUP}`,
    headers: {
        authorization: TOKEN,
        "Content-Type": "application/json",
    },
};

const getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getUser = () => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        method: "GET",
        headers: apiConfig.headers,
    }).then(getResponse);
};

export const editUserProfile = ({ name, about }) => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        method: "PATCH",
        headers: apiConfig.headers,
        body: JSON.stringify({
            name,
            about,
        }),
    }).then(getResponse);
};

export const editUserAvatar = (avatar) => {
    return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: apiConfig.headers,
        body: JSON.stringify({
            avatar,
        }),
    }).then(getResponse);
};

export const getCards = () => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: "GET",
        headers: apiConfig.headers,
    }).then(getResponse);
};

export const addCard = ({ name, link }) => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: "POST",
        headers: apiConfig.headers,
        body: JSON.stringify({
            name,
            link,
        }),
    }).then(getResponse);
};

export const deleteCard = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: apiConfig.headers,
    }).then(getResponse);
};

const likeCard = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: apiConfig.headers,
    }).then(getResponse);
};

const unlikeCard = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: apiConfig.headers,
    }).then(getResponse);
};

export const changeCardLike = ({ cardId, isLiked }) => {
    if (isLiked) {
        return unlikeCard(cardId);
    } else {
        return likeCard(cardId);
    }
};
