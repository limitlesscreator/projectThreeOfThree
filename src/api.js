import {API_URL} from "./config";

export const getMealById = async (mealId) => {
    const response = await fetch(`${API_URL}lookup.php?i=${mealId}`)
    return await response.json()
}

export const getAllCategories = async () => {
    const response = await fetch(`${API_URL}categories.php`)
    // const response = await fetch('www.themealdb.com/api/json/v1/1/categories.php'); не приходит ответ возможно не тот запрос делаю , проверить надо приходит ли только json?
    return await response.json();
}

export const getFilteredCategory = async (name) => {
    const response = await fetch(API_URL + `filter.php?c=${name}`)
    return await response.json()
}